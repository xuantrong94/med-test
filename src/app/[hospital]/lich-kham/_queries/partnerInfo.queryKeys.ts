export const partnerInfoQueryKeys = {
  all: ["partner-info"] as const,
  info: (partnerId: string) =>
    [...partnerInfoQueryKeys.all, partnerId] as const,
};
