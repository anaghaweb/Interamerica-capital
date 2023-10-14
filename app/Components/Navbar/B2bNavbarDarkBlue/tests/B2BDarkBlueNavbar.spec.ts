import { test, expect } from "@playwright/test";

test("Base Navbar ScreenShot Test", async ({ page }) => {
  test.slow();
  await page.goto("http://localhost:3000/TestHere/");
  await page.waitForTimeout(2000);
  await expect(page).toHaveScreenshot("B2BDark.png");
});
