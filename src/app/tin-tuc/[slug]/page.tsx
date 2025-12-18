import Loading from '@/app/loading';
import { getPostBySlug } from '@/shared/endpoints/post.endpoint';
import MainPost from '@/ui-pages/tin-tuc/MainPost';
import { Suspense } from 'react';

export default async function PostDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const postDetail = post[0];
  return (
    <div className='mt-16 lg:mt-30'>
      <div className='container grid grid-cols-12 gap-y-5 py-10 md:py-14 lg:gap-x-10'>
        <div className='col-span-12 lg:col-span-8'>
          <Suspense fallback={<Loading />}>
            <MainPost {...postDetail} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
