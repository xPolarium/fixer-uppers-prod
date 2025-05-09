import { NextResponse } from "next/server";

import db from "@/db/database";
import bcrypt from "bcrypt";

// POST: /api/users/
// Create a new user to the database given a username, uemail and upassword
export async function POST(request) {
	const {
		username,
		email,
		password,
		isContractor,
		firstName,
		lastName,
		city,
		jobType,
		companyName,
		cityLocation
	} = await request.json();

	if (!username || !email || !password) {
		return NextResponse.json(
			{ error: "Missing user creation fields." },
			{ status: 400 }
		);
	}

	const userExists = db
		.prepare("SELECT * FROM Users WHERE username = ? OR uemail = ?")
		.get(username, email);
	if (userExists) {
		return NextResponse.json(
			{ error: "Username or Email already registered." },
			{ status: 400 }
		);
	}

	const passwordHash = await bcrypt.hash(password, 12);

	// Insert into Users with full details
	const createUser = db.prepare(
		`INSERT INTO Users (username, uemail, upassword, ufirstname, ulastname, ucity)
     VALUES (?, ?, ?, ?, ?, ?)`
	);
	const userResult = createUser.run(
		username,
		email,
		passwordHash,
		firstName,
		lastName,
		city
	);
	const createdUserId = userResult.lastInsertRowid;

	if (isContractor) {
		if (!jobType) {
			return NextResponse.json(
				{ error: "A Job Type was not provided." },
				{ status: 400 }
			);
		}

		// You must add companyName and cityLocation columns to Contractors table if not already
		const createContractor = db.prepare(
			`INSERT INTO Contractors (uid, jobType, biography, companyName, cityLocation)
     VALUES (?, ?, ?, ?, ?)`
		);
		const contractorResult = createContractor.run(
			createdUserId,
			jobType,
			`${companyName} - ${cityLocation}`, // or a real bio later
			companyName,
			cityLocation
		);

		const createdContractorId = contractorResult.lastInsertRowid;

		db.prepare("UPDATE Users SET cid = ? WHERE uid = ?").run(
			createdContractorId,
			createdUserId
		);

		return NextResponse.json({
			message: "User Contractor created successfully.",
			uid: createdUserId,
			cid: createdContractorId,
		});
	}

	return NextResponse.json({
		message: "User created successfully.",
		uid: createdUserId,
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

	const user = db.prepare("SELECT * FROM Users WHERE uid = ?").get(uid);
	if (!user) {
		return NextResponse.json(
			{ error: "User does not exist." },
			{ status: 404 }
		);
	}

	const updateUser = db.prepare(
		"UPDATE Users SET ufirstname = ?, ulastname = ?, ucity = ?, urating = ? WHERE uid = ?"
	);

	// Will stick to the old value in the database if missing in the request json
	const result = updateUser.run(
		ufirstname != null ? ufirstname : user.ufirstname,
		ulastname != null ? ulastname : user.ulastname,
		ucity != null ? ucity : user.ucity,
		urating != null ? urating : user.urating,
		uid
	);

	return NextResponse.json({
		message: "User has been updated.",
	});
}

export async function DELETE(request) {
	const { uid } = await request.json();

	if (!uid) {
		return NextResponse.json(
			{ error: "Missing uid field to delete a user." },
			{ status: 400 }
		);
	}

	const deleteUser = db.prepare("DELETE FROM Users WHERE uid = ?");
	const result = deleteUser.run(uid);

	return NextResponse.json({
		message: "User has been deleted",
	});
}
