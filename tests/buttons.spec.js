const { test, expect } = require('@playwright/test');

test('button next visible', async ({ page }) => {
  
  await page.goto('https://demoqa.com/books');

  await expect(page.locator(".-next")).toBeVisible();
});

test("should change to next page when 'Next' button is clicked", async ({ page }) => {
    
    await page.goto('https://demoqa.com/books');
    
    await page.locator('[aria-label="rows per page"]').selectOption('5');

    await page.locator('.-next').click();

    let jmptpg = await page.locator('[aria-label="jump to page"]');

    let page_number = await jmptpg.getAttribute("value");

    await expect(page_number).toEqual("2");
 });

test('button previous visible', async ({ page }) => {
    
    await page.goto('https://demoqa.com/books');

    await expect(page.locator(".-previous")).toBeVisible();
  });

test("should change to previous page when 'Previous' button is clicked", async ({ page }) => {
    
    await page.goto('https://demoqa.com/books');
    
    await page.locator('[aria-label="rows per page"]').selectOption('5');

    await page.locator('.-next').click();

    let jmptpg = await page.locator('[aria-label="jump to page"]');

    let page_number = await jmptpg.getAttribute("value");

    await expect(page_number).toEqual("2");

    await page.locator('.-previous').click();

    page_number = await jmptpg.getAttribute("value");

    await expect(page_number).toEqual("1");
  });
