'use client';
import { usePathname } from 'next/navigation';

export default function useGetPartnerSlug() {
  // /benh-vien-mat/gioi-thieu
  // /benh-vien-mat
  // get "benh-vien-mat"
  const pathname = usePathname();
  const segments = pathname.split('/');
  if (segments.length < 2) return '';
  return segments[1];
}
