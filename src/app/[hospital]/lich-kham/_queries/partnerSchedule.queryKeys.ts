export const partnerScheduleQueryKeys = {
  all: ["partnerSchedule"] as const,
  list: (queries: {
    startDate: string;
    endDate: string;
    partnerId: string;
    subjectId: string;
    featureId: string;
  }) => [...partnerScheduleQueryKeys.all, queries],
};
