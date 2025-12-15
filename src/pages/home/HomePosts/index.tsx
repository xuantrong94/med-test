import Image from 'next/image';
import Link from 'next/link';
import { getPosts } from '@/shared/endpoints/post.endpoint';

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
      <h2 className='text-text-primary mb-4 text-center text-lg font-semibold uppercase md:mb-8 md:text-2xl'>
        tin tức & sự kiện
      </h2>
      <div className='grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
        {postsToRender.map(item => (
          <Link
            key={item.id}
            className='hover:shadow-custom group block overflow-hidden rounded-md text-inherit no-underline transition-all duration-200 hover:-translate-y-0.5'
            href={`/tin-tuc/${item.slug}`}
          >
            <div className='relative h-[120px] w-full overflow-hidden rounded-t-md md:h-[160px] lg:h-[192px]'>
              <Image
                src={getImageUrl(item)}
                alt={item.title}
                fill
                className='object-cover transition-transform duration-300 group-hover:scale-105'
              />
            </div>
            <div className='p-4'>
              <h3 className='text-text-primary mb-2 text-base leading-relaxed font-semibold'>
                {item.title}
              </h3>
              <p className='text-text-secondary text-sm leading-snug'>
                {formatDate(item.published_at || item.created_at)} -{' '}
                {item.author}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default HomePosts;
