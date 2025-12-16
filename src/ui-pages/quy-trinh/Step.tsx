import { ChevronRight } from 'lucide-react';
import React from 'react';

type Props = {
  step: number;
  title: string;
  items: string[];
};

const Step = ({ step, title, items }: Props) => {
  return (
    <div className='md:grid md:grid-cols-8'>
      <div className='text-primary after:bg-primary relative col-span-1 h-fit py-2.5 font-semibold uppercase after:absolute after:top-1/2 after:right-0 after:aspect-square after:h-4 after:translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:content-[""] md:py-4 md:pr-4 md:text-end md:text-lg lg:pr-8'>
        Bước {step}
      </div>
      <div className='border-primary col-span-7 py-2.5 md:border-l md:py-4 md:pl-4 lg:pl-8'>
        <p className='text-primary mb-2.5 font-semibold uppercase lg:text-lg'>
          {title}
        </p>
        <ul className='space-y-2'>
          {items.map((item, index) => (
            <li
              key={index}
              className='hover:text-primary flex items-start gap-2 transition-colors'
            >
              <ChevronRight
                size={14}
                className='shrink-0 translate-y-1.5'
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Step;
