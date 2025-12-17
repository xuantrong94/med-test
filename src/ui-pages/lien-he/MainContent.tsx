import React from 'react';
import Contact from './Contact';
import ContactForm from './form/ContactForm';

const ContactMainContent = () => {
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
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.426826210543!2d106.6849517!3d10.778585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f2579d6bfe9%3A0x35859d11c9f06b3a!2zQuG7h25oIHZp4buHbiBN4bqvdCBUUEhDTQ!5e0!3m2!1svi!2s!4v1765963017490!5m2!1svi!2s'
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
