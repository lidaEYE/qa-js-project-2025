// @ts-check
import { test, expect } from '@playwright/test';

test('Change Language', async ({ page }) => {
  await page.goto('https://qa-metro.stand-2.praktikum-services.ru/moscow');

  await page.locator('.lang-switcher__selected-item').click(); 

  await page.locator('._lang-code_en').click();

  const lang = await page.locator('html').getAttribute('lang');
  
  // Проверяем, что атрибут lang содержит 'en'
  await expect(page).toHaveURL(/.*\?lang=en$/);
  
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
