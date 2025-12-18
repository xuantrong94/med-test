import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import HomeHero from '@/ui-pages/home/HomeHero';
import Loading from '../loading';

const HomeFeatures = dynamic(
  () => import('@/ui-pages/home/HomeFeatures/index'),
  {
    loading: () => <Loading />,
  }
);
const HomeInfo = dynamic(() => import('@/ui-pages/home/HomeInfo/index'), {
  loading: () => <Loading />,
});
const HomePosts = dynamic(() => import('@/ui-pages/home/HomePosts/index'), {
  loading: () => <Loading />,
});
const HomeSupports = dynamic(
  () => import('@/ui-pages/home/HomeSupports/index'),
  {
    loading: () => <Loading />,
  }
);
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
