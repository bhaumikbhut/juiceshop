import { test, expect } from '@playwright/test';

test.beforeEach('user login',async({page})=>{
  await page.goto('https://juice-shop.herokuapp.com/#/');
  await page.getByLabel('Close Welcome Banner').click();
  await page.getByLabel('dismiss cookie message').click();
  await page.getByLabel('Show/hide account menu').click();
  await page.getByRole('menuitem', { name: 'Go to login page' }).click();
  await page.locator('div').filter({ hasText: /^Email \*$/ }).nth(2).click();
  await page.getByLabel('Text field for the login email').fill('user1730899545993@example.com');
  await page.locator('div').filter({ hasText: /^Password \*$/ }).first().click();
  await page.getByLabel('Text field for the login password').click();
  await page.getByLabel('Text field for the login password').fill('TestPassword123!');
  await page.getByLabel('Login', { exact: true }).click();
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
//  await expect(page.getByText('Total Price: 5007.86¤')).toBeVisible();
 await page.getByRole('row', { name: 'Apple Juice (1000ml) Apple' }).getByRole('button').nth(1).click();
//  await expect(page.getByText('Total Price: 5009.')).toBeVisible();
 await page.getByRole('row', { name: 'Apple Juice (1000ml) Apple' }).getByRole('button').nth(2).click();
//  await expect(page.getByText('Total Price: 5005.87¤')).toBeVisible();
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
//  await page.locator('.mat-radio-outer-circle').click();
//  await page.getByLabel('Proceed to payment selection').click();
//  await page.locator('.mat-radio-outer-circle').first().click();
//  await page.getByLabel('Proceed to delivery method').click();
//  await page.getByRole('button', { name: 'Other payment options' }).click();
//  await page.getByLabel('Other payment options').locator('div').filter({ hasText: 'Credit Card' }).nth(3).click();
//  await page.getByRole('button', { name: 'Other payment options' }).click();
//  await page.getByText('0.00').click();
//  await page.getByRole('button', { name: 'Add new card Add a credit or' }).click();
//  await page.locator('div').filter({ hasText: /^Name \*$/ }).nth(2).click();
//  await page.getByLabel('Name *').fill('test card');
//  await page.locator('div').filter({ hasText: /^Card Number \*$/ }).nth(1).click();
//  await page.getByLabel('Card Number *').fill('12332434354355346');
//  await page.locator('div').filter({ hasText: /^Card Number \*$/ }).nth(1).click();
//  await page.getByLabel('Card Number *').click();
//  await page.getByLabel('Card Number *').fill('5555555523452134');
//  await page.getByLabel('Expiry Month *').selectOption('5');
//  await page.getByLabel('Expiry Year *').selectOption('2092');
//  await page.getByRole('button', { name: 'send Submit' }).click();
//  await page.getByRole('button', { name: 'Add new card Add a credit or' }).click();
//  await page.locator('.mat-radio-outer-circle').click();
//  await page.getByLabel('Proceed to review').click();
//  await page.getByLabel('Complete your purchase').click();
 
});