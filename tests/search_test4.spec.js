const { test, expect } = require('@playwright/test');

test('search with uppercase', async ({ page }) => {

  // Go to https://demoqa.com/books
  await page.goto('https://demoqa.com/books');

  // Fill [placeholder="Type to search"]
  await page.locator('[placeholder="Type to search"]').fill("YOU DON'T KNOW JS");

  await expect(page.locator("text=You Don't Know JS")).toBeVisible();
});
