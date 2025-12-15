import ChatFb from '@/assets/images/home/chat-fb.png';
import FanpageFb from '@/assets/images/home/fanpage-fb.svg';
import Hotline from '@/assets/images/home/hotline.svg';
import ChatZalo from '@/assets/images/home/chat-zalo.jpg';

export const data = [
  {
    img: Hotline,
    title: 'Tổng đài đặt lịch khám',
    ctaLabel: '1900-2115',
    ctaUrl: 'tel:19002115',
  },
  {
    img: FanpageFb,
    title: 'Fanpage Facebook',
    ctaLabel: 'Bấm vào đây',
    ctaUrl: 'https://www.facebook.com/www.medpro.vn',
  },
  {
    img: ChatZalo,
    title: 'Hỗ Trợ ZALO',
    ctaLabel: 'Bấm vào đây',
    ctaUrl: 'https://zalo.me/4018184502979486994',
  },
  {
    img: ChatFb,
    title: 'Chat Facebook',
    ctaLabel: 'Bấm vào đây',
    ctaUrl:
      'https://www.messenger.com/t/108646697156703/?messaging_source=source%3Apages%3Amessage_shortlink&source_id=1441792',
  },
];

export type SupportCardProps = (typeof data)[number];
