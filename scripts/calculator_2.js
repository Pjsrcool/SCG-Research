const puppeteer = require('puppeteer'); // v13.0.0 or later
const jsCov = require('./jsCoverage.js');

(async () => {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    const timeout = 0;
    page.setDefaultTimeout(timeout);

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
        await targetPage.setViewport({"width":1365,"height":984})
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
        const element = await waitForSelectors([["aria/1"],["#root > div > div.component-button-panel > div:nth-child(4) > div:nth-child(1) > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 230, y: 102.4375} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/2"],["#root > div > div.component-button-panel > div:nth-child(4) > div:nth-child(2) > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 123.75, y: 75.4375} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/3"],["#root > div > div.component-button-panel > div:nth-child(4) > div:nth-child(3) > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 118.5, y: 81.4375} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/4"],["#root > div > div.component-button-panel > div:nth-child(3) > div:nth-child(1) > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 216, y: 84.625} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/5"],["#root > div > div.component-button-panel > div:nth-child(3) > div:nth-child(2) > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 175.75, y: 83.625} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/6"],["#root > div > div.component-button-panel > div:nth-child(3) > div:nth-child(3) > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 225.5, y: 87.625} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/7"],["#root > div > div.component-button-panel > div:nth-child(2) > div:nth-child(1) > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 216, y: 107.8125} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/8"],["#root > div > div.component-button-panel > div:nth-child(2) > div:nth-child(2) > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 187.75, y: 99.8125} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/9"],["#root > div > div.component-button-panel > div:nth-child(2) > div:nth-child(3) > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 158.5, y: 99.8125} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/0"],["#root > div > div.component-button-panel > div:nth-child(5) > div.component-button.wide > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 551, y: 73.25} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/."],["#root > div > div.component-button-panel > div:nth-child(5) > div:nth-child(2) > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 159.5, y: 93.25} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/3"],["#root > div > div.component-button-panel > div:nth-child(4) > div:nth-child(3) > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 187.5, y: 67.4375} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/x"],["#root > div > div.component-button-panel > div:nth-child(2) > div.component-button.orange > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 92.25, y: 73.8125} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/9"],["#root > div > div.component-button-panel > div:nth-child(2) > div:nth-child(3) > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 199.5, y: 73.8125} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/="],["#root > div > div.component-button-panel > div:nth-child(5) > div.component-button.orange > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 223.25, y: 91.25} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/+"],["#root > div > div.component-button-panel > div:nth-child(4) > div.component-button.orange > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 122.25, y: 80.4375} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/3"],["#root > div > div.component-button-panel > div:nth-child(4) > div:nth-child(3) > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 216.5, y: 73.4375} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/="],["#root > div > div.component-button-panel > div:nth-child(5) > div.component-button.orange > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 150.25, y: 89.25} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/-"],["#root > div > div.component-button-panel > div:nth-child(3) > div.component-button.orange > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 120.25, y: 101.625} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/5"],["#root > div > div.component-button-panel > div:nth-child(3) > div:nth-child(2) > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 238.75, y: 99.625} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/="],["#root > div > div.component-button-panel > div:nth-child(5) > div.component-button.orange > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 179.25, y: 75.25} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/÷"],["#root > div > div.component-button-panel > div:nth-child(1) > div.component-button.orange > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 121.25, y: 116} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/8"],["#root > div > div.component-button-panel > div:nth-child(2) > div:nth-child(2) > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 195.75, y: 114.8125} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/="],["#root > div > div.component-button-panel > div:nth-child(5) > div.component-button.orange > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 153.25, y: 97.25} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/+/-"],["#root > div > div.component-button-panel > div:nth-child(1) > div:nth-child(2) > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 208.75, y: 102} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/9"],["#root > div > div.component-button-panel > div:nth-child(2) > div:nth-child(3) > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 261.5, y: 109.8125} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/="],["#root > div > div.component-button-panel > div:nth-child(5) > div.component-button.orange > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 146.25, y: 37.25} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/="],["#root > div > div.component-button-panel > div:nth-child(5) > div.component-button.orange > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 139.25, y: 54.25} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/AC"],["#root > div > div.component-button-panel > div:nth-child(1) > div:nth-child(1) > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 249, y: 107} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/+/-"],["#root > div > div.component-button-panel > div:nth-child(1) > div:nth-child(2) > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 160.75, y: 79} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/8"],["#root > div > div.component-button-panel > div:nth-child(2) > div:nth-child(2) > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 165.75, y: 53.8125} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/+/-"],["#root > div > div.component-button-panel > div:nth-child(1) > div:nth-child(2) > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 157.75, y: 57} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/+/-"],["#root > div > div.component-button-panel > div:nth-child(1) > div:nth-child(2) > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 171.75, y: 80} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/-"],["#root > div > div.component-button-panel > div:nth-child(3) > div.component-button.orange > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 169.25, y: 120.625} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/+"],["#root > div > div.component-button-panel > div:nth-child(4) > div.component-button.orange > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 188.25, y: 73.4375} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/+/-"],["#root > div > div.component-button-panel > div:nth-child(1) > div:nth-child(2) > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 163.75, y: 91} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/8"],["#root > div > div.component-button-panel > div:nth-child(2) > div:nth-child(2) > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 187.75, y: 79.8125} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/="],["#root > div > div.component-button-panel > div:nth-child(5) > div.component-button.orange > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 192.25, y: 59.25} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/8"],["#root > div > div.component-button-panel > div:nth-child(2) > div:nth-child(2) > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 249.75, y: 71.8125} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/%"],["#root > div > div.component-button-panel > div:nth-child(1) > div:nth-child(3) > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 171.5, y: 89} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/9"],["#root > div > div.component-button-panel > div:nth-child(2) > div:nth-child(3) > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 245.5, y: 72.8125} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/%"],["#root > div > div.component-button-panel > div:nth-child(1) > div:nth-child(3) > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 136.5, y: 58} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/%"],["#root > div > div.component-button-panel > div:nth-child(1) > div:nth-child(3) > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 151.5, y: 89} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/%"],["#root > div > div.component-button-panel > div:nth-child(1) > div:nth-child(3) > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 151.5, y: 89} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/%"],["#root > div > div.component-button-panel > div:nth-child(1) > div:nth-child(3) > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 151.5, y: 89} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/="],["#root > div > div.component-button-panel > div:nth-child(5) > div.component-button.orange > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 198.25, y: 44.25} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/AC"],["#root > div > div.component-button-panel > div:nth-child(1) > div:nth-child(1) > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 242, y: 61} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["#root > div > div.component-display > div"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 470, y: 93} });
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down("1");
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down("2");
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down("3");
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up("1");
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up("2");
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up("3");
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down("1");
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up("1");
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down("3");
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up("3");
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down("Shift");
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down("*");
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up("Shift");
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up("8");
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down("3");
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up("3");
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down("Enter");
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up("Enter");
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down("NumLock");
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up("NumLock");
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down("6");
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up("6");
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down("/");
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up("/");
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down("9");
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up("9");
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down("Enter");
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up("Enter");
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down("4");
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up("4");
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down("-");
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up("-");
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down("5");
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up("5");
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down("Enter");
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up("Enter");
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down("4");
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up("4");
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down("+");
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up("+");
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down("0");
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up("0");
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down("2");
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up("2");
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down("Enter");
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up("Enter");
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down("Escape");
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up("Escape");
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/AC"],["#root > div > div.component-button-panel > div:nth-child(1) > div:nth-child(1) > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 135, y: 47} });
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down("NumLock");
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up("NumLock");
    }
    
    const jsCoverage = await jsCov.stopJSCov(page.coverage);
    await jsCov.parseJSCov(jsCoverage);

    await browser.close();
})();
