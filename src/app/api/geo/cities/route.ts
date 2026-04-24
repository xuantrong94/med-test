import { NextResponse } from "next/server";
import { CITIES } from "@/shared/constants/cities";

export async function GET() {
  try {
    return NextResponse.json({
      status: "success",
      data: CITIES,
    });
  } catch {
    return NextResponse.json(
      { status: "error", message: "Failed to fetch cities" },
      { status: 500 }
    );
  }
}
