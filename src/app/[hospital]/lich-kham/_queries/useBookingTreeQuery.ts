import { useQuery } from "@tanstack/react-query";
import { bookingTreeQueryKeys } from "./bookingTree.queryKeys";
import { searchBookingTreeDynamic } from "../_api/searchBookingTreeDynamic";

export const useBookingTreeQuery = (partnerId: string, treeId: string) => {
  return useQuery({
    queryKey: bookingTreeQueryKeys.dynamic(partnerId, treeId),
    queryFn: () => searchBookingTreeDynamic(partnerId, treeId),
  });
};
