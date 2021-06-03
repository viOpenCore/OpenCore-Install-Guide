# Hardware Limitations

Với macOS, có rất nhiều hạn chế về phần cứng mà bạn cần nhận biết trước khi bước
chân vào phần cài đặt. Đấy là do có số lượng hạn chế về phần cứng được Apple hỗ
trợ, cho nên một số phần cứng có thể có (hoặc không hoạt động)

Có một số phần mà chúng ta cần để ý:

- [CPU](#cpu)
- [GPU](#gpu)
- [Bo mạch chủ](#bo-mạch-chủ)
- [Thiết bị lưu trữ](#thiết-bị-lưu-trữ)
- [Mạng có dây](#mạng-có-dây)
- [Mạng không dây](#mạng-không-dây)
- [Những cái khác](#những-cái-khác)

Và để chi tiết hơn, bạn hãy truy cập:

- [Hướng dẫn chọn GPU](https://viopencore.github.io/GPU-Buyers-Guide/)
  - Kiểm tra xem nếu GPU của bạn được hỗ trợ và máy của bạn có thể chạy phiên
    bản macOS nào.
- [Hướng dẫn chọn card Wi-Fi](https://viopencore.github.io/Wireless-Buyers-Guide/)
  - Kiểm tra nếu card Wi-Fi của bạn được hỗ trợ.
- [Hướng dẫn chọn phần cứng anti Hackintosh](https://viopencore.github.io/Anti-Hackintosh-Buyers-Guide/)
  - Kiểm tra những phần cứng cần tránh và những vấn đề có thể gặp với phần cứng
    của bạn

## CPU

Với CPU chúng ta cần lưu ý:

- CPU 32 và 64-bit đều được hỗ trợ
  - Tùy thuộc vào hệ điều hành có hỗ trợ cấu trúc CPU của bạn hay không
- CPU dành cho Máy tính để bàn của Intel đều hỗ trợ
  - Từ Yonah đến Comet Lake đều được hỗ trợ.
- CPU dành cho Máy tính để bàn Cao cấp và CPU Máy chủ của Intel.
  - Từ Nehalem đến Cascade Lake X đều được hỗ trợ trong guide này.
- CPU Intel Core "i" và Xeon dành cho Laptop
  - Từ Arrendale đến Ice Lake đều được hỗ trợ.
  - Chú ý rằng CPU di động Atoms, Celeron và Pentium đều không được hỗ trợ.
- CPU dành cho Máy tính để bàn của AMD (Bulldozer (15h), Jaguar (16h) và Ryzen
  (17h))
  - CPU dành cho Laptop đều **KHÔNG ĐƯỢC** hỗ trợ
  - Chú ý rằng không phải tất cả tính năng của macOS đều được hỗ trợ trên AMD,
    chi tiết hãy xem bên dưới

**Xem chi tiết tại đây:
[Anti-Hardware Buyers Guide](https://viopencore.github.io/Anti-Hackintosh-Buyers-Guide/)**

::: details Yêu cầu dành cho CPU

Yêu cầu về bộ hướng dẫn

- CPU 32-bit được hỗ trợ từ OS X 10.4.1 đến 10.6.8
  - Chú ý rằng 10.7.x cần userspace 64-bit, cho nên CPU 32-bit bị giới hạn ở
    10.6
- CPU 64-bit được hỗ trợ từ OS X 10.4.1 đến bản mới nhất

SEE Requirements:

- SSE3 **BẮT BUỘC PHẢI CÓ**
- SSSE3 phải có cho mọi phiên bản 64-bit của OS X/macOS
  - Với CPU thiếu SSSE3 (VD: CPU Pentium 64-bit), nên chạy OS X/macOS 32-bit
    (`i386-user32`)
- SSE4 cần cho macOS 10.12 "Sierra" trở lên
- SSE4.2 cần cho macOS 10.14 "Mojave" trở lên
  - CPU SSE4.1 hỗ trợ với
    [telemetrap.kext](https://forums.macrumors.com/threads/mp3-1-others-sse-4-2-emulation-to-enable-amd-metal-driver.2206682/post-28447707)
  - Drivers mới cho AMD cần SSE4.2 cho việc hỗ trợ Metal. Để xem chi tiết, hãy
    tham khảo::
    [MouSSE: SSE4.2 emulation](https://forums.macrumors.com/threads/mp3-1-others-sse-4-2-emulation-to-enable-amd-metal-driver.2206682/)

Yêu cầu Firmware:

- OS X 10.4.1 tới 10.4.7 cần EFI32 (VD: Phiên bản IA32 (32-bit) của OpenCore)
  - OS X 10.4.8 tới 10.7.5 hỗ trợ cả EFI32 và EFI64
- OS X 10.8 và m hơn cần EFI64 (VD: Phiên bản x64 (64-bit) của OpenCore)
- OS X 10.7 tới 10.9 cần OpenPartitionDxe.efi để boot vào phân vùng Recovery.

Yêu cầu Nhân (Kernel):

- OS X 10.4 và 10.5 yêu cầu kext 32-bit do chúng chỉ hỗ trợ kernelspace 32-bit
  - OS X 10.6 và 10.7 hỗ trợ cà kernelspace 32 và 64-bit
- OS X 10.8 và mới hơn yêu cầu kext 64-bit do chúng chỉ hỗ trợ kernelspace
  64-bit
  - Dùng lệnh `lipo -archs` để biết cấu trúc kext hỗ trợ (nhớ là không chạy ở
    bundle của kext, phải là ở binary)

Giới hạn số nhân/luồng:

- OS X 10.10 và thấp hơn không thể hoạt động với CPU có hơn 24 luồng (vì panic
  `mp_cpus_call_wait() timeout`)
- OS X 10.11 và mới hơn có giới hạn lên tới 64 luồng
- Bootarg `cpus=` có thể dùng để tắt hyperthreading hoặc dùng để làm gì đó
  Notes:

- Lilu và plugins của nó yêu cầu OS X 10.8 hoặc mới hơn để hoạt động
  - Bạn nên sử dụng FakeSMC để sử dụng OS X cũ hơn
- OS X 10.6 và cũ hơn cần bật RebuildAppleMemoryMap

:::

::: details Bảng hỗ trợ CPU Intel

Dựa theo Vanilla Kernels (không chỉnh sửa:

| Thế hệ CPU                                                                                                                                                                                                                                              | Phiên bản hỗ trợ tối thiểu           | Phiên bản hỗ trợ cuối cùng                 | Ghi chú                                   | CPUID                         |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :----------------------------------- | :----------------------------------------- | :---------------------------------------- | :---------------------------- |
| [Pentium 4](https://en.wikipedia.org/wiki/Pentium_4)                                                                                                                                                                                                    | 10.4.1                               | 10.5.8                                     | Chỉ được sử dụng cho những bộ dev kits    | 0x0F41                        |
| [Yonah](<https://en.wikipedia.org/wiki/Yonah_(microprocessor)>)                                                                                                                                                                                         | 10.4.4                               | 10.6.8                                     | 32-Bit                                    | 0x0006E6                      |
| [Conroe](<https://en.wikipedia.org/wiki/Conroe_(microprocessor)>), [Merom](<https://en.wikipedia.org/wiki/Merom_(microprocessor)>)                                                                                                                      | 10.4.7                               | 10.11.6                                    | Không có SSE4                             | 0x0006F2                      |
| [Penryn](<https://en.wikipedia.org/wiki/Penryn_(microarchitecture)>)                                                                                                                                                                                    | 10.4.10                              | 10.13.6                                    | Không có SSE4.2                           | 0x010676                      |
| [Nehalem](<https://en.wikipedia.org/wiki/Nehalem_(microarchitecture)>)                                                                                                                                                                                  | 10.5.6                               | <span style="color:green"> Current </span> | N/A                                       | 0x0106A2                      |
| [Lynnfield](<https://en.wikipedia.org/wiki/Lynnfield_(microprocessor)>), [Clarksfield](<https://en.wikipedia.org/wiki/Clarksfield_(microprocessor)>)                                                                                                    | 10.6.3                               | ^^                                         | Không có iGPU hỗ trợ 10.14+               | 0x0106E0                      |
| [Westmere, Clarkdale, Arrandale](<https://en.wikipedia.org/wiki/Westmere_(microarchitecture)>)                                                                                                                                                          | 10.6.4                               | ^^                                         | ^^                                        | 0x0206C0                      |
| [Sandy Bridge](https://en.wikipedia.org/wiki/Sandy_Bridge)                                                                                                                                                                                              | 10.6.7                               | ^^                                         | ^^                                        | 0x0206A0(M/H)                 |
| [Ivy Bridge](<https://en.wikipedia.org/wiki/Ivy_Bridge_(microarchitecture)>)                                                                                                                                                                            | 10.7.3                               | ^^                                         | Không có iGPU hỗ trợ 11+                  | 0x0306A0(M/H/G)               |
| [Ivy Bridge-E5](<https://en.wikipedia.org/wiki/Ivy_Bridge_(microarchitecture)>)                                                                                                                                                                         | 10.9.2                               | ^^                                         | N/A                                       | 0x0306E0                      |
| [Haswell](<https://en.wikipedia.org/wiki/Haswell_(microarchitecture)>)                                                                                                                                                                                  | 10.8.5                               | ^^                                         | ^^                                        | 0x0306C0(S)                   |
| [Broadwell](<https://en.wikipedia.org/wiki/Broadwell_(microarchitecture)>)                                                                                                                                                                              | 10.10.0                              | ^^                                         | ^^                                        | 0x0306D4(U/Y)                 |
| [Skylake](<https://en.wikipedia.org/wiki/Skylake_(microarchitecture)>)                                                                                                                                                                                  | 10.11.0                              | ^^                                         | ^^                                        | 0x0506e3(H/S) 0x0406E3(U/Y)   |
| [Kaby Lake](https://en.wikipedia.org/wiki/Kaby_Lake)                                                                                                                                                                                                    | 10.12.4                              | ^^                                         | ^^                                        | 0x0906E9(H/S/G) 0x0806E9(U/Y) |
| [Coffee Lake](https://en.wikipedia.org/wiki/Coffee_Lake)                                                                                                                                                                                                | 10.12.6                              | ^^                                         | ^^                                        | 0x0906EA(S/H/E) 0x0806EA(U)   |
| [Amber](https://en.wikipedia.org/wiki/Kaby_Lake#List_of_8th_generation_Amber_Lake_Y_processors), [Whiskey](<https://en.wikipedia.org/wiki/Whiskey_Lake_(microarchitecture)>), [Comet Lake](<https://en.wikipedia.org/wiki/Comet_Lake_(microprocessor)>) | 10.14.1                              | ^^                                         | ^^                                        | 0x0806E0(U/Y)                 |
| [Comet Lake](<https://en.wikipedia.org/wiki/Comet_Lake_(microprocessor)>)                                                                                                                                                                               | 10.15.4                              | ^^                                         | ^^                                        | 0x0906E0(S/H)                 |
| [Ice Lake](<https://en.wikipedia.org/wiki/Ice_Lake_(microprocessor)>)                                                                                                                                                                                   | ^^                                   | ^^                                         | ^^                                        | 0x0706E5(U)                   |
| [Rocket Lake](https://en.wikipedia.org/wiki/Rocket_Lake)                                                                                                                                                                                                | ^^                                   | ^^                                         | Cần CPUID của Comet Lake                  | 0x0A0671                      |
| [Tiger Lake](<https://en.wikipedia.org/wiki/Tiger_Lake_(microprocessor)>)                                                                                                                                                                               | <span style="color:red"> N/A </span> | <span style="color:red"> N/A </span>       | <span style="color:red"> Untested </span> | 0x0806C0(U)                   |

:::

::: details Giới hạn CPU AMD ở macOS

Có vô cùng nhiều tính năng của macOS không hỗ trợ với CPU AMD, như:

- Máy ảo có sử dụng AppleHV
  - Bao gồm VMware, Parallels, Docker, Android Studio,...
  - VirtualBox ngoại lệ do nó có hypervisor riêng
  - VMware 10 và Parallels 13.1.0 có hypervisor riêng, nhưng không nên sử dụng
    chúng do bảo mật (cứ dualboot đi cho lành)
- Hỗ trợ cho CPU AMD
  - Đa phần các phần mềm của Adobe sử dụng Intel Memfast nên app Adobe sẽ bị
    crash khi chạy ở CPU AMD
  - Bạn có thể vô hiệu hóa các tính năng như RAW để tránh việc bị crash:
    [Adobe Fixes](https://gist.github.com/naveenkrdy/26760ac5135deed6d0bb8902f6ceb6bd)
- Hỗ trợ 32-bit
  - Cho những ai cần những phần mềm 32-bit ở Mojave và thâos hơn, nên nhớ là
    patch Vanilla không hỗ trợ 32-bit
  - Bạn có thể cài đặt
    [custom kernel](https://amd-osx.com/download/kernel.html), tuy nhiên bạn sẽ
    mất hỗ trợ iMessage.
- Độ ổn định ở nhiều ứng dụng
  - Một số ứng dụng liên quan tới âm thanh như Logic Pro
  - DaVinci Resolve cũng có một số vấn đề.

:::

## Hỗ trợ GPU

GPU support becomes much more complicated due to the near-infinite amount of
GPUs on the market, but the general breakdown is as follows:

- AMD's GCN based GPUs are supported in the latest versions of macOS
  - Tuy nhiên APU không được hỗ trợ
  - AMD's
    [Lexa based cores](https://www.techpowerup.com/gpu-specs/amd-lexa.g806) from
    the Polaris series are also not supported
  - Special note for MSI Navi users:
    [Installer not working with 5700XT #901](https://github.com/acidanthera/bugtracker/issues/901)
    - Vấn đề này đã không còn xuất hiện trên macOS 11 (Big Sur).
- Nvidia's GPU support is complicated:
  - [Maxwell(9XX)](https://en.wikipedia.org/wiki/GeForce_900_series) and
    [Pascal(10XX)](https://en.wikipedia.org/wiki/GeForce_10_series) GPU chỉ hỗ
    trợ tới macOS 10.13: High Sierra
  - [Nvidia's Turing(20XX,](https://en.wikipedia.org/wiki/GeForce_20_series)[16XX)](https://en.wikipedia.org/wiki/GeForce_16_series)
    GPU **không được hỗ trợ với bất kì phiên bản nào của macOS**
  - [Nvidia's Ampere(30XX)](https://en.wikipedia.org/wiki/GeForce_30_series) GPU
    **không được hỗ trợ với bất kì phiên bản nào của macOS**
  - [Nvidia's Kepler(6XX,](https://en.wikipedia.org/wiki/GeForce_600_series)[7XX)](https://en.wikipedia.org/wiki/GeForce_700_series)
    GPU được hỗ trợ tới phiên bản mới nhất của macOS (bao gồm macOS 11 Big Sur)
    - Đó là do Apple vẫn hỗ trợ một số ít
      [MacBook Pro với GPU của Nvidia](https://viopencore.github.io/GPU-Buyers-Guide/modern-gpus/nvidia-gpu.html)
- Intel's [GT2+ tier](https://en.wikipedia.org/wiki/Intel_Graphics_Technology)
  series iGPUs
  - Ivy Bridge through Ice Lake iGPU support is covered in this guide
    - Info on GMA series iGPUs can be found here:
      [GMA Patching](https://viopencore.github.io/OpenCore-Post-Install/gpu-patching/)
  - Note GT2 refers to the tier of iGPU, low-end GT1 iGPUs found on Pentiums,
    Celerons and Atoms are not supported in macOS

Và lưu ý quan trọng về **Laptop với GPU rời**:

- 90% of discrete GPUs will not work because they are wired in a configuration
  that macOS doesn't support (switchable graphics). With NVIDIA discrete GPUs,
  this is usually called Optimus. It is not possible to utilize these discrete
  GPUs for the internal display, so it is generally advised to disable them and
  power them off (will be covered later in this guide).
- However, in some cases, the discrete GPU powers any external outputs (HDMI,
  mini DisplayPort, etc.), which may or may not work; in the case that it will
  work, you will have to keep the card on and running.
- However, there are some laptops that rarely do not have switchable graphics,
  so the discrete card can be used (if supported by macOS), but the wiring and
  setup usually cause issues.

**For a full list of supported GPUs, see the
[GPU Buyers Guide](https://viopencore.github.io/GPU-Buyers-Guide/)**

::: details Intel GPU Support Chart

| GPU Generation                                                                                        | Initial support                      | Last supported version                     | Notes                                                                                                               |
| :---------------------------------------------------------------------------------------------------- | :----------------------------------- | :----------------------------------------- | :------------------------------------------------------------------------------------------------------------------ |
| [3rd Gen GMA](https://en.wikipedia.org/wiki/List_of_Intel_graphics_processing_units#Third_generation) | 10.4.1                               | 10.7.5                                     | [Requires 32-bit kernel and patches](https://viopencore.github.io/OpenCore-Post-Install/gpu-patching/legacy-intel/) |
| [4th Gen GMA](https://en.wikipedia.org/wiki/List_of_Intel_graphics_processing_units#Gen4)             | 10.5.0                               | ^^                                         | ^^                                                                                                                  |
| [Arrendale(HD Graphics)](https://en.wikipedia.org/wiki/List_of_Intel_graphics_processing_units#Gen5)  | 10.6.4                               | 10.13.6                                    | Only LVDS is supported, eDP and external outputs are not                                                            |
| [Sandy Bridge(HD 3000)](https://en.wikipedia.org/wiki/List_of_Intel_graphics_processing_units#Gen6)   | 10.6.7                               | ^^                                         | N/A                                                                                                                 |
| [Ivy Bridge(HD 4000)](https://en.wikipedia.org/wiki/List_of_Intel_graphics_processing_units#Gen7)     | 10.7.3                               | 10.15.7                                    | ^^                                                                                                                  |
| [Haswell(HD 4XXX, 5XXX)](https://en.wikipedia.org/wiki/List_of_Intel_graphics_processing_units#Gen7)  | 10.8.5                               | <span style="color:green"> Current </span> | ^^                                                                                                                  |
| [Broadwell(5XXX, 6XXX)](https://en.wikipedia.org/wiki/List_of_Intel_graphics_processing_units#Gen8)   | 10.10.0                              | ^^                                         | ^^                                                                                                                  |
| [Skylake(HD 5XX)](https://en.wikipedia.org/wiki/List_of_Intel_graphics_processing_units#Gen9)         | 10.11.0                              | ^^                                         | ^^                                                                                                                  |
| [Kaby Lake(HD 6XX)](https://en.wikipedia.org/wiki/List_of_Intel_graphics_processing_units#Gen9)       | 10.12.4                              | ^^                                         | ^^                                                                                                                  |
| [Coffee Lake(UHD 6XX)](https://en.wikipedia.org/wiki/List_of_Intel_graphics_processing_units#Gen9)    | 10.13.6                              | ^^                                         | ^^                                                                                                                  |
| [Comet Lake(UHD 6XX)](https://en.wikipedia.org/wiki/List_of_Intel_graphics_processing_units#Gen9)     | 10.15.4                              | ^^                                         | ^^                                                                                                                  |
| [Ice Lake(Gx)](https://en.wikipedia.org/wiki/List_of_Intel_graphics_processing_units#Gen11)           | 10.15.4                              | ^^                                         | Requires `-igfxcdc` and `-igfxdvmt` in boot-args                                                                    |
| [Tiger Lake(Xe)](https://en.wikipedia.org/wiki/Intel_Xe)                                              | <span style="color:red"> N/A </span> | <span style="color:red"> N/A </span>       | <span style="color:red"> No drivers available </span>                                                               |
| [Rocket Lake](https://en.wikipedia.org/wiki/Rocket_Lake)                                              | <span style="color:red"> N/A </span> | <span style="color:red"> N/A </span>       | <span style="color:red"> No drivers available </span>                                                               |

Note: Apple has kept Ivy Bridge's iGPU drivers present in macOS 11, Big Sur,
however they are slated for removal. Please be aware they may be removed at a
later time.

:::

::: details AMD GPU Support Chart

| GPU Generation                                                                                                             | Initial support                      | Last supported version                     | Notes                                                            |
| :------------------------------------------------------------------------------------------------------------------------- | :----------------------------------- | :----------------------------------------- | :--------------------------------------------------------------- |
| [X800](https://en.wikipedia.org/wiki/Radeon_X800_series)                                                                   | 10.3.x                               | 10.7.5                                     | Requires 32 bit kernel                                           |
| [X1000](https://en.wikipedia.org/wiki/Radeon_X1000_series)                                                                 | 10.4.x                               | ^^                                         | N/A                                                              |
| [Terascale](<https://en.wikipedia.org/wiki/TeraScale_(microarchitecture)>)                                                 | 10.4.x                               | 10.13.6                                    | ^^                                                               |
| [Terascale 2/3](<https://en.wikipedia.org/wiki/TeraScale_(microarchitecture)>)                                             | 10.6.x                               | ^^                                         | ^^                                                               |
| [GCN 1](https://en.wikipedia.org/wiki/Graphics_Core_Next)                                                                  | 10.8.3                               | <span style="color:green"> Current </span> | ^^                                                               |
| [GCN 2/3](https://en.wikipedia.org/wiki/Graphics_Core_Next)                                                                | 10.10.x                              | ^^                                         | ^^                                                               |
| [Polaris 10](https://en.wikipedia.org/wiki/Radeon_RX_400_series), [20](https://en.wikipedia.org/wiki/Radeon_RX_500_series) | 10.12.1                              | ^^                                         | ^^                                                               |
| [Vega 10](https://en.wikipedia.org/wiki/Radeon_RX_Vega_series)                                                             | 10.12.6                              | ^^                                         | ^^                                                               |
| [Vega 20](https://en.wikipedia.org/wiki/Radeon_RX_Vega_series)                                                             | 10.14.5                              | ^^                                         | ^^                                                               |
| [Navi 10](https://en.wikipedia.org/wiki/Radeon_RX_5000_series)                                                             | 10.15.1                              | ^^                                         | Requires `agdpmod=pikera` in boot-args                           |
| [Navi 20](https://en.wikipedia.org/wiki/Radeon_RX_6000_series)                                                             | <span style="color:red"> N/A </span> | <span style="color:red"> N/A </span>       | <span style="color:red"> Current drivers do not function </span> |

:::

::: details Nvidia GPU Support Chart

| GPU Generation                                                                  | Initial support                      | Last supported version                     | Notes                                                                                                                         |
| :------------------------------------------------------------------------------ | :----------------------------------- | :----------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| [GeForce 6](https://en.wikipedia.org/wiki/GeForce_6_series)                     | 10.2.x                               | 10.7.5                                     | Requires 32 bit kernel and [NVCAP patching](https://viopencore.github.io/OpenCore-Post-Install/gpu-patching/nvidia-patching/) |
| [GeForce 7](https://en.wikipedia.org/wiki/GeForce_7_series)                     | 10.4.x                               | ^^                                         | [Requires NVCAP patching](https://viopencore.github.io/OpenCore-Post-Install/gpu-patching/nvidia-patching/)                   |
| [Tesla](<https://en.wikipedia.org/wiki/Tesla_(microarchitecture)>)              | 10.4.x                               | 10.13.6                                    | ^^                                                                                                                            |
| [Tesla V2](<https://en.wikipedia.org/wiki/Tesla_(microarchitecture)#Tesla_2.0>) | 10.5.x                               | ^^                                         | ^^                                                                                                                            |
| [Fermi](<https://en.wikipedia.org/wiki/Fermi_(microarchitecture)>)              | 10.7.x                               | ^^                                         | ^^                                                                                                                            |
| [Kepler](<https://en.wikipedia.org/wiki/Kepler_(microarchitecture)>)            | 10.7.x                               | <span style="color:green"> Current </span> | N/A                                                                                                                           |
| [Kepler V2](<https://en.wikipedia.org/wiki/Kepler_(microarchitecture)>)         | 10.8.x                               | ^^                                         | ^^                                                                                                                            |
| [Maxwell](<https://en.wikipedia.org/wiki/Maxwell_(microarchitecture)>)          | 10.10.x                              | 10.13.6                                    | [Requires webdrivers](https://www.nvidia.com/download/driverResults.aspx/149652/)                                             |
| [Pascal](<https://en.wikipedia.org/wiki/Pascal_(microarchitecture)>)            | 10.12.4                              | ^^                                         | ^^                                                                                                                            |
| [Turing](<https://en.wikipedia.org/wiki/Turing_(microarchitecture)>)            | <span style="color:red"> N/A </span> | <span style="color:red"> N/A </span>       | <span style="color:red"> No drivers available </span>                                                                         |
| [Ampere](<https://en.wikipedia.org/wiki/Ampere_(microarchitecture)>)            | ^^                                   | ^^                                         | ^^                                                                                                                            |

:::

## Motherboard Support

For the most part, all motherboards are supported as long as the CPU is.
Previously, B550 boards had issues:

- [~~AMD's B550 boards~~](https://en.wikipedia.org/wiki/List_of_AMD_chipsets)

However thanks to recent developments, B550 boards are now bootable with the
addition of
[SSDT-CPUR](https://github.com/naveenkrdy/Misc/blob/master/SSDTs/SSDT-CPUR.dsl).
More info will be provided in both [Gathering Files](./ktext.md) and
[Zen's config.plist section](./AMD/zen.md)

## Storage Support

For the most part, all SATA based drives are supported and the majority of NVMe
drives as well. There are only a few exceptions:

- **Samsung PM981, PM991 and Micron 2200S NVMe SSDs**
  - These SSDs are not compatible out of the box (causing kernel panics) and
    therefore require
    [NVMeFix.kext](https://github.com/acidanthera/NVMeFix/releases) to fix these
    kernel panics. Note that these drives may still cause boot issues even with
    NVMeFix.kext.
  - On a related note, Samsung 970 EVO Plus NVMe SSDs also had the same problem
    but it was fixed in a firmware update; get the update (Windows via Samsung
    Magician or bootable ISO)
    [here](https://www.samsung.com/semiconductor/minisite/ssd/download/tools/).
  - Also to note, laptops that use
    [Intel Optane Memory](https://www.intel.com/content/www/us/en/architecture-and-technology/optane-memory.html)
    or
    [Micron 3D XPoint](https://www.micron.com/products/advanced-solutions/3d-xpoint-technology)
    for HDD acceleration are unsupported in macOS. Some users have reported
    success in Catalina with even read and write support but we highly recommend
    removing the drive to prevent any potential boot issues.
- **Intel 600p**
  - While not unbootable, please be aware this model can cause numerous
    problems.
    [Any fix for Intel 600p NVMe Drive? #1286](https://github.com/acidanthera/bugtracker/issues/1286)

## Wired Networking

Virtually all wired network adapters have some form of support in macOS, either
by the built-in drivers or community made kexts. The main exceptions:

- Intel I225 2.5Gb NIC
  - Found on high-end Desktop Comet Lake boards
  - Workarounds are possible:
    [Source](https://www.hackintosh-forum.de/forum/thread/48568-i9-10900k-gigabyte-z490-vision-d-er-läuft/?postID=606059#post606059)
    and [Example](config.plist/comet-lake.md#deviceproperties)
- Intel I350 1Gb server NIC
  - Normally found on Intel and Supermicro server boards of various generations
  - [Workaround](config-HEDT/ivy-bridge-e.md#deviceproperties)
- Intel 10Gb server NICs
  - Workarounds are possible for
    [X520 and X540 chipsets](https://www.tonymacx86.com/threads/how-to-build-your-own-imac-pro-successful-build-extended-guide.229353/)
- Mellanox and Qlogic server NICs

## Wireless Networking

Most WiFi cards that come with laptops are not supported as they are usually
Intel/Qualcomm. If you are lucky, you may have a supported Atheros card, but
support only runs up to High Sierra.

The best option is getting a supported Broadcom card; see the
[WiFi Buyer's Guide](https://viopencore.github.io/Wireless-Buyers-Guide/) for
recommendations.

Note: Intel WiFi is unofficially (3rd party driver) supported on macOS, check
[WiFi Buyer's Guide](https://viopencore.github.io/Wireless-Buyers-Guide/) for
more information about the drivers and supported cards.

## Miscellaneous

- **Cảm biến vân tay**
  - Tại thời điểm hiện tại không có cách nào để giả lập lại cảm biến Touch ID,
    cho nên cảm biến vân tay sẽ không hoạt động.
- **Windows Hello Face Recognition**
  - Some laptops come with WHFR that is I2C connected (and used through your
    iGPU), those will not work.
  - Some laptops come with WHFR that is USB connected, if you're lucky, you may
    get camera functionality, but nothing else.
- **Intel Smart Sound Technology**
  - Laptops with Intel SST will not have anything connected through them
    (usually internal mic) work, as it is not supported. You can check with
    Device Manager on Windows.
- **Headphone Jack Combo**
  - Some laptops with a combo headphone jack may not get audio input through
    them and will have to either use the built-in microphone or an external
    audio input device through USB.
- **Thunderbolt USB-C ports**
  - (Hackintosh) Thunderbolt support is currently still iffy in macOS, even more
    so with Alpine Ridge controllers, which most current laptops have. There
    have been attempts to keep the controller powered on, which allows
    Thunderbolt and USB-C hotplug to work, but it comes at the cost of kernel
    panics and/or USB-C breaking after sleep. If you want to use the USB-C side
    of the port and be able to sleep, you must plug it in at boot and keep it
    plugged in.
  - Note: This does not apply to USB-C only ports - only Thunderbolt 3 and USB-C
    combined ports.
  - Disabling Thunderbolt in the BIOS will also resolve this.
