import PARTNERS from '@/shared/constants/partners';

const getPartnerId = (hospitalSlug: string) => {
  const partner = PARTNERS.find(partner => partner.slug === hospitalSlug);
  return partner ? partner.keyword : null;
};

export default getPartnerId;
