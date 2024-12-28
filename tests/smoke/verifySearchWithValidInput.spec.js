// search.spec.js
import { test, expect } from '@playwright/test';
import HomePage from '../pages/HomePage'; // Import HomePage class

test('Verify Search Functionality on Home Page', async ({ page }) => {
  const homePage = new HomePage(page);

  // Navigate to the homepage
  await homePage.visit();

  // Click the search button to open the search field
  await page.getByRole('button', { name: 'U' }).click();

  // Click on the search input field and type the search term
  await page.getByPlaceholder('Search …').click();
  await page.getByPlaceholder('Search …').fill('fake landing page');

  // Press Enter to submit the search
  await page.getByPlaceholder('Search …').press('Enter');

  // Verify that the search results page is displayed with the expected URL
  const expectedUrl = 'https://ultimateqa.com/?s=fake+landing+page';
  await page.waitForURL(expectedUrl);
  expect(page.url()).toBe(expectedUrl);

  // Optionally, verify if the expected link is visible
  await page.getByRole('link', { name: 'Fake landing page small' }).first().click();
});
