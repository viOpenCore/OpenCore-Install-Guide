# Tạo ra USB

Yêu cầu:

- [OpenCorePkg](https://github.com/acidanthera/OpenCorePkg/releases), rất khuyến
  khích sử dụng phiên bản debug để hiển thị thêm nhiều thông tin
- [ProperTree](https://github.com/corpnewt/ProperTree) dùng để chỉnh sửa tệp
  .plist (OpenCore Configurator là một loại công cụ khác nhưng nó cực kì lỗi
  thời và phiên bản của Mackie thường được biết đến là có sự hư hỏng. **Hãy
  tránh xa các loại công cụ này bằng mọi giá!**).
- Bạn cần phải bỏ hết Clover ra khỏi hệ thống của bạn nếu bạn muốn sử dụng
  OpenCore như là boot-loader chính của bạn. Giữ lại bản sao lưu EFI dựa trên
  Clover của bạn. Xem những ì mà bạn cần phả xoá tại đây:
  [Clover Conversion](https://github.com/dortania/OpenCore-Install-Guide/tree/master/clover-conversion)

### Bộ cài Online vs Offline

Bộ cài Offline có đầy đủ bản sao của macOS, trong khi bộ cài Online chỉ chứa ảnh
Khôi phục (~500MB) mà sẽ tải về macOS từ Apple servers một khi khởi động lên.

- Offline
  - Chỉ có thể làm trong macOS
  - Windows/Linux không có driver APFS/HFS dùng để tạo ra bộ cài đầy đủ
- Online
  - Có thể làm trong macOS/Linux/Windows
  - Cần có kết nối mạng thông qua adapter mạng được Apple hỗ trợ trên máy đích

### Tạo ra bộ cài

Depending on which OS you're on, see your specific section on making the USB:

- [macOS users](../installer-guide/mac-install.md)
  - Supports OS X 10.4 to current
  - Supports both legacy and UEFI installs
- [Windows users](../installer-guide/winblows-install.md)
  - Supports OS X 10.7 to current
  - Online installer only
  - Supports both legacy and UEFI installs
- [Linux users(UEFI)](../installer-guide/linux-install.md)
  - Supports OS X 10.7 to current
  - Online installer only
  - Meant for machines supporting UEFI Boot
