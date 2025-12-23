import { notFound } from 'next/navigation';
import { getPosts } from '@/shared/endpoints/post.endpoint';
import PostItem from '@/ui-pages/tin-tuc/PostItem';
import getPartnerId from '@/utils/getPartnertId';
const Posts = async ({ params }: { params: Promise<{ hospital: string }> }) => {
  const { hospital } = await params;
  const partnerid = getPartnerId(hospital);

  if (!partnerid) {
    notFound();
  }

  const posts = await getPosts(partnerid);

  return (
    <div className='mt-15 lg:mt-30'>
      <div className='bg-linear-45 from-[#6a78d1] to-[#00a4bd] py-15'>
        <div className='flex flex-col items-center'>
          <h1 className='relative w-fit text-center text-2xl font-bold text-white uppercase after:absolute after:-bottom-2 after:left-0 after:h-0.75 after:w-full after:bg-green-400 after:content-[""] md:text-3xl lg:block lg:text-4xl'>
            Tin tức và sự kiện
          </h1>
        </div>
      </div>
      <div className='container my-5 space-y-4 md:my-8 md:space-y-6 lg:mb-12'>
        {posts.map(post => (
          <PostItem
            key={post.id}
            {...post}
            hospital={hospital}
          />
        ))}
      </div>
    </div>
  );
};

export default Posts;
