const { test, expect } = require('@playwright/test');

test('list_visible', async ({ page }) => {

  await page.goto('https://demoqa.com/books');
  
  await expect(page.locator('.select-wrap.-pageSizeOptions')).toBeVisible();
});

test('check number of rows with default value', async ({ page }) => {

  await page.goto('https://demoqa.com/books');

  await expect(page.locator('.rt-tr-group')).toHaveCount(8);
});

test('check number of rows with select 5 rows', async ({ page }) => {
  
  await page.goto('https://demoqa.com/books');
  
  await page.locator('[aria-label="rows per page"]').selectOption('5');

  await expect(page.locator('.rt-tr-group')).toHaveCount(5);
});

test('check number of rows with select 20 rows', async ({ page }) => {
  
  await page.goto('https://demoqa.com/books');
  
  await page.locator('[aria-label="rows per page"]').selectOption('20');

  await expect(page.locator('.rt-tr-group')).toHaveCount(8);
});

test('check number of rows with select 25 rows', async ({ page }) => {
 
  await page.goto('https://demoqa.com/books');
  
  await page.locator('[aria-label="rows per page"]').selectOption('25');

  await expect(page.locator('.rt-tr-group')).toHaveCount(8);
});

test('check number of rows with select 50 rows', async ({ page }) => {
  
  await page.goto('https://demoqa.com/books');
  
  await page.locator('[aria-label="rows per page"]').selectOption('50');

  await expect(page.locator('.rt-tr-group')).toHaveCount(8);
});

test('check number of rows with select 100 rows', async ({ page }) => {
  
  await page.goto('https://demoqa.com/books');
  
  await page.locator('[aria-label="rows per page"]').selectOption('100');
  
  await expect(page.locator('.rt-tr-group')).toHaveCount(8);
});