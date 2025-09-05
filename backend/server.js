import express from "express";
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import cors from "cors";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";

const app = express();
const PORT = process.env.PORT || 4000;
const JWT_SECRET = process.env.JWT_SECRET || "playwright-demo-secret";

app.use(cors());
app.use(bodyParser.json());

let db;

// Initialize SQLite DB
(async () => {
	db = await open({
		filename: "./users.db",
		driver: sqlite3.Database,
	});
	await db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT UNIQUE,
    password TEXT
  )`);
})();

// Register endpoint
app.post("/api/register", async (req, res) => {
	const { name, email, password } = req.body;
	if (!name || !email || !password) {
		return res.status(400).json({ message: "All fields required." });
	}
	try {
		await db.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [
			name,
			email,
			password,
		]);
		res.json({ message: "Registration successful!" });
	} catch (err) {
		if (err.code === "SQLITE_CONSTRAINT") {
			res.status(409).json({ message: "Email already registered." });
		} else {
			res.status(500).json({ message: "Server error." });
		}
	}
});

// Login endpoint (returns JWT)
app.post("/api/login", async (req, res) => {
	const { email, password } = req.body;
	if (!email || !password) {
		return res.status(400).json({ message: "All fields required." });
	}
	const user = await db.get(
		"SELECT * FROM users WHERE email = ? AND password = ?",
		[email, password]
	);
	if (user) {
		// Issue JWT
		const token = jwt.sign(
			{ id: user.id, email: user.email, name: user.name },
			JWT_SECRET,
			{ expiresIn: "1h" }
		);
		res.json({ message: "Login successful!", token });
	} else {
		res.status(401).json({ message: "Invalid credentials." });
	}
});

// Middleware to verify JWT
function authenticateToken(req, res, next) {
	const authHeader = req.headers["authorization"];
	const token = authHeader && authHeader.split(" ")[1];
	if (!token) return res.status(401).json({ message: "No token provided." });
	jwt.verify(token, JWT_SECRET, (err, user) => {
		if (err) return res.status(403).json({ message: "Invalid token." });
		req.user = user;
		next();
	});
}

// Example protected route
app.get("/api/profile", authenticateToken, async (req, res) => {
	// req.user is set by authenticateToken
	res.json({
		id: req.user.id,
		email: req.user.email,
		name: req.user.name,
	});
});

app.listen(PORT, "0.0.0.0", () => {
	console.log(`Backend server running on http://0.0.0.0:${PORT}`);
});
