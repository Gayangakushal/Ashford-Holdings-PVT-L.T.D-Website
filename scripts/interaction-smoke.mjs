// Interaction QA: mobile menu, sliders, accordions, marquee, reduced motion, no-JS.
// Usage: node scripts/interaction-smoke.mjs <path-to-playwright-core/index.mjs> [baseUrl] [outDir]
import { pathToFileURL } from "node:url";
import { mkdir } from "node:fs/promises";
import assert from "node:assert/strict";

const { chromium } = await import(pathToFileURL(process.argv[2]).href);
const base = process.argv[3] || "http://localhost:5173";
const out = process.argv[4] || "artifacts/qa";
await mkdir(out, { recursive: true });
const browser = await chromium.launch({ channel: process.env.CHANNEL || "chrome", headless: true });
const results = [];
const check = async (name, fn) => {
  try {
    await fn();
    results.push(`PASS ${name}`);
  } catch (e) {
    results.push(`FAIL ${name}: ${e.message}`);
  }
};

// --- Mobile menu ---
await check("mobile menu opens, traps focus, closes on Escape", async () => {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.goto(base + "/", { waitUntil: "networkidle" });
  await page.waitForTimeout(1500); // allow hydration
  const trigger = page.locator(".site-header .menu-trigger");
  await trigger.click();
  await page.waitForTimeout(800);
  assert.equal(await trigger.getAttribute("aria-expanded"), "true");
  const menu = page.locator("#mobile-menu");
  assert.ok(await menu.evaluate((el) => el.classList.contains("is-open")));
  assert.ok(
    await page.evaluate(() => document.activeElement?.closest("#mobile-menu") !== null),
    "focus moved into menu",
  );
  await page.screenshot({ path: `${out}/mobile-menu-390.png` });
  await page.keyboard.press("Escape");
  await page.waitForTimeout(800);
  assert.equal(await trigger.getAttribute("aria-expanded"), "false");
  // navigation from the menu
  await trigger.click();
  await page.waitForTimeout(700);
  await page.locator(".mobile-menu-link", { hasText: "Projects" }).click();
  await page.waitForURL("**/projects");
  await page.waitForTimeout(700);
  assert.ok(
    !(await menu.evaluate((el) => el.classList.contains("is-open"))),
    "menu closes after navigation",
  );
  await page.close();
});

// --- Desktop: header hides mobile trigger, shows nav ---
await check("desktop header shows nav and hides menu trigger", async () => {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(base + "/", { waitUntil: "networkidle" });
  assert.ok(await page.locator(".site-nav").isVisible());
  assert.ok(!(await page.locator(".site-header .menu-trigger").isVisible()));
  await page.mouse.wheel(0, 600);
  await page.waitForTimeout(700);
  assert.ok(await page.locator(".site-header.is-scrolled").count(), "header compacts on scroll");
  await page.close();
});

// --- Testimonial slider ---
await check("testimonial slider next/prev/index + keyboard", async () => {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(base + "/", { waitUntil: "networkidle" });
  const cards = page.locator(".client-review-card");
  const dots = page.locator(".client-feedback-dot");
  await cards.first().scrollIntoViewIfNeeded();
  assert.equal(await cards.count(), 2);
  assert.match(await cards.first().innerText(), /Ceylon Biscuits/);
  await page.getByRole("button", { name: "Next feedback" }).click();
  assert.match(await cards.first().innerText(), /Variosystems/);
  await page.getByRole("button", { name: "Previous feedback" }).click();
  await page.getByRole("button", { name: "Previous feedback" }).click();
  assert.match(await cards.first().innerText(), /London Tea Exchange/);
  await dots.nth(3).click();
  assert.equal(await dots.nth(3).getAttribute("aria-current"), "true");
  assert.match(await cards.first().innerText(), /DOK Solutions/);
  await dots.nth(3).focus();
  await page.keyboard.press("ArrowRight");
  assert.equal(await dots.nth(4).getAttribute("aria-current"), "true");
  assert.match(await cards.first().innerText(), /George Steuart/);
  await page.close();
});

// --- Solutions accordion ---
await check("solution system expands rows", async () => {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.goto(base + "/", { waitUntil: "networkidle" });
  const rows = page.locator(".solution-row-head");
  await rows.nth(3).scrollIntoViewIfNeeded();
  await rows.nth(3).click();
  assert.equal(await rows.nth(3).getAttribute("aria-expanded"), "true");
  assert.equal(await rows.nth(0).getAttribute("aria-expanded"), "false");
  await page.waitForTimeout(700);
  assert.ok(await page.locator("#sol-fire-gas-suppression").isVisible());
  await page.close();
});

// --- Airflow intelligence ---
await check("air path stage selection updates diagram", async () => {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(base + "/", { waitUntil: "networkidle" });
  const step = page.locator(".ai-step").nth(4);
  await step.scrollIntoViewIfNeeded();
  await step.click();
  assert.equal(await page.locator(".ai-svg").getAttribute("data-active"), "monitoring");
  assert.match(await page.locator(".ai-readout h3").innerText(), /Monitoring/);
  await page.close();
});

// --- Marquee ---
await check("marquee animates, pauses on hover, sets are identical", async () => {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(base + "/", { waitUntil: "networkidle" });
  const m = page.locator(".marquee").first();
  await m.scrollIntoViewIfNeeded();
  const info = await m.evaluate((el) => {
    const sets = el.querySelectorAll(".marquee-set");
    return {
      anim: getComputedStyle(el.querySelector(".marquee-track")).animationName,
      w0: sets[0].getBoundingClientRect().width,
      w1: sets[1].getBoundingClientRect().width,
      n0: sets[0].children.length,
      n1: sets[1].children.length,
      dupHidden: sets[1].getAttribute("aria-hidden"),
    };
  });
  assert.equal(info.anim, "marquee");
  assert.equal(info.n0, info.n1);
  assert.ok(Math.abs(info.w0 - info.w1) < 1, "set widths equal");
  assert.equal(info.dupHidden, "true");
  await m.hover();
  await page.waitForTimeout(200);
  const state = await m.evaluate(
    (el) => getComputedStyle(el.querySelector(".marquee-track")).animationPlayState,
  );
  assert.equal(state, "paused");
  await page.close();
});

// --- Reduced motion ---
await check("reduced motion: content visible, marquee static, duplicates hidden", async () => {
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    reducedMotion: "reduce",
  });
  const page = await ctx.newPage();
  await page.goto(base + "/", { waitUntil: "networkidle" });
  const hiddenReveals = await page.evaluate(
    () =>
      [...document.querySelectorAll("[data-reveal]")].filter((e) => !e.hasAttribute("data-shown"))
        .length,
  );
  assert.equal(hiddenReveals, 0, "all reveals shown immediately");
  const dupDisplay = await page
    .locator(".marquee-set[aria-hidden]")
    .first()
    .evaluate((el) => getComputedStyle(el).display);
  assert.equal(dupDisplay, "none");
  await page.locator(".logos").scrollIntoViewIfNeeded();
  await page.screenshot({ path: `${out}/reduced-motion-logos.png` });
  await ctx.close();
});

// --- No JavaScript ---
await check("no-JS: SSR content readable", async () => {
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    javaScriptEnabled: false,
  });
  const page = await ctx.newPage();
  await page.goto(base + "/", { waitUntil: "load" });
  const op = await page
    .locator(".why-item")
    .first()
    .evaluate((el) => getComputedStyle(el).opacity);
  assert.equal(op, "1");
  assert.match(await page.locator("h1").innerText(), /Engineered air/);
  await ctx.close();
});

// --- Skip link + focus ---
await check("skip link appears on keyboard focus", async () => {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(base + "/", { waitUntil: "networkidle" });
  await page.keyboard.press("Tab");
  const top = await page.locator(".skip-link").evaluate((el) => el.getBoundingClientRect().top);
  assert.ok(top >= 0, "skip link visible");
  await page.close();
});

// --- Contact form ---
await check("contact form validates and prepares mailto", async () => {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(base + "/contact", { waitUntil: "networkidle" });
  await page.getByRole("button", { name: /Send enquiry/ }).click();
  const invalid = await page.locator("#f-name").evaluate((el) => !el.checkValidity());
  assert.ok(invalid, "required field blocks submit");
  await page.fill("#f-name", "Test Engineer");
  await page.fill("#f-email", "test@example.com");
  await page.selectOption("#f-type", { label: "Dust Extraction" });
  await page.fill("#f-message", "Dust extraction for a woodworking line.");
  await page.getByRole("button", { name: /Send enquiry/ }).click();
  await page.waitForTimeout(500);
  assert.match(await page.locator('.form [role="status"]').innerText(), /should now open/i);
  await page.close();
});

await Promise.race([browser.close(), new Promise((r) => setTimeout(r, 10000))]);
console.log(results.join("\n"));
if (results.some((r) => r.startsWith("FAIL"))) process.exitCode = 1;

process.exit(process.exitCode ?? 0);
