import { Post } from '@/shared/endpoints/post.endpoint';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PostItem = ({ image, title, description, created_at, slug }: Post) => {
  return (
    <Link
      className='mx-auto flex max-w-3xl overflow-hidden rounded-md border border-gray-200 bg-white shadow-md transition-shadow duration-300 hover:shadow-lg'
      href={'/tin-tuc/' + slug}
    >
      <div className='relative aspect-4/3 h-35'>
        <Image
          src={image[0]?.url ? `https://cms.medpro.com.vn${image[0].url}` : ''}
          overrideSrc={
            image[0]?.url ? `https://cms.medpro.com.vn${image[0].url}` : ''
          }
          alt={title}
          fill
        />
      </div>
      <div className='space-y-1.5 p-3 md:space-y-2.5 md:p-5'>
        <p className='uppercase md:text-lg'>{title}</p>
        <p className='text-sm text-gray-400'>{created_at}</p>
        <p className='line-clamp-3'>{description}</p>
      </div>
    </Link>
  );
};

export default PostItem;
