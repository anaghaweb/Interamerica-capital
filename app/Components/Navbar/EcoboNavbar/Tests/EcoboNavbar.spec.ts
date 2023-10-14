import { test, expect } from "@playwright/test";

test("Ecobo Navbar ScreenShot Test", async ({ page }) => {
  test.slow();
  await page.goto("http://localhost:3000/TestHere");
  await page.waitForTimeout(3000);
  await expect(page).toHaveScreenshot("Ecobo.png");
  await page.waitForTimeout(3000);
});
