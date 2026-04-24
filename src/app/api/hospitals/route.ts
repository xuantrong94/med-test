import { NextRequest, NextResponse } from "next/server";
import { api } from "@/lib/fetch/client";
import { ResultItem } from "@/types/result.item";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const cityId = searchParams.get("cityId");
  const districtId = searchParams.get("districtId");
  const limit = parseInt(searchParams.get("limit") || "20");
  const offset = parseInt(searchParams.get("offset") || "0");
  const searchKey = searchParams.get("searchKey") || "";

  try {
    // Fetch hospitals from Medpro Search API
    const response = await api.search<any[]>({
      search_key: searchKey,
      category: "partner",
      limit: 300, // Fetch a large batch to filter locally or use API filters if available
    });

    if (!response || !Array.isArray(response)) {
      return NextResponse.json({ status: "success", total: 0, data: [] });
    }

    const partnerCategory = response.find(cat => cat.category === "partner");
    let results: ResultItem[] = partnerCategory?.results || [];

    // Filter by city and district if provided
    if (cityId) {
      results = results.filter(item => item.partner?.city_id === cityId);
    }
    if (districtId) {
      results = results.filter(
        item => item.partner?.district_id === districtId
      );
    }

    const total = results.length;
    const paginatedData = results.slice(offset, offset + limit);

    return NextResponse.json({
      status: "success",
      total,
      data: paginatedData,
    });
  } catch (error) {
    console.error("Hospitals API Error:", error);
    return NextResponse.json(
      { status: "error", message: "Failed to fetch hospitals from Medpro API" },
      { status: 500 }
    );
  }
}
