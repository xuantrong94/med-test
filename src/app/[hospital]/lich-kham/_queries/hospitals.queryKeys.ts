export const hospitalQueryKeys = {
  all: ["hospital"] as const,
  list: (partnerId: string) => [...hospitalQueryKeys.all, partnerId] as const,
};
