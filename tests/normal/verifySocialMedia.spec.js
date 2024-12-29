import { test, expect } from '@playwright/test';
import { ComplicatedPage } from '../pages/ComplicatedPage'; 

test('Test Social Media Links', async ({ page }) => {
  const complicatedPage = new ComplicatedPage(page);

  await complicatedPage.open();

  await complicatedPage.clickTwitterLink();
  await page.waitForURL('https://x.com/i/flow/login?redirect_after_login=%2FNikolay_A00');

  await complicatedPage.navigateBack();

  await complicatedPage.clickFacebookLink();
  await page.waitForURL(/https:\/\/www\.facebook\.com\/Ultimateqa1\/?$/);

  await complicatedPage.navigateBack();
});
