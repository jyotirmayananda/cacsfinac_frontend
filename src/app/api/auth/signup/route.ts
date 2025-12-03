import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
  try {
    const { fullName, email, password } = await req.json();

    const client = await clientPromise;
    const db = client.db();

    // Check if user already exists
    const existingUser = await db.collection("users").findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists." },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user
    await db.collection("users").insertOne({
      fullName,
      email,
      password: hashedPassword,
      createdAt: new Date(),
    });

    // Send welcome email
    const emailSubject = "Welcome to CACS";
    const emailMessage = `
      <h1>Welcome, ${fullName}!</h1>
      <p>Thank you for signing up. We are excited to have you on board.</p>
    `;

    await fetch(new URL("/api/send-email", req.url), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: fullName,
        email: email,
        subject: emailSubject,
        message: emailMessage,
      }),
    });

    return NextResponse.json(
      { message: "User created successfully." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { message: "An error occurred during signup." },
      { status: 500 }
    );
  }
}
