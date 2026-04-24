import { useQuery } from "@tanstack/react-query";
export default function useGetDoctors(
  offset: number,
  search_key: string,
  subject_ids: string,
  role_ids: string
) {
  return useQuery({
    queryKey: ["doctors", offset, search_key, subject_ids, role_ids],
    queryFn: async () => {
      const res = await fetch(
        `https://api-v2.medpro.com.vn/mongo/service/doctor/list?offset=${offset}&limit=5&search_key=${search_key}&subject_ids=${subject_ids}&role_ids=${role_ids}`,
        {
          next: { revalidate: 60 * 60 },
        }
      );
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    },
    staleTime: 60 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
}
