const { test, expect } = require('@playwright/test');

test('button next', async ({ page }) => {
  // Go to https://demoqa.com/books
  await page.goto('https://demoqa.com/books');
  // Select 5
  await page.locator('[aria-label="rows per page"]').selectOption('5');
  // Click text=Next
  await page.locator('text=Next').click();
  let page2 = page.locator('text=Page of 2')
  await expect(page2).toBeVisible();
});
