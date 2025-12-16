import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Loading from './loading';
import HomeHero from '@/ui-pages/home/HomeHero';

const HomeFeatures = dynamic(() => import('@/ui-pages/home/HomeFeatures'), {
  loading: () => <Loading />,
});
const HomeInfo = dynamic(() => import('@/ui-pages/home/HomeInfo'), {
  loading: () => <Loading />,
});
const HomePosts = dynamic(() => import('@/ui-pages/home/HomePosts'), {
  loading: () => <Loading />,
});
const HomeSupports = dynamic(() => import('@/ui-pages/home/HomeSupports'), {
  loading: () => <Loading />,
});
export default async function Home() {
  return (
    <div className=''>
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
