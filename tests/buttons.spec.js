const { test, expect } = require('@playwright/test');

test('button next visible', async ({ page }) => {
  // Go to https://demoqa.com/books
  await page.goto('https://demoqa.com/books');
  await expect(page.locator(".-next")).toBeVisible()
});

test('check button next', async ({ page }) => {
    // Go to https://demoqa.com/books
    await page.goto('https://demoqa.com/books');
    // Select 5
    await page.locator('[aria-label="rows per page"]').selectOption('5');
    await page.locator('.-next').click();
    let jmptpg = await page.locator('[aria-label="jump to page"]')
    let page_number = await jmptpg.getAttribute("value")
    await expect(page_number).toEqual("2")
 });

test('button previous visible', async ({ page }) => {
    // Go to https://demoqa.com/books
    await page.goto('https://demoqa.com/books');
    await expect(page.locator(".-previous")).toBeVisible()
  });

test('check button previous', async ({ page }) => {
    // Go to https://demoqa.com/books
    await page.goto('https://demoqa.com/books');
    // Select 5
    await page.locator('[aria-label="rows per page"]').selectOption('5');
    await page.locator('.-next').click();
    let jmptpg = await page.locator('[aria-label="jump to page"]')
    let page_number = await jmptpg.getAttribute("value")
    await expect(page_number).toEqual("2")
    await page.locator('.-previous').click();
    page_number = await jmptpg.getAttribute("value")
    await expect(page_number).toEqual("1")
  });