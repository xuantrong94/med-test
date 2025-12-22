const gioiThieuContent = (partner: string) => {
  return {
    greeting: (
      <p>
        Chào mừng bạn đến với <strong>{partner}</strong>{' '}
        <span>
          Phần mềm này giúp người bệnh và thân nhân người bệnh có thể thực hiện
          trực tuyến quá trình đăng ký khám bệnh tại bệnh viện ở mọi lúc mọi nơi
          mà không cần phải đến trực tiếp bệnh viện, bao gồm các tiện ích trực
          tuyến sau đây
        </span>
      </p>
    ),
    list: [
      'Đăng ký và chọn ngày, giờ khám bệnh.',
      'Thanh toán chi phí khám bệnh không dùng tiền mặt.',
      'Quản lý cuộc hẹn khám bệnh và tái khám',
      'Quản lý thông tin, dữ liệu khám bệnh của người bệnh.',
    ],
    commitment:
      'Với mong muốn không ngừng cải tiến, nâng cao chất lượng dịch vụ và làm tăng sự hài lòng của thân nhân và người bệnh, Chúng tôi hy vọng sẽ mang lại một phương thức giúp thân nhân và người bệnh có thể tiếp cận với các dịch vụ khám chữa bệnh tại bệnh viện một cách dễ dàng, nhanh chóng và thuận lợi nhất.',
    footer: 'Trân trọng!',
  };
};
export { gioiThieuContent };
