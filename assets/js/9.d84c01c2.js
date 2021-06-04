(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{584:function(e,t,o){e.exports=o.p+"assets/img/10.4-Tiger.ad04b0a1.png"},585:function(e,t,o){e.exports=o.p+"assets/img/10.5-Leopard.29332b4d.png"},586:function(e,t,o){e.exports=o.p+"assets/img/10.6-Snow-Loepard.8c3b55be.png"},587:function(e,t,o){e.exports=o.p+"assets/img/10.7-Lion.4195b3b9.png"},588:function(e,t,o){e.exports=o.p+"assets/img/10.8-MountainLion.ecd04cd5.png"},589:function(e,t,o){e.exports=o.p+"assets/img/10.9-Mavericks.c0ac1070.png"},590:function(e,t,o){e.exports=o.p+"assets/img/10.10-Yosemite.22947b05.png"},591:function(e,t,o){e.exports=o.p+"assets/img/10.12-Sierra.914d81d5.png"},592:function(e,t,o){e.exports=o.p+"assets/img/10.13-HighSierra.515d804f.png"},593:function(e,t,o){e.exports=o.p+"assets/img/10.15-Catalina.8cbb6258.png"},594:function(e,t,o){e.exports=o.p+"assets/img/11-Big-Sur.4b3c3a38.png"},674:function(e,t,o){"use strict";o.r(t);var n=o(26),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"tai-sao-nen-chon-opencore"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tai-sao-nen-chon-opencore"}},[e._v("#")]),e._v(" Tại sao nên chọn OpenCore")]),e._v(" "),n("p",[e._v("Phần này tóm tắt ngắn gọn về lý do tại sao cộng đồng lại chuyển đổi sang OpenCore và nhằm mục đích xóa tan một vài lầm tưởng phổ biến trong cộng đồng. Ai không cần thì có thể bỏ qua trang này.")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#tai-sao-nen-chon-opencore"}},[e._v("Tại sao nên chọn OpenCore")]),e._v(" "),n("ul",[n("li",[e._v("Các tính năng của OpenCore")]),e._v(" "),n("li",[e._v("Nhiều phần mềm hỗ trợ")]),e._v(" "),n("li",[e._v("Kext injection")])])]),e._v(" "),n("li",[n("a",{attrs:{href:"#khiem-khuyet-cua-opencore"}},[e._v("Khiếm khuyết của OpenCore")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#common-myths"}},[e._v("Lầm tưởng chung")]),e._v(" "),n("ul",[n("li",[e._v("Có phải OpenCore không ổn định vì nó là bản không?")]),e._v(" "),n("li",[e._v("Có phải OpenCore luôn inject SMBIOS và ACPI vào các hệ điều hành (OSes) khác phải không?")]),e._v(" "),n("li",[e._v("Có phải OpenCore yêu cầu phải cài mới, cài vanilla không?")]),e._v(" "),n("li",[e._v("Có OpenCore chỉ hỗ trợ rất ít phiên bản (versions) macOS?")])])])]),e._v(" "),n("h2",{attrs:{id:"tinh-nang-cua-opencore"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tinh-nang-cua-opencore"}},[e._v("#")]),e._v(" Tính năng của OpenCore")]),e._v(" "),n("ul",[n("li",[e._v("Hỗ trợ nhiều OSes hơn!\n"),n("ul",[n("li",[e._v("OpenCore hiện hỗ trợ nhiều versions của OS X and macOS một cách tự nhiên mà không cần các vụ hack khó khăn của Clover và Chameleon")]),e._v(" "),n("li",[e._v("OpenCore hỗ trợ các OSes từ 10.4, Tiger trở lại đây, thâm chs là phiên bản mới nhất 11, Big Sur!")])])]),e._v(" "),n("li",[e._v("Trung bình, các hệ thống chạy OpenCore boot nhanh hơn Clover vì ít các patch không cần thiết hơn")]),e._v(" "),n("li",[e._v("Tính ổn định tổng thể tốt hơn vì các bản patches chính xác hơn nhiều\n"),n("ul",[n("li",[n("a",{attrs:{href:"https://www.reddit.com/r/hackintosh/comments/fo9bfv/macos_10154_update/",target:"_blank",rel:"noopener noreferrer"}},[e._v("macOS 10.15.4 update"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("AMD OSX patches không cần phải được cập với mọi bản Secủity update nhỏ")])])]),e._v(" "),n("li",[e._v("Tổng quan thì bảo mật tốt hơn ở nhiều mặt:\n"),n("ul",[n("li",[e._v("Không cần tắt System Integrity Protection (SIP)")]),e._v(" "),n("li",[e._v("Hỗ trợ FileVault 2")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://viopencore.github.io/OpenCore-Post-Install/universal/security.html#Vault",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vaulting"),n("OutboundLink")],1),e._v(' giúp tạo "ảnh chụp" của EFI để ngăn những sửa đổi không mong muốn')]),e._v(" "),n("li",[e._v("Thực sư hỗ trợ secure-boot\n"),n("ul",[n("li",[e._v("Both UEFI and Apple's variant")])])])])]),e._v(" "),n("li",[e._v("BootCamp switching and boot device selection are supported by reading NVRAM variables set by Startup Disk, just like a real Mac.")]),e._v(" "),n("li",[e._v("Supports boot hotkey via "),n("code",[e._v("boot.efi")]),e._v(" - hold "),n("code",[e._v("Option")]),e._v(" or "),n("code",[e._v("ESC")]),e._v(" at startup to choose a boot device, "),n("code",[e._v("Cmd+R")]),e._v(" to enter Recovery or "),n("code",[e._v("Cmd+Opt+P+R")]),e._v(" to reset NVRAM.")])]),e._v(" "),n("h2",{attrs:{id:"nhieu-phan-mem-ho-tro"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nhieu-phan-mem-ho-tro"}},[e._v("#")]),e._v(" Nhiều phần mềm hỗ trợ")]),e._v(" "),n("p",[e._v("Đây chính là nguyên nhân chính làm cho ai đó chuyển qua OpenCore từ các bootloaders khác chính là vì OpenCore có nhiều phần mềm hỗ trợ hơn:")]),e._v(" "),n("ul",[n("li",[e._v("Kexts không còn được test cho Clover:\n"),n("ul",[n("li",[e._v("Gặp lỗi với 1 kext? Một developers bao gồm nhóm "),n("a",{attrs:{href:"https://github.com/acidanthera",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acidanthera"),n("OutboundLink")],1),e._v(" (người viết hầu hết những kexts yêu thích nhất của bạn) sẽ không hỗ trợ trừ khi bạn sử dụng OpenCore")])])]),e._v(" "),n("li",[e._v("Một số firmware drivers đã được gộp vào OpenCore:\n"),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/acidanthera/AppleSupportPkg",target:"_blank",rel:"noopener noreferrer"}},[e._v("APFS Support"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/acidanthera/AppleSupportPkg",target:"_blank",rel:"noopener noreferrer"}},[e._v("FileVault support"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/acidanthera/AptioFixPkg",target:"_blank",rel:"noopener noreferrer"}},[e._v("Firmware patches"),n("OutboundLink")],1)])])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/AMD-OSX/AMD_Vanilla/tree/opencore",target:"_blank",rel:"noopener noreferrer"}},[e._v("AMD OSX patches"),n("OutboundLink")],1),e._v(":\n"),n("ul",[n("li",[e._v("Bạn đang sử máy chạy AMD? The kernel patches phục vụ việc boot macOS không còn hỗ trợ Clover – chúng chỉ còn hỗ trợ OpenCore.")])])])]),e._v(" "),n("h2",{attrs:{id:"kext-injection"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#kext-injection"}},[e._v("#")]),e._v(" Kext Injection")]),e._v(" "),n("p",[e._v("Để hiểu rõ hơn hệ thống kext injection của OpenCore, chúng ta trước tiên nên tìm hiểu cách Clover hoạt động:")]),e._v(" "),n("ol",[n("li",[e._v("Patches SIP tắt đi")]),e._v(" "),n("li",[e._v("Patches để kích hoạt zombie code của XNU để inject kext injection")]),e._v(" "),n("li",[e._v("Patches race condition with kext injection")]),e._v(" "),n("li",[e._v("Injects kexts")]),e._v(" "),n("li",[e._v("Patches SIP mở trở lại")])]),e._v(" "),n("p",[e._v("Things to note with Clover's method:")]),e._v(" "),n("ul",[n("li",[e._v("Sử dụng zombie code của XNU (đã không được sử dụng từ 10.7, điều này thật là ấn tượng khi Apple đã không loại bỏ code này\n"),n("ul",[n("li",[e._v("OS updates thường phá vỡ patch này, gần nhất là 10.14.4 và 10.15")])])]),e._v(" "),n("li",[e._v("Tắt SIP and attempts to mở nỏ lại, don't think much needs to be said")]),e._v(" "),n("li",[e._v("Likely to bị thất bại bại macOS 11.0 (Big Sur)")]),e._v(" "),n("li",[e._v("Hỗ trợ tất cả OS X đến 10.5")])]),e._v(" "),n("p",[e._v("Bây giờ thì hãy xem phương pháp của OpenCore:")]),e._v(" "),n("ol",[n("li",[e._v("Takes existing prelinked kernel and kexts ready to inject")]),e._v(" "),n("li",[e._v("Rebuilds the cache in the EFI environment with the new kexts")]),e._v(" "),n("li",[e._v("Adds this new cache in")])]),e._v(" "),n("p",[e._v("Những điều cần lưu ý với phương pháp của OpenCore:")]),e._v(" "),n("ul",[n("li",[e._v("OS agnostic as the prelinked kernel format has stayed the same since 10.6 (v2), far harder to break support.\n"),n("ul",[n("li",[e._v("OpenCore also supports prelinked kernel (v1, found in 10.4 and 10.5), cacheless, Mkext and KernelCollections, meaning it also has proper support for all Intel versions of OS X/macOS")])])]),e._v(" "),n("li",[e._v("Far better stability as there is far less patching involved")])]),e._v(" "),n("h1",{attrs:{id:"khiem-khuyet-cua-opencore"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#khiem-khuyet-cua-opencore"}},[e._v("#")]),e._v(" Khiếm khuyết của OpenCore")]),e._v(" "),n("p",[e._v("Hầu hết các Clover's functionality is actually supported in OpenCore in the form of some quirk, however when transitioning you should pay close attention to OpenCore's missing features as this may or may not affect yourself:")]),e._v(" "),n("ul",[n("li",[e._v("Does not support booting MBR-based operating systems\n"),n("ul",[n("li",[e._v("Work around is to chain-load rEFInd once in OpenCore")])])]),e._v(" "),n("li",[e._v("Does not support UEFI-based VBIOS patching\n"),n("ul",[n("li",[e._v("This can be done in macOS however")])])]),e._v(" "),n("li",[e._v("Does not support automatic DeviceProperty injection for legacy GPUs\n"),n("ul",[n("li",[e._v("ie. InjectIntel, InjectNvidia and InjectAti")]),e._v(" "),n("li",[e._v("This can be done manually however: "),n("a",{attrs:{href:"https://viopencore.github.io/OpenCore-Post-Install/gpu-patching/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GPU patching"),n("OutboundLink")],1)])])]),e._v(" "),n("li",[e._v("Does not support IRQ conflict patching\n"),n("ul",[n("li",[e._v("Can be resolved with "),n("a",{attrs:{href:"https://github.com/corpnewt/SSDTTime",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDTTime"),n("OutboundLink")],1)])])]),e._v(" "),n("li",[e._v("Does not support P and C state generation for older CPUs")]),e._v(" "),n("li",[e._v("Does not support Target Bridge ACPI patching")]),e._v(" "),n("li",[e._v("Does not support Hardware UUID Injection")]),e._v(" "),n("li",[e._v("Does not support auto-detection for many Linux bootloader\n"),n("ul",[n("li",[e._v("Can be resolved by adding an entry in "),n("code",[e._v("BlessOverride")])])])]),e._v(" "),n("li",[e._v("Does not support many of Clover's XCPM patches\n"),n("ul",[n("li",[e._v("ie. Ivy Bridge XCPM patches")])])]),e._v(" "),n("li",[e._v("Does not support hiding specific drives")]),e._v(" "),n("li",[e._v("Does not support changing settings within OpenCore's menu")]),e._v(" "),n("li",[e._v("Does not patch PCIRoot UID value")]),e._v(" "),n("li",[e._v("Does not support macOS-only ACPI injection and patching")])]),e._v(" "),n("h1",{attrs:{id:"common-myths"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#common-myths"}},[e._v("#")]),e._v(" Common Myths")]),e._v(" "),n("h2",{attrs:{id:"is-opencore-unstable-as-it-s-a-beta"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#is-opencore-unstable-as-it-s-a-beta"}},[e._v("#")]),e._v(" Is OpenCore unstable as it's a beta")]),e._v(" "),n("p",[e._v("Short Answer: No")]),e._v(" "),n("p",[e._v("Long Answer: No")]),e._v(" "),n("p",[e._v("OpenCore's version number does not represent the quality of the project. Instead, it's more of a way to see the stepping stones of the project. Acidanthera still has much they'd like to do with the project including overall refinement and more feature support.")]),e._v(" "),n("p",[e._v("For example, OpenCore goes through proper security audits to ensure it complies with UEFI Secure Boot, and is the only Hackintosh bootloader to undergo these rigorous reviews and have such support.")]),e._v(" "),n("p",[e._v("Version 0.6.1 was originally designed to be the official release of OpenCore as it would have proper UEFI/Apple Secure Boot, and would be the 1 year anniversary of OpenCore's release as a public tool. However, due to circumstances around macOS Big Sur and the rewriting of OpenCore's prelinker to support it, it was decided to push off 1.0.0 for another year.")]),e._v(" "),n("p",[e._v("Current road map:")]),e._v(" "),n("ul",[n("li",[e._v("2019: Year of Beta")]),e._v(" "),n("li",[e._v("2020: Year of Secure Boot")]),e._v(" "),n("li",[e._v("2021: Year of Refinement")])]),e._v(" "),n("p",[e._v("So please do not see the version number as a hindrance, instead as something to look forward to.")]),e._v(" "),n("h2",{attrs:{id:"does-opencore-always-inject-smbios-and-acpi-data-into-other-oses"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#does-opencore-always-inject-smbios-and-acpi-data-into-other-oses"}},[e._v("#")]),e._v(" Does OpenCore always inject SMBIOS and ACPI data into other OSes")]),e._v(" "),n("p",[e._v("By default, OpenCore will assume that all OSes should be treated equally in regards to ACPI and SMBIOS information. The reason for this thinking consists of three parts:")]),e._v(" "),n("ul",[n("li",[e._v("This allows for proper multiboot support, like with "),n("a",{attrs:{href:"https://viopencore.github.io/OpenCore-Post-Install/multiboot/bootcamp.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("BootCamp"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("Avoids poorly made DSDTs and encourages proper ACPI practices")]),e._v(" "),n("li",[e._v("Avoids edge cases where info is injected several times, commonly seen with Clover\n"),n("ul",[n("li",[e._v("i.e. How would you handle SMBIOS and ACPI data injection once you booted boot.efi, but then get kicked out? The changes are already in memory and so trying to undo them can be quite dangerous. This is why Clover's method is frowned upon.")])])])]),e._v(" "),n("p",[e._v("However, there are quirks in OpenCore that allow for SMBIOS injection to be macOS-limited by patching where macOS reads SMBIOS info from. The "),n("code",[e._v("CustomSMIOSGuid")]),e._v(" quirk with "),n("code",[e._v("CustomSMBIOSMode")]),e._v(" set to "),n("code",[e._v("Custom")]),e._v(" can break in the future and so we only recommend this option in the event of certain software breaking in other OSes. For best stability, please disable these quirks.")]),e._v(" "),n("h2",{attrs:{id:"does-opencore-require-a-fresh-install"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#does-opencore-require-a-fresh-install"}},[e._v("#")]),e._v(" Does OpenCore require a fresh install")]),e._v(" "),n("p",[e._v('Not at all in the event you have a "Vanilla" installation – what this refers to is whether the OS has tampered in any way, such as installing 3rd party kexts into the system volume or other unsupported modifications by Apple. When your system has been heavily tampered with, either by you or 3rd party utilities like Hackintool, we recommend a fresh install to avoid any potential issues.')]),e._v(" "),n("p",[e._v("Special note for Clover users: please reset your NVRAM when installing with OpenCore. Many of Clover variables can conflict with OpenCore and macOS.")]),e._v(" "),n("ul",[n("li",[e._v("Note: Thinkpad laptops are known to be semi-bricked after an NVRAM reset in OpenCore, we recommend resetting NVRAM by updating the BIOS on these machines.")])]),e._v(" "),n("h2",{attrs:{id:"does-opencore-only-support-limited-versions-of-macos"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#does-opencore-only-support-limited-versions-of-macos"}},[e._v("#")]),e._v(" Does OpenCore only support limited versions of macOS")]),e._v(" "),n("p",[e._v("As of OpenCore 0.6.2, you can now boot every Intel version of macOS going all the way back to OS X 10.4! Proper support however will depend on your hardware, so please verify yourself: "),n("RouterLink",{attrs:{to:"/macos-limits.html"}},[e._v("Hardware Limitations")])],1),e._v(" "),n("details",{staticClass:"custom-block details"},[n("summary",[e._v("macOS Install Gallery")]),e._v(" "),n("p",[e._v("Acidanthera has tested many versions, and I myself have run many versions of OS X on my old HP DC 7900 (Core2 Quad Q8300). Here's just a small gallery of what I've tested:")]),e._v(" "),n("p",[n("img",{attrs:{src:o(584),alt:""}})]),e._v(" "),n("p",[n("img",{attrs:{src:o(585),alt:""}})]),e._v(" "),n("p",[n("img",{attrs:{src:o(586),alt:""}})]),e._v(" "),n("p",[n("img",{attrs:{src:o(587),alt:""}})]),e._v(" "),n("p",[n("img",{attrs:{src:o(588),alt:""}})]),e._v(" "),n("p",[n("img",{attrs:{src:o(589),alt:""}})]),e._v(" "),n("p",[n("img",{attrs:{src:o(590),alt:""}})]),e._v(" "),n("p",[n("img",{attrs:{src:o(591),alt:""}})]),e._v(" "),n("p",[n("img",{attrs:{src:o(592),alt:""}})]),e._v(" "),n("p",[n("img",{attrs:{src:o(593),alt:""}})]),e._v(" "),n("p",[n("img",{attrs:{src:o(594),alt:""}})])]),e._v(" "),n("h2",{attrs:{id:"does-opencore-support-older-hardware"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#does-opencore-support-older-hardware"}},[e._v("#")]),e._v(" Does OpenCore support older hardware")]),e._v(" "),n("p",[e._v("As of right now, the majority of Intel hardware is supported so long as the OS itself does! However please refer to the "),n("RouterLink",{attrs:{to:"/macos-limits.html"}},[e._v("Hardware Limitations page")]),e._v(" for more info on what hardware is supported in what versions of OS X/macOS.")],1),e._v(" "),n("p",[e._v("Currently, Intel's Yonah and newer series CPUs have been tested properly with OpenCore.")]),e._v(" "),n("h2",{attrs:{id:"does-opencore-support-windows-linux-booting"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#does-opencore-support-windows-linux-booting"}},[e._v("#")]),e._v(" Does OpenCore support Windows/Linux booting")]),e._v(" "),n("p",[e._v("OpenCore works in the same fashion as any other boot loader, so it respects other OSes the same way. For any OSes where their bootloader has an irregular path or name, you can simply add it to the BlessOverride section.")]),e._v(" "),n("h2",{attrs:{id:"legality-of-hackintoshing"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#legality-of-hackintoshing"}},[e._v("#")]),e._v(" Legality of Hackintoshing")]),e._v(" "),n("p",[e._v("Where hackintoshing sits is in a legal grey area, mainly that while this is not illegal we are in fact breaking the EULA. The reason this is not illegal:")]),e._v(" "),n("ul",[n("li",[e._v("We are downloading macOS from "),n("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/blob/0.6.9/Utilities/macrecovery/macrecovery.py#L125",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apple's servers directly"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("We are doing this as a non-profit origination for teaching and personal use\n"),n("ul",[n("li",[e._v("People who plan to use their Hackintosh for work or want to resell them should refer to the "),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Psystar_Corporation",target:"_blank",rel:"noopener noreferrer"}},[e._v("Psystar case"),n("OutboundLink")],1),e._v(" and their regional laws")])])])]),e._v(" "),n("p",[e._v("While the EULA states that macOS should only be installed on real Macs or virtual machines running on genuine Macs ("),n("a",{attrs:{href:"https://www.apple.com/legal/sla/docs/macOSBigSur.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("sections 2B-i and 2B-iii"),n("OutboundLink")],1),e._v("), there is no enforceable law that outright bans this. However, sites that repackage and modify macOS installers do potentially risk the issue of "),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Digital_Millennium_Copyright_Act",target:"_blank",rel:"noopener noreferrer"}},[e._v("DMCA takedowns"),n("OutboundLink")],1),e._v(" and such.")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("Note")]),e._v(": This is not legal advice, so please make the proper assessments yourself and discuss with your lawyers if you have any concerns.")])]),e._v(" "),n("h2",{attrs:{id:"does-macos-support-nvidia-gpus"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#does-macos-support-nvidia-gpus"}},[e._v("#")]),e._v(" Does macOS support Nvidia GPUs")]),e._v(" "),n("p",[e._v("Due to issues revolving around Nvidia support in newer versions of macOS, many users have somehow come to the conclusion that macOS never supported Nvidia GPUs and don't at this point. However, Apple actually still maintains and supports Macs with Nvidia GPUs in their latest OS, like the 2013 MacBook Pro models with Kepler GPUs.")]),e._v(" "),n("p",[e._v("The main issue has to do with any newer Nvidia GPUs, as Apple stopped shipping machines with them and thus they never had official OS support from Apple. Instead, users had to rely on Nvidia for 3rd party drivers. Due to issues with Apple's newly introduced Secure Boot, they could no longer support the Web Drivers and thus Nvidia couldn't publish them for newer platforms limiting them to mac OS 10.13, High Sierra.")]),e._v(" "),n("p",[e._v("For more info on OS support, see here: "),n("a",{attrs:{href:"https://viopencore.github.io/GPU-Buyers-Guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GPU Buyers Guide"),n("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);