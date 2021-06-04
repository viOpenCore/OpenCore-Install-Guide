# Tạo bộ cài

Yêu cầu:

* [OpenCorePkg](https://github.com/acidanthera/OpenCorePkg/releases), chúng tôi khuyến khích sử dụng bản debug để hiển thị thêm nhiều thông tin
* [ProperTree](https://github.com/corpnewt/ProperTree) để chỉnh sửa file .plist (OpenCore Configurator là một tool khác nhưng nó cực kì lỗi thời và phiên bản của Mackie sẽ làm hư file. **Hãy tránh xa công cụ này bằng mọi giá!**).
* Bạn cần phải xoá hết Clover ra khỏi máy của mình nếu bạn muốn sử dụng OpenCore làm boot-loader chính của bạn. Lưu bản sao lưu EFI Clover của bạn. Xem những gì mà bạn cần phải xoá tại đây: [Chuyển đổi từ Clover](https://github.com/viopencore/OpenCore-Install-Guide/tree/vietnamese/clover-conversion)

### Bộ cài Online vs bộ cài Offline

Bộ cài Offline có đầy đủ những gì bạn cần để cài macOS, trong khi bộ cài Online chỉ chứa recovery image (~500MB) mà sau đó sẽ tải về macOS từ server của Apple một khi khởi động.

* Offline
  * Chỉ có thể được tạo ra trong macOS
  * Windows/Linux không có driver APFS/HFS dùng để tạo ra bộ cài đầy đủ
* Online
  * Có thể được tạo ra trong macOS/Linux/Windows
  * Cần có kết nối mạng thông qua adapter mạng được Apple hỗ trợ trên máy mà bạn định cài lên

### Tạo bộ cài

Tuỳ thuộc vào hệ điều hành mà bạn có, xem phần cụ thể phù hợp với bạn về tạo bộ cài:

* [macOS users](../installer-guide/mac-install.md)
  * Hỗ trợ từ OS X 10.4 đến bản mới nhất
  * Hỗ trợ cả legacy and UEFI installs
* [Windows users](../installer-guide/winblows-install.md)
  * Hỗ trợ từ OS X 10.7 đến bản mới nhất
  * Chỉ tạo được bộ cài Online
  * Hỗ trợ cả legacy and UEFI installs
* [Linux users(UEFI)](../installer-guide/linux-install.md)
  * Hỗ trợ từ OS X 10.7 đến bản mới nhất
  * Chỉ tạo được bộ cài Online
  * Chỉ phù hợp với máy hỗ trợ UEFI Boot
