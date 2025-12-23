import Image from 'next/image';
import HomeLine from '@/assets/images/home/line.png';
import InfoItem from './InfoItem';
import HOME_INFO from '@/shared/static-content/home/home-info';

async function HomeInfo({ keyword }: Readonly<{ keyword: string }>) {
  const { LEFT: leftInfoItems, RIGHT: rightInfoItems } = HOME_INFO.ITEMS;
  const { CENTER_IMAGE_URL } = HOME_INFO;
  return (
    <section className='relative container mx-auto flex max-w-[1200px] flex-col justify-center gap-6 px-4 pb-10 md:flex-row md:items-center md:pb-14 lg:pb-20'>
      <Image
        src={HomeLine}
        alt='home-line'
        width={792}
        height={433}
        className='absolute top-1/2 left-1/2 z-[-1] -translate-x-1/2 -translate-y-1/2'
      />

      {/* list 1 */}
      <div className='flex flex-1 flex-col gap-4 md:items-end'>
        {leftInfoItems.map(item => (
          <InfoItem
            key={item.id}
            {...item}
            reverse
          />
        ))}
      </div>

      <Image
        src={
          CENTER_IMAGE_URL[keyword as keyof typeof CENTER_IMAGE_URL] ||
          CENTER_IMAGE_URL['bvmathcm']
        }
        alt='info-center'
        width={512}
        height={876}
        className='hidden h-auto w-auto shrink-0 md:block md:w-[250px] lg:w-[350px]'
        overrideSrc={
          CENTER_IMAGE_URL[keyword as keyof typeof CENTER_IMAGE_URL] ||
          CENTER_IMAGE_URL['bvmathcm']
        }
      />

      {/* list 2 */}
      <div className='flex flex-1 flex-col gap-4'>
        {rightInfoItems.map(item => (
          <InfoItem
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </section>
  );
}

export default HomeInfo;
