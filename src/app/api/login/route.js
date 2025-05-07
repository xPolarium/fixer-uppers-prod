import { NextRequest, NextResponse } from "next/server";
import db from "@/db/database";
import bcrypt from "bcrypt";
import { createSecretKey } from "crypto";
import { SignJWT, base64url } from "jose";

const JWT_SECRET = process.env.JWT_SECRET;

export async function POST(request) {
	const { uemail, upassword } = await request.json();
	if (!uemail || !upassword) {
		return NextResponse.json(
			{ error: "Missing email or password." },
			{ status: 400 }
		);
	}

	const user = db.prepare("SELECT * FROM users WHERE uemail = ?").get(uemail);

	if (!user) {
		return NextResponse.json(
			{ error: "Could not find a user with that email." },
			{ status: 401 }
		);
	}

	const passwordHash = await bcrypt.compare(upassword, user.upassword);

	if (!passwordHash) {
		return NextResponse.json(
			{ error: "The password associated with this user is incorrect." },
			{ status: 401 }
		);
	}

	const token = await new SignJWT({
		uid: user.uid,
		username: user.username,
		uemail: user.uemail,
	})
		.setProtectedHeader({ alg: "HS256" })
		.setExpirationTime("7 days")
		.sign(createSecretKey(JWT_SECRET, "utf-8"));

	return NextResponse.json({ token });
}
