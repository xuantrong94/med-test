// https://api-v2.medpro.com.vn/mongo/service/doctor?slug=bac-si-vu-thi-thu

import { api } from "@/lib/fetch/client";
import { Doctor } from "@/types/doctor";

export const getDoctorDetail = async ({ slug }: { slug: string }) => {
  const response = await api.get(
    `https://api-v2.medpro.com.vn/mongo/service/doctor?slug=${slug}`,
    { caller: "getDoctorDetail" }
  );
  return response as unknown as Doctor;
};
