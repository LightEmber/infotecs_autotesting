const { test, expect } = require('@playwright/test');

test('log-in with invalid password', async ({ page }) => {
  await page.goto('https://demoqa.com/profile');
  await page.locator('#notLoggin-label > a:nth-child(1)').click();
  // Fill [placeholder="UserName"]
  await page.locator('#userName').fill('user430');
  // Fill [placeholder="Password"]
  await page.locator('#password').fill('qwerty');
  // Click button:has-text("Login")
  await page.locator('#login').click();
  await expect(page.locator('.mb-1')).toBeVisible(); 
});