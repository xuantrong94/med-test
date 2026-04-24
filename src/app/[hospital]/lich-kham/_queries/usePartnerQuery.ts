import { useQuery } from "@tanstack/react-query";
import { getPartnerInfo } from "@/shared/api/getPartnerInfo.api";
import { partnerInfoQueryKeys } from "./partnerInfo.queryKeys";

export const usePartnerInfoQuery = (partnerId: string) => {
  return useQuery({
    queryKey: partnerInfoQueryKeys.info(partnerId),
    queryFn: () => getPartnerInfo(partnerId),
  });
};
