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

const fill = db.prepare("SELECT uid FROM Users WHERE uid = ?").get(1);
if (!fill) {
	db.exec(`	
		INSERT INTO Users VALUES (1,'mikelRocks','MG@gmail.com','Pass123','Michel','Gonzalez','Pharr',NULL);
		INSERT INTO Users VALUES (2,'jennyIsCool','jen@outlook.com','Jenny23','Jennifer','Ross','Mission',NULL);
		INSERT INTO Contractors VALUES (1,2,'Jenny Cleans','Quality cleaning since forever!',4.5);
		UPDATE Users SET cid = 1 WHERE uid = 2;
		INSERT INTO JobRequests VALUES (1,1,'I need a plumber quick!','Need someone to replace the sink.','Pharr',700,NULL,NULL);
		INSERT INTO JobRequests VALUES (2,2,'I need a babysitter!','I got 4 kids that need watchin!','Edingburg',80,NULL,NULL);
	`);
}

export default db;
