export const bookingTreeQueryKeys = {
  all: ["booking-tree"] as const,
  dynamic: (partnerId: string, treeId: string) =>
    [...bookingTreeQueryKeys.all, "dynamic", partnerId, treeId] as const,
};
