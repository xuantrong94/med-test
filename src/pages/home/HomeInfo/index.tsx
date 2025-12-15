'use client';
import Image from 'next/image';

function HomeInfo() {
  return (
    <section className='container mx-auto flex max-w-[1200px] flex-col justify-center gap-6 px-4 pb-10 md:flex-row md:items-center md:pb-14 lg:pb-20'>
      {/* list 1 */}
      <div className='flex flex-col gap-4 md:items-end'>
        <div className='flex items-center gap-2 md:flex-row-reverse'>
          <Image
            src={'home-info-1.svg'}
            alt='info-1'
            width={40}
            height={40}
            className='aspect-square shrink-0'
            overrideSrc={'home-info-1.svg'}
          />
          <h3 className='text-primary text-base leading-relaxed font-medium md:text-right'>
            Chủ động đặt lịch khám trong vòng 1 phút{' '}
          </h3>
        </div>
        <div className='flex items-center gap-2 md:flex-row-reverse'>
          <Image
            src={'home-info-1.svg'}
            alt='info-1'
            width={40}
            height={40}
            className='aspect-square shrink-0'
            overrideSrc={'home-info-1.svg'}
          />
          <h3 className='text-primary text-base leading-relaxed font-medium md:text-right'>
            Thay đổi & cập nhật lịch khám bệnh{' '}
          </h3>
        </div>
        <div className='flex items-center gap-2 md:flex-row-reverse'>
          <Image
            src={'home-info-3.svg'}
            alt='info-3'
            width={40}
            height={40}
            className='aspect-square shrink-0'
            overrideSrc={'home-info-3.svg'}
          />
          <h3 className='text-primary text-base leading-relaxed font-medium md:text-right'>
            Đặt lịch nhắc nhở uống thuốc{' '}
          </h3>
        </div>
      </div>

      <Image
        src={
          'https://resource.medpro.com.vn/static/images/bvmathcm/web/slide.png?t=21084.808919858144'
        }
        alt='info-center'
        width={512}
        height={876}
        className='hidden h-auto w-auto md:block md:w-[250px] lg:w-[350px]'
        overrideSrc={
          'https://resource.medpro.com.vn/static/images/bvmathcm/web/slide.png?t=21084.808919858144'
        }
      />

      {/* list 2 */}
      <div className='flex flex-col gap-4'>
        <div className='flex items-center gap-2'>
          <Image
            src={'home-info-4.svg'}
            alt='info-1'
            width={40}
            height={40}
            className='aspect-square shrink-0'
            overrideSrc={'home-info-4.svg'}
          />
          <h3 className='text-primary text-base leading-relaxed font-medium'>
            Giao diện thân thiện dễ sử dụng
          </h3>
        </div>
        <div className='flex items-center gap-2'>
          <Image
            src={'home-info-5.svg'}
            alt='info-5'
            width={40}
            height={40}
            className='aspect-square shrink-0'
            overrideSrc={'home-info-5.svg'}
          />
          <h3 className='text-primary text-base leading-relaxed font-medium'>
            Thanh toán nhanh chóng và tiện lợi{' '}
          </h3>
        </div>
        <div className='flex items-center gap-2'>
          <Image
            src={'home-info-6.svg'}
            alt='info-6'
            width={40}
            height={40}
            className='aspect-square shrink-0'
            overrideSrc={'home-info-6.svg'}
          />
          <h3 className='text-primary text-base leading-relaxed font-medium'>
            Lưu trữ và theo dõi hồ sơ sức khỏe của chính bạn{' '}
          </h3>
        </div>
      </div>
    </section>
  );
}

export default HomeInfo;
