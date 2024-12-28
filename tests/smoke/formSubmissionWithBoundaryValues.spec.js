import { test, expect } from '@playwright/test';
import FormPage from '../pages/FormPage';

test('Form Submission with Boundary Values', async ({ page }) => {
  const formPage = new FormPage(page);

  await formPage.navigateToFormPage();

  // Fill the form with boundary values including the name field
  await formPage.fillForm({
    '#et_pb_contact_name_0': 'John Doe',
    '#et_pb_contact_message_0': 'A'.repeat(255),
  });

  // Submit the form
  await formPage.submitForm();

  // Get and assert the success message
  const successMessageLocator = page.locator('text=Thanks for contacting us');

  // Wait for the success message and assert
  await expect(successMessageLocator).toBeVisible();
  await expect(successMessageLocator).toContainText('Thanks for contacting us');
});
