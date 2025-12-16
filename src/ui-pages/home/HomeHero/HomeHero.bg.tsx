'use client';
import HomeBanner from '@/assets/images/home/home-banner.webp';
import Image from 'next/image';
export default function HomeHeroBg() {
  return (
    <div className='relative lg:min-h-[720px]'>
      <Image
        src={HomeBanner}
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
