import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import db from "@/db/database";
import { v4 as uuidv4 } from 'uuid';

const JWT_SECRET = process.env.JWT_SECRET;
import db from "@/db/database";

export async function POST(request) {
  try {
    // Verify authentication
    const cookieStore = cookies();
    const token = cookieStore.get('token');
    
    if (!token) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      );
    }

    const { payload } = await jwtVerify(
      token.value,
      new TextEncoder().encode(JWT_SECRET)
    );

    // Validate input
    const jobData = await request.json();
    if (!jobData.cjobname || !jobData.location || 
        !jobData.job_description || !jobData.offered_price) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create job record
    const rid = uuidv4();
    const timestamp = new Date().toISOString();
    
    db.prepare(
      `INSERT INTO jobs (
        rid, cjobname, location, job_description, 
        offered_price, status, timestamp, username
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
    ).run(
      rid,
      jobData.cjobname,
      jobData.location,
      jobData.job_description,
      jobData.offered_price,
      'open',
      timestamp,
      payload.username
    );

    return NextResponse.json({
      message: "Job created successfully",
      job: {
        rid,
        ...jobData,
        status: 'open',
        timestamp
      }
    });

  } catch (err) {
    return NextResponse.json(
      { error: err.message || "Server error" },
      { status: 500 }
    );
  }
}