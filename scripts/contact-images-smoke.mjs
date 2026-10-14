// Usage: node scripts/contact-images-smoke.mjs <playwright-core/index.mjs>
import assert from "node:assert/strict";
import { pathToFileURL } from "node:url";
import { mkdir } from "node:fs/promises";
const { chromium } = await import(pathToFileURL(process.argv[2]).href);
const browser = await chromium.launch({ channel: "chrome", headless: true });
const base = "http://127.0.0.1:5173";
await mkdir("artifacts/contact-images", { recursive: true });
try {
  for (const width of [1440, 390]) {
    const page = await browser.newPage({
      viewport: { width, height: 900 },
      reducedMotion: "reduce",
    });
    await page.addInitScript(() => localStorage.setItem("ashford-cookie-choice", "essential"));
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    for (const route of [
      "/",
      "/products",
      "/solutions",
      "/contact",
      "/products/cooling-towers",
      "/solutions/industrial-kitchen-esp",
    ]) {
      await page.goto(base + route, { waitUntil: "networkidle" });
      await page.locator(".brand-loader").waitFor({ state: "detached" });
      const whatsapp = page.locator(".whatsapp-contact");
      assert.equal(await whatsapp.getAttribute("href"), "https://wa.me/94766267717");
      assert.equal(await whatsapp.getAttribute("target"), "_blank");
      assert.ok(await whatsapp.isVisible());
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1));
      assert.ok(
        !/[—–]/.test(await page.locator("main").innerText()),
        "Prose still has dash separators",
      );
      if (route === "/contact") {
        assert.equal(
          await page.locator('.contact-details .btn[href="https://wa.me/94766267717"]').count(),
          1,
        );
      }
      if (route === "/products") {
        const cards = page.locator(".equipment-card");
        assert.equal(await cards.count(), 8);
        const sources = await cards
          .locator("img")
          .evaluateAll((images) => images.map((image) => image.getAttribute("src")));
        assert.equal(new Set(sources).size, 8, "Product families share an image");
        for (const card of await cards.all()) {
          await card.scrollIntoViewIfNeeded();
          await card.locator("img").evaluate((image) => image.decode());
        }
        await page.screenshot({
          path: `artifacts/contact-images/products-${width}.png`,
          fullPage: true,
        });
      }
      await page.evaluate(async () => {
        for (let y = 0; y < document.body.scrollHeight; y += 700) {
          window.scrollTo(0, y);
          await new Promise((resolve) => setTimeout(resolve, 30));
        }
      });
      const broken = await page
        .locator("main img")
        .evaluateAll((images) =>
          images.filter((img) => img.complete && !img.naturalWidth).map((img) => img.src),
        );
      assert.deepEqual(broken, []);
    }
    assert.deepEqual(errors, []);
    console.log(
      `PASS ${width}px: WhatsApp links, unique catalogue images, prose, routes and overflow`,
    );
    await page.close();
  }
} finally {
  await browser.close();
}
