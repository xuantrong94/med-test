'use client';
import Image from 'next/image';
import React from 'react';

const HomeFeatures = React.memo(() => {
  return (
    <div className='container mx-auto mt-10 grid grid-cols-1 gap-6 py-10 md:flex-row md:py-14 lg:grid-cols-2 lg:py-20'>
      <div className='flex items-start gap-4 rounded-[3px] border border-[#d9d9d9] p-5 transition-shadow duration-300 hover:shadow-[0_2px_8px_rgba(0,0,0,0.1)]'>
        <div className='flex items-start gap-4'>
          <Image
            src='/feat-1.png'
            alt='Tra cứu thông tin icon'
            width={48}
            height={48}
            className='aspect-square shrink-0'
            quality={90}
            sizes='48px'
          />
          <div className='flex-1 text-sm'>
            <h3 className='text-primary mb-2 font-semibold uppercase'>
              Tra cứu thông tin
            </h3>
            <p className='mb-4 leading-relaxed'>
              Tra cứu thông tin đặt chỗ, thông tin bệnh nhân, lịch khám ...
            </p>
            <button className='bg-primary hover:bg-primary-hover mt-6 inline-flex cursor-pointer items-center rounded-[3px] border-none px-10 py-2 text-sm text-white transition-colors duration-300'>
              Tra cứu
            </button>
          </div>
        </div>
      </div>

      <div className='flex items-start gap-4 rounded-[3px] border border-[#d9d9d9] p-5 transition-shadow duration-300 hover:shadow-[0_2px_8px_rgba(0,0,0,0.1)]'>
        <div className='flex items-start gap-4'>
          <Image
            src='/feat-2.png'
            alt='Vấn đề thường gặp icon'
            width={48}
            height={48}
            className='aspect-square shrink-0'
            quality={90}
            sizes='48px'
          />
          <div className='flex-1 text-sm'>
            <h3 className='text-primary mb-2 font-semibold uppercase'>
              Những vấn đề thường gặp
            </h3>
            <p className='mb-4 leading-relaxed'>
              Những vấn đề thường gặp, trong quá trình khám & tái khám
            </p>
            <ul className='mt-4 list-disc pl-5'>
              <li className='mb-1 leading-relaxed'>
                Quản lý thông tin bệnh nhân
              </li>
              <li className='mb-1 leading-relaxed'>
                Quy trình khám bệnh & nhận phiếu khám bệnh
              </li>
              <li className='mb-1 leading-relaxed'>Hoàn tất thanh toán</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
});

HomeFeatures.displayName = 'HomeFeatures';

export default HomeFeatures;
