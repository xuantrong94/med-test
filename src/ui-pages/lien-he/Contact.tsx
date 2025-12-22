import React from 'react';
import { getContactInfo } from './data';
import ContactItem from './ContactItem';
import { HospitalKey } from '@/shared/constants/contact';

const Contact = ({ hospital }: { hospital: string }) => {
  const contactInfo = getContactInfo(hospital as HospitalKey);
  return (
    <div className='space-y-4 lg:space-y-8'>
      {contactInfo.map(item => (
        <ContactItem
          key={item.title}
          {...item}
        />
      ))}
    </div>
  );
};

export default Contact;
