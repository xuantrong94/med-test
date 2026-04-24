import { api } from "@/lib/fetch/client";
import { BookingTreeDynamic } from "../_types";
import { cache } from "react";

export const searchBookingTreeDynamic = cache(
  async (
    partnerId: string,
    treeId?: string,
    doctorId?: string,
    options: { caller?: string } = {}
  ): Promise<BookingTreeDynamic> => {
    const caller = options.caller || "searchBookingTreeDynamic";
    return api.post<BookingTreeDynamic>(
      "https://api-v2.medpro.com.vn/his-gateway/booking-tree-dynamic",
      { treeId, doctorId },
      {
        caller,
        headers: {
          partnerId,
        },
      }
    );
  }
);
