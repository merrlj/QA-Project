// tests/navigation.test.js
import { test, expect } from '@playwright/test';
import HomePage from '../pages/HomePage';
import BigPage from '../pages/BigPage';

test('Navigation to "Big Page with Many Elements"', async ({ page }) => {
  const homePage = new HomePage(page);
  const bigPage = new BigPage(page);

  // Navigate to the homepage and then to the Big Page
  await homePage.visit(); // Visit home page
  await homePage.navigateTo('Big Page with Many Elements'); // Navigate using the link
  await bigPage.visit(); // Visit the Big Page directly

  // Ensure the URL is correct after navigating
  expect(page.url()).toContain('https://ultimateqa.com/complicated-page');
});
