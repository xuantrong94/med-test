import CounterTest from '@/components/CounterTest';
import UserList from '@/components/UserList';
import { getPosts } from '@/shared/endpoints/post.endpoint';
import { getPartnerConfig } from '@/shared/endpoints/partner-domain.endpoint';
import Image from 'next/image';

export default async function Home() {
  const posts = await getPosts();
  const partnerConfig = await getPartnerConfig();
  return (
    <div className='pt-10 pb-10 md:pt-14 md:pb-14 lg:pt-20 lg:pb-18'>
      <div className='bg-primary container mb-8 flex h-10 flex-col items-center justify-center gap-8'>
        <Image
          width={1200}
          height={1200}
          src='https://resource.medpro.com.vn/static/images/bvmathcm/web/slide.png?t=21084.808919858144'
          alt='slide'
        />
      </div>
    </div>
  );
}

export async function generateMetadata() {
  const partnerConfig = await getPartnerConfig();
  return {
    title: partnerConfig.seo_title,
    description: partnerConfig.seo_description,
  };
}
