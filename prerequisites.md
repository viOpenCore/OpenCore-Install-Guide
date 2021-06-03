# Bắt đầu với OpenCore

Trước khi chúng ta nhảy vào cài Hackintosh bằng OpenCore, chúng ta cần phải đọc qua một số thứ.

## Điều kiện cần thiết

1. <span style="color:red">_**[QUAN TRỌNG]**_</span> Thời gian và sự kiên nhẫn.
   * Không bắt đầu việc này nếu bạn đang bị deadline rượt hoặc là có công việc quan trọng. Hackintosh không phải là thứ mà bạn nên cài trên các thiết bị phục vụ công việc.
2. <span style="color:red">_**[QUAN TRỌNG]**_</span> **NẮM RÕ CẤU HÌNH CỦA BẠN**
   * Tên CPU của bạn và generations của nó
   * GPU của bạn
   * Ổ đĩa của bạn (HDD/SSD, NVMe/AHCI/RAID/IDE configuration)
   * Tên model của Desktop/Laptop nếu là sản phẩm OEM
   * **Chipset Ethernet** của bạn
   * Chipset WLAN/Bluetooth của bạn
3. <span style="color:red">_**[QUAN TRỌNG]**_</span> **NẮM MỘT SỐ KIẾN THỨC CƠ BẢN VỀ SỬ DỤNG CÁC DÒNG LỆNH VÀ CÁCH SỬ DỤNG TERMINAL/COMMAND PROMPT**
   * Nó không chỉ [QUAN TRỌNG], nó chính là phần căn bản của guide này. Chúng tôi không thể giúp bạn nếu bạn không biết `cd` tới một thư mục hoặc xoá tệp.
4. <span style="color:red">_**[QUAN TRỌNG]**_</span> Một chiếc máy tương thích như trong phần _**Compatibility**_.
   * [Hardware Limitations page](macos-limits.md)
5. <span style="color:red">_**[QUAN TRỌNG]**_</span> Bạn cần có tối thiểu:
   * 16GB USB nếu bạn đang định tạo bộ cài trong macOS
   * 4GB USB nếu bạn đang định tạo bộ cài trong Windows hoặc Linux
6. <span style="color:red">_**[QUAN TRỌNG]**_</span> Cần có **kết nối Ethernet** (không WiFi dongles, adapter Ethernet USB có thể hoạt động tuỳ vào sự hỗ trợ của macOS) và bạn cần biết model card LAN của bạn
   * Máy của bạn cũng cần có một cổng Ethernet, hoặc là dongle/adapter Ethernet tương thích với macOS. Trong trường hợp bạn có [WiFi card tương thích](https://viopencore.github.io/Wireless-Buyers-Guide/), bạn cũng có thể dùng nó.
     * Lưu ý là có rất nhiều card WiFi không tương thích với macOS
   * Với những người không thể sử dụng Ethenet nhưng có điện thoại Android, bạn có thể kết nối điện thoại Android với WiFi và rồi truyền nó thông qua USB bằng [HoRNDIS](https://joshuawise.com/horndis#available_versions).
7. <span style="color:red">_**[QUAN TRỌNG]**_</span> **Có hệ điều hành hích hợp:**
   * Bạn nên có 1 trong 3:
     * macOS (Những phiên bản gần đây sẽ tốt hơn)
     * Windows (Windows 10, 1703 hoặc mới hơn)
     * Linux (Sạch và hoạt động ổn định, với Python 2.7 hoặc mới hơn)
   * Với người dùng Windows hoặc Linux, bạn phải có ít nhất **15GB** khả dụng ổ đĩa mà bạn đang làm việc. Trên Windows, ổ đĩa chứa OS của bạn (C:) cần có tôi thiểu **15GB** khả dụng.
   * Với người dùng macOS, **30GB** khả dụng trên ổ đĩa hệ thống của bạn.
   * Đa số các công cụ trong guide này sẽ cần có [Python](https://www.python.org/downloads/)
