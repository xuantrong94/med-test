import Image, { StaticImageData } from 'next/image';
import { cn } from '@/utils/cn';

interface InfoItemProps {
  icon: StaticImageData;
  text: string;
  id: number;
  reverse?: boolean;
}

function InfoItem({
  icon,
  text,
  id,
  reverse = false,
}: Readonly<InfoItemProps>) {
  return (
    <div
      className={cn(
        'flex items-center gap-2',
        reverse && 'md:flex-row-reverse'
      )}
    >
      <Image
        src={icon.src}
        alt={`info-${id}`}
        width={40}
        height={40}
        className='aspect-square shrink-0'
        overrideSrc={icon.src}
      />
      <h3
        className={cn(
          'text-primary text-base leading-relaxed font-medium',
          reverse && 'md:text-right'
        )}
      >
        {text}
      </h3>
    </div>
  );
}

export default InfoItem;
