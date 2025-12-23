'use client';
import { useAuth } from '@/hooks/useAuth';
import useGetLoginRedirectTo from '@/hooks/useGetLoginRedirectTo';
import useGetPartnerSlug from '@/hooks/useGetPartnerSlug';
import HOME_FEATURES from '@/shared/static-content/home/home-features';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HomeFeatures = React.memo(() => {
  const { isAuthenticated } = useAuth();
  const partnerSlug = useGetPartnerSlug();
  const lookupUrl = `/${partnerSlug}/user`;
  const redirectTo = useGetLoginRedirectTo();
  return (
    <div className='container mx-auto mt-10 grid grid-cols-1 gap-6 py-10 md:flex-row md:py-14 lg:grid-cols-2 lg:py-20'>
      {HOME_FEATURES.map(feature => (
        <div
          className='hover:border-primary flex items-start gap-4 rounded-[3px] border border-[#d9d9d9] p-5 transition-shadow duration-300 hover:shadow-[0_2px_8px_rgba(0,0,0,0.1)]'
          key={feature.title}
        >
          <div className='flex items-start gap-4'>
            <Image
              src={feature.icon}
              alt={`${feature.title} icon`}
              width={48}
              height={48}
              className='aspect-square shrink-0'
              quality={90}
              sizes='48px'
            />
            <div className='flex-1 text-sm'>
              <h3 className='text-primary mb-2 font-semibold uppercase'>
                {feature.title}
              </h3>
              <p className='mb-4 leading-relaxed'>{feature.desc}</p>
              {feature.buttonText && (
                <Link
                  className='bg-primary hover:bg-primary-hover mt-6 inline-flex cursor-pointer items-center rounded-[3px] border-none px-10 py-2 text-sm text-white transition-colors duration-300'
                  href={isAuthenticated ? lookupUrl : redirectTo}
                >
                  {feature.buttonText}
                </Link>
              )}
              {feature.listItems && (
                <ul className='mt-4 list-disc pl-5'>
                  {feature.listItems.map(item => (
                    <li
                      className='mb-1 leading-relaxed'
                      key={item}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {feature.cta && (
                <div className='mt-4 mr-0 ml-auto flex w-fit'>
                  <Link
                    href={`/${partnerSlug}${feature.cta.url}`}
                    className='text-primary hover:underline'
                  >
                    {feature.cta.text}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
});

HomeFeatures.displayName = 'HomeFeatures';

export default HomeFeatures;
