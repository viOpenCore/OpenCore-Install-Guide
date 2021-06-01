---
home: true
heroImage: /dortania-logo-clear.png
heroText: Hướng Dẫn Thiết Lập OpenCore
actionText: Bắt đầu→
actionLink: prerequisites.md

meta:
- name: description
  content: Hỗ trợ version 0.6.9
---

# OpenCore là gì và hướng dẫn này dành cho ai

OpenCore được chúng ta gọi là "boot loader" – nó là một phần mềm phức tạp mà chúng ta sử dụng để chuẩn bị máy của chúng ta cho macOS – cụ thể là bằng cách inject các thông tin mới cho macOS như SMBIOS, ACPI tables và kexts. Điểm khác biệt của tool này khi so sánh với các tool khác như Clover là nó được designed với sự quan tâm rất lớn cho bảo mật và chất lượng, cho phép ta sử dụng tính năng bảo mật trên real Macs, như là [System Integrity Protection](https://support.apple.com/en-ca/HT204899) và [FileVault](https://support.apple.com/en-ca/HT204837). Bạn có thể tìm hiểu sâu hơn ở đây: [Why OpenCore over Clover and others](why-oc.md)

Hướng dẫn này tập trung vào 2 điều chính

* Cài macOS trên các X86 PC
* Hướng dẫn bạn những gì làm cho máy của bạn hoạt động

Chính bởi vì vậy, bạn sẽ phải đọc, nghiên cứu và thậm chí Google. Việc cài đặt này không dễ, nhanh gọn lẹ như "mì ăn liền".

Nên nhớ rằng OpenCore vẫn còn rất mới vẫn còn là bản beta. Dù đã khá là ổn định, và được cho là ổn định hơn rất nhiều so với Clover trong rất nhiều phương diện, nó vẫn được update thường xuyên, nên các thiết lập thay đổi khá thường xuyên(tức là các quirks mới thay thế những cái cũ).

Cuối cùng, những ai gặp vấn đề có thể tham gia cả [r/Hackintosh subreddit](https://www.reddit.com/r/hackintosh/) và [r/Hackintosh Discord](https://discord.gg/u8V7N5C) để được hỗ trợ nhiều hơn