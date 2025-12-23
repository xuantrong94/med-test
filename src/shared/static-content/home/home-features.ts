import {
  IconHomeFeature1,
  IconHomeFeature2,
} from '@/assets/icons/home-features';

const HOME_FEATURES = [
  {
    icon: IconHomeFeature1,
    title: 'Tra cứu thông tin',
    desc: 'Tra cứu thông tin đặt chỗ, thông tin bệnh nhân, lịch khám ...',
    buttonText: 'Tra cứu',
  },
  {
    icon: IconHomeFeature2,
    title: 'Những vấn đề thường gặp',
    desc: 'Những vấn đề thường gặp, trong quá trình khám & tái khám',
    listItems: [
      'Quản lý thông tin bệnh nhân',
      'Quy trình khám bệnh & nhận phiếu khám bệnh',
      'Hoàn tất thanh toán',
    ],
    cta: {
      text: 'Xem thêm',
      url: '/thac-mac',
    },
  },
];
export default HOME_FEATURES;
