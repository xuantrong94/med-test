import { api } from "@/lib/fetch/client";
import qs from "qs";
import { hospitals } from "../_contents/hospitals";

export const getHospitalInfo = async (partnerId: string) => {
  // const query = qs.stringify({
  //   populate: '*',
  // });
  // const response = await api.get(`/hospitals?${query}`);
  // return response.data;
  return hospitals.find(hospital => hospital._id === partnerId);
};
