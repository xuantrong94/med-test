import Image from 'next/image';

interface InfoItemProps {
  icon: string;
  text: string;
  id: number;
  reverse?: boolean;
}

function InfoItem({ icon, text, id, reverse = false }: InfoItemProps) {
  return (
    <div
      className={`flex items-center gap-2 ${reverse ? 'md:flex-row-reverse' : ''}`}
    >
      <Image
        src={icon}
        alt={`info-${id}`}
        width={40}
        height={40}
        className='aspect-square shrink-0'
        overrideSrc={icon}
      />
      <h3
        className={`text-primary text-base leading-relaxed font-medium ${reverse ? 'md:text-right' : ''}`}
      >
        {text}
      </h3>
    </div>
  );
}

export default InfoItem;
