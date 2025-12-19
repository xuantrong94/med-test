import {
  IconFooterBenhVienMat,
  IconFooterChoRay,
  IconFooterDaLieu,
  IconFooterNhiDong1,
} from '@/assets/icons/footer';
import PARTNERS from '@/shared/constants/partners';

export function getFooterLogo(slug: string) {
  switch (slug) {
    case PARTNERS[0].slug:
      return IconFooterBenhVienMat;
    case PARTNERS[1].slug:
      return IconFooterDaLieu;
    case PARTNERS[2].slug:
      return IconFooterNhiDong1;
    default:
      return IconFooterChoRay;
  }
}
