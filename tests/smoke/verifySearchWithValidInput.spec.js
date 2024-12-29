// search.spec.js
import { test, expect } from '@playwright/test';
import HomePage from '../pages/HomePage'; // Import HomePage class

test('Verify Search Functionality on Home Page', async ({ page }) => {
  // Declare variables first
  const homePage = new HomePage(page);
  const searchButton = page.getByRole('button', { name: 'U' });
  const searchInput = page.getByPlaceholder('Search …');
  const expectedUrl = 'https://ultimateqa.com/?s=fake+landing+page';
  const searchResultLink = page.getByRole('link', { name: 'Fake landing page small' }).first();

  // Navigate to the homepage
  await homePage.visit();

  // Click the search button to open the search field
  await searchButton.click();

  // Click on the search input field and type the search term
  await searchInput.click();
  await searchInput.fill('fake landing page');

  // Press Enter to submit the search
  await searchInput.press('Enter');

  // Verify that the search results page is displayed with the expected URL
  await page.waitForURL(expectedUrl);
  expect(page.url()).toBe(expectedUrl);

  // Optionally, verify if the expected link is visible
  await searchResultLink.click();
});
