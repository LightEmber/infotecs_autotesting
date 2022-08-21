const { test, expect } = require('@playwright/test');

test('search by title', async ({ page }) => {

    // Go to https://demoqa.com/books
    await page.goto('https://demoqa.com/books');
  
    // Fill [placeholder="Type to search"]
    await page.locator('[placeholder="Type to search"]').fill('Git Pocket Guide');
  
    await expect(page.locator('text=Git Pocket Guide')).toBeVisible();
  });

test('search by author', async ({ page }) => {

    // Go to https://demoqa.com/books
    await page.goto('https://demoqa.com/books');
  
    // Fill [placeholder="Type to search"]
    await page.locator('[placeholder="Type to search"]').fill('Kyle Simpson');
  
    await expect(page.locator("text=You Don't Know JS")).toBeVisible();
  });

test('search by publisher', async ({ page }) => {

    await page.goto('https://demoqa.com/books');
    
    await page.locator('[placeholder="Type to search"]').fill("O'Reilly Media");
  
    await expect(page.locator("text=Git Pocket Guide")).toBeVisible();
    
    await expect(page.locator("text=Learning JavaScript Design Patterns")).toBeVisible();
    
    await expect(page.locator("text=Designing Evolvable Web APIs with ASP.NET")).toBeVisible();
    
    await expect(page.locator("text=Speaking JavaScript")).toBeVisible();
    
    await expect(page.locator("text=You Don't Know JS")).toBeVisible();
    
    await expect(page.locator("text=Programming JavaScript Applications")).toBeVisible();
  });

test('search with uppercase', async ({ page }) => {

    // Go to https://demoqa.com/books
    await page.goto('https://demoqa.com/books');
  
    // Fill [placeholder="Type to search"]
    await page.locator('[placeholder="Type to search"]').fill("YOU DON'T KNOW JS");
  
    await expect(page.locator("text=You Don't Know JS")).toBeVisible();
  });

test('search with lowercase', async ({ page }) => {

    // Go to https://demoqa.com/books
    await page.goto('https://demoqa.com/books');
  
    // Fill [placeholder="Type to search"]
    await page.locator('[placeholder="Type to search"]').fill("you don't know js");
  
    await expect(page.locator("text=You Don't Know JS")).toBeVisible();
  });

test('enter ', async ({ page }) => {

    // Go to https://demoqa.com/books
    await page.goto('https://demoqa.com/books');
  
    // Fill [placeholder="Type to search"]
    await page.locator('[placeholder="Type to search"]').fill("You don");
  
    await expect(page.locator("text=You Don't Know JS")).toBeVisible();
  });