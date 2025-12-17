/**
 * Thông tin liên hệ tập trung cho toàn bộ dự án
 * Tất cả các component và page sẽ import từ file này để đảm bảo tính nhất quán
 */

export const CONTACT_INFO = {
  // Thông tin bệnh viện
  hospital: {
    name: 'Bệnh viện Mắt®',
    nameFull: 'Bệnh viện Mắt - Eye Hospital',
  },

  // Địa chỉ
  address: {
    full: '280 Điện Biên Phủ, Phường Võ Thị Sáu, Quận 3, TP.HCM',
    street: '280 Điện Biên Phủ',
    ward: 'Phường Võ Thị Sáu',
    district: 'Quận 3',
    city: 'TP.HCM',
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
  },

  // Email
  email: {
    primary: 'hcmceyehospital@gmail.com',
  },

  // Website
  website: {
    // Website chính của bệnh viện
    main: {
      url: 'https://benhvienmat.com/',
      label: 'Website chính',
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
