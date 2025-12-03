import { NextRequest, NextResponse } from "next/server";
// import clientPromise from '@/lib/mongodb';
import crypto from "crypto";

export async function POST(req: NextRequest) {
  try {
    return NextResponse.json(
      {
        message:
          "If an account with that email exists, a password reset link has been sent.",
      },
      { status: 200 }
    );
    // const { email } = await req.json();

    // const client = await clientPromise;
    // const db = client.db();

    // const user = await db.collection('users').findOne({ email });

    // if (user) {
    //   const resetToken = crypto.randomBytes(32).toString('hex');
    //   const passwordResetToken = crypto
    //     .createHash('sha256')
    //     .update(resetToken)
    //     .digest('hex');

    //   const passwordResetExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    //   await db.collection('users').updateOne(
    //     { _id: user._id },
    //     {
    //       $set: {
    //         passwordResetToken,
    //         passwordResetExpires,
    //       },
    //     }
    //   );

    //   const resetURL = `${req.nextUrl.origin}/reset-password?token=${resetToken}`;

    //   const emailSubject = 'Your Password Reset Request';
    //   const emailMessage = `
    //     <h1>Hi, ${user.fullName}!</h1>
    //     <p>You requested a password reset. Click the link below to reset your password:</p>
    //     <a href="${resetURL}">Reset Password</a>
    //     <p>This link will expire in 10 minutes.</p>
    //     <p>If you did not request a password reset, please ignore this email.</p>
    //   `;

    //   await fetch(new URL('/api/send-email', req.url), {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       name: user.fullName,
    //       email: user.email,
    //       subject: emailSubject,
    //       message: emailMessage,
    //     }),
    //   });
    // }

    // // Always return a success message to prevent email enumeration
    // return NextResponse.json({ message: 'If an account with that email exists, a password reset link has been sent.' }, { status: 200 });
  } catch (error) {
    console.error("Forgot password error:", error);
    return NextResponse.json(
      { message: "An error occurred." },
      { status: 500 }
    );
  }
}
