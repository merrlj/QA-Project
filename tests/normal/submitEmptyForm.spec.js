import { test, expect } from '@playwright/test';
import FormPage from '../pages/FormPage'; // Assuming this is already defined

test('Form submission with empty fields and validation messages', async ({ page }) => {
  // Declare variables first
  const formPage = new FormPage(page);
  const nameErrorMessage = page.locator('li').filter({ hasText: 'Name' });
  const messageErrorMessage = page.locator('li').filter({ hasText: 'Message' });
  const captchaErrorMessage = page.locator('text=Captcha');
  const validationMessageLocator = page.getByText('Please, fill in the following');

  // Step 1: Navigate to the automation page
  await page.goto('https://ultimateqa.com/automation');
  
  // Step 2: Click the 'Fill out forms' link
  await page.getByRole('link', { name: 'Fill out forms' }).click();

  // Step 3: Submit the form with empty fields
  await page.locator('#et_pb_contact_form_1').getByRole('button', { name: 'Submit' }).click();

  // Step 4: Verify that the validation message is visible
  await expect(validationMessageLocator).toBeVisible();

  // Step 5: Verify that the 'Name' error message is visible
  await expect(nameErrorMessage).toBeVisible();

  // Step 6: Verify that the 'Message' error message is visible
  await expect(messageErrorMessage).toBeVisible();
  
  // Step 7: Verify that the 'Captcha' error message is visible
  await expect(captchaErrorMessage).toBeVisible();
});
