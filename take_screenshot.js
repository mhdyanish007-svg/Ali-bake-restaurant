const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
  const url = process.argv[2];
  const fileName = `screenshot-${Date.now()}.png`;
  const screenshotPath = path.join(__dirname, 'temporary_screenshots', fileName);

  if (!url) {
    console.error('Please provide a URL as the first argument.');
    process.exit(1);
  }

  const browser = await puppeteer.launch({
    headless: true, // Set to false to see the browser UI
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  try {
    // Check if it's a file path or a URL
    if (url.startsWith('file:///')) {
      await page.goto(url, { waitUntil: 'networkidle0' });
    } else {
      await page.goto(url, { waitUntil: 'networkidle0' });
    }

    await page.setViewport({ width: 1920, height: 1080 });
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`Screenshot saved to: ${screenshotPath}`);
  } catch (error) {
    console.error(`Error taking screenshot: ${error.message}`);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();