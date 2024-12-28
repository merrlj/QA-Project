import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage'; // Ensure this is correct

test('Login with Valid Credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigateToLoginPage();
  await loginPage.login('merjem.lj@gmail.com', 'merjem123');

  // Use locator to find the success message
  const successMessageLocator = page.locator('text=Signed in successfully.');

  // Wait for the success message and assert
  await expect(successMessageLocator).toBeVisible();
  await expect(successMessageLocator).toContainText('Signed in successfully.');
});
