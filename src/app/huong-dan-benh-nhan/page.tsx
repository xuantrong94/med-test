import HuongDanBenhNhanHeroImg from '@/assets/images/huong-dan-benh-nhan/hero.jpg';
import Content from '@/components/layouts/static-page/Content';
import Hero from '@/components/layouts/static-page/Hero';
import Layout from '@/components/layouts/static-page/Layout';
import HuongDanBenhNhanContent from '@/ui-pages/huong-dan-benh-nhan/Content';
const PatientGuide = () => {
  return (
    <Layout
      hero={
        <Hero
          img={HuongDanBenhNhanHeroImg}
          title={`Hướng dẫn bệnh nhân`}
        />
      }
      content={
        <Content>
          <HuongDanBenhNhanContent />
        </Content>
      }
    />
  );
};

export default PatientGuide;
