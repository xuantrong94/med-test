'use client';
import {
  IconAppStore,
  IconDangKyBoCongThuong,
  IconGooglePlay,
  IconMedFooterLogo,
  IconThongBaoBoCongThuong,
} from '@/assets/icons/footer';
import { getFooterLogo } from '@/data/footer';
import useGetPartnerSlug from '@/hooks/useGetPartnerSlug';
import { address, email, phones, website } from '@/shared/constants/contact';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  const partnerSlug = useGetPartnerSlug();
  const PartnerLogo = getFooterLogo(partnerSlug);
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
                    src={PartnerLogo}
                    alt='logo'
                    className='mb-2 h-12 w-auto lg:mb-4'
                    width={154}
                    height={90}
                    overrideSrc={PartnerLogo.src}
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
                    href={`/${partnerSlug}/lien-he`}
                    className='hover:text-info text-sm whitespace-nowrap text-inherit no-underline'
                  >
                    Liên hệ
                  </Link>
                  <Link
                    href={`/${partnerSlug}/dieu-khoan-dich-vu`}
                    className='hover:text-info text-sm whitespace-nowrap text-inherit no-underline'
                  >
                    Điều khoản dịch vụ
                  </Link>
                  <Link
                    href={`/${partnerSlug}/chinh-sach-bao-mat`}
                    className='hover:text-info text-sm whitespace-nowrap text-inherit no-underline'
                  >
                    Chính sách bảo mật
                  </Link>
                  <Link
                    href={`/${partnerSlug}/quy-dinh-su-dung`}
                    className='hover:text-info text-sm whitespace-nowrap text-inherit no-underline'
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
                        src={IconDangKyBoCongThuong}
                        alt='dangkybocongthuong'
                        width={134}
                        height={50}
                        overrideSrc={IconDangKyBoCongThuong.src}
                      />
                    </Link>
                  </div>
                  <div className='flex items-center justify-center'>
                    <Link
                      href='#'
                      className='flex items-center justify-center'
                    >
                      <Image
                        src={IconThongBaoBoCongThuong}
                        alt='thongbaobocongthuong'
                        width={134}
                        height={50}
                        overrideSrc={IconThongBaoBoCongThuong.src}
                      />
                    </Link>
                  </div>
                  <div className='flex items-center justify-center'>
                    <Link
                      href='#'
                      className='flex items-center justify-center'
                    >
                      <Image
                        src={IconAppStore}
                        alt='appstore'
                        width={134}
                        height={50}
                        overrideSrc={IconAppStore.src}
                      />
                    </Link>
                  </div>
                  <div className='flex items-center justify-center'>
                    <Link
                      href='#'
                      className='flex items-center justify-center'
                    >
                      <Image
                        src={IconGooglePlay}
                        alt='googleplay'
                        width={134}
                        height={50}
                        overrideSrc={IconGooglePlay.src}
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
                src={IconMedFooterLogo}
                alt='footer logo'
                className='mx-auto h-10 w-auto lg:ml-0'
                width={80}
                height={41}
                overrideSrc={IconMedFooterLogo.src}
              />
              <div className='flex flex-col gap-2'>
                <Link
                  href='#'
                  className='hover:text-info text-sm text-inherit no-underline'
                >
                  ĐƯỢC PHÁT TRIỂN BỞI MEDPRO
                </Link>
                <Link
                  href='https://medpro.vn'
                  className='hover:text-info text-sm text-inherit no-underline'
                >
                  Website: medpro.vn
                </Link>
                <Link
                  href='mailto:cskh@medpro.vn'
                  className='hover:text-info text-sm text-inherit no-underline'
                >
                  Email: cskh@medpro.vn
                </Link>
                <Link
                  href='tel:19002115'
                  className='hover:text-info text-sm text-inherit no-underline'
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
