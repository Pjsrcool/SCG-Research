const puppeteer = require('puppeteer'); // v13.0.0 or later
const jsCov = require('./jsCoverage.js'); // use to get coverage

(async () => {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    const timeout = 5000;
    page.setDefaultTimeout(timeout);

    // coverage
    await Promise.all([
      jsCov.startJSCov(page.coverage)
    ]);

    async function waitForSelectors(selectors, frame, options) {
      for (const selector of selectors) {
        try {
          return await waitForSelector(selector, frame, options);
        } catch (err) {
          console.error(err);
        }
      }
      throw new Error('Could not find element for selectors: ' + JSON.stringify(selectors));
    }

    async function scrollIntoViewIfNeeded(element, timeout) {
      await waitForConnected(element, timeout);
      const isInViewport = await element.isIntersectingViewport({threshold: 0});
      if (isInViewport) {
        return;
      }
      await element.evaluate(element => {
        element.scrollIntoView({
          block: 'center',
          inline: 'center',
          behavior: 'auto',
        });
      });
      await waitForInViewport(element, timeout);
    }

    async function waitForConnected(element, timeout) {
      await waitForFunction(async () => {
        return await element.getProperty('isConnected');
      }, timeout);
    }

    async function waitForInViewport(element, timeout) {
      await waitForFunction(async () => {
        return await element.isIntersectingViewport({threshold: 0});
      }, timeout);
    }

    async function waitForSelector(selector, frame, options) {
      if (!Array.isArray(selector)) {
        selector = [selector];
      }
      if (!selector.length) {
        throw new Error('Empty selector provided to waitForSelector');
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
          throw new Error('Could not find element: ' + selector.join('>>'));
        }
        if (i < selector.length - 1) {
          element = (await element.evaluateHandle(el => el.shadowRoot ? el.shadowRoot : el)).asElement();
        }
      }
      if (!element) {
        throw new Error('Could not find element: ' + selector.join('|'));
      }
      return element;
    }

    async function waitForElement(step, frame, timeout) {
      const count = step.count || 1;
      const operator = step.operator || '>=';
      const comp = {
        '==': (a, b) => a === b,
        '>=': (a, b) => a >= b,
        '<=': (a, b) => a <= b,
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
        throw new Error('Empty selector provided to querySelectorAll');
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
            const newEl = (await el.evaluateHandle(el => el.shadowRoot ? el.shadowRoot : el)).asElement();
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
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      throw new Error('Timed out');
    }
    {
        const targetPage = page;
        await targetPage.setViewport({"width":645,"height":765})
    }
    {
        const targetPage = page;
        const promises = [];
        promises.push(targetPage.waitForNavigation());
        await targetPage.goto("http://localhost:3000/");
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["#root > div > div.game-board > div:nth-child(1) > div > div:nth-child(1) > button:nth-child(1)"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 22, y: 16} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["#root > div > div.game-board > div:nth-child(1) > div > div:nth-child(2) > button:nth-child(2)"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 23, y: 12} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["#root > div > div.game-board > div:nth-child(1) > div > div:nth-child(1) > button:nth-child(2)"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 24, y: 22} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["#root > div > div.game-board > div:nth-child(1) > div > div:nth-child(2) > button:nth-child(3)"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 7, y: 21} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["#root > div > div.game-board > div:nth-child(1) > div > div:nth-child(3) > button:nth-child(2)"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 8, y: 17} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["#root > div > div.game-board > div:nth-child(1) > div > div:nth-child(3) > button:nth-child(1)"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 14, y: 12} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["#root > div > div.game-board > div:nth-child(1) > div > div:nth-child(2) > button:nth-child(1)"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 17, y: 25} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["#root > div > div.game-board > div:nth-child(1) > div > div:nth-child(1) > button:nth-child(3)"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 10, y: 27} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/Play again"],["#root > div > div.game-board > div.win > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 54.078125, y: 12.15625} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["#root > div > div.game-board > div:nth-child(1) > div > div:nth-child(3) > button:nth-child(3)"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 18, y: 15} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["#root > div > div.game-board > div:nth-child(1) > div > div:nth-child(3) > button:nth-child(2)"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 10, y: 8} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["#root > div > div.game-board > div:nth-child(1) > div > div:nth-child(2) > button:nth-child(3)"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 12, y: 10} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["#root > div > div.game-board > div:nth-child(1) > div > div:nth-child(1) > button:nth-child(2)"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 20, y: 16} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["#root > div > div.game-board > div:nth-child(1) > div > div:nth-child(1) > button:nth-child(3)"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 18, y: 22} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/Play again"],["#root > div > div.game-board > div.win > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 47.234375, y: 20.15625} });
    }

    // coverage
    const jsCoverage = await jsCov.stopJSCov(page.coverage);
    await jsCov.parseJSCov(jsCoverage);

    await browser.close();

    
})();
