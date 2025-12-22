import {
  address,
  hospital,
  phones,
  social,
  type HospitalKey,
} from '@/shared/constants/contact';
import Image from 'next/image';
import { Hospital, Settings, Stethoscope } from 'lucide-react';
import {
  IconLienHeFacebook,
  IconLienHeZalo,
  IconLienHeTime,
  IconLienHeMessage,
} from '@/assets/icons/lien-he';

export const officeInfo = [
  {
    title: 'Hỏi đáp nhanh',
    desc: 'Danh sách các câu hỏi đã được hệ thống hóa, bạn có thể tham khảo nhanh',
    icons: [
      {
        icon: (
          <Image
            src={IconLienHeMessage}
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
            src={IconLienHeFacebook}
            alt='Facebook'
            className='h-7 w-auto'
          />
        ),
        url: social.facebook.url,
      },
      {
        icon: (
          <Image
            src={IconLienHeZalo}
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
            src={IconLienHeTime}
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
export const getContactInfo = (keyword: HospitalKey) => [
  {
    img: <Hospital size={28} />,
    title: hospital[keyword]?.name,
    info: address[keyword]?.full,
  },
  {
    img: <Stethoscope size={28} />,
    title: phones[keyword]?.label,
    info: phones[keyword]?.display,
    url: phones[keyword]?.tel,
  },
  {
    img: <Settings size={28} />,
    title: 'HỖ TRỢ ĐẶT KHÁM',
    info: phones.booking.display,
    url: phones.booking.tel,
  },
];
export type ContactInfo = ReturnType<typeof getContactInfo>[number];
