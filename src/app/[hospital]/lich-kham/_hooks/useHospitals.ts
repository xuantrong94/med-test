import { useHospitalQuery } from "../_queries/useHospitalsQuery";

export const useHospital = (partnerId: string) => {
  const { data: hospital, isLoading, error } = useHospitalQuery(partnerId);
  return { hospital, isLoading, error };
};
