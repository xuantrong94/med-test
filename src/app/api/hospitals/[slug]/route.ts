import { NextRequest, NextResponse } from "next/server";
import { api } from "@/lib/fetch/client";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  try {
    // Search for the hospital by slug using the Medpro Search API
    const response = await api.search<any[]>({
      search_key: slug,
      category: "partner",
      limit: 10,
    });

    if (!response || !Array.isArray(response)) {
      return NextResponse.json(
        { status: "error", message: "Hospital not found" },
        { status: 404 }
      );
    }

    const partnerCategory = response.find(cat => cat.category === "partner");
    const hospital = partnerCategory?.results?.find(
      (h: any) => h.partner?.slug === slug || h.slug === slug
    );

    if (!hospital) {
      return NextResponse.json(
        { status: "error", message: "Hospital not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      status: "success",
      data: hospital,
    });
  } catch (error) {
    console.error("Hospital Detail API Error:", error);
    return NextResponse.json(
      {
        status: "error",
        message: "Failed to fetch hospital detail from Medpro API",
      },
      { status: 500 }
    );
  }
}
