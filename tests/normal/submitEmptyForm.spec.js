import { test, expect } from '@playwright/test';
import FormPage from '../pages/FormPage'; 

test('Form submission with empty fields and validation messages', async ({ page }) => {
  const formPage = new FormPage(page);
  const nameErrorMessage = page.locator('li').filter({ hasText: 'Name' });
  const messageErrorMessage = page.locator('li').filter({ hasText: 'Message' });
  const captchaErrorMessage = page.locator('text=Captcha');
  const validationMessageLocator = page.getByText('Please, fill in the following');

  await page.goto('https://ultimateqa.com/automation');
  await page.getByRole('link', { name: 'Fill out forms' }).click();
  await page.locator('#et_pb_contact_form_1').getByRole('button', { name: 'Submit' }).click();

  await expect(validationMessageLocator).toBeVisible();
  await expect(nameErrorMessage).toBeVisible();
  await expect(messageErrorMessage).toBeVisible();
  await expect(captchaErrorMessage).toBeVisible();
});
