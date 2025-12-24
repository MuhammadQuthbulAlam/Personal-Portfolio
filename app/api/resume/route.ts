import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    name: "Muhammad Quthbul Alam",
    role: "Fullstack Software Engineer",
    skills: ["Next.js", "React", "Node.js", "Python"],
  });
}
