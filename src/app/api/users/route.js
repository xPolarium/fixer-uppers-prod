import { NextResponse } from "next/server";

import db from "@/db/database";
import bcrypt from "bcrypt";

// POST: /api/users/
// Create a new user to the database given a username, uemail and upassword
export async function POST(request) {
	const { username, uemail, upassword } = await request.json();

	if (!username || !uemail || !upassword) {
		return NextResponse.json(
			{ error: "Missing user creation fields." },
			{ status: 400 }
		);
	}

	const userExists = db
		.prepare("SELECT * FROM users WHERE username = ? AND uemail = ?")
		.get(username, uemail);
	if (userExists) {
		return NextResponse.json(
			{ error: "Username or Email already registered." },
			{ status: 400 }
		);
	}

	// hardcoded salt rounds
	const passwordHash = await bcrypt.hash(upassword, 12);

	const createUser = db.prepare(
		"INSERT INTO users (username, uemail, upassword) VALUES (?, ?, ?)"
	);
	const result = createUser.run(username, uemail, passwordHash);

	return NextResponse.json({
		message: "User created successfully.",
		uid: result.lastInsertRowid,
	});
}
