import { NextRequest, NextResponse } from "next/server";
// import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  return NextResponse.json({
    success: true,
    message: "Email functionality is temporarily disabled.",
  });
  // const { name, email, message, subject } = await req.json();

  // const transporter = nodemailer.createTransport({
  //   service: 'gmail',
  //   auth: {
  //     user: process.env.EMAIL_USER,
  //     pass: process.env.EMAIL_PASS,
  //   },
  // });

  // const mailOptions = {
  //   from: process.env.EMAIL_USER,
  //   to: email,
  //   subject: subject,
  //   html: `<p>${message}</p>`,
  // };

  // try {
  //   await transporter.sendMail(mailOptions);
  //   return NextResponse.json({ success: true });
  // } catch (error) {
  //   console.error(error);
  //   return NextResponse.json({ success: false, error: 'Error sending email' });
  // }
}
