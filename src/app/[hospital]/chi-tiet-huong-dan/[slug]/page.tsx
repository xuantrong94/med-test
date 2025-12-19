import Loading from '@/app/loading';
import MainPost from '@/ui-pages/chi-tiet-huong-dan/MainPost';
import RelatedPost from '@/ui-pages/chi-tiet-huong-dan/RelatedPost';

import { Suspense } from 'react';

const GuideDetail = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  return (
    <main className='mt-16 lg:mt-30'>
      <div>
        <div className='container grid grid-cols-12 gap-y-5 py-10 md:py-14 lg:gap-x-10 lg:py-18'>
          <div className='col-span-12 lg:col-span-8'>
            <Suspense fallback={<Loading />}>
              <MainPost slug={slug} />
            </Suspense>
          </div>
          <div className='col-span-12 lg:col-span-4'>
            <RelatedPost slug={slug} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default GuideDetail;
