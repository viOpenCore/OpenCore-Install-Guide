# Hỗ trợ guides

**Chú ý**: Guide này được viết nên bởi Dortania (không được Acidanthera xác nhận chính thức) và dịch bởi nhóm viOpenCore. Chính vì vậy đừng làm phiền Acidanthera và Dortania với các vấn đề về guide này.

Muốn hỗ trợ guide? Vâng, đây là một số cách bạn có thể giúp đỡ!

* [Đóng góp thông qua Issues](#dong-gop-thong-qua-issues)
* [Đóng góp thông qua PRs](#dong-gop-thong-qua-prs)

Lưu ý: Đối với những người muốn donate, chúng tôi thực sự đánh giá cao điều đó nhưng chúng tôi là một tổ chức phi lợi nhuận. Chúng tôi làm điều này để hỗ trợ cộng đồng chứ không phải để kiếm tiền. Nếu bạn còn dư một số tiền, chúng tôi thực sự khuyên bạn nên đóng góp nó cho một tổ chức từ thiện. [Crohn's and Colitis Canada] (<https://crohnsandcolitis.donorportal.ca/Donation/DonationDetails.aspx?L=vi-CA&G=159&F=1097&T=GENER>) là một địa chỉ mà chúng tôi nghĩ bạn có thể lựa chọn nếu bạn chưa biết.

## Đóng góp thông qua Issues

 Đóng góp thông qua Issues khá là đơn giản nhưng nó vẫn có một số quy tắc:

* Issues tab chỉ là nơi dành riêng cho những lỗi trong guides thôi, **không có những vẫn đề hackintosh của riêng bạn**. Nó không phải là nơi để thảo luận về các vấn đề cài đặt.
* Nếu có lỗi đánh máy hoặc cần giải thích rõ hơn, vui lòng cho biết trang đó nằm ở đâu. Chúng tôi đánh giá cao việc không đi tìm kiếm những vấn đề này ở đâu.

Bạn có thể tìm thấy bugtracker ở đây: [Bugtracker](https://github.com/viopencore/bugtracker)

## Đóng góp thông qua PRs

Một số nguyên tắc khi đóng góp thông qua PRs:

* Chịu khó suy nghĩ đi (làm ơn).
* Proofread your submissions.
* Pull Requests có thể bị từ chối nếu chúng tôi cảm thấy nó không phù hợp hoặc có thông tin không chính xác. Nói chung, chúng tôi sẽ cho bạn biết lý do tại sao nó bị từ chối hoặc yêu cầu bạn sửa đổi.
  * Chúng tôi cũng đánh giá sources for any bigger commits để giúp chúng tôi dễ dàng xác minh thông tin bạn cung cấp là hợp lệ
* Hình ảnh phải được lưu trữ trong repo trong thư mục `../ images /`
* PR của bạn phải được run markdown lint và đã fix mọi lỗi.
* Nói chung, cố gắng tránh sử dụng các công cụ không phải của Acidanthera nếu có thể. Nhìn chung, chúng tôi muốn tránh sử dụng các công cụ của bên thứ ba (third-party tools) - nhưng nếu điều này là bắt buộc, thì bạn có thể link nó.
  * Các tools đã bị cấm:
    * UniBeast, MultiBeast and KextBeast
      * Xem thêm tại: [Tonymacx86-stance](https://github.com/khronokernel/Tonymcx86-stance)
    * TransMac
      * Phá hỏng USB
    * Niresh Installers
      * Chúng tôi muốn tránh mọi piracy trong guide này

### Cách đóng góp

Cách tốt nhất để kiểm tra các commits của bạn và đảm bảo rằng chúng đều được format đúng là download Node.js rồi run `yarn install` để cài các dependencies. Khi bạn chạy `yarn dev`, nó sẽ thiết lập một local webserver để xem những thay đổi mà bạn đã thức thiện. `yarn test` sẽ báo cho bạn biết bất kì lỗi nào về format và chính tả. Nếu bạn muốn `markdownlint` tự động cố gắng sữa chữa lỗi format, run `yarn fix-lint`.

Hướng dẫn từng bước một:

* [Fork repo này](https://github.com/viopencore/OpenCore-Install-Guide/fork/)
* Cài đặt các phần mềm cần thiết:
  * [Node.js](https://nodejs.org/) (Khuyên dùng bản LTS)
* Thực hiện các thay đổi của bạn.
* Build trang web:
  * `yarn install` (Để cài tất cả plugins cần thiết)
  * `yarn dev` (Xem trang website)
    * Có thể được tìm thấy tại `http://localhost:8080`
* Kiểm tra format và chính tả:
  * `yarn test`
  * `yarn lint` và `yarn spellcheck` (Để run các tests riêng lẻ)
  * `yarn fix-lint` (Để fix mọi sự cố tiềm ẩn)
  * Đối với những từ chưa được hỗ trợ, xin vui lòng add chúng vào [vietnamese.txt](./dictionary/vietnamese.txt) và run `yarn sort-dict`

### Tips

Một số tools giúp bạn đóng góp dễ dàng hơn:

* [Visual Studio Code](https://code.visualstudio.com)
* [Typora](https://typora.io) để hỗ trợ real time markdown rendering.
* [TextMate](https://macromates.com) để tìm/thay thể từ hàng loạt dễ dàng và hiệu quả.
* [Github Desktop](https://desktop.github.com) có GUI thân thiện với người dùng (dễ sử dụng).
