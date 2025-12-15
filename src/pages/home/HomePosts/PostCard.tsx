import Image from 'next/image';
import Link from 'next/link';

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

interface PostCardProps {
  post: Post;
  imageUrl: string;
  formattedDate: string;
}

function PostCard({ post, imageUrl, formattedDate }: PostCardProps) {
  return (
    <Link
      className='hover:shadow-custom group block overflow-hidden rounded-lg border border-gray-200 text-inherit no-underline transition-all duration-200 hover:-translate-y-0.5'
      href={`/tin-tuc/${post.slug}`}
    >
      <div className='relative h-[140px] w-full overflow-hidden rounded-t-lg md:h-[160px] lg:h-[192px]'>
        <Image
          src={imageUrl}
          alt={post.title}
          fill
          className='object-cover transition-transform duration-300 group-hover:scale-105'
        />
      </div>
      <div className='p-4'>
        <h3 className='text-text-primary mb-2 text-base leading-relaxed font-semibold'>
          {post.title}
        </h3>
        <p className='text-text-secondary text-sm leading-snug'>
          {formattedDate} - {post.author}
        </p>
      </div>
    </Link>
  );
}

export default PostCard;
