import Image, { StaticImageData } from 'next/image';

type HeroProps = {
  title: string;
  desc?: string;
  img: StaticImageData;
};

export default function Hero({ title, desc, img }: Readonly<HeroProps>) {
  return (
    <div className='relative hidden h-[400px] items-center justify-center lg:flex'>
      <div className='relative z-2 flex translate-y-10 flex-col items-center justify-center text-white'>
        <h1 className='relative text-center text-4xl font-bold uppercase after:absolute after:-bottom-2 after:left-0 after:h-0.75 after:w-full after:bg-green-400 after:content-[""] lg:block'>
          {title}
        </h1>
        {desc && (
          <p className='relative z-2 mt-4 text-center text-lg text-white lg:block'>
            {desc}
          </p>
        )}
      </div>

      <Image
        src={img}
        alt={title}
        fill
        fetchPriority='high'
        quality={100}
        blurDataURL={img.blurDataURL}
        placeholder='blur'
        className='w-full object-cover'
      />
    </div>
  );
}
