'use client';
import HomeBanner from '@/assets/images/home/home-banner.webp';
import Image from 'next/image';
export default function HomeHeroBg() {
  return (
    <div className='relative lg:min-h-[640px]'>
      <Image
        src={HomeBanner}
        alt='Hero Background'
        className='w-full object-cover lg:max-h-[640px]'
        fetchPriority='high'
        blurDataURL={HomeBanner.blurDataURL}
        placeholder='blur'
      />
    </div>
  );
}
