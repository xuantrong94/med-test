import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HomeBanner from '@/assets/images/home/home-banner.webp';
import featuresData from '@/data/features';

function HomeHero() {
  return (
    <section className='relative w-full lg:min-h-[640px]'>
      <div className='relative top-0 left-0 h-full w-full lg:absolute'>
        <Image
          src={HomeBanner}
          alt='Hero Background'
          className='max-h-[640px] w-full object-cover'
          priority
          fill={false}
          blurDataURL={HomeBanner.blurDataURL}
          placeholder='blur'
        />
      </div>
      <div className='container mx-auto flex h-full max-w-[1200px] items-center justify-center px-4 lg:items-end lg:justify-end lg:pb-20'>
        <div className='z-10 flex h-fit flex-col items-center rounded-lg bg-white/90 p-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)] backdrop-blur-[4px]'>
          <h3 className='text-text-primary py-5 pb-8 text-xl font-normal uppercase lg:text-2xl'>
            Chọn dịch vụ
          </h3>
          <ul className='grid max-w-[440px] grid-cols-3'>
            {featuresData &&
              featuresData.length > 0 &&
              featuresData.map(item => (
                <li
                  key={item._id}
                  className='flex flex-col items-center p-3 text-center text-sm lg:text-base'
                >
                  <Link
                    href={
                      item.customURLTarget
                        ? item.customURLTarget
                        : `/features/${item.slug}`
                    }
                    title={item.name}
                    className='group flex flex-col items-center gap-2 text-inherit no-underline'
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      className='h-8 w-8 lg:h-10 lg:w-10 xl:h-14 xl:w-14'
                      width={48}
                      height={48}
                    />
                    <p className='group-hover:text-primary transition-colors duration-200'>
                      {item.name}
                    </p>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
export default HomeHero;
