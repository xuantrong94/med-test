import Image from 'next/image';
import LienHeHeroImg from '@/assets/images/lien-he/hero.jpg';
import { officeInfo } from './data';
import Link from 'next/link';
export default function LienHeHero() {
  return (
    <div className='relative mt-15 hidden flex-col items-center py-10 md:py-12 lg:mt-30 lg:flex lg:pb-25'>
      <div className='relative z-2 flex flex-col items-center justify-center text-white'>
        <h1 className='relative text-center text-4xl font-bold uppercase after:absolute after:-bottom-2 after:left-0 after:h-0.75 after:w-full after:bg-green-400 after:content-[""] lg:block'>
          Liên hệ với chúng tôi
        </h1>

        <p className='relative z-2 mt-6 mb-4 max-w-2xl text-center text-lg text-pretty text-white md:mb-6 lg:block'>
          Bạn đang quan tâm đến các dịch vụ của chúng tôi hoặc cần tư vấn! Chúng
          tôi luôn sẵn sàng giúp đỡ bạn
        </p>
      </div>

      <div className='relative z-2 container grid max-w-5xl grid-cols-1 gap-y-4 md:grid-cols-3 md:gap-x-6'>
        {officeInfo.map((office, index) => (
          <div
            key={index}
            className='rounded-md bg-white p-4 text-center md:px-4 md:py-8'
          >
            <p className='mb-1.5 text-lg font-semibold md:mb-3 md:text-xl lg:text-2xl'>
              {office.title}
            </p>
            <p className='text-sm md:text-base'>{office.desc}</p>
            {office.time && (
              <p className='mt-2 text-sm text-gray-600 md:text-base'>
                {office.time}
              </p>
            )}
            <div className='mt-4 flex flex-col items-center gap-y-4'>
              {office.icons?.map(icon => (
                <Link
                  key={icon.url}
                  href={icon.url}
                >
                  {icon.icon}
                </Link>
              ))}
            </div>
            {office.isInTime !== undefined && (
              <p
                className={`mt-4 font-semibold md:text-base ${
                  office.isInTime ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {office.isInTime
                  ? 'Đang trong giờ hành chính'
                  : 'Ngoài giờ làm việc'}
              </p>
            )}
          </div>
        ))}
      </div>

      <Image
        src={LienHeHeroImg}
        alt={'Liên hệ với chúng tôi'}
        fill
        fetchPriority='high'
        quality={100}
        blurDataURL={LienHeHeroImg.blurDataURL}
        placeholder='blur'
        className='w-full object-cover'
      />
    </div>
  );
}
