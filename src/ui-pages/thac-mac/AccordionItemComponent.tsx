'use client';
import { AccordionItemProps } from '@/data/faq';
import { ChevronDown, ChevronUp } from 'lucide-react';
import React from 'react';
import { cn } from '@/utils/cn';

interface Props {
  item: AccordionItemProps['item'];
  expanded: boolean;
  onToggle: () => void;
}

const AccordionItemComponent: React.FC<Props> = ({
  item,
  expanded,
  onToggle,
}) => {
  return (
    <div className=''>
      <button
        id={`faqs-title-${item.id}`}
        type='button'
        className={cn(
          'bg-primary border-primary flex w-full items-center justify-between border px-4 py-2 text-left text-white',
          expanded ? 'rounded-t-md' : 'rounded-md'
        )}
        onClick={onToggle}
        aria-expanded={expanded}
        aria-controls={`faqs-text-${item.id}`}
      >
        <span>{item.question}</span>
        {expanded ? (
          <ChevronUp
            className='ml-8 shrink-0 text-white transition duration-200 ease-out'
            size={16}
          />
        ) : (
          <ChevronDown
            className='ml-8 shrink-0 text-white transition duration-200 ease-out'
            size={16}
          />
        )}
      </button>

      <section
        id={`faqs-text-${item.id}`}
        aria-labelledby={`faqs-title-${item.id}`}
        className={cn(
          'grid overflow-hidden text-sm text-slate-600 transition-all duration-300 ease-in-out',
          expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        )}
      >
        <div
          className={`border-primary overflow-hidden rounded-b-md border border-t-0 bg-white`}
        >
          {/* Sử dụng dangerouslySetInnerHTML để render HTML từ answer */}
          <div
            className='prose prose-sm max-w-none px-2.5 py-2 pb-3 md:px-4'
            dangerouslySetInnerHTML={{ __html: item.answer }}
          />
        </div>
      </section>
    </div>
  );
};

export default AccordionItemComponent;
