import React from 'react';
import Contact from './Contact';
import ContactForm from './form/ContactForm';
import PARTNERS from '@/shared/constants/partners';

const ContactMainContent = async ({ hospital }: { hospital: string }) => {
  const map = PARTNERS.find(item => item.slug === hospital)?.map;
  return (
    <div className='container mt-20 rounded-lg bg-white p-2.5 md:p-4 lg:mt-0 lg:-translate-y-24 lg:p-8'>
      <div className='mb-5 grid grid-cols-12 gap-y-4 md:gap-x-4 lg:mb-8 lg:gap-x-8'>
        <div className='col-span-12 md:col-span-4'>
          <Contact />
        </div>
        <div className='col-span-12 md:col-span-8'>
          <ContactForm />
        </div>
      </div>
      <iframe
        src={map}
        className='aspect-video w-full'
        style={{ border: 0 }}
        allowFullScreen={true}
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
        title='Google Maps Location'
      ></iframe>
    </div>
  );
};

export default ContactMainContent;
