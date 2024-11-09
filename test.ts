import { chromium, Browser, Page } from 'playwright';

describe('Getting the data out of the ', () => {
  let browser: Browser;
  let page: Page;

  beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('Getting the data out of the Puzzak page', async () => {
    await page.goto('https://hwm.puzzak.page/');
    const title = await page.title();
    expect(title).toBe('Homeworld Mobile');
  });
});