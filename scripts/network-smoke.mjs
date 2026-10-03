import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
const { chromium } = await import(pathToFileURL(process.argv[2]).href);
await mkdir('artifacts/network', { recursive: true });
const browser = await chromium.launch({ channel: 'chrome', headless: true, args: ['--single-process', '--no-zygote', '--disable-gpu'] });
try {
  for (const width of [1440, 390]) {
    const page = await browser.newPage({ viewport: { width, height: 1000 }, reducedMotion: 'reduce' });
    const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await page.route('**/assets/hvac/**', (route) => route.abort());
    await page.goto('http://127.0.0.1:5174/', { waitUntil: 'domcontentloaded' });
    const network = page.locator('.network');
    await network.scrollIntoViewIfNeeded();
    await page.getByRole('button', { name: 'Japan', exact: true }).click();
    assert.equal(await page.locator('.brand-network-brand').count(), 2);
    await page.locator('.brand-network-brand').filter({ hasText: 'Toyota' }).click();
    await page.waitForFunction(() => document.querySelector('.brand-network-city')?.textContent.includes('Toyota City'));
    const link = await page.getByRole('link', { name: 'Open in Maps' }).getAttribute('href');
    assert.ok(decodeURIComponent(link).includes('Toyota City'));
    await page.getByRole('button', { name: 'All countries', exact: true }).click();
    assert.equal(await page.locator('.brand-network-brand').count(), 63);
    await page.getByRole('searchbox', { name: 'Find a brand' }).fill('Chevron');
    assert.equal(await page.locator('.brand-network-brand').count(), 1);
    await page.locator('.brand-network-brand').click();
    assert.ok((await page.locator('.brand-network-city').innerText()).includes('Houston'));
    await page.getByRole('searchbox', { name: 'Find a brand' }).fill('Riverina');
    await page.locator('.brand-network-brand').click();
    assert.equal(await page.locator('.brand-network-selected').count(), 0);
    assert.equal(await page.getByRole('link', { name: 'Open in Maps' }).count(), 0);
    await page.getByRole('searchbox', { name: 'Find a brand' }).fill('zzz-no-brand');
    assert.ok(await page.getByText('No brands found.', { exact: false }).isVisible());
    await page.getByRole('searchbox', { name: 'Find a brand' }).fill('');
    const uk = page.getByRole('button', { name: /^United Kingdom, / });
    await uk.focus();
    await page.keyboard.press('Enter');
    assert.equal(await page.locator('.brand-network-brand').count(), 2);
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1));
    assert.deepEqual(errors, []);
    await network.screenshot({ path: `artifacts/network/map-${width}.png` });
    console.log(`PASS ${width}: country filtering, brand selection, search, missing locations, keyboard, no page overflow`);
    await page.close();
  }
} finally { await browser.close(); }
