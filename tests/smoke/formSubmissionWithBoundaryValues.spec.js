import { test, expect } from '@playwright/test';
import FormPage from '../pages/FormPage';

test('Form Submission with Boundary Values', async ({ page }) => {
  const formPage = new FormPage(page);
  const successMessageLocator = page.locator('text=Thanks for contacting us');

  await formPage.navigateToFormPage();

  await formPage.fillForm({
    '#et_pb_contact_name_0': 'John Doe',
    '#et_pb_contact_message_0': 'A'.repeat(255),
  });

  await formPage.submitForm();

  await successMessageLocator.waitFor({ state: 'visible', timeout: 10000 });

  await expect(successMessageLocator).toBeVisible();
  await expect(successMessageLocator).toContainText('Thanks for contacting us');
});
