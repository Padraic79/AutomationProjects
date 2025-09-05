# Playwright Demo Site — Portfolio Project

> This folder contains the static frontend for the Playwright automation demo site, published via GitHub Pages. It is designed for both manual exploration and automated UI testing, and demonstrates best practices for QA, accessibility, and full-stack integration.

## 📂 Folder Contents

- `index.html` — Landing page
- `home.html` — Home page
- `login.html` — Login form (connects to backend)
- `register.html` — Registration form (connects to backend)
- `contact.html` — Contact page
- `features.html` — Feature demos for UI automation
- `script.js` — All frontend JavaScript
- `style.css` — Site-wide styles
- `backend/` — Node.js/Express/SQLite backend for authentication and API

## 🚀 How to Run the Backend Locally

The frontend (this folder) is static and always available at the GitHub Pages URL:
**[https://padraic79.github.io/AutomationProjects/](https://padraic79.github.io/AutomationProjects/)**

To enable login, registration, and protected API features, you (or a reviewer) must run the backend server locally:

1. **Clone the repository:**

```
git clone https://github.com/Padraic79/AutomationProjects.git
cd AutomationProjects/docs/backend
```

2. **Install dependencies:**

```
npm install
```

3. **Start the backend server:**

```
npm start
```

The backend will run at [http://localhost:4000](http://localhost:4000)

4. **Open the frontend:**

- Visit [https://padraic79.github.io/AutomationProjects/](https://padraic79.github.io/AutomationProjects/) in your browser.
- The login and registration forms will POST to your local backend.
- For full functionality, keep the backend running while using the site.

**Note:**

- The backend is not hosted on GitHub Pages (static hosting only). For demo/testing, run it locally as above.
- All other site features (navigation, UI, accessibility, feature demos) work directly from GitHub Pages.

## 📝 For Employers & Reviewers

- This project demonstrates:
  - Modern multi-page HTML/CSS/JS structure
  - Playwright-ready selectors and accessibility
  - Real authentication with persistent storage (Node.js/Express/SQLite backend)
  - Clean separation of frontend and backend
- See the main project README for more technical details.

---

For questions or feedback, please contact [Padraic79](https://github.com/Padraic79).
