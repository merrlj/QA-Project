import { test, expect } from '@playwright/test';
import FormPage from '../pages/FormPage'; // Assuming this is already defined

test('Form submission with empty fields and validation messages', async ({ page }) => {
  const formPage = new FormPage(page);

  // Step 1: Navigate to the automation page
  await page.goto('https://ultimateqa.com/automation');
  
  // Step 2: Click the 'Fill out forms' link
  await page.getByRole('link', { name: 'Fill out forms' }).click();

  // Step 3: Submit the form with empty fields (we assume the form submission is done with a button)
  await page.locator('#et_pb_contact_form_1').getByRole('button', { name: 'Submit' }).click();

  // Step 4: Verify that the validation message is visible
  await expect(page.getByText('Please, fill in the following')).toBeVisible();

  // Step 5: Verify that the 'Name' error message is visible
  const nameErrorMessage = page.locator('li').filter({ hasText: 'Name' });
  await expect(nameErrorMessage).toBeVisible();

  // Step 6: Verify that the 'Message' error message is visible
  const messageErrorMessage = page.locator('li').filter({ hasText: 'Message' });
  await expect(messageErrorMessage).toBeVisible();
  
  // Step 7: Verify that the 'Captcha' error message is visible
  const captchaErrorMessage = page.locator('text=Captcha');
  await expect(captchaErrorMessage).toBeVisible();
});
