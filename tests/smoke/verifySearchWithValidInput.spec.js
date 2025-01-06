import { test, expect } from '@playwright/test';
import HomePage from '../pages/HomePage'; 

test('Verify Search Functionality on Home Page', async ({ page }) => {
  const homePage = new HomePage(page);
  const searchButton = page.getByRole('button', { name: 'U' });
  const searchInput = page.getByPlaceholder('Search …');
  const expectedUrl = 'https://ultimateqa.com/?s=fake+landing+page';
  const searchResultLink = page.getByRole('link', { name: 'Fake landing page small' }).first();

  await homePage.visit();
  await searchButton.click();

  await searchInput.click();
  await searchInput.fill('fake landing page');

  await searchInput.press('Enter');

  await expect(page).toHaveURL(expectedUrl);

  await expect(searchResultLink).toBeVisible();
  await searchResultLink.click();
});
