import { test, expect } from "@playwright/test";
import { FeaturesPage } from "../PageObjects/FeaturesPage";

const FEATURES_URL = "https://padraic79.github.io/AutomationProjects/features.html";

test.describe("Features Page", () => {
    test("Features page loads and header is visible", async ({ page }) => {
        const features = new FeaturesPage(page);
        await features.goto(FEATURES_URL);
        await expect(features.header).toHaveText(/features/i);
    });

    // Add more feature interaction tests as needed
});
