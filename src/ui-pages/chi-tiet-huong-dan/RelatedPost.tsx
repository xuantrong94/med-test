import { getGuide, getGuides } from '@/shared/endpoints/patient-guide.endpint';
import React from 'react';
import RelatedPostCard from './RelatedPost.Card';
import Link from 'next/dist/client/link';

type Props = {
  slug: string;
};

const RelatedPost = async ({ slug }: Props) => {
  const { rows: guides } = await getGuides();
  return (
    <div className='flex flex-col items-center gap-4'>
      <ul className='grid grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-x-5 lg:grid-cols-1'>
        {guides.map(guide => (
          <li key={guide.id}>
            <RelatedPostCard {...guide} />
          </li>
        ))}
      </ul>
      <Link
        className='bg-primary hover:bg-primary-dark mx-auto inline-flex rounded-md px-4 py-2 text-white'
        href={`/benh-vien-mat/huong-dan-benh-nhan`}
      >
        Xem tất cả
      </Link>
    </div>
  );
};

export default RelatedPost;
