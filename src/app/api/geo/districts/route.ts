import { NextRequest, NextResponse } from "next/server";
import { getDistrictsByCityId } from "@/shared/constants/cities";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const cityId = searchParams.get("cityId");

  if (!cityId) {
    return NextResponse.json(
      { status: "error", message: "cityId is required" },
      { status: 400 }
    );
  }

  try {
    const districts = getDistrictsByCityId(cityId);
    return NextResponse.json({
      status: "success",
      data: districts,
    });
  } catch {
    return NextResponse.json(
      { status: "error", message: "Failed to fetch districts" },
      { status: 500 }
    );
  }
}
