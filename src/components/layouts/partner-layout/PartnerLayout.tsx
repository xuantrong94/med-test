import React from 'react';
import Header from './Header';
import Footer from './Footer';

const PartnerLayout = ({
  children,
  hospital,
}: {
  children: React.ReactNode;
  hospital: string;
}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default PartnerLayout;
