import Image from 'next/image';
import HomeLine from '@/assets/images/home/line.png';
import InfoItem from './InfoItem';

const leftInfoItems = [
  {
    id: 1,
    icon: 'home-info-1.svg',
    text: 'Chủ động đặt lịch khám trong vòng 1 phút',
  },
  {
    id: 2,
    icon: 'home-info-1.svg',
    text: 'Thay đổi & cập nhật lịch khám bệnh',
  },
  {
    id: 3,
    icon: 'home-info-3.svg',
    text: 'Đặt lịch nhắc nhở uống thuốc',
  },
];

const rightInfoItems = [
  {
    id: 4,
    icon: 'home-info-4.svg',
    text: 'Giao diện thân thiện dễ sử dụng',
  },
  {
    id: 5,
    icon: 'home-info-5.svg',
    text: 'Thanh toán nhanh chóng và tiện lợi',
  },
  {
    id: 6,
    icon: 'home-info-6.svg',
    text: 'Lưu trữ và theo dõi hồ sơ sức khỏe của chính bạn',
  },
];

const CENTER_IMAGE_URL =
  'https://resource.medpro.com.vn/static/images/bvmathcm/web/slide.png?t=21084.808919858144';

function HomeInfo() {
  return (
    <section className='relative container mx-auto flex max-w-[1200px] flex-col justify-center gap-6 px-4 pb-10 md:flex-row md:items-center md:pb-14 lg:pb-20'>
      <Image
        src={HomeLine}
        alt='home-line'
        width={792}
        height={433}
        className='absolute top-1/2 left-1/2 z-[-1] -translate-x-1/2 -translate-y-1/2'
      />

      {/* list 1 */}
      <div className='flex flex-1 flex-col gap-4 md:items-end'>
        {leftInfoItems.map(item => (
          <InfoItem
            key={item.id}
            {...item}
            reverse
          />
        ))}
      </div>

      <Image
        src={CENTER_IMAGE_URL}
        alt='info-center'
        width={512}
        height={876}
        className='hidden h-auto w-auto shrink-0 md:block md:w-[250px] lg:w-[350px]'
        overrideSrc={CENTER_IMAGE_URL}
      />

      {/* list 2 */}
      <div className='flex flex-1 flex-col gap-4'>
        {rightInfoItems.map(item => (
          <InfoItem
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </section>
  );
}

export default HomeInfo;
