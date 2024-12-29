import { test, expect } from '@playwright/test';
import FormPage from '../pages/FormPage'; // Adjust path as needed

test('Measure form load time', async ({ page }) => {
  const formPage = new FormPage(page);
  
  await formPage.navigateToFormPage();
  
  const start = Date.now();
  await page.waitForSelector(formPage.nameField, { state: 'visible', timeout: 60000 });
  await page.waitForSelector(formPage.messageField, { state: 'visible', timeout: 60000 });
  const loadTime = Date.now() - start;

  console.log(`Form and input fields loaded in ${loadTime} ms`);
  
  expect(loadTime).toBeLessThan(2000); 
});
