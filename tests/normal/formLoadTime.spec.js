import { test, expect } from '@playwright/test';
import FormPage from '../pages/FormPage'; // Adjust path as needed

test('Measure form load time', async ({ page }) => {
  const formPage = new FormPage(page);
  
  // Navigate to the form page
  await formPage.navigateToFormPage();
  
  // Measure time for form fields to load
  const start = Date.now();
  await page.waitForSelector(formPage.nameField, { state: 'visible', timeout: 60000 });
  await page.waitForSelector(formPage.messageField, { state: 'visible', timeout: 60000 });
  const loadTime = Date.now() - start;

  console.log(`Form and input fields loaded in ${loadTime} ms`);
  
  // Assert that the load time is within acceptable limits
  expect(loadTime).toBeLessThan(2000); // Example: 2 seconds
});
