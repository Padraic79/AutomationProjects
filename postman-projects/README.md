# Postman Projects: Library API Collection

I've put together this Postman collection to showcase my API testing skills for the Library API, including adding, retrieving, and deleting books. I love how Postman makes it easy to chain requests and validate responses, and this project demonstrates my approach to robust API automation.

---

## 📦 Contents

- `Library.postman_collection.json`: Postman collection with requests and tests for Library API endpoints.

## 🚦 How to Use

1. **Import the Collection**
   - Open Postman.
   - Click `Import` and select `Library.postman_collection.json`.
2. **Set Up Variables**
   - The collection uses variables such as `base_url`, `book_id`, `isbn`, `author_name`, and `book_name`.
   - Set `base_url` to `https://rahulshettyacademy.com` or your API host.
   - Other variables are set automatically by pre-request scripts or test scripts.
3. **Requests Included**
   - **AddBook** (`POST /Library/Addbook.php`): Adds a new book. Uses dynamic variables for book details. Test scripts validate response and set `book_id` for later use.
   - **GetBook** (`GET /Library/GetBook.php?ID={{book_id}}`): Retrieves book details by ID. Test scripts validate response schema and author.
   - **DeleteBook** (`POST /Library/DeleteBook.php`): Deletes a book by ID. Test scripts validate deletion.
4. **Chaining Requests**
   - The collection is designed to chain requests: after adding a book, the `book_id` is saved and used in subsequent requests (get and delete).
5. **Assertions & Scripts**
   - Each request includes test scripts to validate status codes, response structure, and business logic.
   - Pre-request scripts generate dynamic data for book creation.

## 🔄 Example Workflow

1. Run `AddBook` to create a new book.
2. `GetBook` will fetch the book using the ID set by the previous request.
3. `DeleteBook` will remove the book using the same ID.

## 📝 Notes

- The collection uses Postman dynamic variables and scripts for robust, repeatable testing.
- You can run the full workflow using the Postman Collection Runner.
- I'm particularly proud of how I've implemented the chaining and validations here.

## 🌐 Part of the Automation Projects

- See the root [README.md](../README.md) for a full overview of these projects and how API testing fits into the overall automation strategy.

## License

MIT
