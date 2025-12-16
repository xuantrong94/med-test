import Layout from '@/components/layouts/static-page/Layout';
import QuyTrinhHeroImg from '@/assets/images/quy-trinh/hero.jpg';
import Hero from '@/components/layouts/static-page/Hero';
import Content from '@/components/layouts/static-page/Content';
import GioiThieuContent from '@/ui-pages/quy-trinh/Content';
export default function QuyTrinhPage() {
  return (
    <Layout
      content={
        <Content>
          <GioiThieuContent />
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
