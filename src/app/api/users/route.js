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

export async function PUT(request) {
	// todo: clean this up if its messy
	const { uid, ufirstname, ulastname, ucity, urating } = await request.json();

	if (!uid) {
		return NextResponse.json(
			{ error: "Missing uid field to update a user." },
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

	const updateUser = db.prepare(
		"UPDATE users SET ufirstname = ?, ulastname = ?, ucity = ?, urating = ? WHERE uid = ?"
	);

	// Done this way to update only the values that are passed through the PUT request.
	// So if ufirstname is missing, this would use just stick to the old value of ufirstname.
	const result = updateUser.run(
		ufirstname != null ? ufirstname : user.ufirstname,
		ulastname != null ? ulastname : user.ulastname,
		ucity != null ? ucity : user.ucity,
		urating != null ? urating : user.urating,
		uid
	);

	return NextResponse.json({
		message: "User has been updated.",
		update_count: result.changes,
	});
}
