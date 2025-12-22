/**
 * Thông tin liên hệ tập trung cho toàn bộ dự án
 * Tất cả các component và page sẽ import từ file này để đảm bảo tính nhất quán
 */

export const CONTACT_INFO = {
  // Thông tin bệnh viện
  hospital: {
    name: 'Bệnh viện Mắt®',
    nameFull: 'Bệnh viện Mắt - Eye Hospital',
    bvmathcm: {
      name: 'Bệnh viện Mắt®',
      nameFull: 'Bệnh viện Mắt - Eye Hospital',
    },
    dalieuhcm: {
      name: 'Bệnh viện Da Liễu Thành phố Hồ Chí Minh®',
      nameFull: '',
    },
    nhidong1: {
      name: 'Bệnh viện Nhi Đồng 1®',
      nameFull: '',
    },
    choray: {
      name: 'Bệnh viện Chợ Rẫy®',
      nameFull: '',
    },
  },

  // Địa chỉ
  address: {
    full: '280 Điện Biên Phủ, Phường Võ Thị Sáu, Quận 3, TP.HCM',
    street: '280 Điện Biên Phủ',
    ward: 'Phường Võ Thị Sáu',
    district: 'Quận 3',
    city: 'TP.HCM',
    bvmathcm: {
      full: '280 Điện Biên Phủ, Phường Võ Thị Sáu, Quận 3, TP.HCM',
      street: '280 Điện Biên Phủ',
      ward: 'Phường Võ Thị Sáu',
      district: 'Quận 3',
      city: 'TP.HCM',
    },
    dalieuhcm: {
      full: '2 Nguyễn Thông, Phường 6, Quận 3, TP.HCM',
      street: '2 Nguyễn Thông',
      ward: 'Phường 6',
      district: 'Quận 3',
      city: 'TP.HCM',
    },
    nhidong1: {
      full: '341 Sư Vạn Hạnh, Phường 10, Quận 10, TP.HCM',
      street: '341 Sư Vạn Hạnh',
      ward: 'Phường 10',
      district: 'Quận 10',
      city: 'TP.HCM',
    },
    choray: {
      full: '201B Nguyễn Chí Thanh, Phường 12, Quận 5, TP.HCM',
      street: '201B Nguyễn Chí Thanh',
      ward: 'Phường 12',
      district: 'Quận 5',
      city: 'TP.HCM',
    },
  },

  // Số điện thoại
  phones: {
    // Tổng đài đặt lịch khám
    booking: {
      display: '1900-2115',
      number: '19002115',
      tel: 'tel:19002115',
      label: 'Tổng đài đặt lịch khám',
    },
    // Hotline chuyên môn
    medical: {
      display: '(028).3932.5364',
      number: '02839325364',
      tel: 'tel:02839325364',
      label: 'GIẢI ĐÁP VỀ CHUYÊN MÔN',
    },
    bvmathcm: {
      display: '(028).3932.5356',
      number: '02839325356',
      tel: 'tel:02839325356',
      label: 'GIẢI ĐÁP VỀ CHUYÊN MÔN',
    },
    dalieuhcm: {
      display: '028.3930.1996 - 0901.365.638',
      number: '02839301996 - 0901365638',
      tel: 'tel:02839301996',
      label: 'GIẢI ĐÁP VỀ CHUYÊN MÔN',
    },
    nhidong1: {
      display: '(028) 39271119 - (028) 39272726',
      number: '02839271119 - 02839272726',
      tel: 'tel:02839271119',
      label: 'GIẢI ĐÁP VỀ CHUYÊN MÔN',
    },
    choray: {
      display: '(84-028) 3855 4137',
      number: '03838554137',
      tel: 'tel:03838554137',
      label: 'GIẢI ĐÁP VỀ CHUYÊN MÔN',
    },
  },

  // Email
  email: {
    primary: 'hcmceyehospital@gmail.com',
    bvmathcm: 'hcmceyehospital@gmail.com',
    dalieuhcm: '',
    nhidong1: 'bvnhidong@nhidong.org.vn',
    choray: 'bvchoray@choray.vn',
  },

  // Website
  website: {
    // Website chính của bệnh viện
    main: {
      url: 'https://benhvienmat.com/',
      label: 'Website chính',
    },
    bvmathcm: {
      url: ' http://www.bvdl.org.vn',
      label: 'Website Bệnh viện Mắt TP.HCM',
    },
    dalieuhcm: {
      url: ' http://www.bvdl.org.vn',
      label: 'Website Bệnh viện Da Liễu TP.HCM',
    },
    nhidong1: {
      url: 'http://www.nhidong.org.vn/',
      label: 'Website Bệnh viện Nhi Đồng 1',
    },
    choray: {
      url: 'https://choray.vn',
      label: 'Website Bệnh viện Chợ Rẫy',
    },
    // Website đặt lịch khám bệnh
    booking: {
      url: 'https://benhvienmat.medpro.vn/',
      label: 'Website đặt lịch khám',
    },
  },

  // Social Media
  social: {
    facebook: {
      url: 'https://www.facebook.com/www.medpro.vn',
      label: 'Fanpage Facebook',
    },
    zalo: {
      url: 'https://zalo.me/4018184502979486994',
      label: 'Hỗ Trợ ZALO',
    },
    messenger: {
      url: 'https://www.messenger.com/t/108646697156703/?messaging_source=source%3Apages%3Amessage_shortlink&source_id=1441792',
      label: 'Chat Facebook',
    },
  },

  // Giờ làm việc
  workingHours: {
    days: 'Thứ 2 đến Thứ 7',
    time: '7:30 - 16:30',
    timeStart: 7.5,
    timeEnd: 16.5,
  },
} as const;

export type ContactInfoType = typeof CONTACT_INFO;
export type HospitalKey = Exclude<
  keyof typeof CONTACT_INFO.hospital,
  'name' | 'nameFull'
>;
export type AddressKey = Exclude<
  keyof typeof CONTACT_INFO.address,
  'full' | 'street' | 'ward' | 'district' | 'city'
>;
export type PhoneKey = Exclude<
  keyof typeof CONTACT_INFO.phones,
  'booking' | 'medical'
>;

// Helper functions để dễ sử dụng
export const getWorkingHoursStatus = () => {
  const currentHour = new Date().getHours() + new Date().getMinutes() / 60;
  return (
    currentHour >= CONTACT_INFO.workingHours.timeStart &&
    currentHour <= CONTACT_INFO.workingHours.timeEnd
  );
};

export const formatPhoneNumber = (phone: string) => {
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1).$2.$3');
};

// Export các thông tin phổ biến để dễ import
export const {
  hospital,
  address,
  phones,
  email,
  website,
  social,
  workingHours,
} = CONTACT_INFO;
