const puppeteer = require('puppeteer'); // v13.0.0 or later

(async () => {
    const browser = await puppeteer.launch({headless:false});
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
        await targetPage.setViewport({"width":1062,"height":823})
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
        const element = await waitForSelectors([["aria/50"],["#weight"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 190.828125, y: 24.3125} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/50"],["#weight"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        const type = await element.evaluate(el => el.type);
        if (["textarea","select-one","text","url","tel","search","password","number","email"].includes(type)) {
          await element.type("12");
        } else {
          await element.focus();
          await element.evaluate((el, value) => {
            el.value = value;
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
          }, "12");
        }
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/176"],["#height"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 48.140625, y: 27.3125} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/176"],["#height"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        const type = await element.evaluate(el => el.type);
        if (["textarea","select-one","text","url","tel","search","password","number","email"].includes(type)) {
          await element.type("12");
        } else {
          await element.focus();
          await element.evaluate((el, value) => {
            el.value = value;
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
          }, "12");
        }
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/Calculate BMI"],["#bmi-btn"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 136.734375, y: 21.8125} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["[data-test=date]"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 26.234375, y: 3.5625} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/Undo"],["#root > div > div:nth-child(2) > div > div:nth-child(6) > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 91.546875, y: 14.3125} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/X"],["#root > div > div:nth-child(2) > div > div:nth-child(5) > div.data-container.row > div > div > div > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 19.6875, y: 11.5625} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/50"],["#weight"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 225.828125, y: 30.3125} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/50"],["#weight"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        const type = await element.evaluate(el => el.type);
        if (["textarea","select-one","text","url","tel","search","password","number","email"].includes(type)) {
          await element.type("0");
        } else {
          await element.focus();
          await element.evaluate((el, value) => {
            el.value = value;
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
          }, "0");
        }
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/176"],["#height"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 94.140625, y: 32.3125} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/176"],["#height"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        const type = await element.evaluate(el => el.type);
        if (["textarea","select-one","text","url","tel","search","password","number","email"].includes(type)) {
          await element.type("0");
        } else {
          await element.focus();
          await element.evaluate((el, value) => {
            el.value = value;
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
          }, "0");
        }
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/Calculate BMI"],["#bmi-btn"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 164.734375, y: 27.8125} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/X"],["#root > div > div:nth-child(2) > div > div:nth-child(5) > div.data-container.row > div > div > div > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 8.6875, y: 16.5625} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/Undo"],["#root > div > div:nth-child(2) > div > div:nth-child(6) > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 70.546875, y: 21.0625} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/Undo"],["#root > div > div:nth-child(2) > div > div:nth-child(6) > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 86.546875, y: 23.3125} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/Undo"],["#root > div > div:nth-child(2) > div > div:nth-child(6) > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 79.546875, y: 22.3125} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/X"],["#root > div > div:nth-child(2) > div > div:nth-child(5) > div.data-container.row > div > div > div > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 10.6875, y: 9.5625} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["#root > div > div:nth-child(2) > div > canvas"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 210.828125, y: -0.578125} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["#root > div > div:nth-child(2) > div > canvas"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 183.828125, y: 144.421875} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/50"],["#weight"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 118.828125, y: 36.3125} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/50"],["#weight"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        const type = await element.evaluate(el => el.type);
        if (["textarea","select-one","text","url","tel","search","password","number","email"].includes(type)) {
          await element.type("999");
        } else {
          await element.focus();
          await element.evaluate((el, value) => {
            el.value = value;
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
          }, "999");
        }
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/176"],["#height"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 87.140625, y: 22.3125} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/176"],["#height"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        const type = await element.evaluate(el => el.type);
        if (["textarea","select-one","text","url","tel","search","password","number","email"].includes(type)) {
          await element.type("999");
        } else {
          await element.focus();
          await element.evaluate((el, value) => {
            el.value = value;
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
          }, "999");
        }
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/Calculate BMI"],["#bmi-btn"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 163.734375, y: 43.8125} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/50"],["#weight"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 147.828125, y: 37.3125} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/50"],["#weight"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        const type = await element.evaluate(el => el.type);
        if (["textarea","select-one","text","url","tel","search","password","number","email"].includes(type)) {
          await element.type("4");
        } else {
          await element.focus();
          await element.evaluate((el, value) => {
            el.value = value;
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
          }, "4");
        }
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/176"],["#height"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 108.140625, y: 22.3125} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/176"],["#height"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        const type = await element.evaluate(el => el.type);
        if (["textarea","select-one","text","url","tel","search","password","number","email"].includes(type)) {
          await element.type("123");
        } else {
          await element.focus();
          await element.evaluate((el, value) => {
            el.value = value;
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
          }, "123");
        }
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/Calculate BMI"],["#bmi-btn"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 158.734375, y: 42.8125} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/50"],["#weight"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 134.828125, y: 21.3125} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/50"],["#weight"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        const type = await element.evaluate(el => el.type);
        if (["textarea","select-one","text","url","tel","search","password","number","email"].includes(type)) {
          await element.type("44");
        } else {
          await element.focus();
          await element.evaluate((el, value) => {
            el.value = value;
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
          }, "44");
        }
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/176"],["#height"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 69.140625, y: 15.3125} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/176"],["#height"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        const type = await element.evaluate(el => el.type);
        if (["textarea","select-one","text","url","tel","search","password","number","email"].includes(type)) {
          await element.type("3");
        } else {
          await element.focus();
          await element.evaluate((el, value) => {
            el.value = value;
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
          }, "3");
        }
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/Calculate BMI"],["#bmi-btn"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 164.734375, y: 42.8125} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/50"],["#weight"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 235.828125, y: 32.3125} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/50"],["#weight"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        const type = await element.evaluate(el => el.type);
        if (["textarea","select-one","text","url","tel","search","password","number","email"].includes(type)) {
          await element.type("34");
        } else {
          await element.focus();
          await element.evaluate((el, value) => {
            el.value = value;
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
          }, "34");
        }
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/176"],["#height"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 89.140625, y: 34.3125} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/176"],["#height"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        const type = await element.evaluate(el => el.type);
        if (["textarea","select-one","text","url","tel","search","password","number","email"].includes(type)) {
          await element.type("12");
        } else {
          await element.focus();
          await element.evaluate((el, value) => {
            el.value = value;
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
          }, "12");
        }
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/Calculate BMI"],["#bmi-btn"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 170.734375, y: 15.8125} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/50"],["#weight"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 225.828125, y: 39.3125} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/50"],["#weight"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        const type = await element.evaluate(el => el.type);
        if (["textarea","select-one","text","url","tel","search","password","number","email"].includes(type)) {
          await element.type("999");
        } else {
          await element.focus();
          await element.evaluate((el, value) => {
            el.value = value;
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
          }, "999");
        }
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/176"],["#height"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 72.140625, y: 21.3125} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/176"],["#height"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        const type = await element.evaluate(el => el.type);
        if (["textarea","select-one","text","url","tel","search","password","number","email"].includes(type)) {
          await element.type("2");
        } else {
          await element.focus();
          await element.evaluate((el, value) => {
            el.value = value;
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
          }, "2");
        }
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/Calculate BMI"],["#bmi-btn"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 171.734375, y: 22.8125} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/Undo"],["#root > div > div:nth-child(2) > div > div:nth-child(6) > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 114.546875, y: 30.3125} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/X"],["#root > div > div:nth-child(2) > div > div:nth-child(5) > div.data-container.row > div > div > div > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 10.6875, y: 9.5625} });
    }

    await browser.close();
})();
