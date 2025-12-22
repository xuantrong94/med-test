import PostCard from './PostCard';
import Link from 'next/link';
import SectionTitle from '@/components/SectionTitle';
import formatDate from '@/utils/formatDate';
import getImageUrl from '@/utils/getImageUrl';
import HOME_POSTS from '@/shared/static-content/home/home-posts';
import { Post } from '@/shared/endpoints/post.endpoint';

async function HomePosts({
  posts,
  hospital,
}: Readonly<{ posts?: Post[]; hospital: string }>) {
  const postsToRender = Array.isArray(posts) ? posts : [];

  return (
    <section className='container mx-auto flex max-w-[1200px] flex-col justify-center gap-6 px-4 py-10 md:items-center md:gap-10 md:py-14 lg:py-20'>
      <SectionTitle title={HOME_POSTS.TITLE} />
      <div className='grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
        {postsToRender.map(post => (
          <PostCard
            key={post.id}
            post={post}
            imageUrl={getImageUrl(post)}
            formattedDate={formatDate(post.published_at || post.created_at)}
            hospital={hospital}
          />
        ))}
      </div>
      <Link
        href={`/${hospital}/tin-tuc`}
        className='hover:shadow-custom mx-auto inline-flex rounded-lg border border-gray-200 px-4 py-2 text-sm shadow-lg transition-all duration-200 hover:-translate-y-0.5 md:px-6 lg:px-8 lg:py-2.5'
      >
        {HOME_POSTS.CTA}
      </Link>
    </section>
  );
}

export default HomePosts;
