import { test, expect } from '@playwright/test';
import { HomePage } from "../../PageObjects/HomePage";

import { ProductsPage } from "../../PageObjects/ProductsPage";

test('Verify all products and product detail page', async ({ page }) => {
    const homePage = new HomePage(page);
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    await homePage.goto();
    // 3. Verify that home page is visible successfully
    await expect(homePage.page).toHaveTitle(/Automation Exercise/);
    // 4. Click on 'Products' button
    await homePage.nav.goToProducts();
    // 5. Verify user is navigated to ALL PRODUCTS page successfully
    await expect(page).toHaveURL(/products/);
    // 6. The products list is visible
    const productsPage = new ProductsPage(page);
    //await expect(productsPage.productList()).toBeVisible();
    const products = await productsPage.productList();
    expect(products.length).toBeGreaterThan(0);


    // 7. Click on 'View Product' of first product
    await productsPage.viewProduct.first().click();

    // 8. User is landed to product detail page
    await expect(page).toHaveURL(/product_details/);

    // Extract details of the product 

    const productDetails = page.locator('.product-information');
    //console.log(productDetails);
    const name = await productDetails.locator('h2').innerText();
    const category = await productDetails.locator('p:has-text("Category:")').innerText();
    const price = await productDetails.locator('span:has-text("Rs.")').first().innerText();
    const availability = await productDetails.locator('p:has-text("Availability:")').innerText();
    const condition = await productDetails.locator('p:has-text("Condition:")').innerText();
    const brand = await productDetails.locator('p:has-text("Brand:")').innerText();

    // console.log({ name, category, price, availability, condition, brand });
    // 9. Verify that details are visible
    await expect(page.getByRole('heading', { level: 2, name })).toBeVisible();
    await expect(page.getByText(category)).toBeVisible();
    await expect(page.getByText(price)).toBeVisible();
    await expect(page.getByText(availability)).toBeVisible();
    await expect(page.getByText(condition)).toBeVisible();
    await expect(page.getByText(brand)).toBeVisible();
});