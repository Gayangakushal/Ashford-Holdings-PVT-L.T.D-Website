// node scripts/hvls-intro-smoke.mjs <playwright-core/index.mjs> [baseUrl]
import { pathToFileURL } from "node:url";
import { mkdir } from "node:fs/promises";
import assert from "node:assert/strict";

const { chromium } = await import(pathToFileURL(process.argv[2]).href);
const base = process.argv[3] || "http://127.0.0.1:5173";
const browser = await chromium.launch({ channel: "chrome", headless: true });
const out = "artifacts/hvls-intro";
await mkdir(out, { recursive: true });
const failures = [];
async function check(name, run) {
  const page = await browser.newPage();
  await page.addInitScript(() => localStorage.setItem("ashford-cookie-choice", "essential"));
  page.setDefaultTimeout(12000);
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  try {
    await run(page);
    assert.deepEqual(errors, []);
    console.log(`PASS ${name}`);
  } catch (error) {
    failures.push(`${name}: ${error.message}`);
    console.error(`FAIL ${name}: ${error.message}`);
  } finally {
    await page.close();
  }
}
const finished = (page) => page.locator(".brand-loader").waitFor({ state: "detached" });
const until = async (page, predicate) => page.waitForFunction(predicate);

try {
  for (const width of [1440, 768, 390, 360]) {
    await check(`responsive airflow, controls and navigation at ${width}px`, async (page) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(`${base}/solutions/hvls-fans`, { waitUntil: "domcontentloaded" });
      await finished(page);
      assert.equal(await page.getByRole("button", { name: /skip/i }).count(), 0);
      const diagram = page.locator(".hvls-airflow");
      await diagram.scrollIntoViewIfNeeded();
      await until(page, () => document.querySelector(".hvls-airflow")?.dataset.running === "true");
      assert.equal(await page.locator(".hvls-rotor path").count(), 6);
      const particle = page.locator(".hvls-particle").first();
      const position = await particle.evaluate((el) => getComputedStyle(el).offsetDistance);
      await page.waitForTimeout(350);
      assert.notEqual(
        await particle.evaluate((el) => getComputedStyle(el).offsetDistance),
        position,
      );
      await page.getByRole("button", { name: "Pause", exact: true }).click();
      assert.equal(await diagram.getAttribute("data-running"), "false");
      const stopped = await particle.evaluate((el) => getComputedStyle(el).offsetDistance);
      await page.waitForTimeout(250);
      assert.equal(await particle.evaluate((el) => getComputedStyle(el).offsetDistance), stopped);
      await page.getByRole("button", { name: "Resume", exact: true }).click();
      await page.getByRole("slider").fill("1.5");
      assert.ok(
        Math.abs(
          (await diagram.evaluate((el) => parseFloat(el.style.getPropertyValue("--fan-period")))) -
            1.6,
        ) < 0.001,
      );
      await page.screenshot({ path: `${out}/airflow-${width}.png` });
      assert.ok(
        await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth),
      );
      await page.evaluate(() => window.scrollTo(0, 0));
      await until(page, () => document.querySelector(".hvls-airflow")?.dataset.running === "false");
      await diagram.scrollIntoViewIfNeeded();
      await until(page, () => document.querySelector(".hvls-airflow")?.dataset.running === "true");
      await page.evaluate(() => {
        Object.defineProperty(document, "hidden", { configurable: true, value: true });
        document.dispatchEvent(new Event("visibilitychange"));
      });
      await until(page, () => document.querySelector(".hvls-airflow")?.dataset.running === "false");
      await page.evaluate(() => {
        delete document.hidden;
        document.dispatchEvent(new Event("visibilitychange"));
      });
      await until(page, () => document.querySelector(".hvls-airflow")?.dataset.running === "true");
      await page.evaluate(() => window.scrollTo(0, 0));
      const documentCount = await page.evaluate(
        () => performance.getEntriesByType("navigation").length,
      );
      await page.locator('.crumbs a[href="/"]').click();
      await page.waitForURL(`${base}/`);
      assert.equal(await page.locator(".brand-loader").count(), 0);
      const fanButton = page.getByRole("button", { name: /05\s*HVLS Fan/ });
      await fanButton.evaluate((el) => el.scrollIntoView({ block: "center" }));
      await fanButton.click();
      const homeDiagram = page.locator(
        width >= 1024 ? ".solution-plate .hvls-airflow" : ".solution-row-media .hvls-airflow",
      );
      await homeDiagram.scrollIntoViewIfNeeded();
      await homeDiagram.evaluate(
        (el) =>
          new Promise((resolve) => {
            if (el.dataset.running === "true") return resolve();
            const observer = new MutationObserver(() => {
              if (el.dataset.running === "true") {
                observer.disconnect();
                resolve();
              }
            });
            observer.observe(el, { attributes: true });
          }),
      );
      assert.equal(
        await page.evaluate(() => performance.getEntriesByType("navigation").length),
        documentCount,
      );
    });
  }
  await check("wait for critical assets before intro playback", async (page) => {
    await page.route("**/assets/brand/ashford-holdings-logo.png", async (route) => {
      await new Promise((resolve) => setTimeout(resolve, 1800));
      await route.continue();
    });
    await page.goto(base, { waitUntil: "domcontentloaded" });
    await page.locator(".brand-loader.is-preparing").waitFor();
    await page.locator(".brand-loader.is-playing").waitFor();
    assert.ok(
      await page
        .locator(".brand-loader img")
        .evaluate((img) => img.complete && img.naturalWidth > 0),
    );
    await finished(page);
    assert.equal(await page.evaluate(() => performance.getEntriesByType("navigation").length), 1);
  });
  await check("critical image failure releases the interface", async (page) => {
    await page.route("**/assets/brand/ashford-holdings-logo.png", (route) => route.abort());
    await page.goto(base, { waitUntil: "domcontentloaded" });
    await finished(page);
    assert.ok(await page.locator(".site-header").isVisible());
    assert.equal(
      await page.locator(".site-header").evaluate((el) => el.closest("[inert]") !== null),
      false,
    );
  });
  await check("stalled resources cannot hold the intro indefinitely", async (page) => {
    await page.route("**/assets/brand/ashford-holdings-logo.png", async (route) => {
      await new Promise((resolve) => setTimeout(resolve, 7500));
      await route.abort();
    });
    await page.goto(base, { waitUntil: "domcontentloaded" });
    await page.waitForFunction(() => document.querySelector(".brand-loader")?.matches(":modal"));
    const start = Date.now();
    await finished(page);
    assert.ok(Date.now() - start < 6800);
  });
  await check("missing animation events use automatic completion", async (page) => {
    await page.addInitScript(() => {
      document.addEventListener(
        "DOMContentLoaded",
        () => {
          const style = document.createElement("style");
          style.textContent = ".brand-loader * { animation: none !important; }";
          document.head.append(style);
        },
        { once: true },
      );
    });
    await page.goto(base, { waitUntil: "domcontentloaded" });
    await finished(page);
  });
  await check("reduced motion shows a clear static schematic", async (page) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto(`${base}/products/hvls-fans`, { waitUntil: "domcontentloaded" });
    await finished(page);
    const diagram = page.locator(".hvls-airflow");
    await diagram.scrollIntoViewIfNeeded();
    assert.equal(await diagram.getAttribute("data-running"), "false");
    assert.equal(
      await page.locator(".hvls-rotor").evaluate((el) => getComputedStyle(el).animationName),
      "none",
    );
    assert.equal(await page.getByRole("slider").count(), 0);
    await page.screenshot({ path: `${out}/reduced-motion.png` });
  });
  await check("no JavaScript retains a usable page", async () => {
    const context = await browser.newContext({ javaScriptEnabled: false });
    const page = await context.newPage();
    await page.goto(`${base}/solutions/hvls-fans`);
    assert.equal(await page.locator(".brand-loader").isVisible(), false);
    assert.ok(await page.locator(".hvls-airflow svg").isVisible());
    await context.close();
  });
} finally {
  await browser.close();
}
if (failures.length) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
}
