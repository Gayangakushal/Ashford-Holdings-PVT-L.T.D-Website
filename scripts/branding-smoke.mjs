import { pathToFileURL } from 'node:url';
const { chromium } = await import(pathToFileURL(process.argv[2]).href);
import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';
await mkdir('artifacts/branding', {recursive:true});
const browser = await chromium.launch({channel:'chrome',headless:true});
try {
for (const width of [360,390,768,1024,1440]) {
 console.log('CHECK',width);
 const page=await browser.newPage({viewport:{width,height:900}});
 page.setDefaultTimeout(12000);
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:5173/',{waitUntil:'domcontentloaded'});
 await page.locator('.brand-loader[open]').waitFor();
 if(width===390) await page.screenshot({path:'artifacts/branding/loading-mobile.png'});
 await page.locator('.brand-loader').waitFor({state:'detached',timeout:10000});
 const dimensions=await page.locator('.footer-brand .logo-name').evaluate(el=>({height:el.getBoundingClientRect().height,line:parseFloat(getComputedStyle(el).lineHeight),whiteSpace:getComputedStyle(el).whiteSpace}));
 assert.equal(dimensions.whiteSpace,'nowrap');assert.ok(dimensions.height<=dimensions.line+1);
 assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'horizontal overflow '+width);
 await page.locator('footer').scrollIntoViewIfNeeded();
 if(width===390||width===1440)await page.screenshot({path:`artifacts/branding/footer-${width}.png`});
 assert.equal(await page.locator('.footer-credit a').getAttribute('href'),'https://share.google/ghvEWdoY52yWD0uXs');
 await page.goto('http://127.0.0.1:5173/contact',{waitUntil:'domcontentloaded'});
 await page.waitForTimeout(1000);
 assert.equal(await page.locator('.brand-loader[open]').count(),0,'intro repeats within tab');
 assert.ok(await page.locator('.contact-details').innerText().then(s=>s.includes('+94 76 666 8859')&&s.includes('info.ashfordholdings@gmail.com')&&s.includes('+94 76 626 7717')));
 assert.equal(await page.locator('.contact-details a[href="https://wa.me/94766267717"]').count(),1);
 assert.deepEqual(errors,[]);
 console.log('PASS',width,'footer, contacts, intro lifecycle, console, overflow');await page.close();
}
const reduced=await browser.newPage({reducedMotion:'reduce'});await reduced.goto('http://127.0.0.1:5173/',{waitUntil:'domcontentloaded'});assert.equal(await reduced.locator('.brand-loader[open]').count(),0);await reduced.close();
const skip=await browser.newPage();await skip.goto('http://127.0.0.1:5173/',{waitUntil:'domcontentloaded'});await skip.locator('.brand-loader-skip').click();await skip.locator('.brand-loader').waitFor({state:'detached'});await skip.close();
const nojs=await browser.newPage({javaScriptEnabled:false});await nojs.goto('http://127.0.0.1:5173/');assert.equal(await nojs.locator('.brand-loader').isVisible(),false);await nojs.close();
console.log('PASS reduced motion, skip button, no-JS');
}catch(e){console.error(e);process.exitCode=1;}finally {await Promise.race([browser.close(),new Promise(r=>setTimeout(r,5000))]);}
process.exit(process.exitCode||0);
