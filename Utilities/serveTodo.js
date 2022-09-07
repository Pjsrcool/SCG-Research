// const puppeteer = require('puppeteer');
const fs = require('fs');
// const waitForAnySelector = require('./helpers.js');
var express = require('express');
// const jsCov = require('./jsCoverage.js');
var app = express();
var path = require('path');
var root = process.argv[2];
console.log(root)
var arr =((process.argv[2]).split(path.sep)).filter(el=> el!=="");
var last = arr[arr.length-1] || arr[arr.length-2];
//root=path.join(root,last)
var isMain = (element,index) => arr[index].includes("todomvc") && arr[index+1]=="examples"
var mainInd = arr.findIndex(isMain);
var main = path.sep + path.join(...arr.slice(0,mainInd+1))+path.sep;
var siteassets = path.sep+ path.join(main,"site-assets")+path.sep;
//console.log(root,main,siteassets)
app.use(express.static(root));
app.use(express.static(main));
app.use(express.static(siteassets));
// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(root + '/index.html');
});
var server = app.listen(8081);

/*

(async () => {
  if (process.argv.length < 3) {
    console.log("Please provide argument the path to the local HTML file.")
    return;
  }
  inPath = process.argv[2]
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  page.setDefaultNavigationTimeout( 90000 )
  await Promise.all([
    jsCov.startJSCov(page.coverage)
  ]);
  await page.goto('http://localhost:8080', {"waitUntil":["load", "networkidle2"]});
  const selector = await waitForAnySelector(page, [
    '#new-todo',
    '.new-todo'
  ])
  for (var i = 0; i < 3; i++) {
    await page.type(selector, 'Something to do ' + i).then(async () => { await page.keyboard.press('Enter') })
  }

  await page.click('.view label', { clickCount: 2 })
  await page.type('.view label', " changed")
  await page.keyboard.press('Enter')
  const toggleAll = await waitForAnySelector(page, [
    "label[for='toggle-all']",
    "label[for='toggle-all']"
  ])
  await page.click(toggleAll);
  await page.$$eval('.toggle', checks => {

    //for (var i = 0; i < checks.length; i += 2)

      checks[1].click();
  })
  await page.$$eval('.destroy', destroys => {
    //for (var i = 0; i < destroys.length; i += 4)
      destroys[2].click();
  })
  const aElementsCompleted = await page.$x("//a[contains(., 'Completed')]");
  await aElementsCompleted[0].click();
  const aElementsActive = await page.$x("//a[contains(., 'Active')]");
  await aElementsActive[0].click();
  const clearCompleted = await waitForAnySelector(page, [
    '#clear-completed',
    '.clear-completed'
  ])

  await page.click(clearCompleted);
  const getAll = await waitForAnySelector(page, [
    'a[href="#/"]',
    'a[href="#!"]',
    'a[href="#/all"]'
  ])
  await page.click(getAll);
  const jsCoverage = await jsCov.stopJSCov(page.coverage);
  await jsCov.parseJSCov(jsCoverage);
  //await browser.close();
  //server.close()
})();


*/

/*
Execution format:
node scripts/todoPup.js /input/directory/
Sample:
node scripts/todoPup.js ../todomvcmaster/examples/vanillajs/index.html
*/