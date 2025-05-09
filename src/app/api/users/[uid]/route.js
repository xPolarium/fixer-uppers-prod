import { NextResponse } from "next/server";

import db from "@/db/database";

// GET: /api/users/<uid>
// Retrieves all data for a given user's uid
export async function GET(request, { params }) {
	const { uid } = await params;

	if (!uid) {
		return NextResponse.json(
			{ error: "Missing id field." },
			{ status: 400 }
		);
	}

	const user = db.prepare("SELECT * FROM Users WHERE uid = ?").get(uid);
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
