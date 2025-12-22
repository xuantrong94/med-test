import Layout from '@/components/layouts/static-page/Layout';
import QuyTrinhHeroImg from '@/assets/images/quy-trinh/hero.jpg';
import Hero from '@/components/layouts/static-page/Hero';
import Content from '@/components/layouts/static-page/Content';
import GioiThieuContent from '@/ui-pages/quy-trinh/Content';
import PARTNERS from '@/shared/constants/partners';
export default async function QuyTrinhPage({
  params,
}: {
  params: Promise<{ hospital: string }>;
}) {
  const { hospital } = await params;
  const partner = PARTNERS.find(item => item.slug === hospital);
  if (!partner) {
    return <div>Hospital not found</div>;
  }
  return (
    <Layout
      content={
        <Content>
          <GioiThieuContent partner={partner} />
        </Content>
      }
      hero={
        <Hero
          title='Quy trình đăng ký khám bệnh'
          img={QuyTrinhHeroImg}
        />
      }
    />
  );
}
