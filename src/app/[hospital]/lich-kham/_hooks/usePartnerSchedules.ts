import { usePartnerScheduleQuery } from "../_queries/usePartnerScheduleQuery";

export const usePartnerSchedules = (queries: {
  startDate: string;
  endDate: string;
  partnerId: string;
  subjectId: string;
  featureId: string;
}) => {
  const { data, isLoading, error } = usePartnerScheduleQuery(queries);

  if (isLoading) {
    return { data: undefined, isLoading: true, error: null };
  }

  if (error) {
    console.error("Error fetching partner schedules:", error);
  }

  if (!data) {
    console.error("No data received from partner schedules query");
    return {
      data: { subjects: [], schedules: [] },
      isLoading: false,
      error: null,
    };
  }
  return { data, isLoading, error };
};
