// Database Diagram:
// https://www.figma.com/board/1YEWUVZgZ2Z8k8PSvfugTM/Project-A?node-id=0-1&p=f&t=js4BtH8uwqX82II7-0

import Database from "better-sqlite3";

const db = new Database("sqlite.db", { verbose: console.log });

// todo: uType
db.exec(`
	CREATE TABLE IF NOT EXISTS users (
		uid INTEGER PRIMARY KEY, 
		username TEXT NOT NULL UNIQUE, 
		uemail TEXT NOT NULL UNIQUE, 
		upassword TEXT,
		ufirstname TEXT,
		ulastname TEXT,
		ucity TEXT,
		urating REAL DEFAULT 0
	);
`);
export default db;
