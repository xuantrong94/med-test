import Link from 'next/link';
import React from 'react';

const BtnReturnList = () => {
  return (
    <Link
      href='/'
      className='bg-primary hover:bg-primary fixed right-0 bottom-4 z-100 rounded-l-lg px-4 py-2 text-white shadow-lg transition-colors'
    >
      Trở về trang danh sách
    </Link>
  );
};

export default BtnReturnList;
