import { test, expect } from '@playwright/test';
import HomePage from '../pages/HomePage';

test('Verify page title of Automation Practice', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.visit(); // Navigate to the page
  const expectedTitle = 'Automation Practice - Ultimate QA';
  await expect(page).toHaveTitle(expectedTitle); // Assert the title is correct
});
