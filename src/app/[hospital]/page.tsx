import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import HomeHero from '@/ui-pages/home/HomeHero';
import Loading from '../loading';
import { getListPartnerFeatures } from '@/shared/endpoints/partner-feature.endpoint';
import PARTNERS from '@/shared/constants/partners';
import { getPosts } from '@/shared/endpoints/post.endpoint';
import { getPartnerConfig } from '@/shared/endpoints/partner-domain.endpoint';
const med = 'https://medpro.vn/';

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
    notFound();
  }

  const [featuresData, posts] = await Promise.all([
    getListPartnerFeatures(partner.keyword),
    getPosts(partner.keyword),
  ]);

  // mvmathcm
  // 'dat-kham-theo-ngay', -> chon-chuyen-khoa
  // 'dat-kham-theo-bac-si', -> chon-bac-si
  // 'dat-tai-kham-phaco-cuom-kho', -> chon-chuyen-khoa
  // 'dat-lich-theo-hen-tai-kham',-> chon-chuyen-khoa
  // 'do-khuc-xa-kham-mo-can'); -> chon-dich-vu

  // dalieuhcm
  // dat-kham -> chon-chuyen-khoa
  // dat-kham-ngoai-gio -> chon-chuyen-khoa

  // nhidong1
  // 'dat-kham', -> chon-chuyen-khoa
  // 'dat-lich-tiem-chung'-> chon-chuyen-khoa,
  // 'sieu-am-tien-san', -> chon-chuyen-khoa
  // 'dat-kham-ngoai-gio', -> chon-chuyen-khoa
  // 'dat-kham-chuyen-gia' -> chon-chuyen-khoa - thong bao

  // choray
  // 'thanh-toan-vien-phi', -> tim-ma-thanh-toan-vien-phi
  // 'lich-su-thanh-toan-vien-phi', -> dang-nhapzzz
  // 'hoa-don-dien-tu', -> dang-nhapzzz
  // 'dat-kham-theo-chuyen-khoa' -> chon-chuyen-khoa;

  // Configuration map for slug transformations
  const SLUG_MAPPINGS: Record<string, Record<string, string>> = {
    bvmathcm: {
      'dat-kham-theo-ngay': 'chon-chuyen-khoa',
      'dat-kham-theo-bac-si': 'chon-bac-si',
      'dat-tai-kham-phaco-cuom-kho': 'chon-chuyen-khoa',
      'dat-lich-theo-hen-tai-kham': 'chon-chuyen-khoa',
      'do-khuc-xa-kham-mo-can': 'chon-dich-vu',
    },
    dalieuhcm: {
      'dat-kham': 'chon-chuyen-khoa',
      'dat-kham-ngoai-gio': 'chon-chuyen-khoa',
    },
    nhidong1: {
      'dat-kham': 'chon-chuyen-khoa',
      'dat-lich-tiem-chung': 'chon-chuyen-khoa',
      'sieu-am-tien-san': 'chon-chuyen-khoa',
      'dat-kham-ngoai-gio': 'chon-chuyen-khoa',
      'dat-kham-chuyen-gia': 'chon-chuyen-khoa',
    },
    choray: {
      'thanh-toan-vien-phi': 'tim-ma-thanh-toan-vien-phi',
      'lich-su-thanh-toan-vien-phi': 'dang-nhapzzz',
      'hoa-don-dien-tu': 'dang-nhapzzz',
      'dat-kham-theo-chuyen-khoa': 'chon-chuyen-khoa',
    },
  };

  const updatedFeaturesData = featuresData.map(item => {
    const partnerMappings = SLUG_MAPPINGS[partner.keyword];
    const newSlugPath = partnerMappings?.[item.slug];

    const updatedSlug = newSlugPath
      ? `${med}${hospital}/${newSlugPath}`
      : item.slug;

    return {
      ...item,
      slug: updatedSlug,
    };
  });

  return (
    <div className=''>
      <HomeHero
        featuresData={updatedFeaturesData}
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
