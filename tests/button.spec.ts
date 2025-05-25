import { test, expect } from "@playwright/test";

test("Clicking on button increments the count variable", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("increment").click();
  await expect(page.getByTestId("count-value")).toHaveText("1");
});
