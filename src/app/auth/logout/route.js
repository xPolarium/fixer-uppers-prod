import { NextRequest, NextResponse } from "next/server";

import { cookies } from "next/headers";

export async function POST() {
	const cookieStore = await cookies();
	cookieStore.set("token", "", {
		httpOnly: true,
		maxAge: 0, // immediately expire
	});

	return NextResponse.json({
		message: "User has been logged out successfully.",
	});
}
