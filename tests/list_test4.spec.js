const { test, expect } = require('@playwright/test');

test('list select 20 rows', async ({ page }) => {
  // Go to https://demoqa.com/books
  await page.goto('https://demoqa.com/books');
  // Select 5
  await page.locator('[aria-label="rows per page"]').selectOption('20');
  await expect(page.locator('.rt-tr-group')).toHaveCount(8);
});