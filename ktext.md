# Thu thập các tệp

Đây chính là phần mà dùng dể hướng dẫn thu thập các tệp lộn xộn dùng đê khởi động macOS, chúng tôi mong chờ bạn đê biết về phần cứng của bạn kỹ càng trước khi bắt đầu và hy vọng làm ra Hackintosh trước khi chúng ta không bị chìm sâu tại đây.

> Cách nào tốt nhất để chỉ ra rằng phần cứng của tôi có được hỗ trợ?

Nhìn vào [**Hardware Limitations page**](macos-limits.md) để có cái nhìn tốt hơn về việc macOS cần gì để khởi động, Hỗ trợ phần cứng giữa Clover và OpenCore khá giống nhau.

> Cách naò để chỉ ra phần cứng mà tôi có?

Nhìn vào trang trước: [Tìm hiểu cấu hình](./find-hardware.md)

## Driver Firmware

Firmware drivers are drivers used by OpenCore in the UEFI environment. They're mainly required to boot a machine, either by extending OpenCore's patching ability or showing you different types of drives in the OpenCore picker(ie. HFS drives).

* **Location Note**: These files **must** be placed under `EFI/OC/Drivers/`

### Phần chung

::: tip Required Drivers

Cho hàng loạt các hệ thông, bạn sẽ chỉ cần 2 driver `.efi`  để chạy:

* [HfsPlus.efi](https://github.com/acidanthera/OcBinaryData/blob/master/Drivers/HfsPlus.efi)(<span style="color:red">Cần có</span>)
  * Cần có để nhìn phân vùng HFS(VD. macOS Installers và phân vùng Khôi phục/ảnh đĩa). **Không được hoà trộn với các driver HFS khác**
  * Dành cho Sandy Bridge and older(Và cả dòng Ivy Bridge tầm thấp(i3 and Celerons), xem phần legacy bên dưới
* [OpenRuntime.efi](https://github.com/acidanthera/OpenCorePkg/releases)(<span style="color:red">Cân có</span>)
  * Thay thế cho [AptioMemoryFix.efi](https://github.com/acidanthera/AptioFixPkg), dùng như là phần mở rộng cho OpenCore để giúp patch boot.efi cho fix NVRAM và giúp quản lý pin tốt hơn.
  * Nhắc nhở là nó được bao gồm trong OpenCorePkg mà chúng ta download ở trước

:::

### Người dùng Legacy

In addition to the above, nếu phân cứng của bạn không hỗ trợ UEFI(2011 và trở về trước) thì bạn sẽ cần thứ tiếp theo. Nhìn kĩ vào từng entry vì có thể bạn không cần cả 4:

* [OpenUsbKbDxe.efi](https://github.com/acidanthera/OpenCorePkg/releases)
  * Used for OpenCore picker on **legacy systems running DuetPkg**, [not recommended and even harmful on UEFI(Ivy Bridge and newer)](https://applelife.ru/threads/opencore-obsuzhdenie-i-ustanovka.2944066/page-176#post-856653)
* [HfsPlusLegacy.efi](https://github.com/acidanthera/OcBinaryData/blob/master/Drivers/HfsPlusLegacy.efi)
  * Legacy variant of HfsPlus, used for systems that lack RDRAND instruction support. This is generally seen on Sandy Bridge and older(as well as low end Ivy Bridge(i3 and Celerons))
  * Không hoà trộn nó với HfsPlus.efi, chọn một hoặc là cái khác tuỳ theo phần cứng của bạn
* [OpenPartitionDxe](https://github.com/acidanthera/OpenCorePkg/releases)
  * Cần có để khởi động vào chế độ khôi phục trên OS X 10.7 tới 10.9
    * Tệp được bao gồm trong OpenCorePkg phần EFI/OC/Drivers
    * Lưu ý: Người dùng OpenDuet(VD. không UEFI) sẽ có driver này được thích hợp sắn, không yêu cầu nó
  * Không cần thiết cho OS X 10.10, Yosemite và mới hơn

Những tệp này sẽ được lưu trữ trong thư mục Drivers trong EFI của bạn

::: Chi tiết cụ thể về 32-Bit

Với những CPU 32-Bit, bạn cũng sẽ muốn chụp các tệp này

* [HfsPlus32](https://github.com/acidanthera/OcBinaryData/blob/master/Drivers/HfsPlus32.efi)
  * Thay thế HfsPlusLegacy nhưng dành cho CPU 32-bit, không hoà trộn với driver HFS .efi khác

:::

## Kexts

Kext là viết tắt của **k**ernel **ext**ension, bạn có thể nghĩ đây là driver cho macOS, những tệp này sẽ được chứa tại thư mục Kexts ở trong EFI của bạn.

* **Lưu ý về Windows và Linux**: Kexts sẽ nhìn như là thư mục bình thường trong OS của bạn, **kiểm tra lại** thư mục mà bạn đang cài đặt phải có phần mở rộng .kext có thể nhìn thấy được (và không được thêm bằng tay nếu nó bị thiếu).
  * Nếu một số kext bao gồm cả tập `.dSYM`, bạn đơn giản là xoá nó đi. Nó chỉ cần trong việc gỡ lỗi.
* **Location Note**: These files **must** be placed under `EFI/OC/Kexts/`.

All kext listed below can be found **pre-compiled** in the [Kext Repo](http://kexts.goldfish64.com/). Kexts here are compiled each time there's a new commit.

### Must haves

::: Kexts cần có

Nếu không có hai thứ bên dưới, không có hệ thống nào có thể khởi động được:

* [VirtualSMC](https://github.com/acidanthera/VirtualSMC/releases)(<span style="color:red">Cần có</span>)
  * Giả lập lại chip SMC chip có trên máy Mac thật, không có thì macOS sẽ không thể khởi động
  * Sự thay thế là FakeSMC có thể có sự hỗ trợ tốt hơn hoặc kem hơn, được sử dụng rộng rãi trong các kiểu phần cứng legacy.
  * Yêu  OS X 10.6 hoặc mới hơn
* [Lilu](https://github.com/acidanthera/Lilu/releases)(<span style="color:red">Required</span>)
  * Một kext dung để patch nhiều quá trình, cần có cho AppleALC, WhateverGreen, VirtualSMC và nhiều kext khác. Không có Lilu, chúng sẽ không thể hoạt động được.
  * Lưu ý rằng Lilu và các plugin cần có OS X 10.8 hoặc mới hơn để hoạt động
  
::: Chi tiết  Legacy "Must haves" kexts

For those planning to boot OS X 10.7 and older on 32 bit hardware, you'll want to use the below instead of VirtualSMC:

* [FakeSMC-32](https://github.com/khronokernel/Legacy-Kexts/blob/master/32Bit-only/Zip/FakeSMC-32.kext.zip?raw=true)

Reminder if you don't plan to boot these older OSes, you can ignore this kext.

* **OS X 10.4 and 10.5 note**: Even on 64-bit CPUs, OS X's kernel space is still 32-bit. So we recommend using FakeSMC-32 in tandem with VirtualSMC, specifically by setting FakeSMC-32's `Arch` entry to `i386` and VirtualSMC's to `x86_64`. This is discussed further on in the guide.

:::

### Các Plugin VirtualSMC

Các Plugin bên dưới đều không cần thiết để khởi động, và đơn thuần thêm các chức năng cho hệ thống như theo dõi phần cứng (Lưu ý tuy VirtualSMC hỗ trợ 10.6, plugin có thể cân phải có 10.8+):

* SMCProcessor.kext
  * Dùng để theo dõi nhiệt độ CPU, **không hoạt động trên hệ thống dựa trên CPU AMD**
* SMCSuperIO.kext
  * Used for monitoring fan speed, **doesn't work on AMD CPU based systems**
* SMCLightSensor.kext
  * Dùng cho cảm biến đo ánh sáng trên laptop, **máy tính đê bàn có thể bỏ qua**
  * Không dùng nếu bạn không có cảm biến đo ánh sáng, có thể gây ra nhiều vấn đề khác
* SMCBatteryManager.kext
  * Dùng để đo và hiển thị thông tin pin trên Laptop, **máy tính để bản có thể bỏ qua**
* SMCDellSensors.kext
  * Cho phép theo dõi tốt hơn và quản lý tốc độ quạt trên các máy Dell hỗ trợ System Management Mode(SMM)
  * **Không sử dụng nếu bạn không có máy Dell được hỗ trợ**, chủ yếu các máy Dell được lợi từ kext này

### Đồ hoạ

* [WhateverGreen](https://github.com/acidanthera/WhateverGreen/releases)(<span style="color:red">Cần có</span>)
  * Dùng đề patch đồ hoạ DRM, boardID, framebuffer fixes, v.v, tất cả GPUs đều được hưởng lợi từu kext này.
  * Lưu ý rằng tệp SSDT-PNLF.dsl được bao gồm chỉ cần thiết cho laptop và AIO, xem [Getting started with ACPI](https://viopencore.github.io/Getting-Started-With-ACPI/) để biết thêm thông 
  * Yêu cầu  OS X 10.8 hoặc mới hơn

### Âm thanh

* [AppleALC](https://github.com/acidanthera/AppleALC/releases)
  * Dùng cho patch AppleHDA, cho phép sự hỗ trợ hàng loạt các bộ điều khiển âm thanh on-board (trên bo mạch chủ)
  * AMD 15h/16h có thể sẽ gặp vấn đề về nó và hệ thống Ryzen/Threadripper ít hỗ trợ mic
  * Yêu cầu OS X 10.8 hoặc mới hơn
  
::: chi tiết Kext Legacy Audio

Dành cho những người dự định khởi động từ 10.7 và cũ hơn có thể sẽ phải sử dụng các kext này thay cho cái trên:

* [VoodooHDA](https://sourceforge.net/projects/voodoohda/)
  * Yêu cầu OS X 10.6 hoặc mới hơn
  
* [VoodooHDA-FAT](https://github.com/khronokernel/Legacy-Kexts/blob/master/FAT/Zip/VoodooHDA.kext.zip)
  * Giống như trên, tuy nhiên hỗ trợ kernel 32 và 64-Bit quá hoàn hảo cho việc khởi động OS X 10.4-5 và CPU 32-Bit

:::

### Ethernet

Here we're going to assume you know what ethernet card your system has, reminder that product spec pages will most likely list the type of network card.

* [IntelMausi](https://github.com/acidanthera/IntelMausi/releases)
  * Required for the majority of Intel NICs, chipsets that are based off of I211 will need the SmallTreeIntel82576 kext
  * Intel's 82578, 82579, I217, I218 and I219 NICs are officially supported
  * Requires OS X 10.9 or newer, 10.6-10.8 users can use the IntelSnowMausi instead for older OSes
* [SmallTreeIntel82576 kext](https://github.com/khronokernel/SmallTree-I211-AT-patch/releases)
  * Required for I211 NICs, based off of the SmallTree kext but patched to support I211
  * Required for most AMD boards running Intel NICs
  * Requires OS X 10.9-12(v1.0.6), macOS 10.13-14(v1.2.5), macOS 10.15+(v1.3.0)
* [AtherosE2200Ethernet](https://github.com/Mieze/AtherosE2200Ethernet/releases)
  * Required for Atheros and Killer NICs
  * Requires OS X 10.8 or newer
  * Note: Atheros Killer E2500 models are actually Realtek based, for these systems please use [RealtekRTL8111](https://github.com/Mieze/RTL8111_driver_for_OS_X/releases) instead
* [RealtekRTL8111](https://github.com/Mieze/RTL8111_driver_for_OS_X/releases)
  * For Realtek's Gigabit Ethernet
  * Requires OS X 10.8 and up for versions v2.2.0 and below, macOS 10.12 and up for versions v2.2.2 through v2.3.0 (inclusive), macOS 10.14 and up for versions v2.4.0 and up
  * **NOTE:** Sometimes the latest version of the kext might not work properly with your Ethernet. If you see this issue, try older versions.
* [LucyRTL8125Ethernet](https://www.insanelymac.com/forum/files/file/1004-lucyrtl8125ethernet/)
  * For Realtek's 2.5Gb Ethernet
  * Requires macOS 10.15 or newer
* For Intel's I225-V NICs, patches are mentioned in the desktop [Comet Lake DeviceProperties](config.plist/comet-lake.md#deviceproperties) section. No kext is required.
  * Requires macOS 10.15 or newer
* For Intel's I350 NICs, patches are mentioned in the HEDT [Sandy and Ivy Bridge-E DeviceProperties](config-HEDT/ivy-bridge-e.md#deviceproperties) section. No kext is required.
  * Requires OS X 10.10 or newer

::: details Legacy Ethernet Kexts

Relevant for either legacy macOS installs or older PC hardware.

* [AppleIntele1000e](https://github.com/chris1111/AppleIntelE1000e/releases)
  * Mainly relevant for 10/100MBe based Intel Ethernet controllers
  * Requires 10.6 or newer
* [RealtekRTL8100](https://www.insanelymac.com/forum/files/file/259-realtekrtl8100-binary/)
  * Mainly relevant for 10/100MBe based Realtek Ethernet controllers
  * Requires macOS 10.12 or newer with v2.0.0+
* [BCM5722D](https://github.com/chris1111/BCM5722D/releases)
  * Mainly relevant for BCM5722 based Broadcom Ethernet controllers
  * Requires OS X 10.6 or newer

:::

And also keep in mind certain NICs are actually natively supported in macOS:

::: details Native Ethernet Controllers

#### Aquantia Series

```md
# AppleEthernetAquantiaAqtion.kext
pci1d6a,1    = Aquantia AQC107
pci1d6a,d107 = Aquantia AQC107
pci1d6a,7b1  = Aquantia AQC107
pci1d6a,80b1 = Aquantia AQC107
pci1d6a,87b1 = Aquantia AQC107
pci1d6a,88b1 = Aquantia AQC107
pci1d6a,89b1 = Aquantia AQC107
pci1d6a,91b1 = Aquantia AQC107
pci1d6a,92b1 = Aquantia AQC107
pci1d6a,c0   = Aquantia AQC113
pci1d6a,4c0  = Aquantia AQC113
```

**Note**: Due to some outdated firmware shipped on many Aquantia NICs, you may need to update the firmware in Linux/Windows to ensure it's macOS-compatible.

#### Intel Series

```md
# AppleIntel8254XEthernet.kext
pci8086,1096 = Intel 80003ES2LAN
pci8086,100f = Intel 82545EM
pci8086,105e = Intel 82571EB/82571GB

# AppleIntelI210Ethernet.kext
pci8086,1533 = Intel I210
pci8086,15f2 = Intel I225LM (Added in macOS 10.15)

# Intel82574L.kext
pci8086,104b = Intel 82566DC
pci8086,10f6 = Intel 82574L

```

#### Broadcom Series

```md
# AppleBCM5701Ethernet.kext
pci14e4,1684 = Broadcom BCM5764M
pci14e4,16b0 = Broadcom BCM57761
pci14e4,16b4 = Broadcom BCM57765
pci14e4,1682 = Broadcom BCM57762
pci14e4,1686 = Broadcom BCM57766
```
:::

### USB

* [USBInjectAll](https://bitbucket.org/RehabMan/os-x-usb-inject-all/downloads/)
  * Used for injecting Intel USB controllers on systems without defined USB ports in ACPI
  * Shouldn't be needed on Desktop Skylake and newer
    * AsRock rất ngớ ngẩn và cần cái này
    * Coffee Lake và các laptop cũ hơn được khuyến khích sử dụng kext này
  * Không hoạt động trên CPU AMD **chút nào**
  * Yêu cầu OS X 10.11 hoặc mới hơn

* [XHCI-unsupported](https://github.com/RehabMan/OS-X-USB-Inject-All)
  * Needed for non-native USB controllers
  * AMD CPU based systems don't need this
  * Common chipsets needing this:
    * H370
    * B360
    * H310
    * Z390(Not needed on Mojave and newer)
    * X79
    * X99
    * AsRock boards(On Intel motherboards specifically, B460/Z490+ boards do not need it however)

### WiFi  Bluetooth

#### Intel

* [AirportItlwm](https://github.com/OpenIntelWireless/itlwm/releases)
  * Adds support for a large variety of Intel wireless cards and works natively in recovery thanks to IO80211Family integration
  * Requires macOS 10.13 or newer and requires Apple's Secure Boot to function correctly
* [IntelBluetoothFirmware](https://github.com/OpenIntelWireless/IntelBluetoothFirmware/releases)
  * Adds Bluetooth support to macOS when paired with an Intel wireless card
  * Requires macOS 10.13 or newer

::: details More info on enabling AirportItlwm

To enable AirportItlwm support with OpenCore, you'll need to either:

* Enable `Misc -> Security -> SecureBootModel` by either setting it as `Default` or some other valid value
  * This is discussed both later on in this guide and in the post-install guide: [Apple Secure Boot](https://viopencore.github.io/OpenCore-Post-Install/universal/security/applesecureboot.html)
* If you cannot enable SecureBootModel, you can still force inject IO80211Family(**Highly discouraged**)
  * Set the following under `Kernel -> Force` in your config.plist(discussed later in this guide):
  
![](./images/ktext-md/force-io80211.png)

:::

#### Broadcom

* [AirportBrcmFixup](https://github.com/acidanthera/AirportBrcmFixup/releases)
  * Used for patching non-Apple/non-Fenvi Broadcom cards, **will not work on Intel, Killer, Realtek, etc**
  * Requires OS X 10.10 or newer
  * For Big Sur see [Big Sur Known Issues](./extras/big-sur#known-issues) for extra steps regarding AirPortBrcm4360 drivers.
* [BrcmPatchRAM](https://github.com/acidanthera/BrcmPatchRAM/releases)
  * Used for uploading firmware on Broadcom Bluetooth chipset, required for all non-Apple/non-Fenvi Airport cards.
  * To be paired with BrcmFirmwareData.kext
    * BrcmPatchRAM3 for 10.15+ (must be paired with BrcmBluetoothInjector)
    * BrcmPatchRAM2 for 10.11-10.14
    * BrcmPatchRAM for 10.8-10.10

::: details BrcmPatchRAM Load order

The order in `Kernel -> Add` should be:

1. BrcmBluetoothInjector
2. BrcmFirmwareData
3. BrcmPatchRAM3

However ProperTree will handle this for you, so you need not concern yourself

:::

### AMD CPU Specific kexts

* [XLNCUSBFIX](https://cdn.discordapp.com/attachments/566705665616117760/566728101292408877/XLNCUSBFix.kext.zip)
  * USB fix for AMD FX systems, not recommended for Ryzen
  * Requires macOS 10.13 or newer
* [VoodooHDA](https://sourceforge.net/projects/voodoohda/)
  * Audio for FX systems and front panel Mic+Audio support for Ryzen system, do not mix with AppleALC. Audio quality is noticeably worse than AppleALC on Zen CPUs
  * Requires OS X 10.6 or newer

### Extras

* [AppleMCEReporterDisabler](https://github.com/acidanthera/bugtracker/files/3703498/AppleMCEReporterDisabler.kext.zip)
  * Useful starting with Catalina to disable the AppleMCEReporter kext which will cause kernel panics on AMD CPUs and dual-socket systems
  * Affected SMBIOS:
    * MacPro6,1
    * MacPro7,1
    * iMacPro1,1
  * Requires macOS 10.15 or newer
* [CpuTscSync](https://github.com/lvs1974/CpuTscSync/releases)
  * Needed for syncing TSC on some of Intel's HEDT and server motherboards, without this macOS may be extremely slow or even unbootable.
  * **Does not work on AMD CPUs**
  * Requires OS X 10.8 or newer
* [NVMeFix](https://github.com/acidanthera/NVMeFix/releases)
  * Used for fixing power management and initialization on non-Apple NVMe
  * Requires macOS 10.14 or newer
* [SATA-Unsupported](https://github.com/khronokernel/Legacy-Kexts/blob/master/Injectors/Zip/SATA-unsupported.kext.zip)
  * Adds support for a large variety of SATA controllers, mainly relevant for laptops which have issues seeing the SATA drive in macOS. We recommend testing without this first.
  * macOS Big Sur Note: [CtlnaAHCIPort](https://github.com/viopencore/OpenCore-Install-Guide/blob/master/extra-files/CtlnaAHCIPort.kext.zip) will need to be used instead due to numerous controllers being dropped from the binary itself
    * Catalina and older need not concern

::: details Legacy SATA Kexts

* [AHCIPortInjector](https://github.com/khronokernel/Legacy-Kexts/blob/master/Injectors/Zip/AHCIPortInjector.kext.zip)
  * Legacy SATA/AHCI injector, mainly relevant for older machines of the Penryn era
* [ATAPortInjector](https://github.com/khronokernel/Legacy-Kexts/blob/master/Injectors/Zip/ATAPortInjector.kext.zip)
  * Legacy ATA injector, mainly relevant for IDE and ATA devices(ie. when no AHCI option is present in the BIOS)
  
:::

### Laptop Specifics

To figure out what kind of keyboard and trackpad you have, check Device Manager in Windows or `dmesg | grep -i input` in Linux

#### Input drivers

* [VoodooPS2](https://github.com/acidanthera/VoodooPS2/releases)
  * For systems with PS2 keyboards, mice, and trackpads
  * Requires macOS 10.11 or newer for MT2 (Magic Trackpad 2) functions
* [RehabMan's VoodooPS2](https://bitbucket.org/RehabMan/os-x-voodoo-ps2-controller/downloads/)
  * For older systems with PS2 keyboards, mice, and trackpads, or when you don't want to use VoodooInput
  * Supports macOS 10.6+ support
* [VoodooRMI](https://github.com/VoodooSMBus/VoodooRMI/releases/)
  * For systems with Synaptics SMBus-based devices, mainly for trackpads and trackpoints.
  * Requires macOS 10.11 or newer for MT2 functions
* [VoodooSMBus](https://github.com/VoodooSMBus/VoodooSMBus/releases)
  * For systems with ELAN SMBus-based devices, mainly for trackpads and trackpoints.
  * Supports macOS 10.14 or newer currently
* [VoodooI2C](https://github.com/VoodooI2C/VoodooI2C/releases)
  * Used for fixing I2C devices, found with some fancier touchpads and touchscreen machines
  * Requires macOS 10.11 or newer for MT2 functions
::: details VoodooI2C Plugins
| Connection type | Plugin | Notes |
| :--- | :--- | :--- |
| Microsoft HID | VoodooI2CHID | Can be used to support some USB touchscreens as well |
| ELAN Proprietary | VoodooI2CElan | ELAN1200+ require VoodooI2CHID instead |
| Synaptics Proprietary | VoodooI2CSynaptics | Synaptics F12 protocol require VoodooI2CHID instead |
| ^^ | VoodooRMI | Supports Synaptics protocols F12/F3A - These generally support Microsoft's HID standard so you should attempt using VoodooI2CHID first |
| FTE1001 touchpad | VoodooI2CFTE | |
| Atmel Multitouch Protocol | VoodooI2CAtmelMXT | |
:::

#### Misc

* [ECEnabler](https://github.com/1Revenger1/ECEnabler/releases)
  * Fixes reading battery status on many devices (Allows reading EC fields over 8 bits long)
* [BrightnessKeys](https://github.com/acidanthera/BrightnessKeys/releases)
  * Fixes brightness keys automatically

Please refer to [Kexts.md](https://github.com/acidanthera/OpenCorePkg/blob/master/Docs/Kexts.md) for a full list of supported kexts

## SSDTs

So you see all those SSDTs in the AcpiSamples folder and wonder whether you need any of them. For us, we will be going over what SSDTs you need in **your specific ACPI section of the config.plist**, as the SSDTs you need are platform specific. With some even system specific where they need to be configured and you can easily get lost if I give you a list of SSDTs to choose from now.

[Getting started with ACPI](https://viopencore.github.io/Getting-Started-With-ACPI/) has an extended section on SSDTs including compiling them on different platforms.

A quick TL;DR of needed SSDTs(This is source code, you will have to compile them into a .aml file):

### Desktop

| Platforms | **CPU** | **EC** | **AWAC** | **NVRAM** | **USB** |
| :-------: | :-----: | :----: | :------: | :-------: | :-----: |
| Penryn | N/A | [SSDT-EC](https://viopencore.github.io/Getting-Started-With-ACPI/Universal/ec-fix.html) | N/A | N/A | N/A |
| Lynnfield and Clarkdale | ^^ | ^^ | ^^ | ^^ | ^^ |
| SandyBridge | [CPU-PM](https://viopencore.github.io/OpenCore-Post-Install/universal/pm.html#sandy-and-ivy-bridge-power-management) (Run in Post-Install) | ^^ | ^^ | ^^ | ^^ |
| Ivy Bridge | ^^ | ^^ | ^^ | ^^ | ^^ |
| Haswell | [SSDT-PLUG](https://viopencore.github.io/Getting-Started-With-ACPI/Universal/plug.html) | ^^ | ^^ | ^^ | ^^ |
| Broadwell | ^^ | ^^ | ^^ | ^^ | ^^ |
| Skylake | ^^ | [SSDT-EC-USBX](https://viopencore.github.io/Getting-Started-With-ACPI/Universal/ec-fix.html) | ^^ | ^^ | ^^ |
| Kaby Lake | ^^ | ^^ | ^^ | ^^ | ^^ |
| Coffee Lake | ^^ | ^^ | [SSDT-AWAC](https://viopencore.github.io/Getting-Started-With-ACPI/Universal/awac.html) | [SSDT-PMC](https://viopencore.github.io/Getting-Started-With-ACPI/Universal/nvram.html) | ^^ |
| Comet Lake | ^^ | ^^ | ^^ | N/A | [SSDT-RHUB](https://viopencore.github.io/Getting-Started-With-ACPI/Universal/rhub.html) |
| AMD (15/16h) | N/A | ^^ | N/A | ^^ | N/A |
| AMD (17/19h) | [SSDT-CPUR for B550 and A520](https://github.com/viopencore/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-CPUR.aml) | ^^ | ^^ | ^^ | ^^ |

### High End Desktop

| Platforms | **CPU** | **EC** | **RTC** | **PCI** |
| :-------: | :-----: | :----: | :-----: | :-----: |
| Nehalem and Westmere | N/A | [SSDT-EC](https://viopencore.github.io/Getting-Started-With-ACPI/Universal/ec-fix.html) | N/A | N/A |
| Sandy Bridge-E | ^^ | ^^ | ^^ | [SSDT-UNC](https://viopencore.github.io/Getting-Started-With-ACPI/Universal/unc0) |
| Ivy Bridge-E | ^^ | ^^ | ^^ | ^^ |
| Haswell-E | [SSDT-PLUG](https://viopencore.github.io/Getting-Started-With-ACPI/Universal/plug.html) | [SSDT-EC-USBX](https://viopencore.github.io/Getting-Started-With-ACPI/Universal/ec-fix.html) | [SSDT-RTC0-RANGE](https://viopencore.github.io/Getting-Started-With-ACPI/Universal/awac.html) | ^^ |
| Broadwell-E | ^^ | ^^ | ^^ | ^^ |
| Skylake-X | ^^ | ^^ | ^^ | N/A |

### Laptop

| Platforms | **CPU** | **EC** | **Backlight** | **I2C Trackpad** | **AWAC** | **USB** | **IRQ** |
| :-------: | :-----: | :----: | :-----------: | :--------------: | :------: | :-----: | :-----: |
| Clarksfield and Arrandale | N/A | [SSDT-EC](https://viopencore.github.io/Getting-Started-With-ACPI/Universal/ec-fix.html) | [SSDT-PNLF](https://viopencore.github.io/Getting-Started-With-ACPI/Laptops/backlight.html) | N/A | N/A | N/A | [IRQ SSDT](https://viopencore.github.io/Getting-Started-With-ACPI/Universal/irq.html) |
| SandyBridge | [CPU-PM](https://viopencore.github.io/OpenCore-Post-Install/universal/pm.html#sandy-and-ivy-bridge-power-management) (Run in Post-Install) | ^^ | ^^ | ^^ | ^^ | ^^ | ^^ |
| Ivy Bridge | ^^ | ^^ | ^^ | ^^ | ^^ | ^^ | ^^ |
| Haswell | [SSDT-PLUG](https://viopencore.github.io/Getting-Started-With-ACPI/Universal/plug.html) | ^^ | ^^ | [SSDT-GPI0](https://viopencore.github.io/Getting-Started-With-ACPI/Laptops/trackpad.html) | ^^ | ^^ | ^^ |
| Broadwell | ^^ | ^^ | ^^ | ^^ | ^^ | ^^ | ^^ |
| Skylake | ^^ | [SSDT-EC-USBX](https://viopencore.github.io/Getting-Started-With-ACPI/Universal/ec-fix.html) | ^^ | ^^ | ^^ | ^^ | N/A |
| Kaby Lake | ^^ | ^^ | ^^ | ^^ | ^^ | ^^ | ^^ |
| Coffee Lake (8th Gen) and Whiskey Lake | ^^ | ^^ | [SSDT-PNLF-CFL](https://viopencore.github.io/Getting-Started-With-ACPI/Laptops/backlight.html) | ^^ | [SSDT-AWAC](https://viopencore.github.io/Getting-Started-With-ACPI/Universal/awac.html) | ^^ | ^^ |
| Coffee Lake (9th Gen) | ^^ | ^^ | ^^ | ^^ | ^^ | ^^ | ^^ |
| Comet Lake | ^^ | ^^ | ^^ | ^^ | ^^ | ^^ | ^^ |
| Ice Lake | ^^ | ^^ | ^^ | ^^ | ^^ | [SSDT-RHUB](https://viopencore.github.io/Getting-Started-With-ACPI/Universal/rhub.html) | ^^ |

Continuing:

| Platforms | **NVRAM** | **IMEI** |
| :-------: | :-------: | :------: |
|  Clarksfield and Arrandale | N/A | N/A |
| Sandy Bridge | ^^| [SSDT-IMEI](https://viopencore.github.io/Getting-Started-With-ACPI/Universal/imei.html) |
| Ivy Bridge | ^^ | ^^ |
| Haswell | ^^ | N/A |
| Broadwell | ^^ | ^^ |
| Skylake | ^^ | ^^ |
| Kaby Lake | ^^ | ^^ |
| Coffee Lake (8th Gen) and Whiskey Lake | ^^ | ^^ |
| Coffee Lake (9th Gen) | [SSDT-PMC](https://viopencore.github.io/Getting-Started-With-ACPI/Universal/nvram.html) | ^^ |
| Comet Lake | N/A | ^^ |
| Ice Lake | ^^ | ^^ |

# Now with all this done, head to [Getting Started With ACPI](https://viopencore.github.io/Getting-Started-With-ACPI/)
