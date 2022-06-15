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
        await targetPage.setViewport({"width":790,"height":878})
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
        const element = await waitForSelectors([["#root > div > div.row.mt-5 > div:nth-child(1) > img"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 333, y: 299.21875} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["#root > div > div.row.mt-5"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 458, y: 515.21875} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/No file chosen, Choose File"],["#root > div > div.row.mt-5 > div:nth-child(1) > div > input"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        // await element.click({ offset: { x: 74.25, y: 21.828125} });
        await element.uploadFile("images/cute-baby-cats-wallpaper.jpg")
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/cute-baby-cats-wallpaper.jpg, Choose File"],["#root > div > div.row.mt-5 > div:nth-child(1) > div > input"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        // const type = await element.evaluate(el => el.type);
        // if (["textarea","select-one","text","url","tel","search","password","number","email"].includes(type)) {
        //   await element.type("C:\\fakepath\\signal-2022-06-13-181335_003.jpeg");
        // } else {
        //   await element.focus();
        //   await element.evaluate((el, value) => {
        //     el.value = value;
        //     el.dispatchEvent(new Event('input', { bubbles: true }));
        //     el.dispatchEvent(new Event('change', { bubbles: true }));
        //   }, "C:\\fakepath\\signal-2022-06-13-181335_003.jpeg");
        // }
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/Compress"],["#root > div > div.row.mt-5 > div.col-xl-4.col-lg-4.col-md-12.mb-5.mt-5.col-sm-12.d-flex.justify-content-center.align-items-baseline > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 63.453125, y: 20.84375} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/Download"],["#root > div > div.row.mt-5 > div.col-xl-4.col-lg-4.col-md-12.col-sm-12.mt-3 > div > a"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 278.25, y: 13.828125} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/Download"],["#root > div > div.row.mt-5 > div.col-xl-4.col-lg-4.col-md-12.col-sm-12.mt-3 > div > a"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 367.25, y: 14.828125} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/Compress"],["#root > div > div.row.mt-5 > div.col-xl-4.col-lg-4.col-md-12.mb-5.mt-5.col-sm-12.d-flex.justify-content-center.align-items-baseline > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 56.453125, y: 19.84375} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/cute-baby-cats-wallpaper.jpg, Choose File"],["#root > div > div.row.mt-5 > div:nth-child(1) > div > input"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        // await element.click({ offset: { x: 88.25, y: 23.84375} });
        await element.uploadFile("images/Cute-Puppy-Background-Download-Free-1.jpg")
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/Cute-Puppy-Background-Download-Free-1.jpg, Choose File"],["#root > div > div.row.mt-5 > div:nth-child(1) > div > input"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        // const type = await element.evaluate(el => el.type);
        // if (["textarea","select-one","text","url","tel","search","password","number","email"].includes(type)) {
        //   await element.type("C:\\fakepath\\signal-2022-05-27-003416_001.jpeg");
        // } else {
        //   await element.focus();
        //   await element.evaluate((el, value) => {
        //     el.value = value;
        //     el.dispatchEvent(new Event('input', { bubbles: true }));
        //     el.dispatchEvent(new Event('change', { bubbles: true }));
        //   }, "C:\\fakepath\\signal-2022-05-27-003416_001.jpeg");
        // }
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/Compress"],["#root > div > div.row.mt-5 > div.col-xl-4.col-lg-4.col-md-12.mb-5.mt-5.col-sm-12.d-flex.justify-content-center.align-items-baseline > button"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 65.453125, y: 18.84375} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/Download"],["#root > div > div.row.mt-5 > div.col-xl-4.col-lg-4.col-md-12.col-sm-12.mt-3 > div > a"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({ offset: { x: 379.25, y: 16.828125} });
    }

    const jsCoverage = await jsCov.stopJSCov(page.coverage);
    await jsCov.parseJSCov(jsCoverage);

    await browser.close();
})();
