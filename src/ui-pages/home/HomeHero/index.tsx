import { FeatureItem } from '@/shared/endpoints/partner-feature.endpoint';
import HomeHeroBg from './HomeHero.bg';
import HomeHeroFeatures from './HomeHero.features';

function HomeHero({
  featuresData,
}: Readonly<{ featuresData?: FeatureItem[] }>) {
  return (
    <section className='relative w-full lg:min-h-fit'>
      <HomeHeroBg />
      <HomeHeroFeatures featuresData={featuresData} />
    </section>
  );
}
export default HomeHero;
