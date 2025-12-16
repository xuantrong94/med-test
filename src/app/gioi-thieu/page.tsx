import Hero from '@/components/layouts/static-page/Hero';
import Layout from '@/components/layouts/static-page/Layout';
import GioiThieuHeroImg from '@/assets/images/gioi-thieu/hero.jpg';
import Content from '@/components/layouts/static-page/Content';
import GioiThieuContent from '@/ui-pages/gioi-thieu/Content';

export default function GioiThieu() {
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
          <GioiThieuContent />
        </Content>
      }
    />
  );
}
