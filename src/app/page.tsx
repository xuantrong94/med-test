import HomeInfo from '@/ui-pages/home/HomeInfo';
import HomePosts from '@/ui-pages/home/HomePosts';
import { Suspense } from 'react';
import Loading from './loading';
import HomeHero from '@/ui-pages/home/HomeHero';
import HomeFeatures from '@/ui-pages/home/HomeFeatures';
import HomeSupports from '@/ui-pages/home/HomeSupports';
export default async function Home() {
  return (
    <div className='lg:pt-30'>
      <HomeHero />
      <HomeFeatures />
      <HomeInfo />
      <Suspense fallback={<Loading />}>
        <HomePosts />
      </Suspense>
      <HomeSupports />
    </div>
  );
}
