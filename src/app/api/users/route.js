import { NextResponse } from "next/server";

import db from "@/db/database";
import bcrypt from "bcrypt";
import { create } from "@mui/material/styles/createTransitions";

// POST: /api/users/
// Create a new user to the database given a username, uemail and upassword
export async function POST(req) {
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

	const passwordHash = await bcrypt.hash(upassword, 12);

	const createUser = db.prepare(
		"INSERT INTO users (username, uemail, upassword) VALUES (?, ?, ?)"
	);
	const result = createUser.run(username, uemail, passwordHash);

	return NextResponse.json({
		message: "User created successfully.",
		userId: result.lastInsertRowid,
	});
}

// GET: /api/users/<uid>
// Retrieves all data for a given user's uid
export async function GET(req, { params }) {
	const { uid } = await params;

	if (!uid) {
		return NextResponse.json(
			{ error: "Missing id field." },
			{ status: 400 }
		);
	}

	const user = db.prepare("SELECT * FROM users WHERE uid = ?").get(uid);
	if (!user) {
		return NextResponse.json(
			{ error: "User does not exist." },
			{ status: 404 }
		);
	}

	// important to not send the password hash
	return NextResponse.json({
		message: "User found.",
		user: {
			uid: user.uid,
			username: user.username,
			ufirstname: user.ufirstname,
			ulastname: user.ulastname,
			uemail: user.uemail,
			ucity: user.ucity,
			urating: user.urating,
		},
	});
}
