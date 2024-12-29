import { test, expect } from '@playwright/test';
import HomePage from '../pages/HomePage';  

test('Navigate through homepage and submit form', async ({ page }) => {
  const homePage = new HomePage(page);
  const learnHowToAutomateLink = page.getByRole('link', { name: 'Learn how to automate an' });
  const goToNextSprintLink = page.getByRole('link', { name: 'Go to the next sprint' });
  const goToSprintLink = page.getByRole('link', { name: 'Go to sprint' });
  const firstNameInput = page.locator('input[name="firstname"]');
  const lastNameInput = page.locator('input[name="lastname"]');
  const submitButton = page.getByRole('button', { name: 'Submit' });

  await homePage.visit();
  await learnHowToAutomateLink.click();
  await goToNextSprintLink.click();
  await goToSprintLink.click();

  await firstNameInput.click(); 
  await firstNameInput.fill('Mirza'); 

  await lastNameInput.click(); 
  await lastNameInput.fill('Ljub'); 

  await submitButton.click(); 
});
