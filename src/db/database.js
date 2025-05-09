// Database Diagram:
// https://www.figma.com/board/1YEWUVZgZ2Z8k8PSvfugTM/Project-A?node-id=0-1&p=f&t=js4BtH8uwqX82II7-0

import Database from "better-sqlite3";

const db = new Database("sqlite.db", { verbose: console.log });

db.exec(`
	CREATE TABLE IF NOT EXISTS Users (
		uid INTEGER PRIMARY KEY, 
		username TEXT NOT NULL UNIQUE, 
		uemail TEXT NOT NULL UNIQUE, 
		upassword TEXT,
		ufirstname TEXT,
		ulastname TEXT,
		ucity TEXT,
		cid INTEGER REFERENCES Contractors(cid)
	);

	CREATE TABLE IF NOT EXISTS Contractors (
		cid INTEGER PRIMARY KEY,
		uid INTEGER REFERENCES Users(uid),
		jobType TEXT NOT NULL,
		biography TEXT,
		rating REAL DEFAULT 0
	);

	CREATE TABLE IF NOT EXISTS JobRequests (
		rid INTEGER PRIMARY KEY,
		uid INTEGER REFERENCES Users(uid),
		jobTitle TEXT,
		jobDescription TEXT,
		location TEXT,
		offeredPrice INTEGER DEFAULT 0,
		datePosted TEXT DEFAULT CURRENT_TIMESTAMP,
		status INTEGER DEFAULT 0
	);

	CREATE TABLE IF NOT EXISTS ContractorJobs (
		jid INTEGER PRIMARY KEY,
		cid INTEGER REFERENCES Contractors(cid),
		rid INTEGER REFERENCES JobRequests(rid),
		jobDescription TEXT,
		offeredPrice INTEGER DEFAULT 0,
		datePosted TEXT DEFAULT CURRENT_TIMESTAMP,
		status INTEGER DEFAULT 0
	);

	CREATE TABLE IF NOT EXISTS Ratings (
		ratingid INTEGER PRIMARY KEY,
		reviewerId INTEGER REFERENCES Users(uid),
		cid INTEGER REFERENCES Contractors(cid),
		rid INTEGER REFERENCES JobRequests(rid),
		rating INTEGER DEFAULT 0,
		review TEXT
	);
`);

export default db;
