# Bắt đầu với OpenCore

Trước khi chúng ta nhảy vào làm hệ thống dựa trên OpenCore, chúng ta cần phải trải qua một số thứ.

## Điều kiện cần thiết

1. <span style="color:red">_**[QUAN TRỌNG]**_</span> Thời gian và sự kiên nhẫn.
   * Không bắt đầu việc này nếu bạn đang có deadline hoặc là có công việc quan trọng. Hackintosh không phải là thứ mà bạn dựa lên như là thiết bị có thể hoạt động.
2. <span style="color:red">_**[QUAN TRỌNG]**_</span> **HIỂU BIẾT VỀ PHẦN CỨNG CỦA BẠN**
   * Tên CPU của bạn và thế hệ của nó
   * GPU của bạn
   * Tên thiết bị lưu trữ của bạn (HDD/SSD, cấu hình NVMe/AHCI/RAID/IDE)
   * Tên model của Máy tính để bàn/Laptop nếu nó tới từ OEM
   * **Chipset Ethernet** của bạn
   * Chipset WLAN/Bluetooth của bạn
3. <span style="color:red">_**[QUAN TRỌNG]**_</span> **MỘT ÍT KIẾN THỨC VỀ SỬ DỤNG CÁC DÒNG LỆNH VÀ CÁCH SỬ DỤNG TERMINAL/COMMAND PROMPT**
   * Nó không chỉ [QUAN TRỌNG], nó chính là phần căn bản của guide này. Chúng tôi không thể giúp bạn nếu bạn không biết `cd` tới một thư mục hoặc xoá tệp.
4. <span style="color:red">_**[QUAN TRỌNG]**_</span> Một chiếc máy mà tương thích như trong phần _**Compatibility**_.
   * [Hardware Limitations page](macos-limits.md)
5. <span style="color:red">_**[QUAN TRỌNG]**_</span> Cần có tối thiểu:
   * 16GB USB nếu bạn đang định dung macOS để tạo USB
   * 4GB USB nếu bạn đang định dung Windows hoặc Linux để tạo USB
6. <span style="color:red">_**[QUAN TRỌNG]**_</span> Cần có **kết nối Ethernet** (không WiFi dongles, adapter Ethernet USB có thể hoạt động tuỳ vào sự hỗ trợ của macOS) và bạn cần biết model card LAN của bạn 
   * Bạn cũng cần có một cổng Ethernet vật lí, hoặc là dongle/adapter Ethernet tương thích với macOS. Trong trường hợp bạn có [compatible WiFi card](https://viopencore.github.io/Wireless-Buyers-Guide/), bạn cũng có thể dùng nó.
     * Luư ý lá có hàng loạt card WiFi không tương thích với macOS
   * Với những người không thể sử dụng Ethenet nhưng có điện thoại Android, bạn có thể kết nối điện thoại Android tới WiFi truyền nó thông qua USB với [HoRNDIS](https://joshuawise.com/horndis#available_versions).
7. <span style="color:red">_**[QUAN TRỌNG]**_</span> **Thích hợp để cài đặt OS:**
   * Hãy có:
     * macOS (Những phiên bản gần đây sẽ tốt hơn)
     * Windows (Windows 10, 1703 hoặc mới hơn)
     * Linux (Sạch và hoạt động ổn định, với Python 2.7 hoặc mới hơn)
   * Với người dùng Windows hoặc Linux, **15GB** khả dụng trên ổ đĩa mà bạn đang làm trên. Trên Windows, ổ đĩa chứa OS của bạn (C:) cần có tôi thiểu **15GB** khả dụng.
   * Với người dùng macOS, **30GB** khả dụng trên ổ đĩa hệ thống của bạn.
   * Đa số các công cụ trong guide này sẽ cần có [Python được cài đặt](https://www.python.org/downloads/)
