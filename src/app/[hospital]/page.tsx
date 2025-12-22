import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import HomeHero from '@/ui-pages/home/HomeHero';
import Loading from '../loading';
import { getListPartnerFeatures } from '@/shared/endpoints/partner-feature.endpoint';
import PARTNERS from '@/shared/constants/partners';
import { getPosts } from '@/shared/endpoints/post.endpoint';
import { getPartnerConfig } from '@/shared/endpoints/partner-domain.endpoint';

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ hospital: string }>;
}) {
  const { hospital } = await params;
  const partner = PARTNERS.find(item => item.slug === hospital);

  if (!partner) {
    return {
      title: 'Partner not found',
      description: 'Partner not found',
    };
  }

  const partnerConfig = await getPartnerConfig(partner.slug);
  return {
    title: partnerConfig.seo_title,
    description: partnerConfig.seo_description,
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ hospital: string }>;
}) {
  const { hospital } = await params;
  const partner = PARTNERS.find(item => item.slug === hospital);

  if (!partner) {
    return <div>Partner not found</div>;
  }

  const [featuresData, posts] = await Promise.all([
    getListPartnerFeatures(partner.keyword),
    getPosts(partner.keyword),
  ]);

  return (
    <div className=''>
      <HomeHero
        featuresData={featuresData}
        banner={partner.banner}
      />
      <HomeFeatures />
      <HomeInfo keyword={partner.keyword} />
      <Suspense fallback={<Loading />}>
        <HomePosts
          posts={posts}
          hospital={hospital}
        />
      </Suspense>
      <HomeSupports />
    </div>
  );
}
