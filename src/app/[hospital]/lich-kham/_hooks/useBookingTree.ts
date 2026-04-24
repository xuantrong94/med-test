import { useBookingTreeQuery } from "../_queries/useBookingTreeQuery";

export const useBookingTree = (partnerId: string, treeId: string) => {
  const { data, isLoading, error } = useBookingTreeQuery(partnerId, treeId);
  const subjects =
    data?.child
      ?.map(item => {
        return {
          name: item?.detail?.name ?? "",
          id: item?.detail?.id ?? "",
          bookingNote: item?.detail?.bookingNote ?? "",
        };
      })
      ?.filter(
        item => item.name !== "" && item.id !== "" && item.bookingNote !== ""
      ) ?? [];
  return { data, isLoading, error, subjects };
};
