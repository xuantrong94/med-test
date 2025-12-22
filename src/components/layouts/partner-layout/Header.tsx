'use client';
import { HEADER_URLS } from '@/shared/constants/urls';
import { phones } from '@/shared/constants/contact';
import Link from 'next/link';
import Image from 'next/image';
import { LogIn, Menu } from 'lucide-react';
import React from 'react';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { cn } from '@/utils/cn';
import useGetPartnerSlug from '@/hooks/useGetPartnerSlug';
import { getHeaderLogo } from '@/data/header';
import { IconLogoMed } from '@/assets/icons/header';

// Dynamic import cho HeaderDrawer
const HeaderDrawer = dynamic(() => import('./HeaderDrawer'), {
  ssr: false,
  loading: () => null,
});

function Header() {
  const partnerSlug = useGetPartnerSlug();
  const HeaderLogo = getHeaderLogo(partnerSlug);

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const pathname = usePathname();
  const partner = useGetPartnerSlug();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const isLandscapeLogo = HeaderLogo.width > HeaderLogo.height * 3;
  return (
    <header className='fixed top-0 right-0 left-0 z-50 h-20 w-full border-b border-gray-200 bg-white lg:h-[120px]'>
      <div className='container mx-auto flex h-full max-w-[1200px] items-center justify-between px-4 lg:justify-end'>
        <div className='mr-auto ml-0'>
          <Image
            src={HeaderLogo}
            alt='Logo'
            className={cn(
              'w-auto',
              isLandscapeLogo ? 'h-12' : 'h-[60px] lg:h-[90px]'
            )}
            overrideSrc={HeaderLogo.src}
          />
        </div>

        {/* Desktop menu - ẩn trên mobile */}
        <div className='hidden w-1/2 grow px-[2.5%] lg:block'>
          <div className='py-[15px]'>
            <button className='from-primary to-cyan mr-0 ml-auto flex cursor-pointer gap-2 rounded-sm border-none bg-linear-to-r px-2.5 py-2 text-sm text-white hover:opacity-90'>
              <LogIn size={16} />
              <span>Đăng nhập</span>
            </button>
          </div>
          <nav>
            <ul className='m-0 flex list-none justify-end p-0'>
              {HEADER_URLS.map(item => {
                const isActive = pathname === `/${partner}${item.url}`;

                return (
                  <li
                    key={item.key}
                    className={cn(
                      'group border-gray before:bg-primary relative flex border-t-[0.5px] p-[15px] before:absolute before:top-0 before:left-0 before:z-10 before:h-1 before:-translate-y-0.5 before:rounded-full before:transition-[width] before:duration-300 before:ease-out before:content-[""] hover:before:w-full',
                      isActive ? 'before:w-full' : 'before:w-0'
                    )}
                  >
                    <Link
                      href={`/${partner}${item.url}`}
                      className={cn(
                        'no-underline transition-colors duration-200',
                        isActive
                          ? 'text-primary font-medium'
                          : 'group-hover:text-primary text-inherit'
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Desktop contact info - ẩn trên mobile */}
        <div className='hidden flex-col items-center lg:flex'>
          <Image
            src={IconLogoMed}
            alt='Medpro'
            width={135}
            height={40}
            overrideSrc={IconLogoMed.src}
          />
          <div className='flex flex-col items-center'>
            <span className='flex text-[13px]'>{phones.booking.label}</span>
            <Link
              href={phones.booking.tel}
              className='border-gray hover:text-primary border-b border-dotted pb-0.5 text-[15px] font-bold tracking-wider text-[#ff4d4f] no-underline'
            >
              {phones.booking.display}
            </Link>
          </div>
        </div>

        {/* Mobile menu button - chỉ hiện trên mobile */}
        <div className='block lg:hidden'>
          <button
            className='text-primary hover:text-cyan cursor-pointer border-none bg-transparent p-2 text-2xl transition-colors duration-300'
            onClick={toggleDrawer}
            aria-label='Mở menu'
          >
            <Menu />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <HeaderDrawer
        isOpen={isDrawerOpen}
        onClose={closeDrawer}
        Logo={HeaderLogo}
      />
    </header>
  );
}

export default Header;
