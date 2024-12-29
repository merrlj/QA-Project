import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';  

test('Test Forgot Password Flow', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto('https://ultimateqa.com/automation');
  await page.getByRole('link', { name: 'Login automation' }).click();
  await page.getByRole('link', { name: 'Forgot Password?' }).click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('merjem.lj@gmail.com');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('heading', { name: 'Help is on the way!' }).click();
  await page.getByText('If a user account is found').click();
  await expect(page).toHaveURL('https://courses.ultimateqa.com/password/reset');  
});
