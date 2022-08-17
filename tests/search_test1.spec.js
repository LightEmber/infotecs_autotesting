const { test, expect } = require('@playwright/test');

test('search by title', async ({ page }) => {

  // Go to https://demoqa.com/books
  await page.goto('https://demoqa.com/books');

  // Fill [placeholder="Type to search"]
  await page.locator('[placeholder="Type to search"]').fill('Git Pocket Guide');

  await expect(page.locator('text=Git Pocket Guide')).toBeVisible();
});

