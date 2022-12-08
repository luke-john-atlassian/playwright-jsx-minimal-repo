import { test, expect } from "@playwright/test";

// the test appears to crash because of this import
import { unrelatedString } from "./demo";

test("homepage has title and links to intro page", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  console.log(unrelatedString);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  // create a locator
  const getStarted = page.getByRole("link", { name: "Get started" });

  // Expect an attribute "to be strictly equal" to the value.
  await expect(getStarted).toHaveAttribute("href", "/docs/intro");

  // Click the get started link.
  await getStarted.click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});
