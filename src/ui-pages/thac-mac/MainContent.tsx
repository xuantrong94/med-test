'use client';
import faqData from '@/data/faq';
import React from 'react';
import AccordionItemComponent from './AccordionItemComponent';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/utils/cn';

const faqSections = faqData.map(faqSection => {
  return {
    id: faqSection.id,
    name: faqSection.name,
  };
});
const MainContent = () => {
  const [selectedSection, setSelectedSection] = React.useState<number>(
    faqSections[0].id
  );
  const [expandedItemId, setExpandedItemId] = React.useState<number | null>(
    null
  );
  return (
    <section className='container grid grid-cols-12 gap-y-5 py-10 md:py-14 lg:py-18'>
      {/* Start Sections */}
      <div className='col-span-12 flex flex-col items-start gap-4 md:col-span-4 lg:col-span-3'>
        <p className='bg-cyan rounded-md px-4 py-2 text-white'>
          Giải đáp nhanh câu hỏi
        </p>
        {faqSections.map(section => (
          <button
            key={section.id}
            onClick={() => {
              setSelectedSection(section.id);
              setExpandedItemId(null); // Reset expanded item when changing section
            }}
            className='flex'
          >
            <ChevronRight
              size={16}
              className='text-primary mt-1 mr-2 shrink-0'
            />
            <span
              className={cn(selectedSection === section.id && 'text-primary')}
            >
              {section.name}
            </span>
          </button>
        ))}
      </div>
      {/* End Sections */}
      {/* Start FAQ Items */}
      <div className='col-span-12 space-y-2 md:col-span-8 lg:col-span-9'>
        {faqData
          .find(section => section.id === selectedSection)
          ?.faq.map(item => (
            <AccordionItemComponent
              key={item.id}
              item={item}
              expanded={expandedItemId === item.id}
              onToggle={() => {
                setExpandedItemId(expandedItemId === item.id ? null : item.id);
              }}
            />
          ))}
      </div>
      {/* End FAQ Items */}
    </section>
  );
};

export default MainContent;
