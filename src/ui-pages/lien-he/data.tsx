import IconFb from '@/assets/icons/facebook.svg';
import IconZalo from '@/assets/icons/zalo.svg';
import IconTime from '@/assets/icons/time.svg';
import IconMsg from '@/assets/icons/message.svg';
import IconPhone from '@/assets/icons/phone.svg';
import { address, hospital, phones, social } from '@/shared/constants/contact';
import Image from 'next/image';
import { Hospital, Settings, Stethoscope } from 'lucide-react';
export const officeInfo = [
  {
    title: 'Hỏi đáp nhanh',
    desc: 'Danh sách các câu hỏi đã được hệ thống hóa, bạn có thể tham khảo nhanh',
    icons: [
      {
        icon: (
          <Image
            src={IconMsg}
            alt='Message'
            className='h-10 w-auto lg:h-14'
          />
        ),
        url: '/benh-vien-mat/thac-mac',
      },
    ],
  },
  {
    title: 'Các kênh hỗ trợ',
    desc: 'Liên hệ trực tiếp với chúng tôi qua các kênh hỗ trợ sau',
    icons: [
      {
        icon: (
          <Image
            src={IconFb}
            alt='Facebook'
            className='h-7 w-auto'
          />
        ),
        url: social.facebook.url,
      },
      {
        icon: (
          <Image
            src={IconZalo}
            alt='Zalo'
            className='h-7 w-auto'
          />
        ),
        url: social.zalo.url,
      },
    ],
  },
  {
    title: 'Thời gian làm việc',
    desc: 'Thời gian làm việc từ thứ 2 đến thứ 7',
    icons: [
      {
        icon: (
          <Image
            src={IconTime}
            alt='Time'
            className='h-10 w-auto'
          />
        ),
        url: phones.booking.tel,
      },
    ],
    time: '7:30 - 16:30',
    isInTime: new Date().getHours() >= 7.5 && new Date().getHours() <= 16.5,
  },
];
export const contactInfo = [
  {
    img: <Hospital size={28} />,
    title: hospital.name,
    info: address.full,
  },
  {
    img: <Stethoscope size={28} />,
    title: phones.medical.label,
    info: phones.medical.display,
    url: phones.medical.tel,
  },
  {
    img: <Settings size={28} />,
    title: 'HỖ TRỢ ĐẶT KHÁM',
    info: phones.booking.display,
    url: phones.booking.tel,
  },
];
export type ContactInfo = (typeof contactInfo)[number];
