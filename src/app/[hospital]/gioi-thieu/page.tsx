import { notFound } from 'next/navigation';
import Hero from '@/components/layouts/static-page/Hero';
import Layout from '@/components/layouts/static-page/Layout';
import GioiThieuHeroImg from '@/assets/images/gioi-thieu/hero.jpg';
import Content from '@/components/layouts/static-page/Content';
import GioiThieuContent from '@/ui-pages/gioi-thieu/Content';
import PARTNERS from '@/shared/constants/partners';

export default async function GioiThieu({
  params,
}: {
  params: Promise<{ hospital: string }>;
}) {
  const { hospital } = await params;
  const partner = PARTNERS.find(item => item.slug === hospital);
  if (!partner) {
    notFound();
  }
  const partnerGioiThieuContent = partner.gioithieuContent;
  return (
    <Layout
      hero={
        <Hero
          title='Giới thiệu'
          img={GioiThieuHeroImg}
        />
      }
      content={
        <Content>
          <GioiThieuContent partner={partnerGioiThieuContent} />
        </Content>
      }
    />
  );
}
