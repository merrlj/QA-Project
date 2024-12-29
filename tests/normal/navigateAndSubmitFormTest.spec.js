import { test, expect } from '@playwright/test';
import HomePage from '../pages/HomePage';  // Import the HomePage class

test('Navigate through homepage and submit form', async ({ page }) => {
  // Declare variables first
  const homePage = new HomePage(page);
  const learnHowToAutomateLink = page.getByRole('link', { name: 'Learn how to automate an' });
  const goToNextSprintLink = page.getByRole('link', { name: 'Go to the next sprint' });
  const goToSprintLink = page.getByRole('link', { name: 'Go to sprint' });
  const firstNameInput = page.locator('input[name="firstname"]');
  const lastNameInput = page.locator('input[name="lastname"]');
  const submitButton = page.getByRole('button', { name: 'Submit' });

  // Step 1: Visit the homepage
  await homePage.visit();

  // Step 2: Click 'Learn how to automate an'
  await learnHowToAutomateLink.click();

  // Step 3: Click 'Go to the next sprint'
  await goToNextSprintLink.click();

  // Step 4: Click 'Go to sprint' multiple times
  await goToSprintLink.click();

  // Step 6: Fill out the textboxes (firstname and lastname)
  await firstNameInput.click(); // Click the first "firstname" input
  await firstNameInput.fill('Mirza'); // Fill the first "firstname" input

  await lastNameInput.click(); // Click the first "lastname" input
  await lastNameInput.fill('Ljub'); // Fill the first "lastname" input

  // Step 10: Click 'Submit' button (first one)
  await submitButton.click(); // Click the first "Submit" button
});
