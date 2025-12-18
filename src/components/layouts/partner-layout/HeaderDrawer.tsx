'use client';
import { HEADER_URLS } from '@/shared/constants/urls';
import { phones } from '@/shared/constants/contact';
import Link from 'next/link';
import Image from 'next/image';
import { LogIn, X } from 'lucide-react';
import React from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/utils/cn';

interface HeaderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

function HeaderDrawer({ isOpen, onClose }: Readonly<HeaderDrawerProps>) {
  const pathname = usePathname();

  // Handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <button
      className='fixed inset-0 z-1000 flex h-screen w-screen justify-end bg-black/50'
      onClick={handleBackdropClick}
    >
      <div className='animate-slideInRight flex h-screen w-[280px] flex-col overflow-y-auto bg-white shadow-[-2px_0_8px_rgba(0,0,0,0.15)] lg:w-[320px]'>
        {/* Header của drawer */}
        <div className='flex items-center justify-between border-b border-[--color-border] p-5'>
          <Image
            src='/logo.svg'
            alt='Logo'
            width={120}
            height={70}
            className='h-10 w-auto'
            overrideSrc='/logo.svg'
          />
          <button
            className='text-text-secondary hover:bg-bg-secondary cursor-pointer rounded border-none bg-transparent p-2 text-xl transition-colors duration-300'
            onClick={onClose}
          >
            <X />
          </button>
        </div>

        {/* Login button */}
        <div className='border-b border-[--color-border-light] p-5'>
          <button className='from-primary to-cyan flex w-full cursor-pointer items-center justify-center gap-2 rounded-md border-none bg-linear-to-r px-4 py-3 text-base text-white transition-opacity duration-300 hover:opacity-90'>
            <LogIn size={20} />
            <span>Đăng nhập</span>
          </button>
        </div>

        {/* Navigation menu */}
        <nav className='flex-1 p-0'>
          <ul className='m-0 list-none p-0'>
            {HEADER_URLS.map(item => {
              const isActive = pathname === item.url;

              return (
                <li
                  key={item.key}
                  className={cn(
                    'border-b border-[--color-border-light]',
                    isActive && 'bg-primary/5'
                  )}
                >
                  <Link
                    href={item.url}
                    className={cn(
                      'relative block px-5 py-4 text-base no-underline transition-all duration-300',
                      isActive
                        ? 'text-primary bg-primary/5 before:bg-primary font-medium before:absolute before:top-0 before:left-0 before:h-full before:w-1 before:content-[""]'
                        : 'text-text-primary hover:bg-bg-secondary hover:text-primary'
                    )}
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Contact info */}
        <div className='border-t border-[--color-border] p-5 text-center'>
          <Image
            src='/logo_medpro.svg'
            alt='Medpro'
            width={100}
            height={30}
            className='mb-3'
            overrideSrc='/logo_medpro.svg'
          />
          <div className='flex flex-col items-center gap-1'>
            <span className='text-text-secondary text-[13px]'>
              {phones.booking.label}
            </span>
            <Link
              href={phones.booking.tel}
              className='border-gray hover:text-primary border-b border-dotted py-1 text-lg font-bold tracking-wider text-[#ff4d4f] no-underline transition-colors duration-300'
            >
              {phones.booking.display}
            </Link>
          </div>
        </div>
      </div>
    </button>
  );
}

export default HeaderDrawer;
