import { useMemo } from 'react';
import useGetPartnerSlug from '@/hooks/useGetPartnerSlug';
import getPartnerId from '@/utils/getPartnertId';

/**
 * Custom hook to get login redirect URL
 * @returns string - The complete redirect URL for login
 */
export const useGetLoginRedirectTo = () => {
  const partnerSlug = useGetPartnerSlug();

  const redirectTo = useMemo(() => {
    const urlLogin = 'https://id-v121.medpro.com.vn/check-phone';
    const url = `localhost:3000/${partnerSlug}`;
    const partnerId = getPartnerId(partnerSlug);

    return `${urlLogin}/url=${url}&partnerId=${partnerId}`;
  }, [partnerSlug]);

  return redirectTo;
};

export default useGetLoginRedirectTo;
