const { test, expect } = require('@playwright/test');

test('list', async ({ page }) => {
  // Go to https://demoqa.com/books
  await page.goto('https://demoqa.com/books');
  
  await expect(page.locator('.select-wrap.-pageSizeOptions')).toBeVisible();
});