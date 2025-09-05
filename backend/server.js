import express from "express";
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = 4000;

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

// Login endpoint
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
		res.json({ message: "Login successful!" });
	} else {
		res.status(401).json({ message: "Invalid credentials." });
	}
});

app.listen(PORT, () => {
	console.log(`Backend server running on http://localhost:${PORT}`);
});
