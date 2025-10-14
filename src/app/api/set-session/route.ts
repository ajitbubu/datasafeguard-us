import { NextResponse } from "next/server";

export async function GET() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set({
    name: "ds_session",
    value: crypto.randomUUID(),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // ensure HTTPS in production
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24, // 1 day
  });
  return res;
}
