import { useQuery } from "@tanstack/react-query";
import { hospitalQueryKeys } from "./hospitals.queryKeys";
import { getHospitalInfo } from "../_api/getHospitalsInfo.api";
export const useHospitalQuery = (partnerId: string) => {
  return useQuery({
    queryKey: hospitalQueryKeys.list(partnerId),
    queryFn: () => getHospitalInfo(partnerId),
  });
};
