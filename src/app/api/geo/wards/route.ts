import { NextRequest, NextResponse } from "next/server";
import { getWardsByDistrictId } from "@/shared/constants/cities";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const districtId = searchParams.get("districtId");

  if (!districtId) {
    return NextResponse.json(
      { status: "error", message: "districtId is required" },
      { status: 400 }
    );
  }

  try {
    const wards = getWardsByDistrictId(districtId);
    return NextResponse.json({
      status: "success",
      data: wards,
    });
  } catch {
    return NextResponse.json(
      { status: "error", message: "Failed to fetch wards" },
      { status: 500 }
    );
  }
}
