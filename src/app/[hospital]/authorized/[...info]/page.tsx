'use client';

import { useAuth } from '@/hooks/useAuth';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

export default function AuthorizedPage() {
  const pathname = usePathname();
  const { loginFromPath, isAuthenticated, userInfo } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [loginStatus, setLoginStatus] = useState<
    'success' | 'failed' | 'loading'
  >('loading');

  useEffect(() => {
    const handleAuthorization = () => {
      try {
        console.log('Current pathname:', pathname);

        // Extract parameters from pathname
        // Example: /benh-vien-mat/authorized/userId=0&userName=...
        const pathParts = pathname.split('/');
        const authorizedIndex = pathParts.indexOf('authorized');

        if (authorizedIndex !== -1 && pathParts.length > authorizedIndex + 1) {
          // Get all parts after 'authorized' and join them
          const paramsParts = pathParts.slice(authorizedIndex + 1);
          const pathString = paramsParts.join('/').replaceAll('/', '&');

          console.log('Path parts:', pathParts);
          console.log('Params parts:', paramsParts);
          console.log('Attempting login with path:', pathString);

          const success = loginFromPath(pathString);

          if (success) {
            setLoginStatus('success');
            console.log('Authorization successful:', {
              isAuthenticated,
              userInfo,
            });

            // Extract hospital slug for redirect
            const hospitalSlug = pathParts[1]; // Assuming format /hospital/authorized/...
            setTimeout(() => {
              router.push(`/${hospitalSlug}`);
            }, 2000);
          } else {
            setLoginStatus('failed');
            console.error('Authorization failed - missing required data');
          }
        } else {
          setLoginStatus('failed');
          console.error('No authorization parameters found in pathname');
        }
      } catch (error) {
        setLoginStatus('failed');
        console.error('Authorization error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    // Delay một chút để đảm bảo pathname đã ready
    const timer = setTimeout(handleAuthorization, 100);

    return () => clearTimeout(timer);
  }, [pathname, loginFromPath, router, isAuthenticated, userInfo]);

  if (isLoading || loginStatus === 'loading') {
    return (
      <div className='flex min-h-screen items-center justify-center'>
        <div className='text-center'>
          <Loader2 className='mx-auto mb-4 h-8 w-8 animate-spin' />
          <h2 className='mb-2 text-xl font-semibold'>
            Đang xử lý đăng nhập...
          </h2>
          <p className='text-gray-600'>Vui lòng chờ trong giây lát</p>
        </div>
      </div>
    );
  }

  if (loginStatus === 'success') {
    return (
      <div className='flex min-h-screen items-center justify-center'>
        <div className='max-w-md text-center'>
          <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100'>
            <svg
              className='h-8 w-8 text-green-500'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M5 13l4 4L19 7'
              />
            </svg>
          </div>
          <h2 className='mb-2 text-2xl font-bold text-green-600'>
            Đăng nhập thành công!
          </h2>
          <p className='mb-4 text-gray-600'>
            Chào mừng <strong>{userInfo.fullName}</strong>
          </p>
          <p className='text-sm text-gray-500'>
            Đang chuyển hướng về trang chủ...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className='flex min-h-screen items-center justify-center'>
      <div className='max-w-md text-center'>
        <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100'>
          <svg
            className='h-8 w-8 text-red-500'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </div>
        <h2 className='mb-2 text-2xl font-bold text-red-600'>
          Đăng nhập thất bại
        </h2>
        <p className='mb-4 text-gray-600'>
          Thông tin xác thực không hợp lệ hoặc không đầy đủ
        </p>
        <button
          onClick={() => {
            // Extract hospital slug from pathname
            const pathParts = pathname.split('/');
            const hospitalSlug = pathParts[1];
            router.push(`/${hospitalSlug}`);
          }}
          className='rounded-lg bg-blue-500 px-6 py-2 text-white transition-colors hover:bg-blue-600'
        >
          Quay về trang chủ
        </button>
      </div>
    </div>
  );
}
