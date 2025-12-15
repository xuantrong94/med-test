import HomeInfo from '@/pages/home/HomeInfo';
import HomePosts from '@/pages/home/HomePosts';
import { Suspense } from 'react';
import Loading from './loading';
import HomeHero from '@/pages/home/HomeHero';
import HomeFeatures from '@/pages/home/HomeFeatures';
import HomeSupports from '@/pages/home/HomeSupports';
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
