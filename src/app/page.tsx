import {
  IconFooterBenhVienMat,
  IconFooterChoRay,
  IconFooterDaLieu,
  IconFooterNhiDong1,
} from '@/assets/icons/footer';
import Image from 'next/image';
import Link from 'next/link';
const hospitals = [
  {
    label: 'Bệnh viện mắt',
    logo: IconFooterBenhVienMat,
    url: '/benh-vien-mat',
  },
  {
    label: 'Bệnh viện da liễu',
    logo: IconFooterDaLieu,
    url: '/benh-vien-da-lieu',
  },
  {
    label: 'Bệnh viện Nhi đồng 1',
    logo: IconFooterNhiDong1,
    url: '/benh-vien-nhi-dong-1',
  },
  {
    label: 'Bệnh viện Chợ Rẫy',
    logo: IconFooterChoRay,
    url: '/benh-vien-cho-ray',
  },
];

export default async function RootPage() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-100'>
      {hospitals.map(hospital => {
        const Logo = hospital.logo;
        return (
          <Link
            key={hospital.label}
            href={hospital.url}
            className='m-4 flex flex-col items-center rounded-lg bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg'
          >
            <Image
              src={Logo}
              alt={hospital.label}
              width={120}
              height={120}
              className='h-20 w-20'
            />
            <span className='text-lg font-semibold text-gray-800'>
              {hospital.label}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
