import React from 'react';
import { ContactInfo } from './data';
import Link from 'next/link';

const ContactItem = ({ img, title, info, url }: ContactInfo) => {
  return (
    <div className='flex items-center gap-4'>
      <div className='shrink-0'>{img}</div>
      <div className='space-y-1 text-sm'>
        <p className='text-base font-semibold'>{title}</p>
        {url ? (
          <Link
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-primary'
          >
            {info}
          </Link>
        ) : (
          <p className=''>{info}</p>
        )}
      </div>
    </div>
  );
};

export default ContactItem;
