// Browser QA for the Sirocco site.
// Usage: node scripts/site-smoke.mjs <path-to-playwright-core/index.mjs> [baseUrl] [outDir]
// Checks every route at several widths for console errors, failed requests,
// horizontal overflow and broken images; saves screenshots.
import { pathToFileURL } from "node:url";
import { mkdir, writeFile } from "node:fs/promises";

const { chromium } = await import(pathToFileURL(process.argv[2]).href);
const base = process.argv[3] || "http://localhost:5173";
const out = process.argv[4] || "artifacts/qa";
await mkdir(out, { recursive: true });

const routes = [
  "/",
  "/solutions",
  "/solutions/air-conditioning-ventilation",
  "/solutions/racking-material-handling",
  "/solutions/hvac",
  "/projects",
  "/projects/variosystems-fume-extraction",
  "/projects/dok-narrow-aisle-racking",
  "/industries",
  "/industries/apparel-textiles",
  "/industries/manufacturing",
  "/about",
  "/leadership",
  "/contact",
  "/products",
  "/products/acoustic-cabinet-fans",
  "/brands",
  "/privacy",
  "/terms",
  "/does-not-exist",
];
const widths = (process.env.WIDTHS || "1920,1440,1280,1024,768,430,390,375,360")
  .split(",")
  .map(Number);
const shotRoutes = new Set((process.env.SHOTS || "/").split(","));

const browser = await chromium.launch({ channel: process.env.CHANNEL || "chrome", headless: true });
const report = [];
for (const width of widths) {
  const ctx = await browser.newContext({
    viewport: { width, height: width < 768 ? 844 : 900 },
    deviceScaleFactor: 1,
  });
  for (const route of routes) {
    const page = await ctx.newPage();
    const issues = [];
    page.on("pageerror", (e) => issues.push(`pageerror: ${e.message}`));
    page.on("console", (m) => {
      if (m.type() === "error") issues.push(`console: ${m.text()}`);
    });
    page.on("response", (r) => {
      if (r.status() >= 400 && !r.url().endsWith("/does-not-exist"))
        issues.push(`${r.status()} ${r.url()}`);
    });
    page.on("requestfailed", (r) => issues.push(`failed ${r.url()} ${r.failure()?.errorText}`));
    const res = await page.goto(base + route, { waitUntil: "networkidle", timeout: 60000 });
    // scroll through to trigger lazy images and reveals
    await page.evaluate(async () => {
      for (let y = 0; y < document.documentElement.scrollHeight; y += innerHeight * 0.7) {
        scrollTo({ top: y, behavior: "instant" });
        await new Promise((r) => setTimeout(r, 120));
      }
      scrollTo({ top: 0, behavior: "instant" });
    });
    await page.waitForTimeout(400);
    const m = await page.evaluate(() => {
      const sw = document.documentElement.scrollWidth;
      const over = [];
      if (sw > innerWidth + 1) {
        for (const el of document.querySelectorAll("body *")) {
          const r = el.getBoundingClientRect();
          if (r.right > innerWidth + 1 && r.width > 0 && getComputedStyle(el).position !== "fixed")
            over.push(
              `${el.tagName}.${String(el.className).slice(0, 60)} → ${Math.round(r.right)}`,
            );
          if (over.length > 5) break;
        }
      }
      const broken = [...document.images]
        .filter((i) => i.complete && i.naturalWidth === 0)
        .map((i) => i.src);
      const h1 = document.querySelectorAll("h1").length;
      return { sw, iw: innerWidth, over, broken, h1, title: document.title };
    });
    if (m.sw > m.iw + 1) issues.push(`overflow ${m.sw}>${m.iw}: ${m.over.join(" | ")}`);
    if (m.broken.length) issues.push(`broken images: ${m.broken.join(", ")}`);
    if (m.h1 !== 1) issues.push(`h1 count ${m.h1}`);
    if (shotRoutes.has(route)) {
      await page.screenshot({
        path: `${out}/${route === "/" ? "home" : route.slice(1).replaceAll("/", "_")}-${width}.png`,
        fullPage: true,
      });
    }
    report.push({ width, route, status: res?.status(), title: m.title, issues });
    if (issues.length) console.log(width, route, issues);
    await page.close();
  }
  await ctx.close();
}
await writeFile(`${out}/results.json`, JSON.stringify(report, null, 2));
// Chrome on Windows can hang on close; never let that block the report.
await Promise.race([browser.close(), new Promise((r) => setTimeout(r, 10000))]);
console.log(
  `checked ${report.length} page loads; ${report.filter((r) => r.issues.length).length} with issues`,
);

process.exit(process.exitCode ?? 0);
