import { test, expect } from "@playwright/test";
import { FeaturesPage } from "../PageObjects/FeaturesPage";

const FEATURES_URL = "https://padraic79.github.io/AutomationProjects/features.html";

test.describe("Features Page", () => {
    let features: FeaturesPage;

    test.beforeEach(async ({ page }) => {
        features = new FeaturesPage(page);
        await features.goto(FEATURES_URL);
    });

    test("Dropdown Example", async () => {
        await features.dropdown.selectOption("banana");
        await expect(features.dropdownResult).toHaveText(/banana/i);
    });

    test("Cookie Consent", async () => {
        if (await features.cookieBanner.isVisible()) {
            await features.acceptCookies.click();
            await expect(features.cookieBanner).toBeHidden();
            await expect(features.cookieStatus).toHaveText(/accepted/i);
        }
    });

    test("Session Token Simulation", async () => {
        await features.sessionBtn.click();
        await expect(features.sessionToken).toContainText("Session:");
        await features.clearSession.click();
        await expect(features.sessionToken).toHaveText("");
    });

    test("Dynamic Table - Add and Delete Row", async () => {
        const initialRows = await features.demoTable.locator("tbody tr").count();
        // Chain dialog handlers so each handles its own prompt
        features.page.once('dialog', async dialog1 => {
            await dialog1.accept('TestName');
            features.page.once('dialog', async dialog2 => {
                await dialog2.accept('TestValue');
            });
        });
        await features.addRowBtn.click();
        // Wait for row to be added
        await expect(features.demoTable.locator("tbody tr")).toHaveCount(initialRows + 1);
        // Delete the new row
        const lastDeleteBtn = features.demoTable.locator(".delete-row").last();
        await lastDeleteBtn.click();
        await expect(features.demoTable.locator("tbody tr")).toHaveCount(initialRows);
    });

    test("Modal Dialog - Open and Close", async () => {
        await features.modalButton.click();
        await expect(features.modal).toBeVisible();
        await features.closeModal.click();
        await expect(features.modal).toBeHidden();
    });

    test("File Upload & Preview", async () => {
        // Only test file input presence (no real file upload in CI)
        await expect(features.fileUpload).toBeVisible();
    });

    test("Tooltip Example", async () => {
        await features.tooltipBtn.hover();
        await expect(features.tooltip).toBeVisible();
    });

    test("Dark/Light Mode Toggle", async () => {
        // Click the visible slider instead of the hidden checkbox
        await features.page.locator('.switch .slider').click();
        await expect(features.themeLabel).toHaveText(/dark/i);
        await features.page.locator('.switch .slider').click();
        await expect(features.themeLabel).toHaveText(/light/i);
    });

    test("Delayed Loading Spinner", async () => {
        await features.showSpinner.click();
        await expect(features.spinner).toBeVisible();
        await expect(features.spinnerResult).toHaveText(/data loaded/i, { timeout: 3000 });
    });

    test("LocalStorage Key-Value Editor", async () => {
        await features.lsKey.fill("foo");
        await features.lsValue.fill("bar");
        await features.lsSet.click();
        await expect(features.lsResult).toHaveText(/set foo/i);
        await features.lsGet.click();
        await expect(features.lsResult).toHaveText(/bar/i);
        await features.lsRemove.click();
        await expect(features.lsResult).toHaveText(/removed foo/i);
    });

    test("Toast Notification", async () => {
        await features.showToast.click();
        await expect(features.toast).toHaveClass(/show/);
    });

    test("ARIA Live Region", async () => {
        await features.announceBtn.click();
        await expect(features.ariaLive).toHaveText(/announcement/i);
    });
});
