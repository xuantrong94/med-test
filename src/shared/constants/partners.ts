import {
  ImgBvmathcmHomeBanner,
  ImgChorayHomeBanner,
  ImgDalieuhcmHomeBanner,
  ImgNhidong1HomeBanner,
} from '@/assets/images/home';
import { phones, website } from './contact';

import { IFaq } from '@/data/faq';
import { StaticImageData } from 'next/image';

interface ProcessItem {
  step: number;
  title: string;
  items: string[];
  note?: {
    title: string;
    items: string[];
  };
}

export interface Partner {
  keyword: string;
  slug: string;
  map: string;
  banner: StaticImageData;
  gioithieuContent: string;
  process: ProcessItem[];
  faq: IFaq[];
}

export const PARTNERS: Partner[] = [
  {
    keyword: 'bvmathcm',
    slug: 'benh-vien-mat',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.426826210543!2d106.6849517!3d10.778585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f2579d6bfe9%3A0x35859d11c9f06b3a!2zQuG7h25oIHZp4buHbiBN4bqvdCBUUEhDTQ!5e0!3m2!1svi!2s!4v1765963017490!5m2!1svi!2s',
    banner: ImgBvmathcmHomeBanner,
    gioithieuContent: `Phần mềm Đăng ký khám bệnh theo hẹn tại Bệnh viện Mắt`,
    process: [
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
    ],
    faq: [
      {
        id: 1,
        name: 'Vấn đề chung',
        faq: [
          {
            id: 101,
            question:
              'Đối tượng bệnh nhân nào có thể sử dụng phần mềm để đăng ký khám bệnh?',
            answer: `
                  <p>Tất cả người bệnh đều có thể sử dụng phần mềm để đăng ký khám bệnh.</p>
                  <p>Tuy nhiên, phần mềm chỉ phù hợp cho những người bệnh có kế hoạch khám chữa bệnh chủ động, hoặc tình trạng bệnh KHÔNG khẩn cấp.</p>
                  <p>Trong trường hợp CẤP CỨU, người nhà nên đưa người bệnh đến cơ sở y tế gần nhất hoặc gọi số Hotline: ${phones.bvmathcm.display} để được hỗ trợ.</p>`,
            status: 1,
            category_id: 1,
          },
          {
            id: 102,
            question: 'Đăng ký khám qua phần mềm có tốn phí không?',
            answer: `
                  <p>Có!</p>
                  <p>Hiện tại, khi đăng ký khám bệnh qua phần mềm, ngoài tiền khám bạn phải trả thêm phí tiện ích.</p>`,
            status: 1,
            category_id: 1,
          },
          {
            id: 103,
            question:
              'Các loại tiền và phí khi sử dụng phần mềm để đăng ký khám bệnh?',
            answer: `
                  <p>Tiền khám: là số tiền bạn trả cho việc sử dụng dịch vụ khám chữa bệnh của bệnh viện, số tiền này được thu theo qui định của bệnh viện.</p>
                  <p>Phí tiện ích: là số tiền bạn trả để hỗ trợ cho việc sử dụng dịch vụ đăng ký khám bệnh trực tuyến của phần mềm.</p>`,
            status: 1,
            category_id: 1,
          },
          {
            id: 104,
            question:
              'Tôi có thể bị bệnh viện từ chối khám bệnh, sau khi đã đăng ký khám qua phần mềm không?',
            answer: `
                  <p>Có!</p>
                  <p>Trong trường hợp thông tin thực tế của bạn không trùng khớp với thông tin bệnh nhân in trên phiếu khám bệnh, hoặc bạn thực hiện việc khám chữa bệnh không đúng với thông tin khám trên phiếu khám bệnh.</p>`,
            status: 1,
            category_id: 1,
          },
          {
            id: 105,
            question:
              'Những lí do nào tôi có thể bị bệnh viện từ chối tiếp nhận khám chữa bệnh?',
            answer: `
                  <p>Bạn có thể bị bệnh viện từ chối tiếp nhận khám chữa bệnh với những lí do sau:</p>
                  <ul>
                    <li>Thông tin thực tế của bạn không trùng khớp với thông tin bệnh nhân in trên phiếu khám bệnh:
                      <ul>
                        <li>Họ tên</li>
                        <li>Năm sinh</li>
                        <li>Giới tính</li>
                        <li>Số chứng minh nhân dân hoặc giấy tờ tùy thân...</li>
                      </ul>
                    </li>
                    <li>Bạn thực hiện việc khám chữa bệnh không đúng với thông tin khám trên phiếu khám bệnh:
                      <ul>
                        <li>Không đúng ngày khám</li>
                        <li>Không đúng chuyên khoa</li>
                        <li>Không đúng phòng khám</li>
                        <li>Chưa đến số thứ tự….</li>
                        <li>Thẻ BHYT sai thông tin hoặc hết hạn.</li>
                      </ul>
                    </li>
                  </ul>`,
            status: 1,
            category_id: 1,
          },
          {
            id: 106,
            question:
              'Tôi có thể dùng phần mềm để đăng ký và lấy số thứ tự khám, lịch hẹn trước, sau đó bán lại cho Bệnh nhân không?',
            answer: `
                  <p>Không!</p>
                  <p>Các dịch vụ của phần mềm được xây dựng để phục vụ cho nhu cầu đăng ký khám bệnh của người bệnh, vì mục đích sử dụng cá nhân.</p>
                  <p>Tất cả các hành vi sử dụng dịch vụ của phần mềm vì mục đích thương mại, cho dù dưới bất kỳ hình thức nào, cũng đều không được phép, bị cấm và sẽ chịu hoàn toàn trách nhiệm trước pháp luật.</p>`,
            status: 1,
            category_id: 1,
          },
          {
            id: 107,
            question: 'Tôi có lợi gì khi đăng ký khám bệnh qua phần mềm?',
            answer: `
                  <p>Khi đăng ký khám bệnh trên phần mềm, bạn có thể:</p>
                  <ul>
                    <li>Đăng ký trước ngày khám đến 30 ngày.</li>
                    <li>Chủ động lựa chọn các thông tin khám: bác sĩ khám, ngày khám, chuyên khoa, phòng khám, giờ khám.</li>
                    <li>Thanh toán và nhận phiếu khám bệnh trực tuyến.</li>
                    <li>Tạo, cập nhật hồ sơ và quản lý các phiếu khám bệnh dễ dàng.</li>
                    <li>Được thông báo nhắc tái khám, làm tăng khả năng tuân thủ điều trị.</li>
                    <li>Và quan trọng nhất là bạn thực hiện được tất cả các tính năng trên hoàn toàn trực tuyến ở mọi lúc mọi nơi, mà không cần phải đến bệnh viện để xếp hàng và chờ đợi.</li>
                  </ul>`,
            status: 1,
            category_id: 1,
          },
          {
            id: 108,
            question:
              'Tôi đến bệnh viện trễ hơn so với giờ khám đã đăng ký, vậy tôi có được khám hay không?',
            answer: `
                  <p>Được!</p>
                  <p>Phiếu Khám Bệnh có giá trị sử dụng từ 07h00 – 16h00 của ngày khám.</p>
                  <p>Nếu bạn đến trễ hơn so với giờ khám dự kiến đã đăng ký, nhưng phiếu khám bệnh vẫn còn giá trị sử dụng, thì bạn vẫn được khám.</p>
                  <p>Tuy nhiên, trong trường hợp này bạn vui lòng liên hệ và nghe theo sự hướng dẫn của nhân viên bệnh viện.</p>`,
            status: 1,
            category_id: 1,
          },
          {
            id: 109,
            question: 'Phần mềm có hỗ trợ đăng ký khám 24/7 không?',
            answer: `
                  <p>Có!</p>
                  <p>Phần mềm cho phép bạn thực hiện việc đăng ký khám vào bất kỳ thời điểm nào trong ngày và bất cứ ngày nào trong tuần, đảm bảo bạn có thể sử dụng Phần mềm để đăng ký khám bệnh mọi lúc mọi nơi, mà không cần phải đến trực tiếp bệnh viện để thực hiện.</p>`,
            status: 1,
            category_id: 1,
          },
          {
            id: 110,
            question:
              'Tại sao sau khi đăng ký khám thành công tôi không nhận được phiếu khám bệnh gửi qua email?',
            answer: `
                  <p>Nếu hồ sơ bệnh nhân của bạn có địa chỉ email chính xác, thì sau khi đăng ký khám bệnh thành công, ngay lập tức phần mềm sẽ gửi phiếu khám bệnh đến địa chỉ email của bạn.</p>
                  <p>Bạn vui lòng kiểm tra hộp thư đến hoặc thư rác (Spam) để tìm thấy email phiếu khám bệnh của mình.</p>
                  <p>Trường hợp đã kiểm tra kỹ nhưng vẫn không thấy email gửi phiếu khám bệnh, vui lòng liên hệ tổng đài ${phones.booking.number} chúng tôi sẽ hỗ trợ bạn.</p>`,
            status: 1,
            category_id: 1,
          },
          {
            id: 111,
            question:
              'Sau khi đã đăng ký khám thành công qua phần mềm, có thể hủy phiếu khám không?',
            answer: `
                  <p>Bạn có thể chủ động hủy phiếu khám đã đặt thành công, nếu kế hoạch khám chữa bệnh cá nhân có thay đổi.</p>
                  <p>Hoặc trong 1 số trường hợp, bệnh viện có quyền từ chối phiếu khám nếu có sự sai lệch thông tin bệnh nhân, sai thông tin phiếu khám, hoặc có vấn đề bất khả kháng phát sinh từ phía bệnh viện.</p>
                  <p>Bạn đều sẽ được hoàn tiền lại nếu chưa thực sự đặt khám và khám thành công (nhưng phải tuân theo quy định của phần mềm và bệnh viện).</p>`,
            status: 1,
            category_id: 1,
          },
          {
            id: 112,
            question:
              'Bác sĩ có hẹn lịch tái khám, nhưng vào phần mềm đăng ký không có, tôi phải làm sao để đăng ký tái khám?',
            answer: `
                  <p>Lịch khám bác sĩ đôi lúc sẽ có thay đổi, nên bệnh nhân theo dõi lịch khám trên ứng dụng hoặc liên hệ trực tiếp bệnh viện.</p>`,
            status: 1,
            category_id: 1,
          },
          {
            id: 113,
            question:
              'Tôi đăng ký mà báo là quý khách chưa đăng ký dịch vụ hoặc dịch vụ không hoạt động?',
            answer: `
                  <p>Vui lòng liên hệ trực tiếp tổng đài ${phones.booking.number}.</p>`,
            status: 1,
            category_id: 1,
          },
          {
            id: 114,
            question: 'Tôi bị bệnh về Mắt nhưng tôi phải đăng ký khoa nào?',
            answer: `
                  <p>Vui lòng điện thoại tổng đài bệnh viện hoặc ${phones.booking.number} để được tư vấn chọn chuyên khoa.</p>`,
            status: 1,
            category_id: 1,
          },
          {
            id: 115,
            question:
              'Tôi đăng ký trước nhưng mai tôi bận không đến khám được tôi muốn hủy phiếu làm sao?',
            answer: `
                  <p>Bạn vui lòng thực hiện việc hủy phiếu khám đã đặt trước 16h30 của ngày liền trước ngày khám để nhận lại tiền hoàn. Thao tác hủy phiếu khám cụ thể như sau:</p>
                  <p>
                    <strong>Website: </strong>Đăng nhập website ${website.booking.url} > chọn thông tin tài khoản > chọn quản lý phiếu khám bệnh > chọn phiếu khám bệnh muốn hủy > bấm hủy phiếu.
                  </p>
                  <p>
                    <strong>App: </strong>Mở ứng dụng bệnh viện Mắt > Chọn phiếu khám bệnh > chọn phiếu khám bệnh muốn hủy > bấm hủy phiếu.
                  </p>`,
            status: 1,
            category_id: 1,
          },
        ],
      },
      {
        id: 2,
        name: 'Vấn đề tài khoản',
        faq: [
          {
            id: 201,
            question:
              '“Mã Số Bệnh Nhân” là gì? Làm sao tôi có thể biết được mã số bệnh nhân của mình?',
            answer: `<p>Mã số bệnh nhân là số hồ sơ mà bệnh viện dùng để quản lý thông tin của bạn trên hệ thống dữ liệu của bệnh viện.</p>
                  <p>Để biết được mã số bệnh nhân của mình, bạn có thể tham khảo gợi ý về cách tìm mã số bệnh nhân, và tìm thấy trong các loại giấy tờ như: toa thuốc, phiếu chỉ định cận lâm sàng, các biên lai thu tiền…</p>`,
            status: 1,
            category_id: 2,
          },
          {
            id: 202,
            question: 'Tôi quên Mã Số Bệnh Nhân của mình, phải làm sao?',
            answer: `<p>Nếu bạn đã từng thực hiện việc khám chữa bệnh tại bệnh viện, đồng nghĩa với việc bạn đã có “mã số bệnh nhân” trên hệ thống của bệnh viện.</p>
                  <ul>
                    <li>Xem qua gợi ý về cách tìm lại mã số bệnh nhân, và tìm lại trong các loại giấy tờ khám chữa bệnh của mình.</li>
                    <li>Hoặc mở tính năng "Tôi quên mã số bệnh nhân" > nhập chính xác các thông tin yêu cầu > bấm "Xác nhận" > và chọn hồ sơ của mình trong danh sách kết quả.</li>
                  </ul>`,
            status: 1,
            category_id: 2,
          },
          {
            id: 203,
            question: 'Làm sao tôi biết mình đã có Mã Số Bệnh Nhân chưa?',
            answer: `<p>Nếu bạn đã từng thực hiện việc khám chữa bệnh tại bệnh viện, đồng nghĩa với việc bạn đã có “mã số bệnh nhân” trên hệ thống của bệnh viện.</p>
                  <p>Khi đó, hãy tìm lại mã số bệnh nhân của bạn trong các loại giấy tờ khám chữa bệnh, hoặc bạn có thể sử dụng tính năng “Tôi quên mã số bệnh nhân” để tìm lại mã số bệnh nhân của mình ngay trên phần mềm.</p>`,
            status: 1,
            category_id: 2,
          },
          {
            id: 204,
            question:
              'Tôi có thể chọn tùy ý một hồ sơ bệnh nhân của người khác để đăng ký khám bệnh cho mình không?',
            answer: `<p>Không!</p>
                  <p>Trong trường hợp bạn cố tình hay nhầm lẫn dùng hồ sơ bệnh nhân của người khác để đăng ký khám bệnh cho mình, là đã vi phạm điều khoản sử dụng của phần mềm. Khi đó, bạn sẽ bị bệnh viện từ chối khám chữa bệnh, chịu hoàn toàn những thiệt hại và tùy mức độ có thể chịu trách nhiệm trước pháp luật.</p>
                  <p>Vì vậy, khi đăng ký khám bệnh bạn vui lòng chọn/nhập và kiểm tra chính xác hồ sơ bệnh nhân của mình!</p>`,
            status: 1,
            category_id: 2,
          },
        ],
      },
      {
        id: 3,
        name: 'Vấn đề về quy trình đặt khám',
        faq: [
          {
            id: 301,
            question: 'Bệnh viện có hỗ trợ khám BHYT không?',
            answer: `<p>Có!</p>
                  <p>BN vui lòng mang theo thẻ BHYT còn hạn, hợp lệ, có giấy chuyển tuyến theo quy định.</p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 302,
            question:
              'Có thể đăng ký khám bệnh trong ngày bằng phần mềm không?',
            answer: `<p>Có!</p>
                  <p>Hiện tại phần mềm có hỗ trợ bạn đăng ký khám bệnh ngay trong ngày.</p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 303,
            question: 'Phần mềm cho phép đăng ký khám bệnh trước bao lâu?',
            answer: `<p>Hiện tại, bạn có thể sử dụng phần mềm để đăng ký trước ngày khám 30 ngày.</p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 304,
            question: 'Hủy đăng ký khám đã đặt qua phần mềm, phải làm sao?',
            answer: `<p>Để hủy phiếu khám bệnh đã đăng ký, bạn vui lòng:
                  <ul>
                    <li>Thực hiện việc hủy phiếu khám bệnh trước 16h của ngày trước ngày khám.</li>
                    <li>Và thao tác theo trình tự: Đăng nhập phần mềm > Thông tin tài khoản > Quản lý phiếu khám bệnh > Chọn phiếu khám bệnh muốn hủy > Chọn hủy phiếu khám bệnh > Xác nhận hủy.</li>
                  </ul></p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 305,
            question:
              'Tôi có thể thay đổi thông tin khám đã đặt qua phần mềm không?',
            answer: `<p>Bạn không thể thay đổi thông tin khám trên phiếu khám bệnh đã đặt.</p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 306,
            question: 'Phần mềm có xác minh bảo hiểm y tế trực tuyến không?',
            answer: `<p>Có, tuy nhiên chỉ kiểm tra tại thời điểm hiện tại đăng ký. Nhưng để được hưởng BHYT theo quy định, bạn sẽ được kiểm tra thông tin và xác minh tại bệnh viện.</p>
                  <p>Để xác minh BHYT, khi đi khám bạn phải mang đầy đủ các loại giấy tờ cần thiết, đến các quầy tiếp nhận.</p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 307,
            question:
              'Tôi có thể dùng phần mềm đăng ký khám bệnh cho người thân được không?',
            answer: `<p>Được!</p>
                  <p>Bạn có thể dùng phần mềm để đăng ký khám bệnh cho người thân của mình. Nhưng phải đảm bảo nhập chính xác thông tin người thân của bạn trong phần thông tin bệnh nhân khi đăng ký.</p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 308,
            question:
              'Làm sao có thể chọn đúng chuyên khoa để đăng ký khám qua phần mềm?',
            answer: `<p>Trường hợp tái khám, bạn chỉ việc chọn đúng chuyên khoa của lần khám trước.</p>
                  <p>Trường hợp khám mới:</p>
                  <ul>
                    <li>Nếu biết chắc chuyên khoa mình muốn đăng ký khám, bạn chỉ việc tìm chọn chuyên khoa đó trong danh sách.</li>
                    <li>Nếu chưa biết chuyên khoa nào phù hợp, bạn có thể gọi vào tổng đài tư vấn 19002115 hoặc tổng đài bệnh viện để các bác sĩ tư vấn giúp bạn chọn chuyên khoa phù hợp.</li>
                  </ul>
                  `,
            status: 1,
            category_id: 3,
          },
          {
            id: 309,
            question:
              'Tại sao tôi phải cung cấp chứng minh nhân nhân hoặc giấy tờ tùy thân khi đăng ký khám bệnh qua phần mềm?',
            answer: `<p>Khi đăng ký khám bệnh trên phần mềm, bạn phải cung cấp thông tin về chứng minh nhân dân hoặc giấy tờ tùy thân, để bệnh viện làm cơ sở đối chiếu đảm bảo xác nhận đúng người bệnh in trên phiếu khám bệnh.</p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 310,
            question:
              'Tôi sẽ được khám bệnh vào đúng thời gian đã chọn, sau khi đăng ký khám qua phần mềm đúng không?',
            answer: `<p>Có thể!</p>
                  <p>Thời gian bạn chọn khi đăng ký khám, được xem là thời gian khám bệnh dự kiến.</p>
                  <p>Do đặc thù của công tác khám chữa bệnh, chúng tôi không chắc chắn là bạn sẽ được khám vào đúng thời gian dự kiến đã chọn. Tuy nhiên, chúng tôi sẽ cố gắng cải thiện tốt nhất vấn đề này, giúp bạn có thể khám bệnh vào đúng thời gian dự kiến đã chọn.</p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 311,
            question:
              'Ngoài phiếu khám bệnh điện tử, tôi phải mang theo những giấy tờ gì khi đến bệnh viện để khám bệnh?',
            answer: `
                  <p>Khi đến bệnh viện để khám chữa bệnh, bạn phải mang theo đầy đủ:</p>
                  <ul>
                    <li>Phiếu Khám Bệnh điện tử.</li>
                    <li>Sổ khám bệnh.</li>
                    <li>Giấy tờ tùy thân (cmnd, hộ chiếu…).</li>
                    <li>Các toa thuốc hoặc kết quả xét nghiệm gần nhất.</li>
                    <li>Nếu là Đối Tượng BHYT: bạn phải mang theo các giấy tờ để xác minh BHYT (thẻ BHYT, giấy chuyển tuyến…)</li>
                  </ul>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 312,
            question:
              'Làm sao để tôi có thể tìm lại phiếu khám bệnh đã từng đăng ký?',
            answer: `
                  <p>Trong trường hợp cần tìm lại phiếu khám bệnh, bạn có thể:</p>
                  <ul>
                    <li>Đăng nhập phần mềm > Thông Tin Tài Khoản > Quản Lý Phiếu Khám Bệnh > lọc theo bệnh nhân có phiếu khám bệnh cần tìm.</li>
                    <li>Kiểm tra lại hộp thư đến, và thư rác (Spam) trong địa chỉ email.</li>
                    <li>Kiểm trai lại tin nhắn trên điện thoại di động.</li>
                  </ul>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 313,
            question:
              'Đăng ký khám qua phần mềm thì khi nào tôi mới nhận được phiếu khám bệnh?',
            answer: `
                  <p>Sau khi thanh toán thành công, bạn sẽ nhận được phiếu khám bệnh ngay lập tức trên phần mềm và qua email (nếu hồ sơ bệnh nhân của bạn có thông tin chính xác về địa chỉ email).</p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 314,
            question: 'Phiếu khám bệnh có giá trị sử dụng bao lâu?',
            answer: `
                  <p>Phiếu khám bệnh chỉ có giá trị sử dụng từ 07:00 – 16h:00 của ngày khám in trên phiếu.</p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 315,
            question:
              'Tôi có thể đăng ký khám cho nhiều bệnh nhân trên 1 phiếu khám bệnh qua phần mềm được không?',
            answer: `
                  <p>Không!</p>
                  <p>Trong cùng một lượt đăng ký khám, bạn chỉ được chọn 01 hồ sơ bệnh nhân duy nhất.</p>
                  <p>Nếu muốn đăng ký khám thêm cho một người bệnh khác, bạn vui lòng thực hiện lượt đăng ký khám mới cho người bệnh đó.</p>
                  `,
            status: 1,
            category_id: 3,
          },
          {
            id: 316,
            question:
              'Tôi có thể đăng ký nhiều chuyên khoa cho cùng một bệnh nhân trên cùng một phiếu khám bệnh được không?',
            answer: `
                  <p>Được!</p>
                  <p>Trong một lượt đăng ký khám, bạn có thể đăng ký nhiều chuyên khoa khác nhau, tuy nhiên các chuyên khoa này phải được đăng ký cho cùng một người bệnh trong cùng một ngày khám duy nhất.</p>
                  `,
            status: 1,
            category_id: 3,
          },
          {
            id: 317,
            question:
              'Tôi có thể đăng ký nhiều ngày khám khác nhau trên cùng một phiếu khám bệnh được không?',
            answer: `
                  <p>Không!</p>
                  <p>Trong một lượt đăng ký khám, bạn chỉ có thể chọn đăng ký khám cho một ngày duy nhất.</p>
                  <p>Nếu muốn đăng ký khám thêm vào ngày khác, bạn vui lòng thực hiện thêm một lượt đăng ký khám mới.</p>
                  `,
            status: 1,
            category_id: 3,
          },
          {
            id: 318,
            question: 'Tôi đăng ký khám nhưng không hủy phiếu được?',
            answer: `
                  <p>Thời gian quy định hủy phiếu phải được thực hiện trước 16g của ngày trước ngày khám.</p>
                  `,
            status: 1,
            category_id: 3,
          },
          {
            id: 319,
            question:
              'Tôi đăng ký đã bị trừ tiền nhưng sao không nhận được phiếu khám bệnh',
            answer: `
                  <p>Bạn vui lòng kiểm tra trong phần thông tin tài khoản xem có mã phiếu khám bệnh không? Nếu không vui lòng gọi điện tổng đài 19002115 để được hỗ trợ.</p>
                  `,
            status: 1,
            category_id: 3,
          },
          {
            id: 320,
            question:
              'Tôi đã đăng ký thành công vậy khi đi khám tôi có phải xếp hàng gì không?',
            answer: `
                  <p>Có thể!</p>
                  <p>Tuỳ thuộc vào lượng khám bệnh trong ngày. Tuy nhiên bạn đã đặt lịch hẹn rồi thì sẽ được tiếp nhận ưu tiên theo giờ dự kiến đăng ký.</p>
                  `,
            status: 1,
            category_id: 3,
          },
          {
            id: 321,
            question:
              'Tôi đăng ký và có lịch hẹn rồi, vậy đến ngày khám tôi lên thẳng phòng khám phải không?',
            answer: `
                  <p>Không!</p>
                  <p>BN vui lòng đọc kỹ thông tin hướng dẫn ghi trên phiếu khám bệnh và đến đúng quầy tiếp nhận được hướng dẫn ghi trên phiếu.</p>
                  `,
            status: 1,
            category_id: 3,
          },
          {
            id: 322,
            question:
              'Khi đăng ký xong nhận được thông báo thời gian bạn chọn đã hết tôi phải làm sao?',
            answer: `
                  <p>Khi bạn nhận được thông báo đó nghĩa là khung giờ bạn chọn đã hết số, bạn vui lòng chọn sang khung giờ sau.</p>
                  `,
            status: 1,
            category_id: 3,
          },
        ],
      },
      {
        id: 4,
        name: 'Vấn đề về thanh toán',
        faq: [
          {
            id: 401,
            question: 'Điều kiện để được hoàn tiền là gì?',
            answer: `
                  <p>Bạn chỉ được hoàn tiền khi thực hiện thành công yêu cầu Hủy Phiếu Khám Bệnh.</p>
                  <p>Vì vậy vui lòng tham khảo quy định Hủy Phiếu Khám Bệnh trong phần Quy Định Sử Dụng Phầm Mềm.</p>`,
            status: 1,
            category_id: 4,
          },
          {
            id: 402,
            question:
              'Hoàn tiền như thế nào? Bao lâu thì tôi nhận lại được tiền hoàn?',
            answer: `
                  <p>Khi bạn thực hiện việc thanh toán bằng phương thức và số tài khoản nào, thì phần mềm sẽ hoàn tiền lại cho bạn bằng đúng phương thức và số tài khoản đã dùng để thanh toán.</p>
                  <p>Thời gian bạn nhận được tiền hoàn thông thường được quy định như sau:</p>
                  <ul>
                    <li>Thẻ ATM nội địa:  5 - 30 ngày làm việc.</li>
                    <li>Thẻ tín dụng Visa, MasterCard: 5 - 45 ngÀy làm việc.</li>
                    <li>Ví điện tử 3 - 7 ngày làm việc.</li>
                  </ul>
                  <p>Tính từ thời điểm bạn thực hiện Hủy Phiếu Khám Bệnh thành công, nếu quá thời gian trên bạn vẫn chưa nhận được tiền hoàn, vui lòng liên hệ tổng đài 1900 2115 chúng tôi sẽ hỗ trợ bạn.</p>`,
            status: 1,
            category_id: 4,
          },
          {
            id: 403,
            question:
              'Tôi có thể thanh toán tiền khám và phí tiện ích khi sử dụng phần mềm bằng cách nào?',
            answer: `
                  <p>Bạn có thể thanh toán tiền khám và phí tiện ích bằng cách thanh toán trực tuyến qua ba phương thức:</p>
                  <ul>
                  <li>Thanh toán bằng thẻ khám bệnh của bệnh viện.</li>
                  <li>Thanh toán bằng ATM nội địa (đảm bảo thẻ ATM đã được kích hoạt tính năng thanh toán trực tuyến).</li>
                  <li>Thanh toán bằng các thẻ Visa/ MasterCard.</li>
                  <li>Chuyển khoản.</li>
                  <li>Nhờ người thân thanh toán hộ.</li>
                  </ul>`,
            status: 1,
            category_id: 4,
          },
          {
            id: 404,
            question:
              'Thông tin thanh toán của tôi có bị lưu lại hoặc bị lộ khi tôi tiến hành thanh toán trên phần mềm không?',
            answer: `
                  <p>Không!</p>
                  <p>Phần mềm hoàn toàn không lưu lại, hoặc tiết lộ bất kỳ thông tin thanh toán nào của bạn.</p>
                  <p>Sau khi bạn chọn phương thức thanh toán phù hợp. Phần mềm sẽ chuyển bạn đến giao diện của cổng thanh toán để nhập các thông tin cần thiết và thực hiện việc thanh toán. Vì vậy, phần mềm hoàn toàn không lưu lại bất kỳ thông tin thanh toán nào của bạn.</p>`,
            status: 1,
            category_id: 4,
          },
          {
            id: 405,
            question:
              'Phần mềm có hỗ trợ thanh toán tiền làm dịch vụ cận lâm sàng, tiền viện phí, tiền thuốc, hay các khoản chi phí khác ngoài tiền khám bệnh không?',
            answer: `
                  <p>Chưa!</p>
                  <p>Phần mềm sẽ xây dựng những tính năng trên trong thời gian sớm nhất. Còn hiện tại, phần mềm chỉ hỗ trợ bệnh nhân thanh toán tiền khám cho các chuyên khoa đã đăng ký.</p>
                  <p>Trong quá trình khám, nếu có phát sinh thêm các chi phí cận lâm sàng, tiền thuốc hay các loại phí điều trị khác. Người dùng vui lòng thanh toán tại các quầy thu ngân của bệnh viện.</p>`,
            status: 1,
            category_id: 4,
          },
          {
            id: 406,
            question:
              'Tôi đăng nhập đúng tên tài khoản nhưng không thanh toán được?',
            answer: `
                  <p>Đối với thẻ khám bệnh/ATM nội địa phải đảm bảo đã kích hoạt tính năng thanh toán trực tuyến (internet banking) thì mới có thể thanh toán được. Nếu thẻ của bạn chưa kích hoạt TTTT thì vui lòng liên hệ với ngân hàng phát hành thẻ của bạn để đăng ký.</p>
                  <p>Nếu thẻ của bạn đã đăng ký TTTT và nhập chính xác thông tin thanh toán nhưng vẫn không thanh toán được, vui lòng liên hệ 19002115 chúng tôi sẽ hỗ trợ bạn.</p>`,
            status: 1,
            category_id: 4,
          },
          {
            id: 407,
            question:
              'Tôi đăng ký nhưng đến bước thanh toán lại thanh toán không được?',
            answer: `
                  <p>Bạn vui lòng kiểm tra lại thẻ đã đăng ký chức năng thanh toán trực tuyến chưa? Nếu đã đăng ký mà vẫn không thanh toán được, vui lòng liên hệ 19002115 để được hỗ trợ.</p>`,
            status: 1,
            category_id: 4,
          },
          {
            id: 408,
            question:
              'Tôi muốn đăng ký khám online nhưng đến trực tiếp bệnh viện để thanh toán được không?',
            answer: `
                  <p>Không !</p>
                  <p>Hiện tại khi đặt khám trên phần mềm bạn vui lòng hoàn tất quy trình thanh toán ngay trên phần mềm để được nhận phiếu khám bệnh.</p>`,
            status: 1,
            category_id: 4,
          },
          {
            id: 409,
            question:
              'Tôi nhập tài khoản thẻ nhưng bấm xác thực hoài không được?',
            answer: `
                  <p>Vui lòng kiểm tra chính xác thông tin thẻ đã nhập. Trường hợp vẫn bị lỗi, hãy chụp ảnh màn hình và gửi qua email, chúng tôi sẽ hỗ trợ bạn.</p>`,
            status: 1,
            category_id: 4,
          },
          {
            id: 410,
            question:
              'Tôi đăng ký thanh toán bằng thẻ ngân hàng HSBC đã bị trừ tiền nhưng không nhận được phiếu?',
            answer: `
                  <p>Sau khi đăng ký khám và thanh toán thành công, phần mềm sẽ gửi phiếu khám bệnh ngay cho bạn. Trường hợp đã đăng ký khám và thanh toán thành công nhưng chưa nhận được phiếu khám bệnh, vui lòng liên hệ ngay 19002115 chúng tôi sẽ hỗ trợ bạn.</p>`,
            status: 1,
            category_id: 4,
          },
          {
            id: 411,
            question:
              'Sau khi nhập thông tin thẻ, nhập OTP xong nhận được thông báo trạng thái không hợp lệ tôi phải làm sao?',
            answer: `
                  <p>Do thời gian bạn nhập OTP quá lâu nên sẽ nhận được thông báo trên, bạn vui lòng thao tác thanh toán lại.</p>`,
            status: 1,
            category_id: 4,
          },
          {
            id: 412,
            question:
              'Tôi nhận được thông báo lịch khám bị hủy nhưng thẻ tôi vẫn bị trừ tiền?',
            answer: `
                  <p>Đây là do lỗi của cổng thanh toán, số tiền bạn sẽ được ngân hàng hoàn lại sau. Bạn vui lòng thao tác đăng ký lại, và nếu được, bạn đổi sang thẻ khác để thanh toán.</p>`,
            status: 1,
            category_id: 4,
          },
          {
            id: 413,
            question:
              'Tôi đã đến ngân hàng Viettin để đăng ký chức năng thanh toán trực tuyến cho thẻ khám bệnh nhưng ngân hàng báo không được?',
            answer: `
                  <p>Khi kích hoạt chức năng TTTT, ngân hàng yêu cầu phải đích thân chủ thẻ mang thẻ và chứng minh nhân dân đến để đăng ký. Nếu bạn là chủ thẻ mà vẫn không đăng ký được, bạn vui lòng gọi tổng đài 19002115 để được hỗ trợ.</p>`,
            status: 1,
            category_id: 4,
          },
        ],
      },
    ],
  },
  {
    keyword: 'dalieuhcm',
    slug: 'benh-vien-da-lieu',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.448176009465!2d106.68480041526027!3d10.776945462129946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f251ff33743%3A0x13e32b16699020bb!2zQuG7h25oIHZp4buHbiBEYSBsaeG7hXUgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5o!5e0!3m2!1svi!2s!4v1605856153767!5m2!1svi!2s',
    banner: ImgDalieuhcmHomeBanner,
    gioithieuContent: `Phần mềm Đăng ký khám bệnh theo hẹn tại Bệnh viện Da Liễu`,
    process: [
      {
        step: 1,
        title: 'Đặt lịch khám',
        items: [
          'Người dùng truy cập và đăng nhập trên web hoặc ứng dụng di động',
          'Ứng dụng di động: "Bệnh viện Da Liễu Thành phố Hồ Chí Minh" hoặc website: "https://dalieu.medpro.vn"',
          'Chọn thông tin khám: chuyên khoa, dịch vụ, ngày khám, giờ khám',
          'Nhập thông tin bệnh nhân bằng số hồ sơ hoặc tạo mới',
        ],
      },
      {
        step: 2,
        title: 'Thanh toán tiền khám',
        items: [
          'Người dùng chọn và thực hiện thanh toán qua một trong các phương thức có tích hợp trên phần mềm:',
          'Ví điện tử',
          'Thẻ thanh toán quốc tế (Visa/MasterCard/JCB)',
          'Thẻ ATM nội địa có kích hoạt thanh toán trực tuyến',
        ],
        note: {
          title: 'Tổng số tiền thanh toán bao gồm',
          items: [
            'Tiền khám: dịch vụ theo quy định của bệnh viện.',
            'Phí tiện ích: 10.000 đồng',
            'Sau khi thanh toán thành công Phiếu khám điện tử sẽ được gửi qua email, tin nhắn sms và trên phần mềm.',
          ],
        },
      },
      {
        step: 3,
        title: 'Xác nhận người bệnh đến bệnh viện khám theo hẹn',
        items: [
          'Sau khi đặt khám thành công phiếu khám điện tử sẽ được gửi ngay qua email, tin nhắn sms và trên phần mềm.',
          'Đến ngày khám, quý khách vui lòng đến cửa tiếp nhận số 1 để được hướng dẫn vào phòng khám.',
        ],
      },
      {
        step: 4,
        title: 'Khám và thực hiện cận lâm sàng',
        items: [
          'Người bệnh khám tại các phòng khám chuyên khoa theo sự hướng dẫn của nhân viên y tế.',
          'Thực hiện cận lâm sàng (nếu có) và đóng phí tại quầy thu ngân',
          'Khi đủ kết quả cận lâm sàng, người bệnh quay lại phòng khám gặp Bác sĩ nhận toa thuốc.',
        ],
      },
    ],
    faq: [
      {
        id: 1,
        name: 'Vấn đề chung',
        faq: [
          {
            id: 101,
            question:
              'Lợi ích khi sử dụng phần mềm đăng ký khám bệnh trực tuyến này là gì?',
            answer: `<p>Đặt lịch kh&aacute;m bệnh theo hẹn, mọi l&uacute;c mọi nơi, m&agrave; kh&ocirc;ng cần đến bệnh viện</p>
              <ul>
              <li>Kh&ocirc;ng xếp h&agrave;ng chờ đợi để lấy số tiếp nhận kh&aacute;m bệnhd</li>
              <li>Giảm thời gian chờ kh&aacute;m tại bệnh viện.</li>
              <li>Thanh to&aacute;n trực tuyến từ xa, kh&ocirc;ng sử dụng tiền mặt</li>
              <li>Nhận th&ocirc;ng tin phiếu kh&aacute;m bệnh điện tử qua phần mềm</li>
              <li>Chủ động chọn lịch kh&aacute;m ( ng&agrave;y kh&aacute;m, khung giờ kh&aacute;m, b&aacute;c sỹ kh&aacute;m )</li>
              <li>Nhắc lịch t&aacute;i kh&aacute;m, đặt lịch t&aacute;i kh&aacute;m tự động</li>
              <li>Tra cứu kết quả kh&aacute;m chữa bệnh trực tuyến qua phần mềm.</li>
              <li>Thanh to&aacute;n viện ph&iacute;, chi ph&iacute; kh&aacute;m chữa bệnh trực tuyến, mọi l&uacute;c mọi nơi</li>
              <li>Dễ d&agrave;ng tiếp cận v&agrave; nhận c&aacute;c th&ocirc;ng b&aacute;o mới, th&ocirc;ng tin từ bệnh viện</li>
              </ul>`,
            status: 1,
            category_id: 1,
          },
          {
            id: 102,
            question:
              'Làm sao để sử dụng được phần mềm đăng ký khám bệnh trực tuyến?',
            answer: `<p>
              <ul>
              <li>C&oacute; thể truy cập v&agrave; sử dụng phần mềm tr&ecirc;n tất cả thiết bị c&oacute; thể truy cập mạng internet. ( 3G,4G,5G,Wifi, d&acirc;y mạng&hellip;..)</li>
              <li>M&aacute;y t&iacute;nh b&agrave;n, laptop: truy cập website</li>
              <li>Hầu hết điện thoại th&ocirc;ng minh: tải ứng dụng phần mềm tại kho tải Gplay hoặc AppStore</li>
              <li>M&aacute;y t&iacute;nh bảng v&agrave; c&aacute;c thiết bị kh&aacute;c &hellip;&hellip;</li>
              </ul>
              </p>`,
            status: 1,
            category_id: 1,
          },
          {
            id: 103,
            question: 'Đăng ký khám bệnh online có mất phí không?',
            answer: `<ul>
              <li>C&oacute; ph&iacute; tiện &iacute;ch, khi sử dụng dịch vụ đăng k&yacute; kh&aacute;m bệnh trực tuyến qua phần mềm ( tương tự ph&iacute; cước viễn th&ocirc;ng qua tổng đ&agrave;i )</li>
              <li>Hiện tại chỉ mất ph&iacute; khi đăng k&yacute; kh&aacute;m bệnh th&agrave;nh c&ocirc;ng, ngo&agrave;i ra việc sử dụng ứng dụng v&agrave; c&aacute;c t&iacute;nh năng kh&aacute;c l&agrave; ho&agrave;n to&agrave;n miễn ph&iacute;.</li>
              </ul>`,
            status: 1,
            category_id: 1,
          },
          {
            id: 104,
            question:
              'Tôi có thể dùng phần mềm để đăng ký và lấy số thứ tự khám cho bệnh nhân khác không?',
            answer: `<ul>
              <li>Phần mềm khuyến c&aacute;o người d&acirc;n, tự sử dụng phần mềm để đăng k&yacute; kh&aacute;m bệnh cho bản th&acirc;n. Để tự quản l&yacute; th&ocirc;ng tin, hồ sơ bệnh, lịch sử kh&aacute;m chữa bệnh, kết quả kh&aacute;m chữa bệnh&hellip;</li>
              <li>Trường hợp nhờ người kh&aacute;c đăng k&yacute; qua phần mềm, hoặc chủ động đăng k&yacute; gi&uacute;p người kh&aacute;c ( như th&acirc;n nh&acirc;n, họ h&agrave;ng, &ocirc;ng b&agrave; cha mẹ, người th&acirc;n, bạn b&egrave; , đồng nghiệp&hellip;&hellip;) vẫn c&oacute; thể được, nếu người đ&oacute; thực sự kh&ocirc;ng c&oacute; khả năng tiếp cận phần mềm. Nhưng những trường hợp n&agrave;y l&agrave; tr&aacute;i với quy định của phần mềm v&agrave; an to&agrave;n bảo mật th&ocirc;ng tin của ng&agrave;nh y, c&aacute;c vấn đề ph&aacute;t sinh, người đặt kh&aacute;m d&ugrave;m người kh&aacute;c v&agrave; người nhờ người kh&aacute;c đặt kh&aacute;m sẽ tự chịu tr&aacute;ch nhiệm trước ph&aacute;p luật.</li>
              </ul>`,
            status: 1,
            category_id: 1,
          },
          {
            id: 105,
            question: 'Phần mềm có hỗ trợ đăng ký khám 24/7 không?',
            answer: `<ul>
              <li>Phần mềm cho ph&eacute;p bạn thực hiện việc đăng k&yacute; kh&aacute;m v&agrave;o bất kỳ thời điểm n&agrave;o trong ng&agrave;y v&agrave; bất cứ ng&agrave;y n&agrave;o trong tuần, đảm bảo bạn c&oacute; thể sử dụng Phần mềm để đăng k&yacute; kh&aacute;m bệnh mọi l&uacute;c&nbsp;mọi nơi, m&agrave; kh&ocirc;ng cần phải đến trực tiếp&nbsp;bệnh viện để thực hiện.</li>
              </ul>`,
            status: 1,
            category_id: 1,
          },
          {
            id: 106,
            question:
              'Sau khi đăng ký khám thành công tôi nhận được phiếu khám bệnh như thế nào?',
            answer: `<p>Bạn sẽ nhận được phiếu kh&aacute;m bệnh điện tử trực tiếp tr&ecirc;n phần mềm. Mục quản l&yacute; &ldquo; phiếu kh&aacute;m bệnh&rdquo;.</p>
              <p>&nbsp;</p>
              <p>Đồng thời bạn c&oacute; thể sử dụng t&iacute;nh năng gửi tin nhắn, để nhận th&ocirc;ng tin về phiếu kh&aacute;m bệnh được gửi qua tin nhắn điện thoại SMS.</p>
              <p>&nbsp;</p>
              <p>Nếu hồ sơ bệnh của bạn c&oacute; khai b&aacute;o th&ocirc;ng tin email, hoặc sử dụng email để đăng nhập phần mềm, bạn cũng sẽ nhận được phiếu kh&aacute;m bệnh điện tử gửi qua email.</p>`,
            status: 1,
            category_id: 1,
          },
          {
            id: 107,
            question:
              'Có thể thanh toán trực tuyến chi phí khám chữa bệnh bằng những phương thức nào?',
            answer: `<ul>
              <li>Thẻ quốc tế Visa , Master ,JCB</li>
              <li>Thẻ ATM nội địa/ InternetBanking (thẻ phải được k&iacute;ch hoạt t&iacute;nh năng thanh to&aacute;n trực tuyến)</li>
              <li>V&iacute; điện tử MOMO,SMART PAY</li>
              <li>Qu&eacute;t QRCode/ Mobile Banking</li>
              <li>Thanh to&aacute;n đại l&yacute; (c&aacute;c cửa h&agrave;ng tiện lợi)</li>
              <li>Hỗ trợ thanh to&aacute;n (chuyển khoản)</li>
              </ul>`,
            status: 1,
            category_id: 1,
          },
          {
            id: 108,
            question: 'Làm sao tôi biết được là đã thanh toán thành công?',
            answer: `<p>Khi thanh to&aacute;n th&agrave;nh c&ocirc;ng, tiền kh&aacute;m chữa bệnh sẽ được trừ th&agrave;nh c&ocirc;ng tr&ecirc;n&nbsp; t&agrave;i khoản thanh to&aacute;n của bạn qua phương thức thanh to&aacute;n bạn đ&atilde; chọn.</p>
              <p>&nbsp;</p>
              <p>Đồng thời sẽ c&oacute; th&ocirc;ng tin x&aacute;c nhận giao dịch th&agrave;nh c&ocirc;ng, bi&ecirc;n lai thanh to&aacute;n, m&atilde; giao dịch, m&atilde; thanh to&aacute;n cho giao dịch th&agrave;nh c&ocirc;ng.</p>
              <p><br /> Hệ thống cũng sẽ cấp ngay phiếu kh&aacute;m bệnh điện tử khi bạn đặt kh&aacute;m th&agrave;nh c&ocirc;ng.</p>
              `,
            status: 1,
            category_id: 1,
          },
          {
            id: 109,
            question: 'Tôi có thể đặt khám cho người nhà tôi được không?',
            answer: `<p>Qu&yacute; kh&aacute;ch c&oacute; thể tạo tối đa 10 hồ sơ bệnh nh&acirc;n. Qu&yacute; kh&aacute;ch đặt kh&aacute;m cho bệnh nh&acirc;n n&agrave;o th&igrave; chọn hồ sơ bệnh nh&acirc;n đ&oacute;.</p>
              <p>&nbsp;</p>
              <p>Phần mềm v&agrave; bệnh viện khuyến c&aacute;o, trừ trường hợp bất khả kh&aacute;ng, kh&ocirc;ng n&ecirc;n đặt d&ugrave;m cho người kh&aacute;c v&igrave; quy định an to&agrave;n bảo mật th&ocirc;ng tin sức khỏe mỗi người.</p>
              <p>&nbsp;</p>
              <p>Mọi vấn đề ph&aacute;t sinh từ việc đặt kh&aacute;m cho người kh&aacute;c, c&aacute; nh&acirc;n người đặt sẽ chịu ho&agrave;n to&agrave;n tr&aacute;ch nhiệm trước ph&aacute;p luật.</p>
              `,
            status: 1,
            category_id: 1,
          },
          {
            id: 110,
            question: 'Đối tượng bệnh nhân nào có thể sử dụng qua phần mềm?',
            answer: `<p>Tất cả&nbsp;người bệnh&nbsp;đều c&oacute; thể sử dụng phần mềm&nbsp;để đăng k&yacute; kh&aacute;m bệnh trực tuyến,nếu đủ điều kiện tiếp cận v&agrave; sử dụng phần mềm.</p>
              <p>&nbsp;</p>
              <p>Phần mềm&nbsp;ph&ugrave; hợp&nbsp;cho những người bệnh&nbsp;c&oacute; kế hoạch kh&aacute;m chữa&nbsp;bệnh chủ động, hoặc t&igrave;nh trạng bệnh&nbsp;KH&Ocirc;NG qu&aacute; khẩn cấp.</p>
              <p>&nbsp;</p>
              <p>Trong trường hợp CẤP CỨU, người nh&agrave; n&ecirc;n đưa người bệnh&nbsp;đến cơ sở y tế gần nhất hoặc gọi số cấp cứu 115 để được hỗ trợ.</p>
              `,
            status: 1,
            category_id: 1,
          },
          {
            id: 111,
            question:
              'Sau khi đã đăng ký khám thành công qua phần mềm, có thể hủy phiếu khám không?',
            answer: `<p>Bạn c&oacute; thể chủ động hủy phiếu kh&aacute;m đ&atilde; đặt th&agrave;nh c&ocirc;ng, nếu kế hoạch kh&aacute;m chữa bệnh c&aacute; nh&acirc;n c&oacute; thay đổi.</p>
              <p><br /> Hoặc trong 1 số trường hợp, bệnh viện c&oacute; quyền từ chối phiếu kh&aacute;m nếu c&oacute; sự sai lệch th&ocirc;ng tin bệnh nh&acirc;n, sai th&ocirc;ng tin phiếu kh&aacute;m, hoặc c&oacute; vấn đề bất khả kh&aacute;ng ph&aacute;t sinh từ ph&iacute;a bệnh viện.</p>
              <p>&nbsp;</p>
              <p>Bạn đều sẽ được ho&agrave;n tiền lại nếu chưa thực sự đặt kh&aacute;m v&agrave; kh&aacute;m th&agrave;nh c&ocirc;ng (nhưng phải tu&acirc;n theo quy định của phần mềm v&agrave; bệnh viện).</p>
              `,
            status: 1,
            category_id: 1,
          },
          {
            id: 112,
            question:
              'Tôi đến bệnh viện trễ hơn so với giờ khám đã đăng ký, vậy tôi có được khám hay không?',
            answer: `<p>Trường hợp bạn đến trễ so với giờ hẹn tr&ecirc;n phiếu kh&aacute;m bệnh, bạn vẫn c&oacute; thể đến bệnh viện để được thăm kh&aacute;m, nhưng mọi sự tiếp nhận v&agrave; thời gian kh&aacute;m bệnh sẽ theo sự sắp xếp của bệnh viện, t&ugrave;y v&agrave;o t&igrave;nh h&igrave;nh thực tế tại bệnh viện v&agrave; ph&ograve;ng kh&aacute;m l&uacute;c đ&oacute;.</p>
              `,
            status: 1,
            category_id: 1,
          },
        ],
      },
      {
        id: 2,
        name: 'Vấn đề tài khoản',
        faq: [
          {
            id: 201,
            question: 'Có bao nhiêu cách để đăng nhập vào phần mềm?',
            answer: `<p>- Đăng nhập bằng số điện thoại di động, email, mạng x&atilde; hội Zalo, Facebook.</p>
              `,
            status: 1,
            category_id: 2,
          },
          {
            id: 202,
            question:
              '“Mã số bệnh nhân là gì “ làm sao tôi có thể biết được mã số bệnh nhân của mình?',
            answer: `<ul>
              <li>M&atilde; số bệnh nh&acirc;n l&agrave;&nbsp;số hồ sơ&nbsp;m&agrave; bệnh viện d&ugrave;ng để quản l&yacute; th&ocirc;ng tin của bạn tr&ecirc;n hệ thống dữ liệu của bệnh viện.</li>
              <li>Để biết được m&atilde; số bệnh nh&acirc;n của m&igrave;nh, bạn c&oacute; thể tham khảo gợi &yacute; về c&aacute;ch t&igrave;m m&atilde; số bệnh nh&acirc;n, v&agrave; t&igrave;m thấy trong&nbsp;c&aacute;c loại giấy tờ&nbsp;như: toa thuốc, phiếu chỉ định cận l&acirc;m s&agrave;ng, c&aacute;c bi&ecirc;n lai thu tiền&hellip;</li>
              </ul>
              `,
            status: 1,
            category_id: 2,
          },
          {
            id: 203,
            question: '“Tôi quên mã số bệnh nhân của mình thì phải làm sao?',
            answer: `<p>Để t&igrave;m lại m&atilde; số bệnh nh&acirc;n, bạn c&oacute; thể xem qua gợi &yacute; về c&aacute;ch t&igrave;m lại m&atilde; số bệnh nh&acirc;n, v&agrave; t&igrave;m lại trong c&aacute;c loại giấy tờ kh&aacute;m chữa bệnh của m&igrave;nh.</p>
              <p>&nbsp;</p>
              <p>Hoặc mở t&iacute;nh năng "T&ocirc;i qu&ecirc;n m&atilde; số bệnh nh&acirc;n" &gt; nhập ch&iacute;nh x&aacute;c c&aacute;c th&ocirc;ng tin y&ecirc;u cầu &gt; bấm&nbsp;"X&aacute;c nhận" &gt; v&agrave; chọn hồ sơ của m&igrave;nh trong danh s&aacute;ch kết quả.</p>
              `,
            status: 1,
            category_id: 2,
          },
          {
            id: 204,
            question: 'Làm sao tôi biết bên mình đã có mã số bệnh nhân chưa?',
            answer: `<p>Nếu bạn đ&atilde; từng thực hiện việc&nbsp;kh&aacute;m chữa bệnh&nbsp;tại bệnh viện, đồng nghĩa với việc bạn&nbsp;đ&atilde; c&oacute; &ldquo;m&atilde; số bệnh nh&acirc;n&rdquo; tr&ecirc;n hệ thống của bệnh viện.</p>
              <p>&nbsp;</p>
              <p>Khi đ&oacute;, h&atilde;y t&igrave;m lại m&atilde; số bệnh nh&acirc;n của bạn trong c&aacute;c loại&nbsp;giấy tờ kh&aacute;m chữa bệnh, hoặc bạn c&oacute; thể&nbsp;sử dụng t&iacute;nh năng &ldquo;T&ocirc;i qu&ecirc;n m&atilde; số bệnh nh&acirc;n&rdquo; để t&igrave;m lại m&atilde; số bệnh nh&acirc;n của m&igrave;nh ngay tr&ecirc;n phần mềm.</p>`,
            status: 1,
            category_id: 2,
          },
          {
            id: 205,
            question:
              'Tôi có thể chọn tùy ý một hồ sơ bệnh nhân của người khác để đăng ký khám bệnh cho mình không?',
            answer: `<p>Trong trường hợp bạn cố t&igrave;nh hay nhầm lẫn&nbsp;d&ugrave;ng hồ sơ bệnh nh&acirc;n&nbsp;của người kh&aacute;c hoặc khai b&aacute;o sai th&ocirc;ng tin&nbsp;để đăng k&yacute; kh&aacute;m bệnh, bạn đ&atilde; vi phạm điều khoản sử dụng của phần mềm v&agrave; quy định tại bệnh viện.&nbsp;</p>
              <p><br /> Bệnh viện sẽ từ chối kh&aacute;m chữa bệnh, bạn sẽ chịu ho&agrave;n to&agrave;n những thiệt hại v&agrave; t&ugrave;y mức độ c&oacute; thể chịu tr&aacute;ch nhiệm trước&nbsp;ph&aacute;p luật.</p>
              <p>&nbsp;</p>
              <p>V&igrave; vậy,&nbsp;khi đăng k&yacute; kh&aacute;m bệnh bạn vui l&ograve;ng chọn/nhập v&agrave; kiểm tra&nbsp;ch&iacute;nh x&aacute;c&nbsp;hồ sơ&nbsp;bệnh nh&acirc;n của m&igrave;nh!</p>`,
            status: 1,
            category_id: 2,
          },
        ],
      },
      {
        id: 3,
        name: 'Vấn đề về quy trình đặt khám',
        faq: [
          {
            id: 301,
            question:
              'Có thể đăng ký khám bệnh trong ngày bằng phần mềm không?',
            answer: `<p>Hiện tại bệnh viện hỗ trợ cả đặt kh&aacute;m đăng k&yacute; trong ng&agrave;y, cho ph&eacute;p đặt kh&aacute;m trước 30 ph&uacute;t. Nhưng bạn kh&ocirc;ng được huỷ phiếu kh&aacute;m trong ng&agrave;y.</p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 302,
            question: 'Có thể đăng ký khám bệnh trong khoảng thời gian nào?',
            answer: `<p>Bạn c&oacute; thể đăng k&yacute; kh&aacute;m bệnh qua phần mềm, mọi l&uacute;c mọi nơi. C&oacute; thể đặt lịch hẹn kh&aacute;m bệnh trước ng&agrave;y kh&aacute;m đến 30 ng&agrave;y.&nbsp;</p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 303,
            question: 'Khi đi khám bệnh, tôi có cần chuẩn bị gì không?',
            answer: `<p><strong>Đối với Người bệnh c&oacute; thẻ Bảo hiểm y tế:</strong></p>
              <p><br /> Vui l&ograve;ng mang thẻ BHYT v&agrave; giấy tờ tuỳ th&acirc;n, v&agrave; đến cửa tiếp nhận số 1trước hẹn 15 ph&uacute;t để được hướng dẫn v&agrave;o ph&ograve;ng kh&aacute;m.</p>
              <p>&nbsp;</p>
              <p><strong>Đối với Người bệnh KH&Ocirc;NG c&oacute; thẻ Bảo hiểm y tế:</strong></p>
              <p><br /> Bệnh nh&acirc;n vui l&ograve;ng đến trước giờ hẹn 15 ph&uacute;t, xuất tr&igrave;nh phiếu kh&aacute;m bệnh điện tử v&agrave; giấy tờ t&ugrave;y th&acirc;n để được hướng dẫn v&agrave;o ph&ograve;ng kh&aacute;m bệnh.</p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 304,
            question:
              'Tôi có việc đột xuất hoặc bận không đến khám được, tôi muốn huỷ phiếu khám có được không?',
            answer: `<p>Qu&yacute; kh&aacute;ch chủ động thực hiện việc hủy phiếu tr&ecirc;n phần mềm.</p>
              <p>&nbsp;</p>
              <p>Tiền kh&aacute;m bệnh sẽ ho&agrave;n lại t&agrave;i khoản của bệnh nh&acirc;n&nbsp;đ&atilde; sử dụng&nbsp;thanh to&aacute;n. Ph&iacute; tiện &iacute;ch sẽ kh&ocirc;ng được ho&agrave;n trả.</p>
              <p>&nbsp;</p>
              <p>Thời gian nhận lại tiền kh&aacute;m trong t&agrave;i khoản: từ&nbsp;1 - 3&nbsp;ng&agrave;y&nbsp;(đối với v&iacute; điện tử&nbsp;MOMO).</p>
              <p>&nbsp;</p>
              <p>C&aacute;c loại thẻ&nbsp;ATM nội địa: từ&nbsp;01 đến 05&nbsp;ng&agrave;y l&agrave;m việc.</p>
              <p>&nbsp;</p>
              <p>Thẻ thanh to&aacute;n&nbsp;quốc tế&nbsp;(Visa/MasterCard&hellip;): từ&nbsp;05 đến 45&nbsp;ng&agrave;y l&agrave;m việc.</p>
              <p>&nbsp;</p>
              <p>Trường hợp kh&aacute;ch h&agrave;ng thanh to&aacute;n bằng c&aacute;c cửa h&agrave;ng tiện lợi m&agrave; muốn huỷ phiếu kh&aacute;m bệnh,kh&aacute;ch h&agrave;ng vui l&ograve;ng đến cửa h&agrave;ng tiện lợi cung cấp đầy đủ th&ocirc;ng tin v&agrave; cửa h&agrave;ng sẽ kiểm tra ho&agrave;n tiền lại (Tuỳ theo cửa h&agrave;ng c&oacute; thể nhanh hoặc chậm).</p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 305,
            question:
              'Tôi có thể thay đổi thông tin khám đã đặt qua phần mềm không?',
            answer: `<p>Bạn kh&ocirc;ng thể thay đổi th&ocirc;ng tin kh&aacute;m tr&ecirc;n phiếu kh&aacute;m bệnh đ&atilde; đặt th&agrave;nh c&ocirc;ng.</p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 306,
            question:
              'Phần mềm có cho đăng ký khám bệnh với đối tượng bệnh nhân bhyt không?',
            answer: `<p>Hiện tại bệnh viện chỉ hỗ trợ bệnh nh&acirc;n đăng k&yacute; kh&aacute;m dịch vụ qua ứng dụng.</p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 307,
            question: 'Nếu bác sĩ thay đổi lịch khám, tôi phải làm sao?',
            answer: `<p>Khi b&aacute;c sĩ thay đổi lịch kh&aacute;m, phần mềm sẽ gửi th&ocirc;ng b&aacute;o cho bạn qua tin nhắn sms, email v&agrave; tr&ecirc;n ứng dụng.Khi nhận được th&ocirc;ng b&aacute;o về sự thay đổi. Bạn c&oacute; thể:</p>
              <ul>
              <li>Hủy Phiếu Kh&aacute;m Bệnh để nhận lại tiền kh&aacute;m theo quy định ho&agrave;n tiền.</li>
              <li>Vẫn giữ nguy&ecirc;n th&ocirc;ng tin tr&ecirc;n Phiếu Kh&aacute;m Bệnh, v&agrave; điều n&agrave;y đồng nghĩa với việc bạn chấp nhận kh&aacute;m với b&aacute;c sĩ thay thế m&agrave; bệnh viện đ&atilde; sắp xếp.</li>
              <li>Thay đổi th&ocirc;ng tin kh&aacute;m tr&ecirc;n phiếu kh&aacute;m bệnh, bằng c&aacute;ch: Đăng nhập phần mềm &gt; Th&ocirc;ng Tin T&agrave;i Khoản &gt; Quản l&yacute; phiếu kh&aacute;m bệnh &gt; chọn v&agrave;o phiếu kh&aacute;m bệnh bị thay đổi lịch kh&aacute;m &gt; bấm "Chỉnh sửa".</li>
              </ul>
              <p>Việc thay đổi th&ocirc;ng tin tr&ecirc;n phiếu kh&aacute;m bệnh phải được thực hiện theo Quy định chỉnh sửa th&ocirc;ng tin tr&ecirc;n phiếu kh&aacute;m bệnh.</p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 308,
            question:
              'Làm sao có thể chọn đúng chuyên khoa để đăng ký khám qua phần mềm?',
            answer: `<p>Trường hợp t&aacute;i kh&aacute;m, bạn chỉ việc chọn đ&uacute;ng chuy&ecirc;n khoa của lần kh&aacute;m trước.</p>
              <p>Trường hợp kh&aacute;m mới:</p>
              <ul>
              <li>Nếu biết chắc chuy&ecirc;n khoa m&igrave;nh muốn đăng k&yacute; kh&aacute;m, bạn chỉ việc t&igrave;m&nbsp;chọn chuy&ecirc;n khoa đ&oacute; trong danh s&aacute;ch.</li>
              <li>Nếu&nbsp;chưa biết chuy&ecirc;n khoa n&agrave;o ph&ugrave; hợp, bạn&nbsp;c&oacute; thể gọi v&agrave;o tổng đ&agrave;i tư vấn chăm s&oacute;c kh&aacute;ch h&agrave;ng của bệnh viện hoặc tổng đ&agrave;i medpro&nbsp;<strong>19002115</strong> hoặc li&ecirc;n hệ hỗ trợ tại k&ecirc;nh chat mạng x&atilde; hội facebook, zalo.</li>
              </ul>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 309,
            question:
              'Tôi sẽ được khám bệnh vào đúng thời gian đã chọn, sau khi đăng ký khám qua phần mềm đúng không?',
            answer: `<p>Trả lời: C&oacute; thể.</p>
              <p>Thời gian bạn chọn khi đăng k&yacute; kh&aacute;m, được xem l&agrave; thời gian kh&aacute;m bệnh dự kiến. Do đặc th&ugrave; của c&ocirc;ng t&aacute;c kh&aacute;m chữa bệnh, sẽ kh&ocirc;ng thể ch&iacute;nh x&aacute;c thời gian kh&aacute;m 100%.</p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 310,
            question:
              'Tôi đăng ký đã bị trừ tiền nhưng sao không nhận được mã số khám bệnh?',
            answer: `<p>Bạn vui l&ograve;ng kiểm tra th&ocirc;ng tin phiếu kh&aacute;m trong t&agrave;i khoản tr&ecirc;n phần mềm. Hoặc vui l&ograve;ng gọi điện tổng đ&agrave;i 19002115 để được hỗ trợ.</p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 311,
            question:
              'Tôi đã đăng ký thành công vậy khi đi khám tôi có phải xếp hàng gì không?',
            answer: `<p>Kh&ocirc;ng, bạn kh&ocirc;ng c&ograve;n phải xếp h&agrave;ng chờ đợi để lấy số kh&aacute;m bệnh, l&agrave;m thủ tục đ&oacute;ng tiền, bạn chỉ cần đến cửa tiếp nhận số 1 để được hướng dẫn v&agrave;o ph&ograve;ng kh&aacute;m.</p>`,
            status: 1,
            category_id: 3,
          },
        ],
      },
      {
        id: 4,
        name: 'Vấn đề về thanh toán',
        faq: [
          {
            id: 401,
            question: 'Điều kiện để được hoàn tiền là gì?',
            answer: `<p>Bạn chỉ được ho&agrave;n tiền khi thực hiện th&agrave;nh c&ocirc;ng y&ecirc;u cầu Hủy Phiếu Kh&aacute;m Bệnh tr&ecirc;n phần mềm theo theo quy định.</p>`,
            status: 1,
            category_id: 4,
          },
          {
            id: 402,
            question:
              'Hoàn tiền như thế nào? Bao lâu thì tôi nhận lại được tiền hoàn?',
            answer: `<p>Khi bạn thực hiện việc&nbsp;thanh to&aacute;n bằng phương thức n&agrave;o, th&igrave; phần mềm sẽ ho&agrave;n tiền&nbsp;lại cho bạn&nbsp;bằng&nbsp;đ&uacute;ng phương thức v&agrave; số t&agrave;i khoản&nbsp;đ&atilde; d&ugrave;ng để thanh to&aacute;n đ&oacute;.</p>
              <p>Thời gian bạn nhận được&nbsp;tiền ho&agrave;n th&ocirc;ng thường được quy định như sau:</p>
              <ul>
              <li>Thẻ kh&aacute;m bệnh:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1 - 30 ng&agrave;y l&agrave;m việc.</li>
              <li>Thẻ ATM nội địa:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;1 - 30 ng&agrave;y l&agrave;m việc.</li>
              <li>Thẻ t&iacute;n dụng Visa, MasterCard:&nbsp; &nbsp; &nbsp; &nbsp; 1 - 45 ng&agrave;y l&agrave;m việc.</li>
              </ul>
              <p>T&iacute;nh từ thời điểm bạn thực hiện Hủy Phiếu Kh&aacute;m Bệnh th&agrave;nh c&ocirc;ng, nếu qu&aacute; thời gian tr&ecirc;n bạn vẫn chưa nhận được tiền ho&agrave;n, vui l&ograve;ng li&ecirc;n hệ tổng đ&agrave;i 1900 2115 ch&uacute;ng t&ocirc;i sẽ hỗ&nbsp;trợ bạn.</p>`,
            status: 1,
            category_id: 4,
          },
          {
            id: 403,
            question:
              'Tôi không có bất kỳ một thẻ khám bệnh hoặc thẻ ngân hàng nào để thanh toán, vậy tôi phải làm sao?',
            answer: `<p>&nbsp;Bạn c&oacute; thể li&ecirc;n hệ nh&acirc;n vi&ecirc;n bệnh viện&nbsp;tại c&aacute;c quầy hướng dẫn trong bệnh viện để được hỗ trợ l&agrave;m&nbsp;thẻ kh&aacute;m bệnh&nbsp;miễn ph&iacute;.</p>
              <p>Nhờ con,ch&aacute;u hoặc người th&acirc;n trong gia đ&igrave;nh c&oacute; sử dụng c&aacute;c phương thức thanh to&aacute;n trực tuyến để đặt kh&aacute;m.</p>
              <p>Đăng k&yacute; mới một trong c&aacute;c phương thức thanh to&aacute;n trực tuyến c&oacute; hỗ trợ ngay, để tiếp tục sử dụng trong tương lai.</p>`,
            status: 1,
            category_id: 4,
          },
          {
            id: 404,
            question:
              'Thông tin thanh toán của tôi có bị lộ khi tôi tiến hành thanh toán trên phần mềm không?',
            answer: `<p>Trả lời : Kh&ocirc;ng!</p>
              <p>Phần mềm&nbsp;v&agrave; bệnh viện ho&agrave;n to&agrave;n kh&ocirc;ng thể sao lưu lại&nbsp;bất kỳ th&ocirc;ng tin thanh to&aacute;n n&agrave;o của bạn.</p>
              <p>C&aacute;c th&ocirc;ng tin của bạn được bảo mật tại cổng thanh to&aacute;n v&agrave; ng&acirc;n h&agrave;ng nh&agrave; nước việt nam.</p>`,
            status: 1,
            category_id: 4,
          },
          {
            id: 405,
            question:
              'Tôi đăng nhập đúng tên tài khoản nhưng không thanh toán được?',
            answer: `<ul>
              <li>Đối với thẻ kh&aacute;m bệnh/ATM nội địa phải đảm bảo đ&atilde; k&iacute;ch hoạt t&iacute;nh năng thanh to&aacute;n trực tuyến th&igrave; mới c&oacute; thể thanh to&aacute;n được. Nếu thẻ của bạn chưa k&iacute;ch hoạt Thanh to&aacute;n trực tuyến th&igrave; vui l&ograve;ng li&ecirc;n hệ với ng&acirc;n h&agrave;ng ph&aacute;t h&agrave;nh thẻ của bạn để đăng k&yacute;.</li>
              <li>Nếu thẻ của bạn đ&atilde; đăng k&yacute; thanh to&aacute;n trực tuyến v&agrave; nhập ch&iacute;nh x&aacute;c th&ocirc;ng tin thanh to&aacute;n nhưng vẫn kh&ocirc;ng thanh to&aacute;n được, vui l&ograve;ng li&ecirc;n hệ 19002115 ch&uacute;ng t&ocirc;i sẽ hỗ trợ bạn.</li>
              </ul>`,
            status: 1,
            category_id: 4,
          },
          {
            id: 406,
            question:
              'Tôi muốn đăng ký khám online nhưng đến trực tiếp bệnh viện để thanh toán được không?',
            answer: `Trả lời : không

              Hiện tại khi đặt khám trên phần mềm bạn vui lòng hoàn tất quy trình thanh toán ngay trên phần mềm để được nhận phiếu khám bệnh.`,
            status: 1,
            category_id: 4,
          },
          {
            id: 407,
            question:
              'Tôi nhập tài khoản thẻ nhưng bấm xác thực hoài không được?',
            answer: `<p>Vui lòng ki&ecirc;̉m tra ch&iacute;nh x&aacute;c th&ocirc;ng tin thẻ đ&atilde; nhập. Trường hợp vẫn bị lỗi, h&atilde;y chụp ảnh m&agrave;n h&igrave;nh b&aacute;o lỗi v&agrave; gửi qua c&aacute;c k&ecirc;nh hỗ trợ, ch&uacute;ng t&ocirc;i sẽ hỗ trợ bạn.</p>`,
            status: 1,
            category_id: 4,
          },
        ],
      },
    ],
  },
  {
    keyword: 'nhidong1',
    slug: 'benh-vien-nhi-dong-1',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5573161637585!2d106.66797021474885!3d10.76856029232692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ede1ad51af1%3A0x520c34a578581e8!2zQuG7h25oIHZp4buHbiBOaGkgxJHhu5NuZyAx!5e0!3m2!1svi!2s!4v1598335496158!5m2!1svi!2s',
    banner: ImgNhidong1HomeBanner,
    gioithieuContent: `Phần mềm Đăng ký khám bệnh theo hẹn tại Bệnh viện Nhi Đồng 1`,
    process: [
      {
        step: 1,
        title: 'Đặt lịch khám',
        items: [
          'Người dùng truy cập và đăng nhập trên web hoặc ứng dụng di động',
          'Ứng dụng di động: "Bệnh viện "Bệnh Viện Nhi Đồng 1" hoặc website: "https://nhidong1.medpro.vn"',
          'Chọn thông tin khám: Chuyên khoa, dịch vụ. ngày khám, giờ khám.',
          'Nhập thông tin bệnh nhân: Bằng số hồ sơ hoặc tạo mới',
        ],
      },
      {
        step: 2,
        title: 'Thanh toán tiền khám',
        items: [
          'Người dùng chọn và thực hiện thanh toán qua một trong các phương thức có tích hợp trên phần mềm:',
          'Ví điện tử',
          'Thẻ thanh toán quốc tế (Visa/MasterCard/JCB)',
          'Thẻ ATM nội địa có kích hoạt tính năng thanh toán trực tuyến',
        ],
        note: {
          title: 'Tổng số tiền thanh toán bao gồm',
          items: [
            'Tiền khám: dịch vụ theo quy định của bệnh viện.',
            'Phí tiện ích: 10.000 đồng',
            'Sau khi thanh toán thành công Phiếu khám điện tử sẽ được gửi qua email, tin nhắn sms và trên phần mềm.',
          ],
        },
      },
      {
        step: 3,
        title: 'Xác nhận người bệnh đến bệnh viện khám theo hẹn',
        items: [
          'Sau khi đặt khám thành công phiếu khám điện tử sẽ được gửi ngay qua email, tin nhắn sms và trên phần mềm.',
          'Đến ngày khám, quý khách vui lòng khu vực tiếp nhận được ghi và hiển thị trên phiếu khám, xuất trình phiếu khám bệnh điện tử để được tiếp nhận. Trường hợp : Bố(mẹ) quên mang theo phiếu khám bệnh thì vui lòng cung cấp thông tin cá nhân và thông tin của bé để được hỗ trợ tiếp nhận.',
        ],
      },
      {
        step: 4,
        title: 'Khám và thực hiện cận lâm sàng',
        items: [
          'Người bệnh khám tại các phòng khám chuyên khoa theo sự hướng dẫn của nhân viên y tế.',
          'Thực hiện cận lâm sàng (nếu có) và đóng phí tại quầy thu ngân',
          'Khi đủ kết quả cận lâm sàng, người bệnh quay lại phòng khám gặp Bác sĩ nhận toa thuốc.',
          'Lưu ý : Đối với dịch vụ khám chuyên gia 1 điểm dừng, quý khách đã đóng tạm ứng 350.000đ rồi trên ứng dụng web/app sẽ được kết toán tại quầy thuốc ( Hoàn tiền thừa hoặc đóng thêm sau khi kết thúc hành trình đi khám bệnh CLS, mua thuốc ( nếu có ))',
        ],
      },
    ],
    faq: [
      {
        id: 1,
        name: 'Vấn đề chung',
        faq: [
          {
            id: 101,
            question:
              'Lợi ích khi sử dụng phần mềm đăng ký khám bệnh trực tuyến này là gì?',
            answer: `<p>Đặt lịch kh&aacute;m bệnh theo hẹn, mọi l&uacute;c mọi nơi, m&agrave; kh&ocirc;ng cần đến bệnh viện</p>
              <ul>
              <li>Kh&ocirc;ng xếp h&agrave;ng chờ đợi để lấy số tiếp nhận kh&aacute;m bệnhd</li>
              <li>Giảm thời gian chờ kh&aacute;m tại bệnh viện.</li>
              <li>Thanh to&aacute;n trực tuyến từ xa, kh&ocirc;ng sử dụng tiền mặt</li>
              <li>Nhận th&ocirc;ng tin phiếu kh&aacute;m bệnh điện tử qua phần mềm</li>
              <li>Chủ động chọn lịch kh&aacute;m ( ng&agrave;y kh&aacute;m, khung giờ kh&aacute;m, b&aacute;c sỹ kh&aacute;m )</li>
              <li>Nhắc lịch t&aacute;i kh&aacute;m, đặt lịch t&aacute;i kh&aacute;m tự động</li>
              <li>Tra cứu kết quả kh&aacute;m chữa bệnh trực tuyến qua phần mềm.</li>
              <li>Thanh to&aacute;n viện ph&iacute;, chi ph&iacute; kh&aacute;m chữa bệnh trực tuyến, mọi l&uacute;c mọi nơi</li>
              <li>Dễ d&agrave;ng tiếp cận v&agrave; nhận c&aacute;c th&ocirc;ng b&aacute;o mới, th&ocirc;ng tin từ bệnh viện</li>
              </ul>`,
            status: 1,
            category_id: 1,
          },
          {
            id: 102,
            question:
              'Làm sao để sử dụng được phần mềm đăng ký khám bệnh trực tuyến?',
            answer: `<p>
              <ul>
              <li>C&oacute; thể truy cập v&agrave; sử dụng phần mềm tr&ecirc;n tất cả thiết bị c&oacute; thể truy cập mạng internet. ( 3G,4G,5G,Wifi, d&acirc;y mạng&hellip;..)</li>
              <li>M&aacute;y t&iacute;nh b&agrave;n, laptop: truy cập website</li>
              <li>Hầu hết điện thoại th&ocirc;ng minh: tải ứng dụng phần mềm tại kho tải Gplay hoặc AppStore</li>
              <li>M&aacute;y t&iacute;nh bảng v&agrave; c&aacute;c thiết bị kh&aacute;c &hellip;&hellip;</li>
              </ul>
              </p>`,
            status: 1,
            category_id: 1,
          },
          {
            id: 103,
            question: 'Đăng ký khám bệnh online có mất phí không?',
            answer: `<ul>
              <li>C&oacute; ph&iacute; tiện &iacute;ch, khi sử dụng dịch vụ đăng k&yacute; kh&aacute;m bệnh trực tuyến qua phần mềm ( tương tự ph&iacute; cước viễn th&ocirc;ng qua tổng đ&agrave;i )</li>
              <li>Hiện tại chỉ mất ph&iacute; khi đăng k&yacute; kh&aacute;m bệnh th&agrave;nh c&ocirc;ng, ngo&agrave;i ra việc sử dụng ứng dụng v&agrave; c&aacute;c t&iacute;nh năng kh&aacute;c l&agrave; ho&agrave;n to&agrave;n miễn ph&iacute;.</li>
              </ul>`,
            status: 1,
            category_id: 1,
          },
          {
            id: 104,
            question:
              'Tôi có thể dùng phần mềm để đăng ký và lấy số thứ tự khám cho bệnh nhân khác không?',
            answer: `<ul>
              <li>Phần mềm khuyến c&aacute;o người d&acirc;n, tự sử dụng phần mềm để đăng k&yacute; kh&aacute;m bệnh cho bản th&acirc;n. Để tự quản l&yacute; th&ocirc;ng tin, hồ sơ bệnh, lịch sử kh&aacute;m chữa bệnh, kết quả kh&aacute;m chữa bệnh&hellip;</li>
              <li>Trường hợp nhờ người kh&aacute;c đăng k&yacute; qua phần mềm, hoặc chủ động đăng k&yacute; gi&uacute;p người kh&aacute;c ( như th&acirc;n nh&acirc;n, họ h&agrave;ng, &ocirc;ng b&agrave; cha mẹ, người th&acirc;n, bạn b&egrave; , đồng nghiệp&hellip;&hellip;) vẫn c&oacute; thể được, nếu người đ&oacute; thực sự kh&ocirc;ng c&oacute; khả năng tiếp cận phần mềm. Nhưng những trường hợp n&agrave;y l&agrave; tr&aacute;i với quy định của phần mềm v&agrave; an to&agrave;n bảo mật th&ocirc;ng tin của ng&agrave;nh y, c&aacute;c vấn đề ph&aacute;t sinh, người đặt kh&aacute;m d&ugrave;m người kh&aacute;c v&agrave; người nhờ người kh&aacute;c đặt kh&aacute;m sẽ tự chịu tr&aacute;ch nhiệm trước ph&aacute;p luật.</li>
              </ul>`,
            status: 1,
            category_id: 1,
          },
          {
            id: 105,
            question: 'Phần mềm có hỗ trợ đăng ký khám 24/7 không?',
            answer: `<ul>
              <li>Phần mềm cho ph&eacute;p bạn thực hiện việc đăng k&yacute; kh&aacute;m v&agrave;o bất kỳ thời điểm n&agrave;o trong ng&agrave;y v&agrave; bất cứ ng&agrave;y n&agrave;o trong tuần, đảm bảo bạn c&oacute; thể sử dụng Phần mềm để đăng k&yacute; kh&aacute;m bệnh mọi l&uacute;c&nbsp;mọi nơi, m&agrave; kh&ocirc;ng cần phải đến trực tiếp&nbsp;bệnh viện để thực hiện.</li>
              </ul>`,
            status: 1,
            category_id: 1,
          },
          {
            id: 106,
            question:
              'Sau khi đăng ký khám thành công tôi nhận được phiếu khám bệnh như thế nào?',
            answer: `<p>Bạn sẽ nhận được phiếu kh&aacute;m bệnh điện tử trực tiếp tr&ecirc;n phần mềm. Mục quản l&yacute; &ldquo; phiếu kh&aacute;m bệnh&rdquo;.</p>
              <p>&nbsp;</p>
              <p>Đồng thời bạn c&oacute; thể sử dụng t&iacute;nh năng gửi tin nhắn, để nhận th&ocirc;ng tin về phiếu kh&aacute;m bệnh được gửi qua tin nhắn điện thoại SMS.</p>
              <p>&nbsp;</p>
              <p>Nếu hồ sơ bệnh của bạn c&oacute; khai b&aacute;o th&ocirc;ng tin email, hoặc sử dụng email để đăng nhập phần mềm, bạn cũng sẽ nhận được phiếu kh&aacute;m bệnh điện tử gửi qua email.</p>`,
            status: 1,
            category_id: 1,
          },
          {
            id: 107,
            question:
              'Có thể thanh toán trực tuyến chi phí khám chữa bệnh bằng những phương thức nào?',
            answer: `<ul>
              <li>Thẻ quốc tế Visa , Master ,JCB</li>
              <li>Thẻ ATM nội địa/ InternetBanking (thẻ phải được k&iacute;ch hoạt t&iacute;nh năng thanh to&aacute;n trực tuyến)</li>
              <li>V&iacute; điện tử MOMO,SMART PAY</li>
              <li>Qu&eacute;t QRCode/ Mobile Banking</li>
              <li>Thanh to&aacute;n đại l&yacute; (c&aacute;c cửa h&agrave;ng tiện lợi)</li>
              <li>Hỗ trợ thanh to&aacute;n (chuyển khoản)</li>
              </ul>`,
            status: 1,
            category_id: 1,
          },
          {
            id: 108,
            question: 'Làm sao tôi biết được là đã thanh toán thành công?',
            answer: `<p>Khi thanh to&aacute;n th&agrave;nh c&ocirc;ng, tiền kh&aacute;m chữa bệnh sẽ được trừ th&agrave;nh c&ocirc;ng tr&ecirc;n&nbsp; t&agrave;i khoản thanh to&aacute;n của bạn qua phương thức thanh to&aacute;n bạn đ&atilde; chọn.</p>
              <p>&nbsp;</p>
              <p>Đồng thời sẽ c&oacute; th&ocirc;ng tin x&aacute;c nhận giao dịch th&agrave;nh c&ocirc;ng, bi&ecirc;n lai thanh to&aacute;n, m&atilde; giao dịch, m&atilde; thanh to&aacute;n cho giao dịch th&agrave;nh c&ocirc;ng.</p>
              <p><br /> Hệ thống cũng sẽ cấp ngay phiếu kh&aacute;m bệnh điện tử khi bạn đặt kh&aacute;m th&agrave;nh c&ocirc;ng.</p>
              `,
            status: 1,
            category_id: 1,
          },
          {
            id: 109,
            question: 'Tôi có thể đặt khám cho người nhà tôi được không?',
            answer: `<p>Qu&yacute; kh&aacute;ch c&oacute; thể tạo tối đa 10 hồ sơ bệnh nh&acirc;n. Qu&yacute; kh&aacute;ch đặt kh&aacute;m cho bệnh nh&acirc;n n&agrave;o th&igrave; chọn hồ sơ bệnh nh&acirc;n đ&oacute;.</p>
              <p>&nbsp;</p>
              <p>Phần mềm v&agrave; bệnh viện khuyến c&aacute;o, trừ trường hợp bất khả kh&aacute;ng, kh&ocirc;ng n&ecirc;n đặt d&ugrave;m cho người kh&aacute;c v&igrave; quy định an to&agrave;n bảo mật th&ocirc;ng tin sức khỏe mỗi người.</p>
              <p>&nbsp;</p>
              <p>Mọi vấn đề ph&aacute;t sinh từ việc đặt kh&aacute;m cho người kh&aacute;c, c&aacute; nh&acirc;n người đặt sẽ chịu ho&agrave;n to&agrave;n tr&aacute;ch nhiệm trước ph&aacute;p luật.</p>
              `,
            status: 1,
            category_id: 1,
          },
          {
            id: 110,
            question: 'Đối tượng bệnh nhân nào có thể sử dụng qua phần mềm?',
            answer: `<p>Tất cả&nbsp;người bệnh&nbsp;đều c&oacute; thể sử dụng phần mềm&nbsp;để đăng k&yacute; kh&aacute;m bệnh trực tuyến,nếu đủ điều kiện tiếp cận v&agrave; sử dụng phần mềm.</p>
              <p>&nbsp;</p>
              <p>Phần mềm&nbsp;ph&ugrave; hợp&nbsp;cho những người bệnh&nbsp;c&oacute; kế hoạch kh&aacute;m chữa&nbsp;bệnh chủ động, hoặc t&igrave;nh trạng bệnh&nbsp;KH&Ocirc;NG qu&aacute; khẩn cấp.</p>
              <p>&nbsp;</p>
              <p>Trong trường hợp CẤP CỨU, người nh&agrave; n&ecirc;n đưa người bệnh&nbsp;đến cơ sở y tế gần nhất hoặc gọi số cấp cứu 115 để được hỗ trợ.</p>
              `,
            status: 1,
            category_id: 1,
          },
          {
            id: 111,
            question:
              'Sau khi đã đăng ký khám thành công qua phần mềm, có thể hủy phiếu khám không?',
            answer: `<p>Bạn c&oacute; thể chủ động hủy phiếu kh&aacute;m đ&atilde; đặt th&agrave;nh c&ocirc;ng, nếu kế hoạch kh&aacute;m chữa bệnh c&aacute; nh&acirc;n c&oacute; thay đổi.</p>
              <p><br /> Hoặc trong 1 số trường hợp, bệnh viện c&oacute; quyền từ chối phiếu kh&aacute;m nếu c&oacute; sự sai lệch th&ocirc;ng tin bệnh nh&acirc;n, sai th&ocirc;ng tin phiếu kh&aacute;m, hoặc c&oacute; vấn đề bất khả kh&aacute;ng ph&aacute;t sinh từ ph&iacute;a bệnh viện.</p>
              <p>&nbsp;</p>
              <p>Bạn đều sẽ được ho&agrave;n tiền lại nếu chưa thực sự đặt kh&aacute;m v&agrave; kh&aacute;m th&agrave;nh c&ocirc;ng (nhưng phải tu&acirc;n theo quy định của phần mềm v&agrave; bệnh viện).</p>
              `,
            status: 1,
            category_id: 1,
          },
          {
            id: 112,
            question:
              'Tôi đến bệnh viện trễ hơn so với giờ khám đã đăng ký, vậy tôi có được khám hay không?',
            answer: `<p>Trường hợp bạn đến trễ so với giờ hẹn tr&ecirc;n phiếu kh&aacute;m bệnh, bạn vẫn c&oacute; thể đến bệnh viện để được thăm kh&aacute;m, nhưng mọi sự tiếp nhận v&agrave; thời gian kh&aacute;m bệnh sẽ theo sự sắp xếp của bệnh viện, t&ugrave;y v&agrave;o t&igrave;nh h&igrave;nh thực tế tại bệnh viện v&agrave; ph&ograve;ng kh&aacute;m l&uacute;c đ&oacute;.</p>
              `,
            status: 1,
            category_id: 1,
          },
        ],
      },
      {
        id: 2,
        name: 'Vấn đề tài khoản',
        faq: [
          {
            id: 201,
            question: 'Có bao nhiêu cách để đăng nhập vào phần mềm?',
            answer: `<p>- Đăng nhập bằng số điện thoại di động, email, mạng x&atilde; hội Zalo, Facebook.</p>
              `,
            status: 1,
            category_id: 2,
          },
          {
            id: 202,
            question:
              '“Mã số bệnh nhân là gì “ làm sao tôi có thể biết được mã số bệnh nhân của mình?',
            answer: `<ul>
              <li>M&atilde; số bệnh nh&acirc;n l&agrave;&nbsp;số hồ sơ&nbsp;m&agrave; bệnh viện d&ugrave;ng để quản l&yacute; th&ocirc;ng tin của bạn tr&ecirc;n hệ thống dữ liệu của bệnh viện.</li>
              <li>Để biết được m&atilde; số bệnh nh&acirc;n của m&igrave;nh, bạn c&oacute; thể tham khảo gợi &yacute; về c&aacute;ch t&igrave;m m&atilde; số bệnh nh&acirc;n, v&agrave; t&igrave;m thấy trong&nbsp;c&aacute;c loại giấy tờ&nbsp;như: toa thuốc, phiếu chỉ định cận l&acirc;m s&agrave;ng, c&aacute;c bi&ecirc;n lai thu tiền&hellip;</li>
              </ul>
              `,
            status: 1,
            category_id: 2,
          },
          {
            id: 203,
            question: '“Tôi quên mã số bệnh nhân của mình thì phải làm sao?',
            answer: `<p>Để t&igrave;m lại m&atilde; số bệnh nh&acirc;n, bạn c&oacute; thể xem qua gợi &yacute; về c&aacute;ch t&igrave;m lại m&atilde; số bệnh nh&acirc;n, v&agrave; t&igrave;m lại trong c&aacute;c loại giấy tờ kh&aacute;m chữa bệnh của m&igrave;nh.</p>
              <p>&nbsp;</p>
              <p>Hoặc mở t&iacute;nh năng "T&ocirc;i qu&ecirc;n m&atilde; số bệnh nh&acirc;n" &gt; nhập ch&iacute;nh x&aacute;c c&aacute;c th&ocirc;ng tin y&ecirc;u cầu &gt; bấm&nbsp;"X&aacute;c nhận" &gt; v&agrave; chọn hồ sơ của m&igrave;nh trong danh s&aacute;ch kết quả.</p>
              `,
            status: 1,
            category_id: 2,
          },
          {
            id: 204,
            question: 'Làm sao tôi biết bên mình đã có mã số bệnh nhân chưa?',
            answer: `<p>Nếu bạn đ&atilde; từng thực hiện việc&nbsp;kh&aacute;m chữa bệnh&nbsp;tại bệnh viện, đồng nghĩa với việc bạn&nbsp;đ&atilde; c&oacute; &ldquo;m&atilde; số bệnh nh&acirc;n&rdquo; tr&ecirc;n hệ thống của bệnh viện.</p>
              <p>&nbsp;</p>
              <p>Khi đ&oacute;, h&atilde;y t&igrave;m lại m&atilde; số bệnh nh&acirc;n của bạn trong c&aacute;c loại&nbsp;giấy tờ kh&aacute;m chữa bệnh, hoặc bạn c&oacute; thể&nbsp;sử dụng t&iacute;nh năng &ldquo;T&ocirc;i qu&ecirc;n m&atilde; số bệnh nh&acirc;n&rdquo; để t&igrave;m lại m&atilde; số bệnh nh&acirc;n của m&igrave;nh ngay tr&ecirc;n phần mềm.</p>`,
            status: 1,
            category_id: 2,
          },
          {
            id: 205,
            question:
              'Tôi có thể chọn tùy ý một hồ sơ bệnh nhân của người khác để đăng ký khám bệnh cho mình không?',
            answer: `<p>Trong trường hợp bạn cố t&igrave;nh hay nhầm lẫn&nbsp;d&ugrave;ng hồ sơ bệnh nh&acirc;n&nbsp;của người kh&aacute;c hoặc khai b&aacute;o sai th&ocirc;ng tin&nbsp;để đăng k&yacute; kh&aacute;m bệnh, bạn đ&atilde; vi phạm điều khoản sử dụng của phần mềm v&agrave; quy định tại bệnh viện.&nbsp;</p>
              <p><br /> Bệnh viện sẽ từ chối kh&aacute;m chữa bệnh, bạn sẽ chịu ho&agrave;n to&agrave;n những thiệt hại v&agrave; t&ugrave;y mức độ c&oacute; thể chịu tr&aacute;ch nhiệm trước&nbsp;ph&aacute;p luật.</p>
              <p>&nbsp;</p>
              <p>V&igrave; vậy,&nbsp;khi đăng k&yacute; kh&aacute;m bệnh bạn vui l&ograve;ng chọn/nhập v&agrave; kiểm tra&nbsp;ch&iacute;nh x&aacute;c&nbsp;hồ sơ&nbsp;bệnh nh&acirc;n của m&igrave;nh!</p>`,
            status: 1,
            category_id: 2,
          },
        ],
      },
      {
        id: 3,
        name: 'Vấn đề về quy trình đặt khám',
        faq: [
          {
            id: 301,
            question:
              'Có thể đăng ký khám bệnh trong ngày bằng phần mềm không?',
            answer: `<p>Hiện tại bệnh viện hỗ trợ cả đặt kh&aacute;m đăng k&yacute; trong ng&agrave;y, cho ph&eacute;p đặt kh&aacute;m trước 30 ph&uacute;t. Nhưng bạn kh&ocirc;ng được huỷ phiếu kh&aacute;m trong ng&agrave;y.</p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 302,
            question: 'Có thể đăng ký khám bệnh trong khoảng thời gian nào?',
            answer: `<p>Bạn c&oacute; thể đăng k&yacute; kh&aacute;m bệnh qua phần mềm, mọi l&uacute;c mọi nơi. C&oacute; thể đặt lịch hẹn kh&aacute;m bệnh trước ng&agrave;y kh&aacute;m đến 30 ng&agrave;y.&nbsp;</p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 303,
            question: 'Khi đi khám bệnh, tôi có cần chuẩn bị gì không?',
            answer: `<p><strong>Đối với Người bệnh c&oacute; thẻ Bảo hiểm y tế:</strong></p>
              <p><br /> Vui l&ograve;ng mang thẻ BHYT v&agrave; giấy tờ tuỳ th&acirc;n, v&agrave; đến cửa tiếp nhận số 1trước hẹn 15 ph&uacute;t để được hướng dẫn v&agrave;o ph&ograve;ng kh&aacute;m.</p>
              <p>&nbsp;</p>
              <p><strong>Đối với Người bệnh KH&Ocirc;NG c&oacute; thẻ Bảo hiểm y tế:</strong></p>
              <p><br /> Bệnh nh&acirc;n vui l&ograve;ng đến trước giờ hẹn 15 ph&uacute;t, xuất tr&igrave;nh phiếu kh&aacute;m bệnh điện tử v&agrave; giấy tờ t&ugrave;y th&acirc;n để được hướng dẫn v&agrave;o ph&ograve;ng kh&aacute;m bệnh.</p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 304,
            question:
              'Tôi có việc đột xuất hoặc bận không đến khám được, tôi muốn huỷ phiếu khám có được không?',
            answer: `<p>Qu&yacute; kh&aacute;ch chủ động thực hiện việc hủy phiếu tr&ecirc;n phần mềm.</p>
              <p>&nbsp;</p>
              <p>Tiền kh&aacute;m bệnh sẽ ho&agrave;n lại t&agrave;i khoản của bệnh nh&acirc;n&nbsp;đ&atilde; sử dụng&nbsp;thanh to&aacute;n. Ph&iacute; tiện &iacute;ch sẽ kh&ocirc;ng được ho&agrave;n trả.</p>
              <p>&nbsp;</p>
              <p>Thời gian nhận lại tiền kh&aacute;m trong t&agrave;i khoản: từ&nbsp;1 - 3&nbsp;ng&agrave;y&nbsp;(đối với v&iacute; điện tử&nbsp;MOMO).</p>
              <p>&nbsp;</p>
              <p>C&aacute;c loại thẻ&nbsp;ATM nội địa: từ&nbsp;01 đến 05&nbsp;ng&agrave;y l&agrave;m việc.</p>
              <p>&nbsp;</p>
              <p>Thẻ thanh to&aacute;n&nbsp;quốc tế&nbsp;(Visa/MasterCard&hellip;): từ&nbsp;05 đến 45&nbsp;ng&agrave;y l&agrave;m việc.</p>
              <p>&nbsp;</p>
              <p>Trường hợp kh&aacute;ch h&agrave;ng thanh to&aacute;n bằng c&aacute;c cửa h&agrave;ng tiện lợi m&agrave; muốn huỷ phiếu kh&aacute;m bệnh,kh&aacute;ch h&agrave;ng vui l&ograve;ng đến cửa h&agrave;ng tiện lợi cung cấp đầy đủ th&ocirc;ng tin v&agrave; cửa h&agrave;ng sẽ kiểm tra ho&agrave;n tiền lại (Tuỳ theo cửa h&agrave;ng c&oacute; thể nhanh hoặc chậm).</p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 305,
            question:
              'Tôi có thể thay đổi thông tin khám đã đặt qua phần mềm không?',
            answer: `<p>Bạn kh&ocirc;ng thể thay đổi th&ocirc;ng tin kh&aacute;m tr&ecirc;n phiếu kh&aacute;m bệnh đ&atilde; đặt th&agrave;nh c&ocirc;ng.</p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 306,
            question:
              'Phần mềm có cho đăng ký khám bệnh với đối tượng bệnh nhân bhyt không?',
            answer: `<p>Hiện tại bệnh viện chỉ hỗ trợ bệnh nh&acirc;n đăng k&yacute; kh&aacute;m dịch vụ qua ứng dụng.</p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 307,
            question: 'Nếu bác sĩ thay đổi lịch khám, tôi phải làm sao?',
            answer: `<p>Khi b&aacute;c sĩ thay đổi lịch kh&aacute;m, phần mềm sẽ gửi th&ocirc;ng b&aacute;o cho bạn qua tin nhắn sms, email v&agrave; tr&ecirc;n ứng dụng.Khi nhận được th&ocirc;ng b&aacute;o về sự thay đổi. Bạn c&oacute; thể:</p>
              <ul>
              <li>Hủy Phiếu Kh&aacute;m Bệnh để nhận lại tiền kh&aacute;m theo quy định ho&agrave;n tiền.</li>
              <li>Vẫn giữ nguy&ecirc;n th&ocirc;ng tin tr&ecirc;n Phiếu Kh&aacute;m Bệnh, v&agrave; điều n&agrave;y đồng nghĩa với việc bạn chấp nhận kh&aacute;m với b&aacute;c sĩ thay thế m&agrave; bệnh viện đ&atilde; sắp xếp.</li>
              <li>Thay đổi th&ocirc;ng tin kh&aacute;m tr&ecirc;n phiếu kh&aacute;m bệnh, bằng c&aacute;ch: Đăng nhập phần mềm &gt; Th&ocirc;ng Tin T&agrave;i Khoản &gt; Quản l&yacute; phiếu kh&aacute;m bệnh &gt; chọn v&agrave;o phiếu kh&aacute;m bệnh bị thay đổi lịch kh&aacute;m &gt; bấm "Chỉnh sửa".</li>
              </ul>
              <p>Việc thay đổi th&ocirc;ng tin tr&ecirc;n phiếu kh&aacute;m bệnh phải được thực hiện theo Quy định chỉnh sửa th&ocirc;ng tin tr&ecirc;n phiếu kh&aacute;m bệnh.</p>`,
            status: 1,
            category_id: 3,
          },
          // {
          //   id: 308,
          //   question:
          //     "Làm sao có thể chọn đúng chuyên khoa để đăng ký khám qua phần mềm?",
          //   answer: `<p>Trường hợp t&aacute;i kh&aacute;m, bạn chỉ việc chọn đ&uacute;ng chuy&ecirc;n khoa của lần kh&aacute;m trước.</p>
          //   <p>Trường hợp kh&aacute;m mới:</p>
          //   <ul>
          //   <li>Nếu biết chắc chuy&ecirc;n khoa m&igrave;nh muốn đăng k&yacute; kh&aacute;m, bạn chỉ việc t&igrave;m&nbsp;chọn chuy&ecirc;n khoa đ&oacute; trong danh s&aacute;ch.</li>
          //   <li>Nếu&nbsp;chưa biết chuy&ecirc;n khoa n&agrave;o ph&ugrave; hợp, bạn&nbsp;c&oacute; thể gọi v&agrave;o tổng đ&agrave;i tư vấn chăm s&oacute;c kh&aacute;ch h&agrave;ng của bệnh viện hoặc tổng đ&agrave;i medpro&nbsp;<strong>19007178</strong> hoặc li&ecirc;n hệ hỗ trợ tại k&ecirc;nh chat mạng x&atilde; hội facebook, zalo.</li>
          //   </ul>`,
          //   status: 1,
          //   category_id: 3
          // },
          {
            id: 309,
            question:
              'Tôi sẽ được khám bệnh vào đúng thời gian đã chọn, sau khi đăng ký khám qua phần mềm đúng không?',
            answer: `<p>Trả lời: C&oacute; thể.</p>
              <p>Thời gian bạn chọn khi đăng k&yacute; kh&aacute;m, được xem l&agrave; thời gian kh&aacute;m bệnh dự kiến. Do đặc th&ugrave; của c&ocirc;ng t&aacute;c kh&aacute;m chữa bệnh, sẽ kh&ocirc;ng thể ch&iacute;nh x&aacute;c thời gian kh&aacute;m 100%.</p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 310,
            question:
              'Tôi đăng ký đã bị trừ tiền nhưng sao không nhận được mã số khám bệnh?',
            answer: `<p>Bạn vui l&ograve;ng kiểm tra th&ocirc;ng tin phiếu kh&aacute;m trong t&agrave;i khoản tr&ecirc;n phần mềm. Hoặc vui l&ograve;ng gọi điện tổng đ&agrave;i 19002115 để được hỗ trợ.</p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 311,
            question:
              'Tôi đã đăng ký thành công vậy khi đi khám tôi có phải xếp hàng gì không?',
            answer: `<p>Kh&ocirc;ng, bạn kh&ocirc;ng c&ograve;n phải xếp h&agrave;ng chờ đợi để lấy số kh&aacute;m bệnh, l&agrave;m thủ tục đ&oacute;ng tiền, bạn chỉ cần đến cửa tiếp nhận số 1 để được hướng dẫn v&agrave;o ph&ograve;ng kh&aacute;m.</p>`,
            status: 1,
            category_id: 3,
          },
        ],
      },
      {
        id: 4,
        name: 'Vấn đề về thanh toán',
        faq: [
          {
            id: 401,
            question: 'Điều kiện để được hoàn tiền là gì?',
            answer: `<p>Bạn chỉ được ho&agrave;n tiền khi thực hiện th&agrave;nh c&ocirc;ng y&ecirc;u cầu Hủy Phiếu Kh&aacute;m Bệnh tr&ecirc;n phần mềm theo theo quy định.</p>`,
            status: 1,
            category_id: 4,
          },
          {
            id: 402,
            question:
              'Hoàn tiền như thế nào? Bao lâu thì tôi nhận lại được tiền hoàn?',
            answer: `<p>Khi bạn thực hiện việc&nbsp;thanh to&aacute;n bằng phương thức n&agrave;o, th&igrave; phần mềm sẽ ho&agrave;n tiền&nbsp;lại cho bạn&nbsp;bằng&nbsp;đ&uacute;ng phương thức v&agrave; số t&agrave;i khoản&nbsp;đ&atilde; d&ugrave;ng để thanh to&aacute;n đ&oacute;.</p>
              <p>Thời gian bạn nhận được&nbsp;tiền ho&agrave;n th&ocirc;ng thường được quy định như sau:</p>
              <ul>
              <li>Thẻ kh&aacute;m bệnh:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1 - 30 ng&agrave;y l&agrave;m việc.</li>
              <li>Thẻ ATM nội địa:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;1 - 30 ng&agrave;y l&agrave;m việc.</li>
              <li>Thẻ t&iacute;n dụng Visa, MasterCard:&nbsp; &nbsp; &nbsp; &nbsp; 1 - 45 ng&agrave;y l&agrave;m việc.</li>
              </ul>
              <p>T&iacute;nh từ thời điểm bạn thực hiện Hủy Phiếu Kh&aacute;m Bệnh th&agrave;nh c&ocirc;ng, nếu qu&aacute; thời gian tr&ecirc;n bạn vẫn chưa nhận được tiền ho&agrave;n, vui l&ograve;ng li&ecirc;n hệ tổng đ&agrave;i 1900 2115 ch&uacute;ng t&ocirc;i sẽ hỗ&nbsp;trợ bạn.</p>`,
            status: 1,
            category_id: 4,
          },
          {
            id: 403,
            question:
              'Tôi không có bất kỳ một thẻ khám bệnh hoặc thẻ ngân hàng nào để thanh toán, vậy tôi phải làm sao?',
            answer: `<p>&nbsp;Bạn c&oacute; thể li&ecirc;n hệ nh&acirc;n vi&ecirc;n bệnh viện&nbsp;tại c&aacute;c quầy hướng dẫn trong bệnh viện để được hỗ trợ l&agrave;m&nbsp;thẻ kh&aacute;m bệnh&nbsp;miễn ph&iacute;.</p>
              <p>Nhờ con,ch&aacute;u hoặc người th&acirc;n trong gia đ&igrave;nh c&oacute; sử dụng c&aacute;c phương thức thanh to&aacute;n trực tuyến để đặt kh&aacute;m.</p>
              <p>Đăng k&yacute; mới một trong c&aacute;c phương thức thanh to&aacute;n trực tuyến c&oacute; hỗ trợ ngay, để tiếp tục sử dụng trong tương lai.</p>`,
            status: 1,
            category_id: 4,
          },
          {
            id: 404,
            question:
              'Thông tin thanh toán của tôi có bị lộ khi tôi tiến hành thanh toán trên phần mềm không?',
            answer: `<p>Trả lời : Kh&ocirc;ng!</p>
              <p>Phần mềm&nbsp;v&agrave; bệnh viện ho&agrave;n to&agrave;n kh&ocirc;ng thể sao lưu lại&nbsp;bất kỳ th&ocirc;ng tin thanh to&aacute;n n&agrave;o của bạn.</p>
              <p>C&aacute;c th&ocirc;ng tin của bạn được bảo mật tại cổng thanh to&aacute;n v&agrave; ng&acirc;n h&agrave;ng nh&agrave; nước việt nam.</p>`,
            status: 1,
            category_id: 4,
          },
          {
            id: 405,
            question:
              'Tôi đăng nhập đúng tên tài khoản nhưng không thanh toán được?',
            answer: `<ul>
              <li>Đối với thẻ kh&aacute;m bệnh/ATM nội địa phải đảm bảo đ&atilde; k&iacute;ch hoạt t&iacute;nh năng thanh to&aacute;n trực tuyến th&igrave; mới c&oacute; thể thanh to&aacute;n được. Nếu thẻ của bạn chưa k&iacute;ch hoạt Thanh to&aacute;n trực tuyến th&igrave; vui l&ograve;ng li&ecirc;n hệ với ng&acirc;n h&agrave;ng ph&aacute;t h&agrave;nh thẻ của bạn để đăng k&yacute;.</li>
              <li>Nếu thẻ của bạn đ&atilde; đăng k&yacute; thanh to&aacute;n trực tuyến v&agrave; nhập ch&iacute;nh x&aacute;c th&ocirc;ng tin thanh to&aacute;n nhưng vẫn kh&ocirc;ng thanh to&aacute;n được, vui l&ograve;ng li&ecirc;n hệ 19002115 ch&uacute;ng t&ocirc;i sẽ hỗ trợ bạn.</li>
              </ul>`,
            status: 1,
            category_id: 4,
          },
          {
            id: 406,
            question:
              'Tôi muốn đăng ký khám online nhưng đến trực tiếp bệnh viện để thanh toán được không?',
            answer: `Trả lời : không

              Hiện tại khi đặt khám trên phần mềm bạn vui lòng hoàn tất quy trình thanh toán ngay trên phần mềm để được nhận phiếu khám bệnh.`,
            status: 1,
            category_id: 4,
          },
          {
            id: 407,
            question:
              'Tôi nhập tài khoản thẻ nhưng bấm xác thực hoài không được?',
            answer: `<p>Vui lòng ki&ecirc;̉m tra ch&iacute;nh x&aacute;c th&ocirc;ng tin thẻ đ&atilde; nhập. Trường hợp vẫn bị lỗi, h&atilde;y chụp ảnh m&agrave;n h&igrave;nh b&aacute;o lỗi v&agrave; gửi qua c&aacute;c k&ecirc;nh hỗ trợ, ch&uacute;ng t&ocirc;i sẽ hỗ trợ bạn.</p>`,
            status: 1,
            category_id: 4,
          },
        ],
      },
    ],
  },
  {
    keyword: 'choray',
    slug: 'benh-vien-cho-ray',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.707076818123!2d106.65754181428684!3d10.757043762493844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ef1efebf7d7%3A0x9014ce53b8910a58!2sCho%20Ray%20Hospital!5e0!3m2!1sen!2s!4v1594603824129!5m2!1sen!2s',
    banner: ImgChorayHomeBanner,
    gioithieuContent: `Phần mềm Đăng ký khám bệnh theo hẹn tại Bệnh viện Chợ Rẫy`,
    process: [
      {
        step: 1,
        title: 'Đặt lịch khám',
        items: [
          'Người dùng truy cập và đăng nhập phần mềm trên website: "https://choray.medpro.vn"',
          'Chọn thông tin khám: Chuyên khoa, dịch vụ. ngày khám, giờ khám.',
          'Nhập thông tin bệnh nhân: Bằng số hồ sơ hoặc tạo mới',
        ],
      },
      {
        step: 2,
        title: 'Thanh toán phí tiện ích',
        items: [
          'Người dùng chọn và thực hiện thanh toán qua một trong các phương thức có tích hợp trên phần mềm:',
          'Tổng đài 1900 1955: phí tiện ích sẽ được trừ từ tài khoản điện thoại đang gọi thông qua cước phí gọi lên tổng đài.',
          'Ví điện tử Momo',
          'Lưu ý đối với tiền khám: Người dùng sẽ đóng phí tạm ứng vào thẻ khám bệnh phát tại Bệnh viện khi tiếp nhận và dùng thẻ này để thanh toán các khoản phí khám tại Bệnh viện.',
          'Sau khi thanh toán thành công Phiếu khám điện tử sẽ được gửi qua email, tin nhắn sms hoặc trên phần mềm trong mục Phiếu khám bệnh. Người dùng sử dụng phiếu khám điện tử này để được tiếp nhận khám tại Bệnh viện, bỏ qua bước đăng ký thông tin lấy số thứ tự tiếp nhận tại Bệnh viện.',
        ],
        note: {
          title: 'Tổng số tiền thanh toán bao gồm',
          items: [
            'Tiền khám: dịch vụ theo quy định của bệnh viện.',
            'Phí tiện ích: 10.000 đồng',
            'Sau khi thanh toán thành công Phiếu khám điện tử sẽ được gửi qua email, tin nhắn sms và trên phần mềm.',
          ],
        },
      },
      {
        step: 3,
        title: 'Xác nhận người bệnh đến bệnh viện khám theo hẹn',
        items: [
          'Đến ngày khám, quý khách vui lòng đến quầy tiếp nhận số 1 đến số 6 khu A trước hẹn 15 phút để được hướng dẫn đóng tiền tạm ứng và cấp thẻ khám bệnh và in phiếu số thứ tự khám đã đăng ký trực tuyến. Hướng di chuyển thuận lợi để khám các chuyên khoa ở khu A và khu B là đi từ Cổng số 1 đường Nguyễn Chí Thanh để vào Bệnh viện.',
          'Lưu ý: Đối với người dùng đặt lịch khám Ung Bướu, cần di chuyển sang quầy tiếp nhận khu D Trung tâm Ung Bướu để được tiếp nhận, xác nhận thông tin trước khi vào phòng khám. Hướng di chuyển thuận lợi để khám Ung Bướu là đi từ cổng số 6, đường Bà Triệu để vào Bệnh viện.',
        ],
      },
      {
        step: 4,
        title: 'Khám và thực hiện cận lâm sàng',
        items: [
          'Người bệnh di chuyển lên Lầu 1 - Khu khám bệnh để đến phòng khám chuyên khoa đã đăng ký theo sự hướng dẫn của nhân viên y tế để được tiếp nhận khám.',
          'Thực hiện cận lâm sàng (nếu có): Khi có chỉ định cận lâm sàng, người bệnh cần thực hiện đóng phí cận lâm sàng tại các kiosk thanh toán không tiền mặt đặt tại trước phòng khám. Cách thức đóng phí qua thẻ khám bệnh tại kiosk - hệ thống thanh toán tự động như sau:',
        ],
        note: {
          title:
            'Người bệnh sử dụng thẻ khám bệnh tag (chạm) vào đầu kiosk lần lượt:',
          items: [
            'Tag lần 1: Thông tin bệnh nhân',
            'Tag lần 2: Lấy thông tin tạm ứng',
            'Tag lần 3: Xác nhận thanh toán',
            'Nhận phiếu số thứ tự thực hiện cận lâm sàng.',
          ],
        },
      },
    ],
    faq: [
      {
        id: 1,
        name: 'Vấn đề chung',
        faq: [
          {
            id: 101,
            question:
              'Lợi ích khi sử dụng phần mềm đăng ký khám bệnh trực tuyến này là gì?',
            answer: `<p>Đặt lịch kh&aacute;m bệnh theo hẹn, mọi l&uacute;c mọi nơi, m&agrave; kh&ocirc;ng cần đến bệnh viện</p>
              <ul>
              <li>Kh&ocirc;ng xếp h&agrave;ng chờ đợi để lấy số tiếp nhận kh&aacute;m bệnhd</li>
              <li>Giảm thời gian chờ kh&aacute;m tại bệnh viện.</li>
              <li>Thanh to&aacute;n trực tuyến từ xa, kh&ocirc;ng sử dụng tiền mặt</li>
              <li>Nhận th&ocirc;ng tin phiếu kh&aacute;m bệnh điện tử qua phần mềm</li>
              <li>Chủ động chọn lịch kh&aacute;m ( ng&agrave;y kh&aacute;m, khung giờ kh&aacute;m, b&aacute;c sỹ kh&aacute;m )</li>
              <li>Nhắc lịch t&aacute;i kh&aacute;m, đặt lịch t&aacute;i kh&aacute;m tự động</li>
              <li>Tra cứu kết quả kh&aacute;m chữa bệnh trực tuyến qua phần mềm.</li>
              <li>Thanh to&aacute;n viện ph&iacute;, chi ph&iacute; kh&aacute;m chữa bệnh trực tuyến, mọi l&uacute;c mọi nơi</li>
              <li>Dễ d&agrave;ng tiếp cận v&agrave; nhận c&aacute;c th&ocirc;ng b&aacute;o mới, th&ocirc;ng tin từ bệnh viện</li>
              </ul>`,
            status: 1,
            category_id: 1,
          },
          {
            id: 102,
            question:
              'Làm sao để sử dụng được phần mềm đăng ký khám bệnh trực tuyến?',
            answer: `<p>
              <ul>
              <li>C&oacute; thể truy cập v&agrave; sử dụng phần mềm tr&ecirc;n tất cả thiết bị c&oacute; thể truy cập mạng internet. ( 3G,4G,5G,Wifi, d&acirc;y mạng&hellip;..)</li>
              <li>M&aacute;y t&iacute;nh b&agrave;n, laptop: truy cập website</li>
              <li>Hầu hết điện thoại th&ocirc;ng minh: tải ứng dụng phần mềm tại kho tải Gplay hoặc AppStore</li>
              <li>M&aacute;y t&iacute;nh bảng v&agrave; c&aacute;c thiết bị kh&aacute;c &hellip;&hellip;</li>
              </ul>
              </p>`,
            status: 1,
            category_id: 1,
          },
          {
            id: 103,
            question: 'Đăng ký khám bệnh online có mất phí không?',
            answer: `<ul>
              <li>C&oacute; ph&iacute; tiện &iacute;ch, khi sử dụng dịch vụ đăng k&yacute; kh&aacute;m bệnh trực tuyến qua phần mềm ( tương tự ph&iacute; cước viễn th&ocirc;ng qua tổng đ&agrave;i )</li>
              <li>Hiện tại chỉ mất ph&iacute; khi đăng k&yacute; kh&aacute;m bệnh th&agrave;nh c&ocirc;ng, ngo&agrave;i ra việc sử dụng ứng dụng v&agrave; c&aacute;c t&iacute;nh năng kh&aacute;c l&agrave; ho&agrave;n to&agrave;n miễn ph&iacute;.</li>
              </ul>`,
            status: 1,
            category_id: 1,
          },
          {
            id: 104,
            question:
              'Tôi có thể dùng phần mềm để đăng ký và lấy số thứ tự khám cho bệnh nhân khác không?',
            answer: `<ul>
              <li>Phần mềm khuyến c&aacute;o người d&acirc;n, tự sử dụng phần mềm để đăng k&yacute; kh&aacute;m bệnh cho bản th&acirc;n. Để tự quản l&yacute; th&ocirc;ng tin, hồ sơ bệnh, lịch sử kh&aacute;m chữa bệnh, kết quả kh&aacute;m chữa bệnh&hellip;</li>
              <li>Trường hợp nhờ người kh&aacute;c đăng k&yacute; qua phần mềm, hoặc chủ động đăng k&yacute; gi&uacute;p người kh&aacute;c ( như th&acirc;n nh&acirc;n, họ h&agrave;ng, &ocirc;ng b&agrave; cha mẹ, người th&acirc;n, bạn b&egrave; , đồng nghiệp&hellip;&hellip;) vẫn c&oacute; thể được, nếu người đ&oacute; thực sự kh&ocirc;ng c&oacute; khả năng tiếp cận phần mềm. Nhưng những trường hợp n&agrave;y l&agrave; tr&aacute;i với quy định của phần mềm v&agrave; an to&agrave;n bảo mật th&ocirc;ng tin của ng&agrave;nh y, c&aacute;c vấn đề ph&aacute;t sinh, người đặt kh&aacute;m d&ugrave;m người kh&aacute;c v&agrave; người nhờ người kh&aacute;c đặt kh&aacute;m sẽ tự chịu tr&aacute;ch nhiệm trước ph&aacute;p luật.</li>
              </ul>`,
            status: 1,
            category_id: 1,
          },
          {
            id: 105,
            question: 'Phần mềm có hỗ trợ đăng ký khám 24/7 không?',
            answer: `<ul>
              <li>Phần mềm cho ph&eacute;p bạn thực hiện việc đăng k&yacute; kh&aacute;m v&agrave;o bất kỳ thời điểm n&agrave;o trong ng&agrave;y v&agrave; bất cứ ng&agrave;y n&agrave;o trong tuần, đảm bảo bạn c&oacute; thể sử dụng Phần mềm để đăng k&yacute; kh&aacute;m bệnh mọi l&uacute;c&nbsp;mọi nơi, m&agrave; kh&ocirc;ng cần phải đến trực tiếp&nbsp;bệnh viện để thực hiện.</li>
              </ul>`,
            status: 1,
            category_id: 1,
          },
          {
            id: 106,
            question:
              'Sau khi đăng ký khám thành công tôi nhận được phiếu khám bệnh như thế nào?',
            answer: `<p>Bạn sẽ nhận được phiếu kh&aacute;m bệnh điện tử trực tiếp tr&ecirc;n phần mềm. Mục quản l&yacute; &ldquo; phiếu kh&aacute;m bệnh&rdquo;.</p>
              <p>&nbsp;</p>
              <p>Đồng thời bạn c&oacute; thể sử dụng t&iacute;nh năng gửi tin nhắn, để nhận th&ocirc;ng tin về phiếu kh&aacute;m bệnh được gửi qua tin nhắn điện thoại SMS.</p>
              <p>&nbsp;</p>
              <p>Nếu hồ sơ bệnh của bạn c&oacute; khai b&aacute;o th&ocirc;ng tin email, hoặc sử dụng email để đăng nhập phần mềm, bạn cũng sẽ nhận được phiếu kh&aacute;m bệnh điện tử gửi qua email.</p>`,
            status: 1,
            category_id: 1,
          },
          {
            id: 107,
            question:
              'Có thể thanh toán trực tuyến chi phí khám chữa bệnh bằng những phương thức nào?',
            answer: `<ul>
              <li>Thẻ quốc tế Visa , Master ,JCB</li>
              <li>Thẻ ATM nội địa/ InternetBanking (thẻ phải được k&iacute;ch hoạt t&iacute;nh năng thanh to&aacute;n trực tuyến)</li>
              <li>V&iacute; điện tử MOMO,SMART PAY</li>
              <li>Qu&eacute;t QRCode/ Mobile Banking</li>
              <li>Thanh to&aacute;n đại l&yacute; (c&aacute;c cửa h&agrave;ng tiện lợi)</li>
              <li>Hỗ trợ thanh to&aacute;n (chuyển khoản)</li>
              </ul>`,
            status: 1,
            category_id: 1,
          },
          {
            id: 108,
            question: 'Làm sao tôi biết được là đã thanh toán thành công?',
            answer: `<p>Khi thanh to&aacute;n th&agrave;nh c&ocirc;ng, tiền kh&aacute;m chữa bệnh sẽ được trừ th&agrave;nh c&ocirc;ng tr&ecirc;n&nbsp; t&agrave;i khoản thanh to&aacute;n của bạn qua phương thức thanh to&aacute;n bạn đ&atilde; chọn.</p>
              <p>&nbsp;</p>
              <p>Đồng thời sẽ c&oacute; th&ocirc;ng tin x&aacute;c nhận giao dịch th&agrave;nh c&ocirc;ng, bi&ecirc;n lai thanh to&aacute;n, m&atilde; giao dịch, m&atilde; thanh to&aacute;n cho giao dịch th&agrave;nh c&ocirc;ng.</p>
              <p><br /> Hệ thống cũng sẽ cấp ngay phiếu kh&aacute;m bệnh điện tử khi bạn đặt kh&aacute;m th&agrave;nh c&ocirc;ng.</p>
              `,
            status: 1,
            category_id: 1,
          },
          {
            id: 109,
            question: 'Tôi có thể đặt khám cho người nhà tôi được không?',
            answer: `<p>Qu&yacute; kh&aacute;ch c&oacute; thể tạo tối đa 10 hồ sơ bệnh nh&acirc;n. Qu&yacute; kh&aacute;ch đặt kh&aacute;m cho bệnh nh&acirc;n n&agrave;o th&igrave; chọn hồ sơ bệnh nh&acirc;n đ&oacute;.</p>
              <p>&nbsp;</p>
              <p>Phần mềm v&agrave; bệnh viện khuyến c&aacute;o, trừ trường hợp bất khả kh&aacute;ng, kh&ocirc;ng n&ecirc;n đặt d&ugrave;m cho người kh&aacute;c v&igrave; quy định an to&agrave;n bảo mật th&ocirc;ng tin sức khỏe mỗi người.</p>
              <p>&nbsp;</p>
              <p>Mọi vấn đề ph&aacute;t sinh từ việc đặt kh&aacute;m cho người kh&aacute;c, c&aacute; nh&acirc;n người đặt sẽ chịu ho&agrave;n to&agrave;n tr&aacute;ch nhiệm trước ph&aacute;p luật.</p>
              `,
            status: 1,
            category_id: 1,
          },
          {
            id: 110,
            question: 'Đối tượng bệnh nhân nào có thể sử dụng qua phần mềm?',
            answer: `<p>Tất cả&nbsp;người bệnh&nbsp;đều c&oacute; thể sử dụng phần mềm&nbsp;để đăng k&yacute; kh&aacute;m bệnh trực tuyến,nếu đủ điều kiện tiếp cận v&agrave; sử dụng phần mềm.</p>
              <p>&nbsp;</p>
              <p>Phần mềm&nbsp;ph&ugrave; hợp&nbsp;cho những người bệnh&nbsp;c&oacute; kế hoạch kh&aacute;m chữa&nbsp;bệnh chủ động, hoặc t&igrave;nh trạng bệnh&nbsp;KH&Ocirc;NG qu&aacute; khẩn cấp.</p>
              <p>&nbsp;</p>
              <p>Trong trường hợp CẤP CỨU, người nh&agrave; n&ecirc;n đưa người bệnh&nbsp;đến cơ sở y tế gần nhất hoặc gọi số cấp cứu 115 để được hỗ trợ.</p>
              `,
            status: 1,
            category_id: 1,
          },
          {
            id: 111,
            question:
              'Sau khi đã đăng ký khám thành công qua phần mềm, có thể hủy phiếu khám không?',
            answer: `<p>Bạn c&oacute; thể chủ động hủy phiếu kh&aacute;m đ&atilde; đặt th&agrave;nh c&ocirc;ng, nếu kế hoạch kh&aacute;m chữa bệnh c&aacute; nh&acirc;n c&oacute; thay đổi.</p>
              <p><br /> Hoặc trong 1 số trường hợp, bệnh viện c&oacute; quyền từ chối phiếu kh&aacute;m nếu c&oacute; sự sai lệch th&ocirc;ng tin bệnh nh&acirc;n, sai th&ocirc;ng tin phiếu kh&aacute;m, hoặc c&oacute; vấn đề bất khả kh&aacute;ng ph&aacute;t sinh từ ph&iacute;a bệnh viện.</p>
              <p>&nbsp;</p>
              <p>Bạn đều sẽ được ho&agrave;n tiền lại nếu chưa thực sự đặt kh&aacute;m v&agrave; kh&aacute;m th&agrave;nh c&ocirc;ng (nhưng phải tu&acirc;n theo quy định của phần mềm v&agrave; bệnh viện).</p>
              `,
            status: 1,
            category_id: 1,
          },
          {
            id: 112,
            question:
              'Tôi đến bệnh viện trễ hơn so với giờ khám đã đăng ký, vậy tôi có được khám hay không?',
            answer: `<p>Trường hợp bạn đến trễ so với giờ hẹn tr&ecirc;n phiếu kh&aacute;m bệnh, bạn vẫn c&oacute; thể đến bệnh viện để được thăm kh&aacute;m, nhưng mọi sự tiếp nhận v&agrave; thời gian kh&aacute;m bệnh sẽ theo sự sắp xếp của bệnh viện, t&ugrave;y v&agrave;o t&igrave;nh h&igrave;nh thực tế tại bệnh viện v&agrave; ph&ograve;ng kh&aacute;m l&uacute;c đ&oacute;.</p>
              `,
            status: 1,
            category_id: 1,
          },
        ],
      },
      {
        id: 2,
        name: 'Vấn đề tài khoản',
        faq: [
          {
            id: 201,
            question: 'Có bao nhiêu cách để đăng nhập vào phần mềm?',
            answer: `<p>- Đăng nhập bằng số điện thoại di động, email, mạng x&atilde; hội Zalo, Facebook.</p>
              `,
            status: 1,
            category_id: 2,
          },
          {
            id: 202,
            question:
              '“Mã số bệnh nhân là gì “ làm sao tôi có thể biết được mã số bệnh nhân của mình?',
            answer: `<ul>
              <li>M&atilde; số bệnh nh&acirc;n l&agrave;&nbsp;số hồ sơ&nbsp;m&agrave; bệnh viện d&ugrave;ng để quản l&yacute; th&ocirc;ng tin của bạn tr&ecirc;n hệ thống dữ liệu của bệnh viện.</li>
              <li>Để biết được m&atilde; số bệnh nh&acirc;n của m&igrave;nh, bạn c&oacute; thể tham khảo gợi &yacute; về c&aacute;ch t&igrave;m m&atilde; số bệnh nh&acirc;n, v&agrave; t&igrave;m thấy trong&nbsp;c&aacute;c loại giấy tờ&nbsp;như: toa thuốc, phiếu chỉ định cận l&acirc;m s&agrave;ng, c&aacute;c bi&ecirc;n lai thu tiền&hellip;</li>
              </ul>
              `,
            status: 1,
            category_id: 2,
          },
          {
            id: 203,
            question: '“Tôi quên mã số bệnh nhân của mình thì phải làm sao?',
            answer: `<p>Để t&igrave;m lại m&atilde; số bệnh nh&acirc;n, bạn c&oacute; thể xem qua gợi &yacute; về c&aacute;ch t&igrave;m lại m&atilde; số bệnh nh&acirc;n, v&agrave; t&igrave;m lại trong c&aacute;c loại giấy tờ kh&aacute;m chữa bệnh của m&igrave;nh.</p>
              <p>&nbsp;</p>
              <p>Hoặc mở t&iacute;nh năng "T&ocirc;i qu&ecirc;n m&atilde; số bệnh nh&acirc;n" &gt; nhập ch&iacute;nh x&aacute;c c&aacute;c th&ocirc;ng tin y&ecirc;u cầu &gt; bấm&nbsp;"X&aacute;c nhận" &gt; v&agrave; chọn hồ sơ của m&igrave;nh trong danh s&aacute;ch kết quả.</p>
              `,
            status: 1,
            category_id: 2,
          },
          {
            id: 204,
            question: 'Làm sao tôi biết bên mình đã có mã số bệnh nhân chưa?',
            answer: `<p>Nếu bạn đ&atilde; từng thực hiện việc&nbsp;kh&aacute;m chữa bệnh&nbsp;tại bệnh viện, đồng nghĩa với việc bạn&nbsp;đ&atilde; c&oacute; &ldquo;m&atilde; số bệnh nh&acirc;n&rdquo; tr&ecirc;n hệ thống của bệnh viện.</p>
              <p>&nbsp;</p>
              <p>Khi đ&oacute;, h&atilde;y t&igrave;m lại m&atilde; số bệnh nh&acirc;n của bạn trong c&aacute;c loại&nbsp;giấy tờ kh&aacute;m chữa bệnh, hoặc bạn c&oacute; thể&nbsp;sử dụng t&iacute;nh năng &ldquo;T&ocirc;i qu&ecirc;n m&atilde; số bệnh nh&acirc;n&rdquo; để t&igrave;m lại m&atilde; số bệnh nh&acirc;n của m&igrave;nh ngay tr&ecirc;n phần mềm.</p>`,
            status: 1,
            category_id: 2,
          },
          {
            id: 205,
            question:
              'Tôi có thể chọn tùy ý một hồ sơ bệnh nhân của người khác để đăng ký khám bệnh cho mình không?',
            answer: `<p>Trong trường hợp bạn cố t&igrave;nh hay nhầm lẫn&nbsp;d&ugrave;ng hồ sơ bệnh nh&acirc;n&nbsp;của người kh&aacute;c hoặc khai b&aacute;o sai th&ocirc;ng tin&nbsp;để đăng k&yacute; kh&aacute;m bệnh, bạn đ&atilde; vi phạm điều khoản sử dụng của phần mềm v&agrave; quy định tại bệnh viện.&nbsp;</p>
              <p><br /> Bệnh viện sẽ từ chối kh&aacute;m chữa bệnh, bạn sẽ chịu ho&agrave;n to&agrave;n những thiệt hại v&agrave; t&ugrave;y mức độ c&oacute; thể chịu tr&aacute;ch nhiệm trước&nbsp;ph&aacute;p luật.</p>
              <p>&nbsp;</p>
              <p>V&igrave; vậy,&nbsp;khi đăng k&yacute; kh&aacute;m bệnh bạn vui l&ograve;ng chọn/nhập v&agrave; kiểm tra&nbsp;ch&iacute;nh x&aacute;c&nbsp;hồ sơ&nbsp;bệnh nh&acirc;n của m&igrave;nh!</p>`,
            status: 1,
            category_id: 2,
          },
        ],
      },
      {
        id: 3,
        name: 'Vấn đề về quy trình đặt khám',
        faq: [
          {
            id: 301,
            question:
              'Có thể đăng ký khám bệnh trong ngày bằng phần mềm không?',
            answer: `<p>Hiện tại bệnh viện hỗ trợ cả đặt kh&aacute;m đăng k&yacute; trong ng&agrave;y, cho ph&eacute;p đặt kh&aacute;m trước 30 ph&uacute;t. Nhưng bạn kh&ocirc;ng được huỷ phiếu kh&aacute;m trong ng&agrave;y.</p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 302,
            question: 'Có thể đăng ký khám bệnh trong khoảng thời gian nào?',
            answer: `<p>Bạn c&oacute; thể đăng k&yacute; kh&aacute;m bệnh qua phần mềm, mọi l&uacute;c mọi nơi. C&oacute; thể đặt lịch hẹn kh&aacute;m bệnh trước ng&agrave;y kh&aacute;m đến 30 ng&agrave;y.&nbsp;</p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 303,
            question: 'Khi đi khám bệnh, tôi có cần chuẩn bị gì không?',
            answer: `<p><strong>Đối với Người bệnh c&oacute; thẻ Bảo hiểm y tế:</strong></p>
              <p><br /> Vui l&ograve;ng mang thẻ BHYT v&agrave; giấy tờ tuỳ th&acirc;n, v&agrave; đến cửa tiếp nhận số 1trước hẹn 15 ph&uacute;t để được hướng dẫn v&agrave;o ph&ograve;ng kh&aacute;m.</p>
              <p>&nbsp;</p>
              <p><strong>Đối với Người bệnh KH&Ocirc;NG c&oacute; thẻ Bảo hiểm y tế:</strong></p>
              <p><br /> Bệnh nh&acirc;n vui l&ograve;ng đến trước giờ hẹn 15 ph&uacute;t, xuất tr&igrave;nh phiếu kh&aacute;m bệnh điện tử v&agrave; giấy tờ t&ugrave;y th&acirc;n để được hướng dẫn v&agrave;o ph&ograve;ng kh&aacute;m bệnh.</p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 304,
            question:
              'Tôi có việc đột xuất hoặc bận không đến khám được, tôi muốn huỷ phiếu khám có được không?',
            answer: `<p>Qu&yacute; kh&aacute;ch chủ động thực hiện việc hủy phiếu tr&ecirc;n phần mềm.</p>
              <p>&nbsp;</p>
              <p>Tiền kh&aacute;m bệnh sẽ ho&agrave;n lại t&agrave;i khoản của bệnh nh&acirc;n&nbsp;đ&atilde; sử dụng&nbsp;thanh to&aacute;n. Ph&iacute; tiện &iacute;ch sẽ kh&ocirc;ng được ho&agrave;n trả.</p>
              <p>&nbsp;</p>
              <p>Thời gian nhận lại tiền kh&aacute;m trong t&agrave;i khoản: từ&nbsp;1 - 3&nbsp;ng&agrave;y&nbsp;(đối với v&iacute; điện tử&nbsp;MOMO).</p>
              <p>&nbsp;</p>
              <p>C&aacute;c loại thẻ&nbsp;ATM nội địa: từ&nbsp;01 đến 05&nbsp;ng&agrave;y l&agrave;m việc.</p>
              <p>&nbsp;</p>
              <p>Thẻ thanh to&aacute;n&nbsp;quốc tế&nbsp;(Visa/MasterCard&hellip;): từ&nbsp;05 đến 45&nbsp;ng&agrave;y l&agrave;m việc.</p>
              <p>&nbsp;</p>
              <p>Trường hợp kh&aacute;ch h&agrave;ng thanh to&aacute;n bằng c&aacute;c cửa h&agrave;ng tiện lợi m&agrave; muốn huỷ phiếu kh&aacute;m bệnh,kh&aacute;ch h&agrave;ng vui l&ograve;ng đến cửa h&agrave;ng tiện lợi cung cấp đầy đủ th&ocirc;ng tin v&agrave; cửa h&agrave;ng sẽ kiểm tra ho&agrave;n tiền lại (Tuỳ theo cửa h&agrave;ng c&oacute; thể nhanh hoặc chậm).</p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 305,
            question:
              'Tôi có thể thay đổi thông tin khám đã đặt qua phần mềm không?',
            answer: `<p>Bạn kh&ocirc;ng thể thay đổi th&ocirc;ng tin kh&aacute;m tr&ecirc;n phiếu kh&aacute;m bệnh đ&atilde; đặt th&agrave;nh c&ocirc;ng.</p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 306,
            question:
              'Phần mềm có cho đăng ký khám bệnh với đối tượng bệnh nhân bhyt không?',
            answer: `<p>Hiện tại bệnh viện chỉ hỗ trợ bệnh nh&acirc;n đăng k&yacute; kh&aacute;m dịch vụ qua ứng dụng.</p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 307,
            question: 'Nếu bác sĩ thay đổi lịch khám, tôi phải làm sao?',
            answer: `<p>Khi b&aacute;c sĩ thay đổi lịch kh&aacute;m, phần mềm sẽ gửi th&ocirc;ng b&aacute;o cho bạn qua tin nhắn sms, email v&agrave; tr&ecirc;n ứng dụng.Khi nhận được th&ocirc;ng b&aacute;o về sự thay đổi. Bạn c&oacute; thể:</p>
              <ul>
              <li>Hủy Phiếu Kh&aacute;m Bệnh để nhận lại tiền kh&aacute;m theo quy định ho&agrave;n tiền.</li>
              <li>Vẫn giữ nguy&ecirc;n th&ocirc;ng tin tr&ecirc;n Phiếu Kh&aacute;m Bệnh, v&agrave; điều n&agrave;y đồng nghĩa với việc bạn chấp nhận kh&aacute;m với b&aacute;c sĩ thay thế m&agrave; bệnh viện đ&atilde; sắp xếp.</li>
              <li>Thay đổi th&ocirc;ng tin kh&aacute;m tr&ecirc;n phiếu kh&aacute;m bệnh, bằng c&aacute;ch: Đăng nhập phần mềm &gt; Th&ocirc;ng Tin T&agrave;i Khoản &gt; Quản l&yacute; phiếu kh&aacute;m bệnh &gt; chọn v&agrave;o phiếu kh&aacute;m bệnh bị thay đổi lịch kh&aacute;m &gt; bấm "Chỉnh sửa".</li>
              </ul>
              <p>Việc thay đổi th&ocirc;ng tin tr&ecirc;n phiếu kh&aacute;m bệnh phải được thực hiện theo Quy định chỉnh sửa th&ocirc;ng tin tr&ecirc;n phiếu kh&aacute;m bệnh.</p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 308,
            question:
              'Làm sao có thể chọn đúng chuyên khoa để đăng ký khám qua phần mềm?',
            answer: `<p>Trường hợp t&aacute;i kh&aacute;m, bạn chỉ việc chọn đ&uacute;ng chuy&ecirc;n khoa của lần kh&aacute;m trước.</p>
              <p>Trường hợp kh&aacute;m mới:</p>
              <ul>
              <li>Nếu biết chắc chuy&ecirc;n khoa m&igrave;nh muốn đăng k&yacute; kh&aacute;m, bạn chỉ việc t&igrave;m&nbsp;chọn chuy&ecirc;n khoa đ&oacute; trong danh s&aacute;ch.</li>
              <li>Nếu&nbsp;chưa biết chuy&ecirc;n khoa n&agrave;o ph&ugrave; hợp, bạn&nbsp;c&oacute; thể gọi v&agrave;o tổng đ&agrave;i tư vấn chăm s&oacute;c kh&aacute;ch h&agrave;ng của bệnh viện hoặc tổng đ&agrave;i medpro&nbsp;<strong>19002115</strong> hoặc li&ecirc;n hệ hỗ trợ tại k&ecirc;nh chat mạng x&atilde; hội facebook, zalo.</li>
              </ul>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 309,
            question:
              'Tôi sẽ được khám bệnh vào đúng thời gian đã chọn, sau khi đăng ký khám qua phần mềm đúng không?',
            answer: `<p>Trả lời: C&oacute; thể.</p>
              <p>Thời gian bạn chọn khi đăng k&yacute; kh&aacute;m, được xem l&agrave; thời gian kh&aacute;m bệnh dự kiến. Do đặc th&ugrave; của c&ocirc;ng t&aacute;c kh&aacute;m chữa bệnh, sẽ kh&ocirc;ng thể ch&iacute;nh x&aacute;c thời gian kh&aacute;m 100%.</p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 310,
            question:
              'Tôi đăng ký đã bị trừ tiền nhưng sao không nhận được mã số khám bệnh?',
            answer: `<p>Bạn vui l&ograve;ng kiểm tra th&ocirc;ng tin phiếu kh&aacute;m trong t&agrave;i khoản tr&ecirc;n phần mềm. Hoặc vui l&ograve;ng gọi điện tổng đ&agrave;i 19002115 để được hỗ trợ.</p>`,
            status: 1,
            category_id: 3,
          },
          {
            id: 311,
            question:
              'Tôi đã đăng ký thành công vậy khi đi khám tôi có phải xếp hàng gì không?',
            answer: `<p>Kh&ocirc;ng, bạn kh&ocirc;ng c&ograve;n phải xếp h&agrave;ng chờ đợi để lấy số kh&aacute;m bệnh, l&agrave;m thủ tục đ&oacute;ng tiền, bạn chỉ cần đến cửa tiếp nhận số 1 để được hướng dẫn v&agrave;o ph&ograve;ng kh&aacute;m.</p>`,
            status: 1,
            category_id: 3,
          },
        ],
      },
      {
        id: 4,
        name: 'Vấn đề về thanh toán',
        faq: [
          {
            id: 401,
            question: 'Điều kiện để được hoàn tiền là gì?',
            answer: `<p>Bạn chỉ được ho&agrave;n tiền khi thực hiện th&agrave;nh c&ocirc;ng y&ecirc;u cầu Hủy Phiếu Kh&aacute;m Bệnh tr&ecirc;n phần mềm theo theo quy định.</p>`,
            status: 1,
            category_id: 4,
          },
          {
            id: 402,
            question:
              'Hoàn tiền như thế nào? Bao lâu thì tôi nhận lại được tiền hoàn?',
            answer: `<p>Khi bạn thực hiện việc&nbsp;thanh to&aacute;n bằng phương thức n&agrave;o, th&igrave; phần mềm sẽ ho&agrave;n tiền&nbsp;lại cho bạn&nbsp;bằng&nbsp;đ&uacute;ng phương thức v&agrave; số t&agrave;i khoản&nbsp;đ&atilde; d&ugrave;ng để thanh to&aacute;n đ&oacute;.</p>
              <p>Thời gian bạn nhận được&nbsp;tiền ho&agrave;n th&ocirc;ng thường được quy định như sau:</p>
              <ul>
              <li>Thẻ kh&aacute;m bệnh:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1 - 30 ng&agrave;y l&agrave;m việc.</li>
              <li>Thẻ ATM nội địa:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;1 - 30 ng&agrave;y l&agrave;m việc.</li>
              <li>Thẻ t&iacute;n dụng Visa, MasterCard:&nbsp; &nbsp; &nbsp; &nbsp; 1 - 45 ng&agrave;y l&agrave;m việc.</li>
              </ul>
              <p>T&iacute;nh từ thời điểm bạn thực hiện Hủy Phiếu Kh&aacute;m Bệnh th&agrave;nh c&ocirc;ng, nếu qu&aacute; thời gian tr&ecirc;n bạn vẫn chưa nhận được tiền ho&agrave;n, vui l&ograve;ng li&ecirc;n hệ tổng đ&agrave;i 1900 2115 ch&uacute;ng t&ocirc;i sẽ hỗ&nbsp;trợ bạn.</p>`,
            status: 1,
            category_id: 4,
          },
          {
            id: 403,
            question:
              'Tôi không có bất kỳ một thẻ khám bệnh hoặc thẻ ngân hàng nào để thanh toán, vậy tôi phải làm sao?',
            answer: `<p>&nbsp;Bạn c&oacute; thể li&ecirc;n hệ nh&acirc;n vi&ecirc;n bệnh viện&nbsp;tại c&aacute;c quầy hướng dẫn trong bệnh viện để được hỗ trợ l&agrave;m&nbsp;thẻ kh&aacute;m bệnh&nbsp;miễn ph&iacute;.</p>
              <p>Nhờ con,ch&aacute;u hoặc người th&acirc;n trong gia đ&igrave;nh c&oacute; sử dụng c&aacute;c phương thức thanh to&aacute;n trực tuyến để đặt kh&aacute;m.</p>
              <p>Đăng k&yacute; mới một trong c&aacute;c phương thức thanh to&aacute;n trực tuyến c&oacute; hỗ trợ ngay, để tiếp tục sử dụng trong tương lai.</p>`,
            status: 1,
            category_id: 4,
          },
          {
            id: 404,
            question:
              'Thông tin thanh toán của tôi có bị lộ khi tôi tiến hành thanh toán trên phần mềm không?',
            answer: `<p>Trả lời : Kh&ocirc;ng!</p>
              <p>Phần mềm&nbsp;v&agrave; bệnh viện ho&agrave;n to&agrave;n kh&ocirc;ng thể sao lưu lại&nbsp;bất kỳ th&ocirc;ng tin thanh to&aacute;n n&agrave;o của bạn.</p>
              <p>C&aacute;c th&ocirc;ng tin của bạn được bảo mật tại cổng thanh to&aacute;n v&agrave; ng&acirc;n h&agrave;ng nh&agrave; nước việt nam.</p>`,
            status: 1,
            category_id: 4,
          },
          {
            id: 405,
            question:
              'Tôi đăng nhập đúng tên tài khoản nhưng không thanh toán được?',
            answer: `<ul>
              <li>Đối với thẻ kh&aacute;m bệnh/ATM nội địa phải đảm bảo đ&atilde; k&iacute;ch hoạt t&iacute;nh năng thanh to&aacute;n trực tuyến th&igrave; mới c&oacute; thể thanh to&aacute;n được. Nếu thẻ của bạn chưa k&iacute;ch hoạt Thanh to&aacute;n trực tuyến th&igrave; vui l&ograve;ng li&ecirc;n hệ với ng&acirc;n h&agrave;ng ph&aacute;t h&agrave;nh thẻ của bạn để đăng k&yacute;.</li>
              <li>Nếu thẻ của bạn đ&atilde; đăng k&yacute; thanh to&aacute;n trực tuyến v&agrave; nhập ch&iacute;nh x&aacute;c th&ocirc;ng tin thanh to&aacute;n nhưng vẫn kh&ocirc;ng thanh to&aacute;n được, vui l&ograve;ng li&ecirc;n hệ 19002115 ch&uacute;ng t&ocirc;i sẽ hỗ trợ bạn.</li>
              </ul>`,
            status: 1,
            category_id: 4,
          },
          {
            id: 406,
            question:
              'Tôi muốn đăng ký khám online nhưng đến trực tiếp bệnh viện để thanh toán được không?',
            answer: `Trả lời : không

              Hiện tại khi đặt khám trên phần mềm bạn vui lòng hoàn tất quy trình thanh toán ngay trên phần mềm để được nhận phiếu khám bệnh.`,
            status: 1,
            category_id: 4,
          },
          {
            id: 407,
            question:
              'Tôi nhập tài khoản thẻ nhưng bấm xác thực hoài không được?',
            answer: `<p>Vui lòng ki&ecirc;̉m tra ch&iacute;nh x&aacute;c th&ocirc;ng tin thẻ đ&atilde; nhập. Trường hợp vẫn bị lỗi, h&atilde;y chụp ảnh m&agrave;n h&igrave;nh b&aacute;o lỗi v&agrave; gửi qua c&aacute;c k&ecirc;nh hỗ trợ, ch&uacute;ng t&ocirc;i sẽ hỗ trợ bạn.</p>`,
            status: 1,
            category_id: 4,
          },
        ],
      },
    ],
  },
];

export default PARTNERS;
