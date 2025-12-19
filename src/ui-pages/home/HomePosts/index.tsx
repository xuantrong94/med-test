import { getPosts } from '@/shared/endpoints/post.endpoint';
import PostCard from './PostCard';
import Link from 'next/link';
import SectionTitle from '@/components/SectionTitle';

interface Post {
  id: number;
  title: string;
  slug: string;
  description: string;
  published_at: string;
  created_at: string;
  author: string;
  image: any[];
}

const formatDate = (dateString: string) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${day}/${month}/${year}, ${hours}:${minutes}`;
};

const getImageUrl = (item: Post) => {
  if (Array.isArray(item.image) && item.image.length > 0) {
    const img = item.image[0];
    if (img && typeof img === 'object' && 'url' in img) {
      return `https://cms.medpro.com.vn${img.url}`;
    }
  }
  return '/post-1.png';
};

async function HomePosts() {
  const posts = await getPosts();
  const postsToRender = Array.isArray(posts) ? posts : [];

  return (
    <section className='container mx-auto flex max-w-[1200px] flex-col justify-center gap-6 px-4 py-10 md:items-center md:gap-10 md:py-14 lg:py-20'>
      <SectionTitle title='tin tức & sự kiện' />
      <div className='grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
        {postsToRender.map(post => (
          <PostCard
            key={post.id}
            post={post}
            imageUrl={getImageUrl(post)}
            formattedDate={formatDate(post.published_at || post.created_at)}
          />
        ))}
      </div>
      <Link
        href={`/benh-vien-mat/tin-tuc`}
        className='hover:shadow-custom mx-auto inline-flex rounded-lg border border-gray-200 px-4 py-2 text-sm shadow-lg transition-all duration-200 hover:-translate-y-0.5 md:px-6 lg:px-8 lg:py-2.5'
      >
        Xem thêm...
      </Link>
    </section>
  );
}

export default HomePosts;
