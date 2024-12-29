import { test, expect } from '@playwright/test';
import HomePage from '../pages/HomePage';
import BigPage from '../pages/BigPage';

test('Navigation to "Big Page with Many Elements"', async ({ page }) => {
  const homePage = new HomePage(page);
  const bigPage = new BigPage(page);

  await homePage.visit(); 
  await homePage.navigateTo('Big Page with Many Elements'); 
  await bigPage.visit(); 

  expect(page.url()).toContain('https://ultimateqa.com/complicated-page');
});
