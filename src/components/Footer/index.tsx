'use client';
import { address, email, phones, website } from '@/shared/constants/contact';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    <footer className='bg-[#f5f5f5] py-10 md:py-14 lg:py-20 lg:pb-[72px]'>
      <div className='container mx-auto max-w-[1200px] px-4'>
        <div className='flex flex-col items-start justify-center gap-6 lg:flex-row lg:justify-between'>
          {/* Left Section: Logo & Info + Links + Certs */}
          <div className='w-full lg:w-3/4'>
            <div className='flex flex-col items-end gap-6 lg:flex-row'>
              {/* Logo & Info */}
              <div className='w-full lg:w-1/3'>
                <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
                  <Image
                    src='/logo.svg'
                    alt='logo'
                    className='mb-2 h-12 w-auto lg:mb-4'
                    width={154}
                    height={90}
                    overrideSrc='/logo.svg'
                  />
                  <div className='flex flex-col gap-2'>
                    <p className='block text-sm'>Địa chỉ: {address.full}</p>
                    <p className='block text-sm'>Website: {website.main.url}</p>
                    <p className='block text-sm'>Email: {email.primary}</p>
                    <p className='block text-sm'>
                      Điện thoại: {phones.medical.display}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation Links */}
              <div className='hidden lg:block lg:w-1/4'>
                <div className='flex flex-col gap-2.5'>
                  <Link
                    href='#'
                    className='text-sm whitespace-nowrap text-inherit no-underline hover:text-[#1890ff]'
                  >
                    Liên hệ
                  </Link>
                  <Link
                    href='#'
                    className='text-sm whitespace-nowrap text-inherit no-underline hover:text-[#1890ff]'
                  >
                    Điều khoản dịch vụ
                  </Link>
                  <Link
                    href='#'
                    className='text-sm whitespace-nowrap text-inherit no-underline hover:text-[#1890ff]'
                  >
                    Chính sách bảo mật
                  </Link>
                  <Link
                    href='#'
                    className='text-sm whitespace-nowrap text-inherit no-underline hover:text-[#1890ff]'
                  >
                    Quy định sử dụng
                  </Link>
                </div>
              </div>

              {/* Certifications & App Links */}
              <div className='w-full lg:w-[41.666667%]'>
                <div className='grid grid-cols-2 gap-3'>
                  <div className='flex items-center justify-center'>
                    <Link
                      href='#'
                      className='flex items-center justify-center'
                    >
                      <Image
                        src='/dangkybocongthuong.svg'
                        alt='dangkybocongthuong'
                        width={134}
                        height={50}
                        overrideSrc='/dangkybocongthuong.svg'
                      />
                    </Link>
                  </div>
                  <div className='flex items-center justify-center'>
                    <Link
                      href='#'
                      className='flex items-center justify-center'
                    >
                      <Image
                        src='/thongbaobocongthuong.svg'
                        alt='thongbaobocongthuong'
                        width={134}
                        height={50}
                        overrideSrc='/thongbaobocongthuong.svg'
                      />
                    </Link>
                  </div>
                  <div className='flex items-center justify-center'>
                    <Link
                      href='#'
                      className='flex items-center justify-center'
                    >
                      <Image
                        src='/appstore.svg'
                        alt='appstore'
                        width={134}
                        height={50}
                        overrideSrc='/appstore.svg'
                      />
                    </Link>
                  </div>
                  <div className='flex items-center justify-center'>
                    <Link
                      href='#'
                      className='flex items-center justify-center'
                    >
                      <Image
                        src='/googleplay.svg'
                        alt='googleplay'
                        width={134}
                        height={50}
                        overrideSrc='/googleplay.svg'
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Medpro Info */}
          <div className='w-full lg:w-1/4'>
            <div className='flex flex-col gap-2 text-center lg:ml-auto lg:text-left'>
              <Image
                src='/footer_logo.svg'
                alt='footer logo'
                className='mx-auto h-10 w-auto lg:ml-0'
                width={80}
                height={41}
                overrideSrc='/footer_logo.svg'
              />
              <div className='flex flex-col gap-2'>
                <Link
                  href='#'
                  className='text-sm text-inherit no-underline hover:text-[#1890ff]'
                >
                  ĐƯỢC PHÁT TRIỂN BỞI MEDPRO
                </Link>
                <Link
                  href='#'
                  className='text-sm text-inherit no-underline hover:text-[#1890ff]'
                >
                  Website: medpro.vn
                </Link>
                <Link
                  href='#'
                  className='text-sm text-inherit no-underline hover:text-[#1890ff]'
                >
                  Email: cskh@medpro.vn
                </Link>
                <Link
                  href='#'
                  className='text-sm text-inherit no-underline hover:text-[#1890ff]'
                >
                  Điện thoại: 1900 2115
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
