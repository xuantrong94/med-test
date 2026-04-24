import { partnerScheduleQueryKeys } from "./partnerSchedule.queryKeys";
import { useQuery } from "@tanstack/react-query";
import { getPartnerSchedules } from "../_api/getPartnerSchedules.api";
export const usePartnerScheduleQuery = (queries: {
  startDate: string;
  endDate: string;
  partnerId: string;
  subjectId: string;
  featureId: string;
}) => {
  return useQuery({
    queryKey: partnerScheduleQueryKeys.list(queries),
    // queryFn: () => getPartnerSchedules(queries),
  });
};
