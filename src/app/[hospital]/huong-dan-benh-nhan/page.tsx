import HuongDanBenhNhanHeroImg from '@/assets/images/huong-dan-benh-nhan/hero.jpg';
import Content from '@/components/layouts/static-page/Content';
import Hero from '@/components/layouts/static-page/Hero';
import Layout from '@/components/layouts/static-page/Layout';
import HuongDanBenhNhanContent from '@/ui-pages/huong-dan-benh-nhan/Content';
import getPartnerId from '@/utils/getPartnertId';
const PatientGuide = async ({
  params,
}: {
  params: Promise<{ hospital: string }>;
}) => {
  const { hospital } = await params;
  const partnerId = getPartnerId(hospital); // Ensure partner exists, can add error handling if needed
  if (!partnerId) {
    return <div>Partner not found</div>;
  }
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
          <HuongDanBenhNhanContent
            partnerId={partnerId}
            hospital={hospital}
          />
        </Content>
      }
    />
  );
};

export default PatientGuide;
