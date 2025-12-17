import React from 'react';
import { contactInfo } from './data';
import ContactItem from './ContactItem';

const Contact = () => {
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
