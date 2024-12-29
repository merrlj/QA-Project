import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';  // Import the LoginPage class

test('Test Forgot Password Flow', async ({ page }) => {
  // Create an instance of LoginPage
  const loginPage = new LoginPage(page);

  // Step 1: Visit the main automation page
  await page.goto('https://ultimateqa.com/automation');

  // Step 2: Click the "Login automation" link
  await page.getByRole('link', { name: 'Login automation' }).click();

  // Step 3: Click the "Forgot Password?" link
  await page.getByRole('link', { name: 'Forgot Password?' }).click();

  // Step 4: Fill in the email field with a valid email
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('merjem.lj@gmail.com');

  // Step 5: Click the "Submit" button
  await page.getByRole('button', { name: 'Submit' }).click();

  // Step 6: Verify that the heading "Help is on the way!" is visible
  await page.getByRole('heading', { name: 'Help is on the way!' }).click();

  // Step 7: Click on the text "If a user account is found"
  await page.getByText('If a user account is found').click();

  // Optionally, add assertions to confirm you have successfully navigated or received the expected message
  // For example, you can assert that the page has redirected or that a success message appears:
  await expect(page).toHaveURL('https://courses.ultimateqa.com/password/reset');  // Example assertion for the "Forgot Password" URL
});
