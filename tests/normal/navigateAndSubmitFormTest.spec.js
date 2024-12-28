import { test, expect } from '@playwright/test';
import HomePage from '../pages/HomePage';  // Import the HomePage class

test('Navigate through homepage and submit form', async ({ page }) => {
  const homePage = new HomePage(page); // Initialize HomePage object

  // Step 1: Visit the homepage
  await homePage.visit();

  // Step 2: Click 'Learn how to automate an'
  await page.getByRole('link', { name: 'Learn how to automate an' }).click();

  // Step 3: Click 'Go to the next sprint'
  await page.getByRole('link', { name: 'Go to the next sprint' }).click();

  // Step 4: Click 'Go to sprint' multiple times
  await page.getByRole('link', { name: 'Go to sprint' }).click();


  // Step 6: Fill out the textboxes (firstname and lastname)
  // Use nth(0) to target the correct "firstname" input field
  await page.locator('input[name="firstname"]').click(); // Click the first "firstname" input
  await page.locator('input[name="firstname"]').fill('Mirza'); // Fill the first "firstname" input

  // Use nth(0) to target the correct "lastname" input field
  await page.locator('input[name="lastname"]').click(); // Click the first "lastname" input
  await page.locator('input[name="lastname"]').fill('Ljub'); // Fill the first "lastname" input

  // Step 10: Click 'Submit' button (first one)
  await page.getByRole('button', { name: 'Submit' }).click(); // Click the first "Submit" button

});
