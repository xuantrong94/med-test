import { PatientGuide } from '@/shared/endpoints/patient-guide.endpint';
import Image from 'next/image';
import Link from 'next/link';
const GuideItem = ({
  id,
  title,
  slug,
  description,
  content,
  partnerId,
  images,
  createdAt,
  updatedAt,
}: PatientGuide) => {
  return (
    <Link
      className='group flex cursor-pointer flex-col gap-4 rounded-lg border border-gray-200 shadow-md hover:shadow-lg md:flex-row'
      href={`/chi-tiet-huong-dan/${slug}`}
      title={title}
    >
      <div className='relative aspect-video h-40 rounded-lg md:h-48 lg:h-56'>
        <Image
          src={images[0]}
          alt={title}
          fill
          className='object-cover'
        />
      </div>
      <div className='space-y-2 p-4 md:p-6'>
        <p className='group-hover:text-primary md:text-lg'>{title}</p>
        <p className='text-sm text-gray-500'>
          <em>{createdAt}</em>
        </p>
        <p className=''>{description}</p>
      </div>
    </Link>
  );
};

export default GuideItem;
