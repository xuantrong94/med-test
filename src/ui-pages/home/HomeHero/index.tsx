import { FeatureItem } from '@/shared/endpoints/partner-feature.endpoint';
import HomeHeroBg from './HomeHero.bg';
import HomeHeroFeatures from './HomeHero.features';
import { StaticImageData } from 'next/image';

function HomeHero({
  featuresData,
  banner,
}: Readonly<{ featuresData?: FeatureItem[]; banner?: StaticImageData }>) {
  return (
    <section className='relative mt-15 w-full lg:mt-30 lg:min-h-fit'>
      <HomeHeroBg banner={banner} />
      <HomeHeroFeatures featuresData={featuresData} />
    </section>
  );
}
export default HomeHero;
