import { test, expect } from "@playwright/test";

test("should display product details and reviews for Apple Juice", async ({
  page,
}) => {
  await page.goto("https://juice-shop.herokuapp.com/#/");
  await page.getByLabel("Close Welcome Banner").click();
  await page.getByLabel("dismiss cookie message").click();
  await page
    .locator("mat-card")
    .filter({ hasText: "Apple Juice (1000ml) 1.99¤" })
    .click();
  await expect(page.locator("#mat-dialog-1")).toBeVisible();
  await expect(
    page.getByRole("img", { name: "Apple Juice (1000ml)" })
  ).toBeVisible();
  await page.getByRole("button", { name: "Reviews (2)" }).click();
  await page.getByLabel("Close Dialog").click();
});
