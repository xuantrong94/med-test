import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='bg-gray pt-10 pb-10 md:pt-14 md:pb-14 lg:pt-20 lg:pb-18'>
      <div className='mx-auto flex max-w-[1200px] flex-col items-center justify-center gap-y-5 text-sm lg:flex-row lg:gap-6'>
        <div className='flex flex-col gap-5 lg:flex-row lg:items-end lg:gap-6'>
          <div className='flex flex-col justify-center lg:items-start lg:justify-start'>
            <Image
              src={`/logo.svg`}
              alt='logo'
              className='mb-2 h-12 w-auto lg:mb-4'
              width={154}
              height={90}
            />
            <div className='flex flex-col gap-y-2 text-center text-sm lg:text-start'>
              <p className='text-center lg:text-start'>
                Địa chỉ: 280 Điện Biên Phủ, Phường Võ Thị Sáu, Quận 3, TP.HCM
              </p>
              <p>Website: https://benhvienmat.com/</p>
              <p>Email: hcmceyehospital@gmail.com</p>
              <p>Điện thoại: (028).3932.5364</p>
            </div>
          </div>
          <div className='hidden flex-col gap-y-2.5 text-sm lg:flex'>
            <Link
              href={'#'}
              className='whitespace-nowrap'
            >
              Liên hệ
            </Link>
            <Link
              href={'#'}
              className='whitespace-nowrap'
            >
              Điều khoản dịch vụ
            </Link>
            <Link
              href={'#'}
              className='whitespace-nowrap'
            >
              Chính sách bảo mật
            </Link>
            <Link
              href={'#'}
              className='whitespace-nowrap'
            >
              Quy định sử dụng
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-3'>
            <Link
              href={'#'}
              className='flex items-center justify-center'
            >
              <Image
                src={`/dangkybocongthuong.svg`}
                alt='dangkybocongthuong'
                className=''
                width={134}
                height={50}
              />
            </Link>
            <Link
              href={'#'}
              className='flex items-center justify-center'
            >
              <Image
                src={`/thongbaobocongthuong.svg`}
                alt='thongbaobocongthuong'
                className=''
                width={134}
                height={50}
              />
            </Link>
            <Link
              href={'#'}
              className='flex items-center justify-center'
            >
              <Image
                src={`/appstore.svg`}
                alt='appstore'
                className=''
                width={134}
                height={50}
              />
            </Link>
            <Link
              href={'#'}
              className='flex items-center justify-center'
            >
              <Image
                src={`/googleplay.svg`}
                alt='googleplay'
                className=''
                width={134}
                height={50}
              />
            </Link>
          </div>
        </div>
        <div className='flex flex-col gap-y-2 text-center lg:ml-auto lg:text-start'>
          <Image
            src={'/footer_logo.svg'}
            alt='footer logo'
            className='h-10 w-auto'
            width={80}
            height={41}
          />
          <div className='flex flex-col gap-y-2 text-sm'>
            <Link href={'#'}>ĐƯỢC PHÁT TRIỂN BỞI MEDPRO</Link>
            <Link href={'#'}>Website: medpro.vn</Link>
            <Link href={'#'}>Email: cskh@medpro.vn</Link>
            <Link href={'#'}>Điện thoại: 1900 2115</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
