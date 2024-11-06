import { test, expect } from '@playwright/test';
import { assert } from 'console';

test('user registration and login', async ({ page }) => {
  await page.goto('https://juice-shop.herokuapp.com/#/');
  
  await page.getByLabel('Close Welcome Banner').click();
  await page.getByLabel('dismiss cookie message').click();
  
  await page.getByLabel('Show/hide account menu').click();
  await page.getByRole('menuitem', { name: 'Go to login page' }).click();
  
  await page.getByRole('link', { name: 'Not yet a customer?' }).click();
  
  const emailField = page.getByLabel('Email address field');
  const passwordField = page.getByLabel('Field for the password');
  const repeatPasswordField = page.locator('mat-form-field').locator('[id=repeatPasswordControl]');
  const securityQuestionField = page.locator('div').filter({ hasText: /^Answer \*$/ }).nth(2);

  await emailField.click();
  await passwordField.click();
  await repeatPasswordField.click();
  await securityQuestionField.click();
  
  await page.waitForSelector('.mat-error'); 

  const generatedEmail = `user${Date.now()}@example.com`;
  const generatedPassword = 'TestPassword123!';
  
  await emailField.fill(generatedEmail);
  await passwordField.fill(generatedPassword);
  await repeatPasswordField.fill(generatedPassword); 
  
  await page.getByLabel('Selection list for the').locator('span').click(); 
  await page.getByText('Mother\'s maiden name?').click();
  await page.getByPlaceholder('Answer to your security').click();
  await page.getByPlaceholder('Answer to your security').fill('test');

  
  await page.locator('.mat-slide-toggle-bar').click();
  await expect(page.locator('#registration-form mat-card')).toBeVisible()
  await page.getByLabel('Button to complete the').click();
  await expect(page.getByText('Registration completed')).toBeVisible();
  
  

  // Step 8: Assert redirection to the login page
  await expect(page).toHaveURL('https://juice-shop.herokuapp.com/#/login');

await page.getByLabel('Text field for the login email').click();
await page.getByLabel('Text field for the login email').fill(generatedEmail);
await page.locator('div').filter({ hasText: /^Password \*$/ }).nth(2).click();
await page.getByLabel('Text field for the login password').fill(generatedPassword);
await page.getByRole('button', { name: 'Login' }).first().click();

  await expect(page).toHaveURL('https://juice-shop.herokuapp.com/#/search');
 await page.getByLabel('Show/hide account menu').click();
await expect(page.getByRole('menuitem', { name: 'Go to user profile' }).getByText(' '+generatedEmail+' ')).toBeVisible()
});
