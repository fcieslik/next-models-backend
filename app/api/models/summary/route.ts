import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const dupa = process.env.DUPA_API_KEY;
  return NextResponse.json({ message: `Hello world!!! -> ${dupa}` });
}
