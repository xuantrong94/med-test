
type ResultCta = {
  name: string;
  partnerId: string;
  treeId: string;
  subjectId: string;
  serviceId: string | null;
  doctorId: string | null;
  roomId: string | null;
};

/**
 * Generates the legacy booking URL for a hospital.
 * @param cta The CTA data from the specialty result
 * @param searchKey The specialty name/search key
 * @returns Fully qualified booking URL
 */
export const navigateToHospital = (cta: ResultCta, searchKey: string) => {
  return `https://medpro.vn/chon-lich-kham?feature=booking.${cta.treeId}&partnerId=${cta.partnerId}&bookingPage=/tim-kiem?kw=${searchKey}&tab=subject`;
};
