import { NextResponse } from "next/server";
import { cookies } from "next/headers";
//import { jwtVerify } from "jose";
import db from "@/db/database";

const JWT_SECRET = process.env.JWT_SECRET;

export async function PUT(request, { params }) {
  try {
    // Authentication check
    const cookieStore = cookies();
    const token = cookieStore.get('token');
    if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    // Verify JWT
    const { payload } = await jwtVerify(
      token.value,
      new TextEncoder().encode(JWT_SECRET)
    );

    // Get job ID from URL
    const { rid } = params;
    
    // Validate input
    const updateData = await request.json();
    if (!updateData.cjobname || !updateData.location || 
        !updateData.job_description || !updateData.offered_price) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Update job in database
    db.prepare(
      `UPDATE jobs SET
        cjobname = ?,
        location = ?,
        job_description = ?,
        offered_price = ?,
        status = ?
       WHERE rid = ? AND username = ?`
    ).run(
      updateData.cjobname,
      updateData.location,
      updateData.job_description,
      updateData.offered_price,
      updateData.status,
      rid,
      payload.username
    );

    return NextResponse.json({ message: "Job updated successfully" });

  } catch (err) {
    return NextResponse.json(
      { error: err.message || "Server error" },
      { status: 500 }
    );
  }
}