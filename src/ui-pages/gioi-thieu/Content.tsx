// Chào mừng bạn đến với Phần mềm Đăng ký khám bệnh theo hẹn tại Bệnh viện Mắt. Phần mềm này giúp người bệnh và thân nhân người bệnh có thể thực hiện trực tuyến quá trình đăng ký khám bệnh tại bệnh viện ở mọi lúc mọi nơi mà không cần phải đến trực tiếp bệnh viện, bao gồm các tiện ích trực tuyến sau đây:

//  Đăng ký và chọn ngày, giờ khám bệnh.
// Thanh toán chi phí khám bệnh không dùng tiền mặt.
// Quản lý cuộc hẹn khám bệnh và tái khám
// Quản lý thông tin, dữ liệu khám bệnh của người bệnh.
// Với mong muốn không ngừng cải tiến, nâng cao chất lượng dịch vụ và làm tăng sự hài lòng của thân nhân và người bệnh, Chúng tôi hy vọng sẽ mang lại một phương thức giúp thân nhân và người bệnh có thể tiếp cận với các dịch vụ khám chữa bệnh tại bệnh viện một cách dễ dàng, nhanh chóng và thuận lợi nhất.
// Trân trọng!

const gioiThieuContent = {
  greeting: (
    <p>
      Chào mừng bạn đến với{' '}
      <strong>Phần mềm Đăng ký khám bệnh theo hẹn tại Bệnh viện Mắt. </strong>
      Phần mềm này giúp người bệnh và thân nhân người bệnh có thể thực hiện trực
      tuyến quá trình đăng ký khám bệnh tại bệnh viện ở mọi lúc mọi nơi mà không
      cần phải đến trực tiếp bệnh viện, bao gồm các tiện ích trực tuyến sau đây
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

export default async function Content() {
  return (
    <section className='container mt-16 space-y-2 rounded-lg border border-gray-300 bg-white p-5 md:p-10 lg:mt-0 lg:-translate-y-20 lg:p-14'>
      {gioiThieuContent.greeting}
      <ul className='my-3 ml-2 list-inside list-disc space-y-2'>
        {gioiThieuContent.list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p>{gioiThieuContent.commitment}</p>
      <p>{gioiThieuContent.footer}</p>
    </section>
  );
}
