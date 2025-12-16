export const bookingProcess = [
  {
    step: 1,
    title: 'Đặt lịch khám',
    items: [
      'Người dùng truy cập và đăng nhập trên web hoặc ứng dụng di động',
      'Ứng dụng: BV Mắt - Đặt lịch khám bệnh hoặc website https://benhvienmat.medpro.vn',
      'Chọn thông tin khám: chuyên khoa, dịch vụ, ngày khám, giờ khám',
      'Nhập thông tin bệnh nhân bằng số hồ sơ hoặc tạo mới',
    ],
  },
  {
    step: 2,
    title: 'Thanh toán tiền khám',
    items: [
      'Quét QR code',
      'Ví điện tử',
      'Thẻ thanh toán quốc tế (Visa/MasterCard/JCB)',
      'Thẻ ATM nội địa có kích hoạt thanh toán trực tuyến',
      'Thanh toán hộ',
    ],
    note: {
      title: 'Tổng số tiền thanh toán bao gồm',
      items: [
        'Tiền khám theo quy định của bệnh viện',
        'Phí tiện ích: 10.000 đồng (chưa bao gồm VAT và phí xử lý giao dịch)',
        'Phiếu khám điện tử được gửi qua email và hiển thị trên ứng dụng sau khi thanh toán thành công',
      ],
    },
  },
  {
    step: 3,
    title: 'Xác nhận người bệnh đến bệnh viện khám theo hẹn',
    items: [
      'Đến quầy tiếp nhận trước giờ hẹn 15 phút',
      'Xuất trình phiếu khám bệnh điện tử theo hướng dẫn',
    ],
  },
  {
    step: 4,
    title: 'Khám và thực hiện cận lâm sàng',
    items: [
      'Khám tại phòng khám chuyên khoa theo hướng dẫn của nhân viên y tế',
      'Thực hiện cận lâm sàng (nếu có) và đóng phí tại quầy thu ngân',
      'Quay lại phòng khám gặp bác sĩ nhận toa thuốc sau khi có kết quả',
    ],
  },
];
