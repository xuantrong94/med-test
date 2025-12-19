import {
  IconLogoBvmathcm,
  IconLogoChoray,
  IconLogoDaLieuHcm,
  IconLogoNhidong1,
} from '@/assets/icons/header';
import PARTNERS from '@/shared/constants/partners';
export function getHeaderLogo(slug: string) {
  switch (slug) {
    case PARTNERS[0].slug:
      return IconLogoBvmathcm;
    case PARTNERS[1].slug:
      return IconLogoDaLieuHcm;
    case PARTNERS[2].slug:
      return IconLogoNhidong1;
    default:
      return IconLogoChoray;
  }
}
