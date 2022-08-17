const { test, expect } = require('@playwright/test');

test('log-in with empty login and password', async ({ page }) => {
  await page.goto('https://demoqa.com/profile');
  await page.locator('#notLoggin-label > a:nth-child(1)').click();
  await page.locator('#login').click();
  await expect(page.locator('.is-invalid')).t;
});