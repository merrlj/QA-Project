import { test, expect } from '@playwright/test';
import { NavigationPage } from '../pages/NavigationPage';

test.describe('Usability Test Case: Navigation Links', () => {
  let navigationPage;

  test.beforeEach(async ({ page }) => {
    navigationPage = new NavigationPage(page);
    await page.goto('https://ultimateqa.com/automation/');
  });

  test('Verify Navigation Links are Functional', async ({ page }) => {
    await navigationPage.goToServices();
    await expect(page).toHaveURL('https://ultimateqa.com/consulting/');  

    await page.goto('https://ultimateqa.com/automation/');

    await navigationPage.goToAbout();
    await expect(page).toHaveURL('https://ultimateqa.com/about/');  
    await page.goto('https://ultimateqa.com/automation/');

    await navigationPage.goToBlog();
    await expect(page).toHaveURL('https://ultimateqa.com/blog/');  

    await page.goto('https://ultimateqa.com/automation/');

    await navigationPage.goToNewsletter();
    await expect(page).toHaveURL('https://ultimateqa.kit.com/profile'); 

    await page.goto('https://ultimateqa.com/automation/');
  });
});
