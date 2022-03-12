const pup = require('puppeteer');

const url = process.argv[2];

if(!url)
{
    throw "please provide URL";
}

async function run()
{
    const browser = await pup.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.screenshot({path: 'screenshot.png'});
    browser.close();
}

run();