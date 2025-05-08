// Next.js server utilities
import { NextResponse } from "next/server";
// Cookie handling
import { cookies } from "next/headers";
// JWT verification library (safer alternative to jsonwebtoken)
import { jwtVerify } from "jose";
// Database connection
import db from "@/db/database";
// UUID generation for unique IDs
import { v4 as uuidv4 } from 'uuid';

const JWT_SECRET = process.env.JWT_SECRET;
import db from "@/db/database";

export async function POST(request) {
    try {
      // Authentication verification
      const cookieStore = cookies();
      const token = cookieStore.get('token');
      
      if (!token) {
        return NextResponse.json(
          { error: 'Not authenticated' },
          { status: 401 }
        );
      }
  
      // Verify JWT token using jose library
      const { payload } = await jwtVerify(
        token.value,
        new TextEncoder().encode(JWT_SECRET)
      );
  
      // Request validation
      const jobData = await request.json();
      if (!jobData.cjobname || !jobData.location || 
          !jobData.job_description || !jobData.offered_price) {
        return NextResponse.json(
          { error: "Missing required fields" },
          { status: 400 }
        );
      }
  
      // Database operation
      const rid = uuidv4(); // Generate unique ID
      const timestamp = new Date().toISOString(); // Current timestamp
      
      // SQLite prepared statement for safe insertion
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
        'open', // Default status
        timestamp,
        payload.username // From JWT payload
      );
  
      // Success response
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
      // Error handling
      return NextResponse.json(
        { error: err.message || "Server error" },
        { status: 500 }
      );
    }
  }