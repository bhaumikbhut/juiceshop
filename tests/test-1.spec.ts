import { test, expect } from "@playwright/test";

test("should display the correct number of items per page", async ({
  page,
}) => {
  await page.goto("https://juice-shop.herokuapp.com/#/");
  await page.getByLabel("Close Welcome Banner").click();
  await page.getByLabel("dismiss cookie message").click();
  await page.getByLabel("Items per page:").locator("div").nth(2).click();
  await page.getByText("48").click();
  const items = page.locator(".mat-card");
  const itemCount = await items.count();
  expect(itemCount).toBe(37);
});
