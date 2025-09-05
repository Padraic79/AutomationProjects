// --- Welcome message logic ---
const welcomeUser = document.getElementById("welcome-user"); // Add <span id="welcome-user"></span> in your header/nav
function showWelcome(name) {
	if (welcomeUser) {
		welcomeUser.textContent = `Welcome, ${name}!`;
		welcomeUser.style.display = "inline";
	}
}
function hideWelcome() {
	if (welcomeUser) {
		welcomeUser.textContent = "";
		welcomeUser.style.display = "none";
	}
}
function checkLoginStatus() {
	const token = localStorage.getItem("authToken");
	const name = localStorage.getItem("userName");
	const logoutBtn = document.getElementById("logout-btn");
	if (token && name) {
		showWelcome(name);
		if (logoutBtn) logoutBtn.style.display = "inline-block";
	} else {
		hideWelcome();
		if (logoutBtn) logoutBtn.style.display = "none";
	}
}
document.addEventListener("DOMContentLoaded", checkLoginStatus);
checkLoginStatus();

// Backend API base URL (adjust if backend runs elsewhere)
//const API_BASE = "http://localhost:4000/api";
const API_BASE = "https://demo-site-backend-byds.onrender.com";

// Unified Login logic
const loginForm = document.getElementById("loginForm");
if (loginForm) {
	loginForm.addEventListener("submit", async (e) => {
		e.preventDefault();
		const email = document.getElementById("login-email").value;
		const password = document.getElementById("login-password").value;
		const msg = document.getElementById("login-message");
		msg.textContent = "Logging in...";
		try {
			const res = await fetch(`${API_BASE}/api/login`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, password }),
			});
			const data = await res.json();
			if (res.ok) {
				msg.style.color = "green";
				msg.textContent = data.message || "Login successful!";
				if (data.token) {
					localStorage.setItem("authToken", data.token);
				}
				if (data.name) {
					localStorage.setItem("userName", data.name);
					showWelcome(data.name);
				}
				// Show logout button
				const logoutBtn = document.getElementById("logout-btn");
				if (logoutBtn) logoutBtn.style.display = "inline-block";
				// Redirect to home page after login
				setTimeout(() => {
					window.location.href = "home.html";
				}, 700);
			} else {
				msg.style.color = "red";
				msg.textContent = data.error || "Login failed.";
				localStorage.removeItem("authToken");
				localStorage.removeItem("userName");
				hideWelcome();
				const logoutBtn = document.getElementById("logout-btn");
				if (logoutBtn) logoutBtn.style.display = "none";
			}
		} catch (err) {
			msg.style.color = "red";
			msg.textContent = "Network error.";
			localStorage.removeItem("authToken");
			localStorage.removeItem("userName");
			hideWelcome();
			const logoutBtn = document.getElementById("logout-btn");
			if (logoutBtn) logoutBtn.style.display = "none";
		}
	});
}

// Unified Register logic
const registerForm = document.getElementById("registerForm");
if (registerForm) {
	registerForm.addEventListener("submit", async (e) => {
		e.preventDefault();
		const name = document.getElementById("register-name").value;
		const email = document.getElementById("register-email").value;
		const password = document.getElementById("register-password").value;
		const msg = document.getElementById("register-message");
		msg.textContent = "Registering...";
		try {
			const res = await fetch(`${API_BASE}/api/register`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ name, email, password }),
			});
			const data = await res.json();
			if (res.ok) {
				msg.style.color = "green";
				msg.textContent =
					data.message || "Registration successful! You can now log in.";
				registerForm.reset();
				setTimeout(() => {
					msg.textContent = "";
				}, 3000);
			} else {
				msg.style.color = "red";
				msg.textContent = data.error || "Registration failed.";
			}
		} catch (err) {
			msg.style.color = "red";
			msg.textContent = "Network error.";
		}
	});
}

// Unified Logout logic
const logoutBtn = document.getElementById("logout-btn");
if (logoutBtn) {
	logoutBtn.addEventListener("click", () => {
		localStorage.removeItem("authToken");
		localStorage.removeItem("userName");
		document.getElementById("login-message").textContent = "Logged out.";
		document.getElementById("login-message").style.color = "#007700";
		logoutBtn.style.display = "none";
		hideWelcome();
	});
	// Show logout if already logged in
	if (localStorage.getItem("authToken")) {
		logoutBtn.style.display = "inline-block";
	}
}

// Ensure modal closes on navigation (fix for features page nav)
document.querySelectorAll("nav a").forEach((link) => {
	link.addEventListener("click", () => {
		const modal = document.getElementById("modal");
		if (modal) modal.style.display = "none";
	});
});

// Modal dialog
const openModal = document.getElementById("open-modal");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");
if (openModal && modal && closeModal) {
	openModal.addEventListener("click", () => {
		modal.style.display = "block";
		closeModal.focus();
	});
	closeModal.addEventListener("click", () => {
		modal.style.display = "none";
	});
	window.addEventListener("click", (e) => {
		if (e.target === modal) modal.style.display = "none";
	});
}

// File upload & preview
const fileUpload = document.getElementById("file-upload");
const filePreview = document.getElementById("file-preview");
if (fileUpload && filePreview) {
	fileUpload.addEventListener("change", () => {
		filePreview.innerHTML = "";
		const file = fileUpload.files[0];
		if (file && file.type.startsWith("image/")) {
			const img = document.createElement("img");
			img.src = URL.createObjectURL(file);
			img.style.maxWidth = "120px";
			img.alt = "Preview";
			filePreview.appendChild(img);
		} else if (file) {
			filePreview.textContent = `Selected: ${file.name}`;
		}
	});
}

// Tooltip
const tooltipBtn = document.getElementById("tooltip-btn");
const tooltip = document.getElementById("tooltip");
if (tooltipBtn && tooltip) {
	tooltipBtn.addEventListener("mouseenter", () => {
		tooltip.style.visibility = "visible";
	});
	tooltipBtn.addEventListener("mouseleave", () => {
		tooltip.style.visibility = "hidden";
	});
}

// Dark/Light mode toggle
const themeToggle = document.getElementById("theme-toggle");
const themeLabel = document.getElementById("theme-label");
if (themeToggle && themeLabel) {
	themeToggle.addEventListener("change", () => {
		if (themeToggle.checked) {
			document.body.classList.add("dark");
			themeLabel.textContent = "Dark Mode";
		} else {
			document.body.classList.remove("dark");
			themeLabel.textContent = "Light Mode";
		}
	});
}

// Delayed loading spinner
const showSpinner = document.getElementById("show-spinner");
const spinner = document.getElementById("spinner");
const spinnerResult = document.getElementById("spinner-result");
if (showSpinner && spinner && spinnerResult) {
	showSpinner.addEventListener("click", () => {
		spinner.style.display = "inline-block";
		spinnerResult.textContent = "";
		setTimeout(() => {
			spinner.style.display = "none";
			spinnerResult.textContent = "Data loaded!";
		}, 2000);
	});
}

// LocalStorage key-value editor
const lsKey = document.getElementById("ls-key");
const lsValue = document.getElementById("ls-value");
const lsSet = document.getElementById("ls-set");
const lsGet = document.getElementById("ls-get");
const lsRemove = document.getElementById("ls-remove");
const lsResult = document.getElementById("ls-result");
if (lsKey && lsValue && lsSet && lsGet && lsRemove && lsResult) {
	if (lsKey && lsValue && lsSet && lsGet && lsRemove && lsResult) {
		lsSet.addEventListener("click", () => {
			localStorage.setItem(lsKey.value, lsValue.value);
			lsResult.textContent = `Set ${lsKey.value}`;
		});
		lsGet.addEventListener("click", () => {
			const val = localStorage.getItem(lsKey.value);
			lsResult.textContent = val !== null ? `Value: ${val}` : "Not found.";
		});
		lsRemove.addEventListener("click", () => {
			localStorage.removeItem(lsKey.value);
			lsResult.textContent = `Removed ${lsKey.value}`;
		});
	}
}

const ariaLive = document.getElementById("aria-live");
if (announceBtn && ariaLive) {
	announceBtn.addEventListener("click", () => {
		ariaLive.textContent = "This is an ARIA live region announcement!";
		setTimeout(() => {
			ariaLive.textContent = "";
		}, 2000);
	});
}

// ...existing code...

// Contact form
const contactForm = document.getElementById("contactForm");
if (contactForm) {
	contactForm.addEventListener("submit", (e) => {
		e.preventDefault();
		const name = contactForm.name.value;
		const email = contactForm.email.value;
		const message = contactForm.message.value;
		const resp = document.getElementById("contact-response");
		if (name && email && message) {
			resp.textContent = "Thank you for contacting us!";
			resp.style.color = "#007700";
			contactForm.reset();
		} else {
			resp.textContent = "Please fill all fields.";
			resp.style.color = "#bb0000";
		}
	});
}

// Dropdown feature
const dropdown = document.getElementById("demo-dropdown");
const dropdownResult = document.getElementById("dropdown-result");
if (dropdown && dropdownResult) {
	dropdown.addEventListener("change", () => {
		dropdownResult.textContent = dropdown.value
			? `You selected: ${dropdown.value}`
			: "";
	});
}

// Cookie consent feature
const cookieBanner = document.getElementById("cookie-banner");
const acceptCookies = document.getElementById("accept-cookies");
const cookieStatus = document.getElementById("cookie-status");
if (acceptCookies && cookieBanner && cookieStatus) {
	if (localStorage.getItem("cookiesAccepted")) {
		cookieBanner.style.display = "none";
		cookieStatus.textContent = "Cookies accepted.";
	}
	acceptCookies.addEventListener("click", () => {
		localStorage.setItem("cookiesAccepted", "true");
		cookieBanner.style.display = "none";
		cookieStatus.textContent = "Cookies accepted.";
	});
}

// Session token simulation
const sessionBtn = document.getElementById("generate-session");
const sessionToken = document.getElementById("session-token");
const clearSession = document.getElementById("clear-session");
function getSession() {
	return sessionStorage.getItem("sessionToken");
}
function setSession(token) {
	sessionStorage.setItem("sessionToken", token);
}
function clearSessionToken() {
	sessionStorage.removeItem("sessionToken");
}
if (sessionBtn && sessionToken && clearSession) {
	sessionBtn.addEventListener("click", () => {
		const token = "sess_" + Math.random().toString(36).substr(2, 10);
		setSession(token);
		sessionToken.textContent = `Session: ${token}`;
	});
	clearSession.addEventListener("click", () => {
		clearSessionToken();
		sessionToken.textContent = "";
	});
	// Show token if exists
	const existing = getSession();
	if (existing) sessionToken.textContent = `Session: ${existing}`;
}

// Dynamic table feature
const addRowBtn = document.getElementById("add-row");
const demoTable = document.getElementById("demo-table");
if (addRowBtn && demoTable) {
	addRowBtn.addEventListener("click", () => {
		const name = prompt("Enter name:");
		const value = prompt("Enter value:");
		if (name && value) {
			const row = demoTable.insertRow(-1);
			row.innerHTML = `<td>${name}</td><td>${value}</td><td><button class="delete-row">Delete</button></td>`;
		}
	});
	demoTable.addEventListener("click", (e) => {
		if (e.target.classList.contains("delete-row")) {
			e.target.closest("tr").remove();
		}
	});
}
