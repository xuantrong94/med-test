import GioiThieuHeroImg from '@/assets/images/gioi-thieu/hero.jpg';
import Image from 'next/image';
export default function Hero() {
  return (
    <div className='relative hidden h-[400px] items-center justify-center lg:flex'>
      <h1 className='relative z-2 hidden translate-y-10 text-center text-4xl font-bold text-white uppercase after:absolute after:-bottom-2 after:left-0 after:h-0.75 after:w-full after:bg-green-400 after:content-[""] lg:block'>
        Giới thiệu
      </h1>
      <Image
        src={GioiThieuHeroImg}
        alt='Gioi Thieu Hero'
        fill
        fetchPriority='high'
        quality={100}
        blurDataURL={GioiThieuHeroImg.blurDataURL}
        placeholder='blur'
        className='w-full object-cover'
      />
    </div>
  );
}
