import React from 'react';

type Props = {
  children?: React.ReactNode;
};

const Content = ({ children }: Props) => {
  return (
    <section className='container mt-16 space-y-2 rounded-lg border border-gray-300 bg-white p-5 md:p-10 lg:mt-0 lg:-translate-y-20 lg:p-14'>
      {children}
    </section>
  );
};

export default Content;
