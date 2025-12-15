import Image from 'next/image';
import { SupportCardProps } from './data';
import Link from 'next/link';

export function SupportCard({
  img,
  title,
  ctaLabel,
  ctaUrl,
}: SupportCardProps) {
  return (
    <Link
      href={ctaUrl}
      className='hover:shadow-custom border-gray/40 flex flex-col items-center gap-4 border p-4 transition-all duration-200 hover:-translate-y-2.5 md:px-6 md:py-8'
      title={title}
    >
      <Image
        src={img}
        alt={title}
        width={100}
        height={100}
      />
      <h3 className='text-center text-lg font-semibold'>{title}</h3>
      <Link
        href={ctaUrl}
        className='text-center text-lg'
      >
        {ctaLabel}
      </Link>
    </Link>
  );
}
