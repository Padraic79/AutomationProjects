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
	lsSet.addEventListener("click", () => {
		if (lsKey.value) {
			localStorage.setItem(lsKey.value, lsValue.value);
			lsResult.textContent = `Set ${lsKey.value}`;
		}
	});
	lsGet.addEventListener("click", () => {
		if (lsKey.value) {
			const val = localStorage.getItem(lsKey.value);
			lsResult.textContent = val !== null ? `Value: ${val}` : "Not found";
		}
	});
	lsRemove.addEventListener("click", () => {
		if (lsKey.value) {
			localStorage.removeItem(lsKey.value);
			lsResult.textContent = `Removed ${lsKey.value}`;
		}
	});
}

// Toast notification
const showToast = document.getElementById("show-toast");
const toast = document.getElementById("toast");
if (showToast && toast) {
	showToast.addEventListener("click", () => {
		toast.textContent = "This is a toast notification!";
		toast.classList.add("show");
		setTimeout(() => {
			toast.classList.remove("show");
			toast.textContent = "";
		}, 2000);
	});
}

// ARIA live region
const announceBtn = document.getElementById("announce-btn");
const ariaLive = document.getElementById("aria-live");
if (announceBtn && ariaLive) {
	announceBtn.addEventListener("click", () => {
		ariaLive.textContent = "This is an ARIA live region announcement!";
		setTimeout(() => {
			ariaLive.textContent = "";
		}, 2000);
	});
}
// Simple SPA navigation
const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("main > section");
navLinks.forEach((link) => {
	link.addEventListener("click", (e) => {
		e.preventDefault();
		const id = link.getAttribute("href").replace("#", "") || "home";
		sections.forEach(
			(sec) => (sec.style.display = sec.id === id ? "block" : "none")
		);
	});
});
// Show home by default
sections.forEach(
	(sec) => (sec.style.display = sec.id === "home" ? "block" : "none")
);

// Login form
const loginForm = document.getElementById("loginForm");
if (loginForm) {
	loginForm.addEventListener("submit", (e) => {
		e.preventDefault();
		const email = loginForm.email.value;
		const password = loginForm.password.value;
		const msg = document.getElementById("login-message");
		if (email === "test@example.com" && password === "Password123") {
			msg.textContent = "Login successful!";
			msg.style.color = "#007700";
		} else {
			msg.textContent = "Invalid credentials.";
			msg.style.color = "#bb0000";
		}
	});
}

// Register form
const registerForm = document.getElementById("registerForm");
if (registerForm) {
	registerForm.addEventListener("submit", (e) => {
		e.preventDefault();
		const name = registerForm.name.value;
		const email = registerForm.email.value;
		const password = registerForm.password.value;
		const msg = document.getElementById("register-message");
		if (name && email && password.length >= 6) {
			msg.textContent = "Registration successful!";
			msg.style.color = "#007700";
		} else {
			msg.textContent = "Please fill all fields (password min 6 chars).";
			msg.style.color = "#bb0000";
		}
	});
}

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
