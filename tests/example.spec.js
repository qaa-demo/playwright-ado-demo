// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto(global.BASE_URL);

  console.log('Test 1 [has title] : Global BASE_URL variable: ', global.BASE_URL)

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto(global.BASE_URL);

  console.log('Test 2 [get started link]: Global BASE_URL variable: ', global.BASE_URL)

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
