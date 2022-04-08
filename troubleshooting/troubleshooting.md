# Khắc phục các sự cố thường gặp

Phần này dành cho những ai có vấn đề liên quan đến khởi động OpenCore, macOS hoặc các vấn đề trong macOS. Nếu bạn đang không biết chính xác mình bị kẹt ở chỗ nào trong quá trình khởi động macOS, đọc mục [Hiểu được quá trình boot của macOS](../troubleshooting/boot.md) sẽ giúp bạn làm rõ mọi thứ.

**Nếu vấn đề của bạn không được đề cập, hãy đọc tài liệu chính thức của OpenCore:** [Configuration.pdf](https://github.com/acidanthera/OpenCorePkg/blob/master/Docs/Configuration.pdf). Tài liệu này đi sâu chi tiết vào các kỹ thuật, về cách OpenCore hoạt động và có nhiều thông tin chi tiết hơn về tất cả các câu hỏi được hỗ trợ.

## Mục lục 

Nếu bạn đang không rõ mình đang bị kẹt ở đâu, vui lòng xem ở đây: [Hiểu được quá trình boot của macOS(../troubleshooting/boot.md)

* [Các lỗi liên quan đến khởi động OpenCore](./extended/opencore-issues.md)
  * Mục này đề cập đến các lỗi trong quá trình từ lúc khởi động USB đến phần lựa chọn của OpenCore (có thể hiểu là menu của OpenCore - _người dịch_). Tất cả những gì sau phần menu của OpenCore, như là khởi động macOS, ở bên dưới
* [Các lỗi liên quan đến KernelSpace](./extended/kernel-issues.md)
  * Đề cập đến tất cả những lỗi thường xuyên xảy ra trong giai đoạn đầu tiên của quá trình khởi động macOS, từ lúc bạn chọn macOS trong menu của OpenCore, cho đến trước khi logo Apple và giao diện của quá trình cài đặt hiện lên.
* [Các lỗi liên quan đến Userspace](./extended/userspace-issues.md)
  * Đề cập đến quá trình từ lúc nạp giao diện macOS đến quá trình cài đặt macOS lên ổ đĩa
* [Các lỗi sau quá trình cài đặt macOS](./extended/post-issues.md)
  * Khắc phục các lỗi xảy ra sau khi macOS đã được cài đặt và khởi động hoàn toàn
* [Các lỗi khác](./extended/misc-issues.md)
  * Khắc phục các lỗi xảy ra sau quá trình cài đặt macOS hoặc các hệ điều hành khác
