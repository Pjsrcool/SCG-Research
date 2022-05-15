const puppeteer = require("puppeteer"); // v13.0.0 or later
const fs = require("fs");
const actionType = process.argv[2];
var outpath = process.argv[3];

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  //await Promise.all([page.coverage.startJSCoverage()]);
  const timeout = 5000;
  page.setDefaultTimeout(timeout);

  async function waitForSelectors(selectors, frame, options) {
    for (const selector of selectors) {
      try {
        return await waitForSelector(selector, frame, options);
      } catch (err) {
        console.error(err);
      }
    }
    throw new Error(
      "Could not find element for selectors: " + JSON.stringify(selectors)
    );
  }

  async function scrollIntoViewIfNeeded(element, timeout) {
    await waitForConnected(element, timeout);
    const isInViewport = await element.isIntersectingViewport({ threshold: 0 });
    if (isInViewport) {
      return;
    }
    await element.evaluate((element) => {
      element.scrollIntoView({
        block: "center",
        inline: "center",
        behavior: "auto",
      });
    });
    await waitForInViewport(element, timeout);
  }

  async function waitForConnected(element, timeout) {
    await waitForFunction(async () => {
      return await element.getProperty("isConnected");
    }, timeout);
  }

  async function waitForInViewport(element, timeout) {
    await waitForFunction(async () => {
      return await element.isIntersectingViewport({ threshold: 0 });
    }, timeout);
  }

  async function waitForSelector(selector, frame, options) {
    if (!Array.isArray(selector)) {
      selector = [selector];
    }
    if (!selector.length) {
      throw new Error("Empty selector provided to waitForSelector");
    }
    let element = null;
    for (let i = 0; i < selector.length; i++) {
      const part = selector[i];
      if (element) {
        element = await element.waitForSelector(part, options);
      } else {
        element = await frame.waitForSelector(part, options);
      }
      if (!element) {
        throw new Error("Could not find element: " + selector.join(">>"));
      }
      if (i < selector.length - 1) {
        element = (
          await element.evaluateHandle((el) =>
            el.shadowRoot ? el.shadowRoot : el
          )
        ).asElement();
      }
    }
    if (!element) {
      throw new Error("Could not find element: " + selector.join("|"));
    }
    return element;
  }

  async function waitForElement(step, frame, timeout) {
    const count = step.count || 1;
    const operator = step.operator || ">=";
    const comp = {
      "==": (a, b) => a === b,
      ">=": (a, b) => a >= b,
      "<=": (a, b) => a <= b,
    };
    const compFn = comp[operator];
    await waitForFunction(async () => {
      const elements = await querySelectorsAll(step.selectors, frame);
      return compFn(elements.length, count);
    }, timeout);
  }

  async function querySelectorsAll(selectors, frame) {
    for (const selector of selectors) {
      const result = await querySelectorAll(selector, frame);
      if (result.length) {
        return result;
      }
    }
    return [];
  }

  async function querySelectorAll(selector, frame) {
    if (!Array.isArray(selector)) {
      selector = [selector];
    }
    if (!selector.length) {
      throw new Error("Empty selector provided to querySelectorAll");
    }
    let elements = [];
    for (let i = 0; i < selector.length; i++) {
      const part = selector[i];
      if (i === 0) {
        elements = await frame.$$(part);
      } else {
        const tmpElements = elements;
        elements = [];
        for (const el of tmpElements) {
          elements.push(...(await el.$$(part)));
        }
      }
      if (elements.length === 0) {
        return [];
      }
      if (i < selector.length - 1) {
        const tmpElements = [];
        for (const el of elements) {
          const newEl = (
            await el.evaluateHandle((el) =>
              el.shadowRoot ? el.shadowRoot : el
            )
          ).asElement();
          if (newEl) {
            tmpElements.push(newEl);
          }
        }
        elements = tmpElements;
      }
    }
    return elements;
  }

  async function waitForFunction(fn, timeout) {
    let isActive = true;
    setTimeout(() => {
      isActive = false;
    }, timeout);
    while (isActive) {
      const result = await fn();
      if (result) {
        return;
      }
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    throw new Error("Timed out");
  }
  /*{
      const targetPage = page;
      await targetPage.emulateNetworkConditions({
        offline: false,
        downloadThroughput: 50000,
        uploadThroughput: 50000,
        latency: 2000,
      });
    }*/
  {
    const targetPage = page;
    await targetPage.setViewport({ width: 1440, height: 241 });
  }
  {
    const targetPage = page;
    const promises = [];
    promises.push(targetPage.waitForNavigation());
    await Promise.all([page.coverage.startJSCoverage()]);
    await targetPage.goto("https://elizabethhess0320.github.io/calculator/", {
      waitUntil: "load",
      timeout: 0,
    });
    await Promise.all(promises);
    await page.setDefaultNavigationTimeout(0);
    await page.setDefaultTimeout(0);
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/1"],
        [
          "#root > div > div.component-button-panel > div:nth-child(4) > div:nth-child(1) > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 310, y: 18.609375 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/+"],
        [
          "#root > div > div.component-button-panel > div:nth-child(4) > div.component-button.orange > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 167, y: 19.609375 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/2"],
        [
          "#root > div > div.component-button-panel > div:nth-child(4) > div:nth-child(2) > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 254, y: 19.609375 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/="],
        [
          "#root > div > div.component-button-panel > div:nth-child(5) > div.component-button.orange > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 120, y: 12.8125 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/÷"],
        [
          "#root > div > div.component-button-panel > div:nth-child(1) > div.component-button.orange > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 175, y: 21 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/3"],
        [
          "#root > div > div.component-button-panel > div:nth-child(4) > div:nth-child(3) > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 292, y: 17.609375 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/="],
        [
          "#root > div > div.component-button-panel > div:nth-child(5) > div.component-button.orange > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 156, y: 17.8125 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/-"],
        [
          "#root > div > div.component-button-panel > div:nth-child(3) > div.component-button.orange > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 143, y: 20.40625 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/2"],
        [
          "#root > div > div.component-button-panel > div:nth-child(4) > div:nth-child(2) > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 160, y: 12.609375 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/="],
        [
          "#root > div > div.component-button-panel > div:nth-child(5) > div.component-button.orange > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 145, y: 26.8125 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/6"],
        [
          "#root > div > div.component-button-panel > div:nth-child(3) > div:nth-child(3) > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 187, y: 18.40625 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/-"],
        [
          "#root > div > div.component-button-panel > div:nth-child(3) > div.component-button.orange > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 159, y: 16.40625 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/5"],
        [
          "#root > div > div.component-button-panel > div:nth-child(3) > div:nth-child(2) > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 244, y: 25.40625 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/="],
        [
          "#root > div > div.component-button-panel > div:nth-child(5) > div.component-button.orange > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 136, y: 29.8125 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/9"],
        [
          "#root > div > div.component-button-panel > div:nth-child(2) > div:nth-child(3) > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 315, y: 23.203125 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/x"],
        [
          "#root > div > div.component-button-panel > div:nth-child(2) > div.component-button.orange > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 166, y: 26.203125 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/8"],
        [
          "#root > div > div.component-button-panel > div:nth-child(2) > div:nth-child(2) > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 292, y: 27.203125 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/="],
        [
          "#root > div > div.component-button-panel > div:nth-child(5) > div.component-button.orange > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 123, y: 26.8125 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/÷"],
        [
          "#root > div > div.component-button-panel > div:nth-child(1) > div.component-button.orange > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 146, y: 14 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/4"],
        [
          "#root > div > div.component-button-panel > div:nth-child(3) > div:nth-child(1) > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 229, y: 29.40625 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/="],
        [
          "#root > div > div.component-button-panel > div:nth-child(5) > div.component-button.orange > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 79, y: 20.8125 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/-"],
        [
          "#root > div > div.component-button-panel > div:nth-child(3) > div.component-button.orange > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 142, y: 23.40625 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/7"],
        [
          "#root > div > div.component-button-panel > div:nth-child(2) > div:nth-child(1) > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 242, y: 17.203125 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/="],
        [
          "#root > div > div.component-button-panel > div:nth-child(5) > div.component-button.orange > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 136, y: 16.8125 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/%"],
        [
          "#root > div > div.component-button-panel > div:nth-child(1) > div:nth-child(3) > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 210, y: 23 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/3"],
        [
          "#root > div > div.component-button-panel > div:nth-child(4) > div:nth-child(3) > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 181, y: 20.609375 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/="],
        [
          "#root > div > div.component-button-panel > div:nth-child(5) > div.component-button.orange > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 145, y: 25.8125 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/="],
        [
          "#root > div > div.component-button-panel > div:nth-child(5) > div.component-button.orange > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 172, y: 22.8125 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/9"],
        [
          "#root > div > div.component-button-panel > div:nth-child(2) > div:nth-child(3) > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 190, y: 5.203125 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/%"],
        [
          "#root > div > div.component-button-panel > div:nth-child(1) > div:nth-child(3) > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 210, y: 10 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/+/-"],
        [
          "#root > div > div.component-button-panel > div:nth-child(1) > div:nth-child(2) > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 258, y: 23 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/AC"],
        [
          "#root > div > div.component-button-panel > div:nth-child(1) > div:nth-child(1) > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 276, y: 23 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/0"],
        [
          "#root > div > div.component-button-panel > div:nth-child(5) > div.component-button.wide > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 492, y: 15.8125 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/."],
        [
          "#root > div > div.component-button-panel > div:nth-child(5) > div:nth-child(2) > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 169, y: 19.8125 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/3"],
        [
          "#root > div > div.component-button-panel > div:nth-child(4) > div:nth-child(3) > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 170, y: 22.609375 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/6"],
        [
          "#root > div > div.component-button-panel > div:nth-child(3) > div:nth-child(3) > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 176, y: 26.40625 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/x"],
        [
          "#root > div > div.component-button-panel > div:nth-child(2) > div.component-button.orange > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 161, y: 24.203125 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/2"],
        [
          "#root > div > div.component-button-panel > div:nth-child(4) > div:nth-child(2) > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 159, y: 10.609375 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/="],
        [
          "#root > div > div.component-button-panel > div:nth-child(5) > div.component-button.orange > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 120, y: 13.8125 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/9"],
        [
          "#root > div > div.component-button-panel > div:nth-child(2) > div:nth-child(3) > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 215, y: 18.203125 } });
  }
  {
    const targetPage = page;
    let frame = targetPage.mainFrame();
    frame = frame.childFrames()[0];
    const element = await waitForSelectors(
      [
        ["aria/%"],
        [
          "#root > div > div.component-button-panel > div:nth-child(1) > div:nth-child(3) > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 492201, y: 27 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/AC"],
        [
          "#root > div > div.component-button-panel > div:nth-child(1) > div:nth-child(1) > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 276, y: 23 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/0"],
        [
          "#root > div > div.component-button-panel > div:nth-child(5) > div.component-button.wide > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 492, y: 15.8125 } });
  }
  {
    const targetPage = page;
    let frame = targetPage.mainFrame();
    frame = frame.childFrames()[0];
    const element = await waitForSelectors(
      [
        ["aria/%"],
        [
          "#root > div > div.component-button-panel > div:nth-child(1) > div:nth-child(3) > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 492201, y: 27 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/0"],
        [
          "#root > div > div.component-button-panel > div:nth-child(5) > div.component-button.wide > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 492, y: 15.8125 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/AC"],
        [
          "#root > div > div.component-button-panel > div:nth-child(1) > div:nth-child(1) > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 276, y: 23 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/2"],
        [
          "#root > div > div.component-button-panel > div:nth-child(4) > div:nth-child(2) > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 254, y: 19.609375 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/."],
        [
          "#root > div > div.component-button-panel > div:nth-child(5) > div:nth-child(2) > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 169, y: 19.8125 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/x"],
        [
          "#root > div > div.component-button-panel > div:nth-child(2) > div.component-button.orange > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 166, y: 26.203125 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/6"],
        [
          "#root > div > div.component-button-panel > div:nth-child(3) > div:nth-child(3) > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 187, y: 18.40625 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/AC"],
        [
          "#root > div > div.component-button-panel > div:nth-child(1) > div:nth-child(1) > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 276, y: 23 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/."],
        [
          "#root > div > div.component-button-panel > div:nth-child(5) > div:nth-child(2) > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 169, y: 19.8125 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/."],
        [
          "#root > div > div.component-button-panel > div:nth-child(5) > div:nth-child(2) > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 169, y: 19.8125 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/0"],
        [
          "#root > div > div.component-button-panel > div:nth-child(5) > div.component-button.wide > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 492, y: 15.8125 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/AC"],
        [
          "#root > div > div.component-button-panel > div:nth-child(1) > div:nth-child(1) > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 276, y: 23 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/9"],
        [
          "#root > div > div.component-button-panel > div:nth-child(2) > div:nth-child(3) > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 315, y: 23.203125 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/x"],
        [
          "#root > div > div.component-button-panel > div:nth-child(2) > div.component-button.orange > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 166, y: 26.203125 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/x"],
        [
          "#root > div > div.component-button-panel > div:nth-child(2) > div.component-button.orange > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 166, y: 26.203125 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/AC"],
        [
          "#root > div > div.component-button-panel > div:nth-child(1) > div:nth-child(1) > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 276, y: 23 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/9"],
        [
          "#root > div > div.component-button-panel > div:nth-child(2) > div:nth-child(3) > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 315, y: 23.203125 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/+/-"],
        [
          "#root > div > div.component-button-panel > div:nth-child(1) > div:nth-child(2) > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 258, y: 23 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      [
        ["aria/+/-"],
        [
          "#root > div > div.component-button-panel > div:nth-child(1) > div:nth-child(2) > button",
        ],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 258, y: 23 } });
  }
  {
    const targetPage = page;
    const element = await waitForSelectors(
      ['a[title="Fork me on GitHub"]'],
      targetPage,
      { timeout, visible: true }
    );
    await scrollIntoViewIfNeeded(element, timeout);
    await element.click({ offset: { x: 276, y: 23 } });
  }
  if (actionType == "DCG") {
    await page.waitForSelector("#jalangi_results_show_button > button");
    await page.click("#jalangi_results_show_button > button");
  }
  const jsCoverage = await Promise.all([page.coverage.stopJSCoverage()]);
  const js_coverage = [...jsCoverage];
  //Parse collected JS Coverage
  let cov = {};
  cnt = 0;
  for (const entry of js_coverage[0]) {
    if (!(entry.url in cov)) {
      cov[entry.url] = {
        js_total_bytes: 0,
        js_used_bytes: 0,
      };
    }
    cov[entry.url]["js_total_bytes"] =
      cov[entry.url]["js_total_bytes"] + entry.text.length;

    for (const range of entry.ranges) {
      cov[entry.url]["js_used_bytes"] =
        cov[entry.url]["js_used_bytes"] + range.end - range.start;
    }
  }
  for (entry in cov) {
    console.log(
      `Utilization percetages ${entry}: ${
        (cov[entry]["js_used_bytes"] / cov[entry]["js_total_bytes"]) * 100
      }%`
    );
  }
  if (actionType == "DCG") {
    const data = await page.evaluate("J$.callList");
    fs.writeFile(outpath, JSON.stringify(data, null, "    "), function (err) {
      if (err) throw err;
      console.log("complete");
    });
  }
  await browser.close();
})();