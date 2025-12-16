import { PatientGuide } from '@/shared/endpoints/patient-guide.endpint';
import Link from 'next/dist/client/link';
import Image from 'next/image';
import React from 'react';

const RelatedPostCard = ({ title, slug, images, createdAt }: PatientGuide) => {
  return (
    <Link
      className='group grid cursor-pointer grid-cols-12 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-shadow hover:shadow-lg'
      href={`/chi-tiet-huong-dan/${slug}`}
    >
      <div className='relative col-span-12 aspect-2/1 md:col-span-4 md:aspect-auto lg:col-span-5'>
        <Image
          src={images[0]}
          alt={title}
          fill
          className='rounded-md object-cover'
        />
      </div>
      <div className='col-span-12 p-2.5 md:col-span-8 lg:col-span-7'>
        <p className='text-sm'>{title}</p>
        <em className='text-sm'>{createdAt}</em>
      </div>
    </Link>
  );
};

export default RelatedPostCard;
