interface AccordionItem {
  id: number;
  question: string;
  answer: string; // answer giờ là HTML string
  status?: number;
  category_id?: number;
  defaultExpanded?: boolean;
}

export interface AccordionItemProps {
  item: AccordionItem;
}

interface IFaq {
  id: number;
  name: string;
  faq: AccordionItem[];
}

export const faqData: IFaq[] = [
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
              <p>Trong trường hợp CẤP CỨU, người nhà nên đưa người bệnh đến cơ sở y tế gần nhất hoặc gọi số Hotline: (028).3932.5364 để được hỗ trợ.</p>`,
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
              <p>Trường hợp đã kiểm tra kỹ nhưng vẫn không thấy email gửi phiếu khám bệnh, vui lòng liên hệ tổng đài 19002115 chúng tôi sẽ hỗ trợ bạn.</p>`,
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
              <p>Vui lòng liên hệ trực tiếp tổng đài 19002115.</p>`,
        status: 1,
        category_id: 1,
      },
      {
        id: 114,
        question: 'Tôi bị bệnh về Mắt nhưng tôi phải đăng ký khoa nào?',
        answer: `
              <p>Vui lòng điện thoại tổng đài bệnh viện hoặc 19002115 để được tư vấn chọn chuyên khoa.</p>`,
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
                <strong>Website: </strong>Đăng nhập website https://benhvienmat.medpro.vn/ > chọn thông tin tài khoản > chọn quản lý phiếu khám bệnh > chọn phiếu khám bệnh muốn hủy > bấm hủy phiếu.
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
        question: 'Có thể đăng ký khám bệnh trong ngày bằng phần mềm không?',
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
        question: 'Tôi nhập tài khoản thẻ nhưng bấm xác thực hoài không được?',
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
];

export default faqData;
