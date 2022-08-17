const { test, expect } = require('@playwright/test');

test('list select 100 rows', async ({ page }) => {
  // Go to https://demoqa.com/books
  await page.goto('https://demoqa.com/books');
  // Select 5
  await page.locator('[aria-label="rows per page"]').selectOption('100');
  await expect(page.locator('.-padRow')).toHaveCount(0);
});