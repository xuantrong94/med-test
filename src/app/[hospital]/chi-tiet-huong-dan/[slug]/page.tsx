import Loading from '@/app/loading';
import PARTNERS from '@/shared/constants/partners';
import MainPost from '@/ui-pages/chi-tiet-huong-dan/MainPost';
import RelatedPost from '@/ui-pages/chi-tiet-huong-dan/RelatedPost';

import { Suspense } from 'react';

const GuideDetail = async ({
  params,
}: {
  params: Promise<{ slug: string; hospital: string }>;
}) => {
  const { slug, hospital } = await params;
  const partnerid = PARTNERS.find(item => item.slug === hospital)?.keyword;

  if (!partnerid) {
    return <div>Partner not found</div>;
  }

  return (
    <main className='mt-16 lg:mt-30'>
      <div>
        <div className='container grid grid-cols-12 gap-y-5 py-10 md:py-14 lg:gap-x-10 lg:py-18'>
          <div className='col-span-12 lg:col-span-8'>
            <Suspense fallback={<Loading />}>
              <MainPost
                slug={slug}
                hospital={partnerid}
              />
            </Suspense>
          </div>
          <div className='col-span-12 lg:col-span-4'>
            <RelatedPost
              slug={slug}
              partnerid={partnerid}
              hospital={hospital}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default GuideDetail;
