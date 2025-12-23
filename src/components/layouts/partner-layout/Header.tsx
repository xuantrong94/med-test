'use client';
import { HEADER_URLS } from '@/shared/constants/urls';
import { phones } from '@/shared/constants/contact';
import Link from 'next/link';
import Image from 'next/image';
import { LogIn, Menu, User, LogOut, ChevronDown } from 'lucide-react';
import React from 'react';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { cn } from '@/utils/cn';
import useGetPartnerSlug from '@/hooks/useGetPartnerSlug';
import { getHeaderLogo } from '@/data/header';
import { IconLogoMed } from '@/assets/icons/header';
import { useAuth } from '@/hooks/useAuth';
import getPartnerId from '@/utils/getPartnertId';

// Dynamic import cho HeaderDrawer
const HeaderDrawer = dynamic(() => import('./HeaderDrawer'), {
  ssr: false,
  loading: () => null,
});

function Header() {
  const partnerSlug = useGetPartnerSlug();
  const HeaderLogo = getHeaderLogo(partnerSlug);
  const partnerId = getPartnerId(partnerSlug);
  const { isAuthenticated, userInfo, logout } = useAuth();

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = React.useState(false);
  const pathname = usePathname();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  const handleLogout = () => {
    logout();
    setIsUserDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isUserDropdownOpen &&
        !(event.target as Element).closest('.user-dropdown')
      ) {
        setIsUserDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isUserDropdownOpen]);

  const isLandscapeLogo = HeaderLogo.width > HeaderLogo.height * 3;
  const urlLogin = `https://id-v121.medpro.com.vn/check-phone`;
  const url = `localhost:3000/${partnerSlug}`;
  const redirectTo = `${urlLogin}/url=${url}&partnerId=${partnerId}`;

  console.log('Redirect URL:', redirectTo);

  return (
    <header className='fixed top-0 right-0 left-0 z-50 h-20 w-full border-b border-gray-200 bg-white lg:h-[120px]'>
      <div className='container mx-auto flex h-full max-w-[1200px] items-center justify-between px-4 lg:justify-end'>
        <Link
          href={partnerSlug ? `/${partnerSlug}` : '/'}
          className='mr-auto ml-0'
        >
          <Image
            src={HeaderLogo}
            alt='Logo'
            className={cn(
              'w-auto',
              isLandscapeLogo ? 'h-12' : 'h-[60px] lg:h-[90px]'
            )}
            overrideSrc={HeaderLogo.src}
          />
        </Link>

        {/* Desktop menu - ẩn trên mobile */}
        <div className='hidden w-1/2 grow px-[2.5%] lg:block'>
          <div className='py-[15px]'>
            {isAuthenticated ? (
              /* User dropdown when logged in */
              <div className='user-dropdown relative ml-auto w-fit'>
                <button
                  onClick={toggleUserDropdown}
                  className='from-primary to-cyan flex cursor-pointer items-center gap-2 rounded-sm border-none bg-linear-to-r px-2.5 py-2 text-sm text-white hover:opacity-90'
                >
                  <User size={16} />
                  <span className='max-w-[150px] truncate'>
                    {userInfo.fullName}
                  </span>
                  <ChevronDown
                    size={14}
                    className={cn(
                      'transition-transform',
                      isUserDropdownOpen && 'rotate-180'
                    )}
                  />
                </button>

                {/* Dropdown menu */}
                {isUserDropdownOpen && (
                  <div className='absolute top-full right-0 z-10 mt-1 w-64 rounded-md border border-gray-200 bg-white shadow-lg'>
                    <div className='border-b border-gray-100 p-3'>
                      <p className='font-medium text-gray-900'>
                        {userInfo.fullName}
                      </p>
                      <p className='text-sm text-gray-500'>{userInfo.email}</p>
                    </div>
                    <div className='py-1'>
                      <button
                        onClick={handleLogout}
                        className='flex w-full items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50'
                      >
                        <LogOut size={16} />
                        <span>Đăng xuất</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Login button when not logged in */
              <Link
                className='from-primary to-cyan mr-0 ml-auto flex w-fit cursor-pointer gap-2 rounded-sm border-none bg-linear-to-r px-2.5 py-2 text-sm text-white hover:opacity-90'
                href={redirectTo}
              >
                <LogIn size={16} />
                <span>Đăng nhập</span>
              </Link>
            )}
          </div>
          <nav>
            <ul className='m-0 flex list-none justify-end p-0'>
              {HEADER_URLS.map(item => {
                const isActive = pathname === `/${partnerSlug}${item.url}`;

                return (
                  <li
                    key={item.key}
                    className={cn(
                      'group border-gray before:bg-primary relative flex border-t-[0.5px] p-[15px] before:absolute before:top-0 before:left-0 before:z-10 before:h-1 before:-translate-y-0.5 before:rounded-full before:transition-[width] before:duration-300 before:ease-out before:content-[""] hover:before:w-full',
                      isActive ? 'before:w-full' : 'before:w-0'
                    )}
                  >
                    <Link
                      href={`/${partnerSlug}${item.url}`}
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
