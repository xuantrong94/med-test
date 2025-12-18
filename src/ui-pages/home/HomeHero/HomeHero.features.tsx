import Link from 'next/link';
import Image from 'next/image';
import { Suspense } from 'react';
import Loading from '@/app/loading';
import { getListPartnerFeatures } from '@/shared/endpoints/partner-feature.endpint';
export default async function HomeHeroFeatures() {
  const featuresData = await getListPartnerFeatures();
  return (
    <div className='container mx-auto flex h-full max-w-[1200px] items-center justify-center px-4 lg:absolute lg:bottom-5 lg:left-1/2 lg:-translate-x-1/2 lg:items-end lg:justify-end'>
      <div className='z-10 flex h-fit flex-col items-center rounded-lg bg-white/90 p-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)] backdrop-blur-xs'>
        <h3 className='text-text-primary py-5 pb-8 text-xl font-normal uppercase lg:text-2xl'>
          Chọn dịch vụ
        </h3>
        <Suspense fallback={<Loading />}>
          <ul className='grid grid-cols-3 lg:max-w-[400px]'>
            {featuresData &&
              featuresData.length > 0 &&
              featuresData.map(item => (
                <li
                  key={item._id}
                  className='flex flex-col items-center p-3 text-center text-sm font-semibold'
                >
                  <Link
                    href={
                      item.customURLTarget
                        ? item.customURLTarget
                        : `/features/${item.slug}`
                    }
                    title={item.name}
                    className='group flex flex-col items-center gap-2 text-pretty text-inherit no-underline'
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      className='h-8 w-8 lg:h-10 lg:w-10'
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
        </Suspense>
      </div>
    </div>
  );
}
