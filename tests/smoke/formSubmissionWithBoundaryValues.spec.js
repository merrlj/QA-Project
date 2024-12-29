import { test, expect } from '@playwright/test';
import FormPage from '../pages/FormPage';

test('Form Submission with Boundary Values', async ({ page }) => {
  // Declare variables first
  const formPage = new FormPage(page);
  const successMessageLocator = page.locator('text=Thanks for contacting us');

  // Navigate to the form page
  await formPage.navigateToFormPage();

  // Fill the form with boundary values
  await formPage.fillForm({
    '#et_pb_contact_name_0': 'John Doe',
    '#et_pb_contact_message_0': 'A'.repeat(255),
  });

  // Submit the form
  await formPage.submitForm();

  // Wait for the success message and assert
  await expect(successMessageLocator).toBeVisible();
  await expect(successMessageLocator).toContainText('Thanks for contacting us');
});
