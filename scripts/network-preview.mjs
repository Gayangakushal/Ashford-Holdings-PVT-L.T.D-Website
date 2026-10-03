import assert from 'node:assert/strict';
import { pathToFileURL } from 'node:url';
const { chromium } = await import(pathToFileURL(process.argv[2]).href);
const browser = await chromium.launch({ channel: 'chrome', headless: true, args: ['--disable-gpu'] });
try {
  for (const width of [1440, 390]) {
    const page = await browser.newPage({ viewport: { width, height: 1000 }, javaScriptEnabled: false });
    await page.route('**/assets/hvac/**', route => route.abort());
    await page.route('https://fonts.googleapis.com/**', route => route.abort());
    await page.goto('http://127.0.0.1:5174/', { waitUntil: 'domcontentloaded' });
    assert.equal(await page.locator('.brand-network-brand').count(), 63);
    assert.equal(await page.locator('.brand-network-country').count(), 7);
    assert.ok(await page.locator('.brand-network-note').first().innerText().then(text => text.includes('60 locations')));
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1));
    await page.locator('.network').screenshot({ path: `artifacts/network/map-${width}.png` });
    console.log(`PASS ${width}: server-rendered map, 63 brands, 60 locations, 7 countries, no horizontal overflow`);
    await page.close();
  }
} finally { await browser.close(); }
