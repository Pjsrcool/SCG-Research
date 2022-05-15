const puppeteer = require('puppeteer'); // v13.0.0 or later

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
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
        await targetPage.setViewport({"width":1920,"height":680})
    }
    {
        const targetPage = page;
        const promises = [];
        promises.push(targetPage.waitForNavigation());
        await targetPage.goto("https://ahfarmer.github.io/calculator/");
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/8"],["#root > div > div.component-button-panel > div:nth-child(2) > div:nth-child(2) > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 281, y: 38.40625} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/8"],["#root > div > div.component-button-panel > div:nth-child(2) > div:nth-child(2) > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 281, y: 38.40625} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/9"],["#root > div > div.component-button-panel > div:nth-child(2) > div:nth-child(3) > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 118, y: 40.40625} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/9"],["#root > div > div.component-button-panel > div:nth-child(2) > div:nth-child(3) > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 118, y: 40.40625} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/+/-"],["#root > div > div.component-button-panel > div:nth-child(1) > div:nth-child(2) > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 346, y: 73} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/+/-"],["#root > div > div.component-button-panel > div:nth-child(1) > div:nth-child(2) > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 346, y: 73} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/2"],["#root > div > div.component-button-panel > div:nth-child(4) > div:nth-child(2) > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 343, y: 18.21875} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/2"],["#root > div > div.component-button-panel > div:nth-child(4) > div:nth-child(2) > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 343, y: 18.21875} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/5"],["#root > div > div.component-button-panel > div:nth-child(3) > div:nth-child(2) > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 154, y: 36.8125} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/5"],["#root > div > div.component-button-panel > div:nth-child(3) > div:nth-child(2) > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 154, y: 36.8125} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["#root > div > div.component-button-panel > div:nth-child(3) > div:nth-child(1)"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 479, y: 90.8125} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["#root > div > div.component-button-panel > div:nth-child(3) > div:nth-child(1)"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 479, y: 90.8125} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/8"],["#root > div > div.component-button-panel > div:nth-child(2) > div:nth-child(2) > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 286, y: 25.40625} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/8"],["#root > div > div.component-button-panel > div:nth-child(2) > div:nth-child(2) > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 286, y: 25.40625} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/+"],["#root > div > div.component-button-panel > div:nth-child(4) > div.component-button.orange > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 256, y: 27.21875} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/+"],["#root > div > div.component-button-panel > div:nth-child(4) > div.component-button.orange > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 256, y: 27.21875} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/6"],["#root > div > div.component-button-panel > div:nth-child(3) > div:nth-child(3) > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 362, y: 36.8125} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/6"],["#root > div > div.component-button-panel > div:nth-child(3) > div:nth-child(3) > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 362, y: 36.8125} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/="],["#root > div > div.component-button-panel > div:nth-child(5) > div.component-button.orange > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 182, y: 39.625} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/="],["#root > div > div.component-button-panel > div:nth-child(5) > div.component-button.orange > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 182, y: 39.625} });
    }

    await browser.close();
})();
