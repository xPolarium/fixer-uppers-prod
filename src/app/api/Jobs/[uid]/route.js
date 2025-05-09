import { NextResponse } from "next/server";

import db from "@/db/database";

/*
JobRequests (
		rid INTEGER PRIMARY KEY,
		uid INTEGER REFERENCES Users(uid),
		jobTitle TEXT,
		jobDescription TEXT,
		location TEXT,
		offeredPrice INTEGER DEFAULT 0,
		datePosted TEXT DEFAULT CURRENT_TIMESTAMP,
		status INTEGER DEFAULT 0
*/

// GET: /api/jobs/<uid>
// Retrieves all active jobs for a given user's uid
export async function GET(request, { params }) {
	const { uid } = await params;

	if (!uid) {
		return NextResponse.json(
			{ error: "Missing id field." },
			{ status: 400 }
		);
	}

	const jobs = db.prepare("SELECT * FROM JobRequests WHERE uid = ?").all(uid);
	if (!jobs.length) {
		return NextResponse.json({ error: "No jobs found." }, { status: 404 });
	}

	return NextResponse.json({
		message: "Jobs found.",
		uid: uid,
		jobs: jobs,
	});
}
