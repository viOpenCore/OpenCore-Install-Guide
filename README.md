---
home: true
heroImage: /dortania-logo-clear.png
heroText: OpenCore Install Guide
actionText: Bắt đầu→
actionLink: prerequisites.md

meta:
- name: description
  content: Hỗ trợ version 0.7.2
---

# OpenCore là gì và guide này dành cho a

OpenCore là một "bootloader" – nó là một phần mềm phức tạp mà chúng ta sử dụng để chuẩn bị máy của chúng ta cho macOS – cụ thể là bằng cách inject các thông tin cho macOS như SMBIOS, ACPI tables và kexts. Điểm khác biệt của OpenCore khi so sánh với các bootloader khác như Clover là nó được thiết kế với sự quan tâm rất lớn về bảo mật và chất lượng, cho phép ta sử dụng tính năng bảo mật trên real Macs, như là [System Integrity Protection](https://support.apple.com/en-ca/HT204899) và [FileVault](https://support.apple.com/en-ca/HT204837). Bạn có thể tìm hiểu sâu hơn ở đây: [Why OpenCore over Clover and others](why-oc.md)

Hướng dẫn này tập trung vào 2 điều chính

* Cài macOS trên các máy PC cấu trúc x86-64 (Intel, AMD)
* Cách làm cho chiếc Hackintosh của bạn hoạt động

Chính bởi vì vậy, bạn sẽ phải đọc, nghiên cứu và thậm chí sử dụng Google. Việc cài đặt này không dễ, nhanh gọn lẹ như "mì ăn liền".

Nên nhớ rằng OpenCore vẫn còn rất mới vẫn còn là bản beta. Dù đã khá là ổn định, và được cho là ổn định hơn rất nhiều so với Clover trong rất nhiều phương diện, nó vẫn được update thường xuyên, nên các thiết lập thay đổi khá thường xuyên(tức là các quirk mới thay thế những cái cũ).

Cuối cùng, những ai gặp vấn đề có thể tham gia subreddit [r/Hackintosh subreddit](https://www.reddit.com/r/hackintosh/) và Discord [r/Hackintosh Discord](https://discord.gg/u8V7N5C) để được hỗ trợ nhiều hơn.
