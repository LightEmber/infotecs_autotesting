const { test, expect } = require('@playwright/test');

test('enter ', async ({ page }) => {

  // Go to https://demoqa.com/books
  await page.goto('https://demoqa.com/books');

  // Fill [placeholder="Type to search"]
  await page.locator('[placeholder="Type to search"]').fill("You don");

  await expect(page.locator("text=You Don't Know JS")).toBeVisible();
});