import { test, expect, request } from "@playwright/test";
import users from "../../data/users.json";

test("TestCase: API 1 -GET all products list", async ({ request }) => {
	const response = await request.get(
		"https://automationexercise.com/api/productsList"
	);
	expect(response.status()).toBe(200);
	const data = await response.json();

	expect(Array.isArray(data.products)).toBe(true);
});

test("TestCase: API 2 - POST to all products list", async ({ request }) => {
	const response = await request.post(
		"https://automationexercise.com/api/productsList",
		{
			data: {
				name: "New Product",
				category: "Category 1",
				price: 100,
				description: "Description of new product",
				image: "https://via.placeholder.com/150",
			},
		}
	);
	expect(response.status()).toBe(200);
	const data = await response.json();

	expect(data.responseCode).toBe(405);
	expect(data.message).toBe("This request method is not supported.");
});

test(" TestCase: API 3 - Get all Brands List", async ({ request }) => {
	const response = await request.get(
		"https://automationexercise.com/api/brandsList"
	);
	expect(response.status()).toBe(200);
	const data = await response.json();
	//console.log(response.status());

	expect(data.responseCode).toBe(200);
	expect(Array.isArray(data.brands)).toBe(true);
	expect(data.brands.length).toBeGreaterThan(0);
});

test(" TestCase: API 4 - PUT to all brands list", async ({ request }) => {
	const response = await request.put(
		"https://automationexercise.com/api/brandsList",
		{
			data: {
				brands: [
					{
						id: 44,
						name: "Updated Brand",
						logo: "https://via.placeholder.com/150",
					},
				],
			},
		}
	);
	expect(response.status()).toBe(200);
	const data = await response.json();
	expect(data.responseCode).toBe(405);

	expect(data.message).toBe("This request method is not supported.");
});

test("TestCase: API 7: POST To Verify Login with valid details", async ({
	request,
}) => {
	const response = await request.post(
		"https://automationexercise.com/api/verifyLogin",
		{
			form: {
				email: users.validUser.email,
				password: users.validUser.password,
			},
		}
	);
	expect(response.status()).toBe(200);
	const data = await response.json();

	expect(data.responseCode).toBe(200);
	expect(data.message).toBe("User exists!");
});

let ID = "bcd123214123421345222444";
test("rsa", async ({ request }) => {
	const response = await request.get(
		`https://rahulshettyacademy.com/Library/GetBook.php?ID=${ID}`
	);

	expect(response.status()).toBe(200);
	//console.log(response);

	// let data;
	// try {
	// 	const text = await response.text();
	// 	if (text) {
	// 		data = JSON.parse(text);
	// 		console.log("Parsed JSON:", data);
	// 	} else {
	// 		console.warn("Response body is empty");
	// 	}
	// } catch (e) {
	// 	console.error("Failed to parse JSON. Raw response:", await response.text());
	// 	throw e;
	// }
});
