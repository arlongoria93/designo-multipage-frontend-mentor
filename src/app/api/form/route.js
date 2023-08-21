import { NextResponse } from "next/server";

export async function POST(request) {
  const res = await request.json();
  return NextResponse.json({ res });
}
