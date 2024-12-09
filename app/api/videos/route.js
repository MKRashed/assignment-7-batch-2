import { NextResponse } from "next/server";
const videos = () => import("@/data/videos.json").then((res) => res.default);

export async function GET() {
  const data = await videos();
  return NextResponse.json(data);
}
