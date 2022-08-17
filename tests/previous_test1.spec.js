const { test, expect } = require('@playwright/test');

test('button previous visible', async ({ page }) => {
  // Go to https://demoqa.com/books
  await page.goto('https://demoqa.com/books');
  await expect(page.locator(".-previous")).toBeVisible()
});