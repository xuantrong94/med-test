import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BtnReturnList from '../static-page/BtnReturnList';

const PartnerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <BtnReturnList />
    </>
  );
};

export default PartnerLayout;
