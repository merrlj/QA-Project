import { test, expect } from '@playwright/test';
import { ComplicatedPage } from '../pages/ComplicatedPage'; // Correct path to your page object

test('Test Social Media Links', async ({ page }) => {
  const complicatedPage = new ComplicatedPage(page);

  // Step 1: Open the complicated page
  await complicatedPage.open();

  // Step 2: Click on the Twitter Follow link
  await complicatedPage.clickTwitterLink();

  // Step 3: Wait for the Twitter login page to load (you can adjust the URL if necessary)
  await page.waitForURL('https://x.com/i/flow/login?redirect_after_login=%2FNikolay_A00');

  // Step 4: Go back to the complicated page
  await complicatedPage.navigateBack();

  // Step 5: Click on the Facebook Follow link
  await complicatedPage.clickFacebookLink();

  // Step 6: Wait for the Facebook page to load (account for trailing slash by using a regular expression)
  await page.waitForURL(/https:\/\/www\.facebook\.com\/Ultimateqa1\/?$/);

  // Final Step: Go back to the complicated page again
  await complicatedPage.navigateBack();
});
