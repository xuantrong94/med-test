import ChatFb from '@/assets/images/home/chat-fb.png';
import FanpageFb from '@/assets/images/home/fanpage-fb.svg';
import Hotline from '@/assets/images/home/hotline.svg';
import ChatZalo from '@/assets/images/home/chat-zalo.jpg';
import { phones, social } from '@/shared/constants/contact';

const supports = [
  {
    img: Hotline,
    title: phones.booking.label,
    ctaLabel: phones.booking.display,
    ctaUrl: phones.booking.tel,
  },
  {
    img: FanpageFb,
    title: social.facebook.label,
    ctaLabel: 'Bấm vào đây',
    ctaUrl: social.facebook.url,
  },
  {
    img: ChatZalo,
    title: social.zalo.label,
    ctaLabel: 'Bấm vào đây',
    ctaUrl: social.zalo.url,
  },
  {
    img: ChatFb,
    title: social.messenger.label,
    ctaLabel: 'Bấm vào đây',
    ctaUrl: social.messenger.url,
  },
];

export default supports;
