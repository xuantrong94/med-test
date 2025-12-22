'use client';
import { usePathname } from 'next/navigation';

export default function useGetPartnerSlug() {
  const pathname = usePathname();
  const segments = pathname.split('/');
  if (segments.length < 2) return '';
  return segments[1];
}
