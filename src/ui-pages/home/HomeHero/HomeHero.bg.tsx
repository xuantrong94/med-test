'use client';
import HomeBanner from '@/assets/images/home/bvmathcm-home-banner.webp';
import Image, { StaticImageData } from 'next/image';

export default function HomeHeroBg({
  banner,
}: Readonly<{ banner?: StaticImageData }>) {
  return (
    <div className='relative lg:min-h-[720px]'>
      <Image
        src={banner || HomeBanner}
        alt='Hero Background'
        className='w-full object-cover lg:max-h-[720px]'
        fetchPriority='high'
        quality={100}
        blurDataURL={HomeBanner.blurDataURL}
        placeholder='blur'
      />
    </div>
  );
}
