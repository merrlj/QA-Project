import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage'; 

test('Login with Valid Credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const successMessageLocator = page.locator('text=Signed in successfully.');

  await loginPage.navigateToLoginPage();
  await loginPage.login('merjem.lj@gmail.com', 'merjem123');

  await expect(successMessageLocator).toBeVisible();
  await expect(successMessageLocator).toContainText('Signed in successfully.');
});
