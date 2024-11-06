import { test, expect } from '@playwright/test';

test.beforeEach('user login',async({page})=>{
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


  const generatedEmail = `user${Date.now()}@example.com`;
  const generatedPassword = 'TestPassword123!';
  
  await emailField.fill(generatedEmail);
  await passwordField.fill(generatedPassword);
  await repeatPasswordField.fill(generatedPassword); 
  await page.waitForTimeout(2000)
  
  await page.getByLabel('Selection list for the').locator('span').click(); 
  await page.getByText('Mother\'s maiden name?').click();
  await page.getByPlaceholder('Answer to your security').click();
  await page.getByPlaceholder('Answer to your security').fill('test');

  
  await page.getByLabel('Button to complete the').click();
  await expect(page.getByText('Registration completed')).toBeVisible();
  
  

  // Step 8: Assert redirection to the login page
  await expect(page).toHaveURL('https://juice-shop.herokuapp.com/#/login');

await page.getByLabel('Text field for the login email').click();
await page.getByLabel('Text field for the login email').fill(generatedEmail);
await page.locator('div').filter({ hasText: /^Password \*$/ }).nth(2).click();
await page.getByLabel('Text field for the login password').fill(generatedPassword);
await page.getByRole('button', { name: 'Login' }).first().click();
})



test('should successfully add products to cart, modify cart, and complete checkout process', async ({ page }) => {
 
  await page.locator('mat-card').filter({ hasText: 'Apple Juice (1000ml) 1.99¤Add' }).getByLabel('Add to Basket').click();
  await page.getByRole('button', { name: 'X', exact: true }).click();
  await page.locator('mat-card').filter({ hasText: 'Apple Pomace 0.89¤Add to' }).getByLabel('Add to Basket').click();
  await page.getByRole('button', { name: 'X', exact: true }).click();
  await page.locator('mat-card').filter({ hasText: 'Banana Juice (1000ml) 1.99¤' }).getByLabel('Add to Basket').click();
  await page.getByRole('button', { name: 'X', exact: true }).click();
await page.locator('mat-card').filter({ hasText: 'DSOMM & Juice Shop User Day' }).getByLabel('Add to Basket').click();
await page.getByRole('button', { name: 'X', exact: true }).click();
  await page.locator('mat-card').filter({ hasText: 'Carrot Juice (1000ml) 2.99¤' }).getByLabel('Add to Basket').click();
  await page.getByRole('button', { name: 'X', exact: true }).click();
  await page.getByLabel('Show the shopping cart').click();
 await expect(page.getByText('Total Price: 63.06¤')).toBeVisible();
 await page.getByRole('row', { name: 'Apple Juice (1000ml) Apple' }).getByRole('button').nth(1).click();
 await expect(page.getByText('Total Price: 65.05¤')).toBeVisible();
 await page.getByRole('row', { name: 'Apple Juice (1000ml) Apple' }).getByRole('button').nth(2).click();
 await expect(page.getByText('Total Price: 61.07000000000001¤')).toBeVisible();
 await page.getByRole('button', { name: 'Checkout' }).click();
 await page.getByLabel('Add a new address').click();
 await page.getByPlaceholder('Please provide a country.').click();
 await page.getByPlaceholder('Please provide a country.').fill('india');
 await page.getByPlaceholder('Please provide a name.').click();
 await page.getByPlaceholder('Please provide a name.').fill('bhaumik');
 await page.getByPlaceholder('Please provide a mobile').click();
 await page.getByPlaceholder('Please provide a mobile').fill('9825526755');
 await page.locator('div').filter({ hasText: /^ZIP Code \*$/ }).nth(1).click();
 await page.getByPlaceholder('Please provide a ZIP code.').fill('382421');
 await page.getByPlaceholder('Please provide an address.').click();
 await page.getByPlaceholder('Please provide an address.').fill('NA');
 await page.getByPlaceholder('Please provide a city.').click();
 await page.getByPlaceholder('Please provide a city.').fill('GA');
 await page.locator('div').filter({ hasText: /^State$/ }).nth(2).click();
 await page.getByPlaceholder('Please provide a state.').fill('guj');
 await page.getByRole('button', { name: 'send Submit' }).click();
 await page.locator('.mat-radio-outer-circle').click();
 await page.getByLabel('Proceed to payment selection').click();
 await page.locator('.mat-radio-outer-circle').first().click();
 await page.getByLabel('Proceed to delivery method').click();
 await page.getByRole('button', { name: 'Add new card Add a credit or' }).click();
 await page.locator('div').filter({ hasText: /^Name \*$/ }).nth(2).click();
 await page.getByLabel('Name *').fill('test card');
 await page.locator('div').filter({ hasText: /^Card Number \*$/ }).nth(1).click();
 await page.getByLabel('Card Number *').fill('5555555523452134');
 await page.getByLabel('Expiry Month *').selectOption('5');
 await page.getByLabel('Expiry Year *').selectOption('2092');
 await page.getByRole('button', { name: 'send Submit' }).click();
 await page.locator('.mat-radio-outer-circle').click();
 await page.getByLabel('Proceed to review').click();
 await page.getByLabel('Complete your purchase').click();
 
});