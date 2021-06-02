# Tìm hiểu phần cứng (cấu hình của bạn)

Mục này chỉ là một hướng dẫn nhỏ cho việc bạn đang sử dụng phần cứng như thế nào. Nếu bạn đã biết thì bạn hãy chuyển qua mục [Tạo USB](./installer-guide/).

Trước hết, chúng ta sẽ xem bạn đang sử dụng Windows hay Linux:
* [Nếu bạn đang sử dụng Microsoft Windows](#finding-hardware-using-windows)
* [Nếu bạn đang sử dụng Linux](#finding-hardware-using-linux)

## Nếu bạn sử dụng Windows

Chúng ta sẽ có 2 lựa chọn:

* Device Manager trên Windows (devmgmt.msc)
* [AIDA64](https://www.aida64.com/downloads)

Bởi vì AIDA64 dễ sử dụng hơn và tìm được chi tiết hơn cho nên khuyến cáo các bạn sử dụng. Tuy nhiên chúng tôi cũng sẽ chỉ cho bạn cả 2 cách.

### Loại CPU

| AIDA64 | Device Manager|
| :--- | :--- |
| ![](./images/finding-hardware-md/cpu-model-aida64.png) | ![](./images/finding-hardware-md/cpu-model-devicemanager.png) |

### Loại GPU

| AIDA64 | DeviceManager|
| :--- | :--- |
| ![](./images/finding-hardware-md/GPU-model-aida64.png) | ![](./images/finding-hardware-md/GPU-model-devicemanager.png) |

### Loại chipset

| AIDA64 | DeviceManager|
| :--- | :--- |
| ![](./images/finding-hardware-md/chipset-model-aida64.png) | ![](./images/finding-hardware-md/chipset-model-devicemanager.png) |

* Note: Một số loại chip Intel kiểu SoC (System on Chip) sẽ có chipset và một số thứ khác đã tích hợp sẵn trong một nhân thay vì riêng một số bộ phận, cho nên việc xác định chipset sẽ khó hơn.

### Cổng kết nối bàn phím, trackpad, màn hình cảm ứng

| DeviceManager |
| :--- |
| ![](./images/finding-hardware-md/trackpad-model-devicemanager.png) |

AIDA64 sẽ không cho bạn biết thông tin hữu ích liên quan tới những cái này, cho nên chúng tôi khuyến khích sử dụng DeviceManager

* Bạn có thể tìm thấy tại:
  * `Human Interface Devices`
  * `Keyboards`
  * `Mice and other Pointer Devices`

* To view the exact connection type of the device, select the pointer device then enter `View -> Device by Connection`. This will clarify whether it's over PS2, I2C, SMBus, USB, etc

Depending on the device, it may show up under multiple names and connections. The main ones to keep an eye on:
  
::: details SMBus
  
These will show up as a straight PCI device such as `Synaptics SMBus Driver` or `ELAN SMBus Driver`

* Synaptics devices will show up under both PS2 under `Synaptics PS2 device`/`Synaptics Pointing Device` and PCI as `Synaptics SMBus Driver`

![](./images/finding-hardware-md/Windows-SMBus-Device.png)

As you can see, we get 2 Synaptics devices in the left image, however if we take a closer look we'll see the top device is PS2, while the bottom one is SMBus. While you can use the trackpad in either mode, SMBus generally provides better gesture support and accuracy.

:::

::: details USB

| Device by Type | Device by Connection |
| :--- | :--- |
| ![](./images/finding-hardware-md/USB-trackpad-normal.png) | ![](./images/finding-hardware-md/USB-trackpad-by-connection.png)

These will show up as a `PS2 Compliant Trackpad`, as well under USB when we switch our connection view to `Device by Connection`

:::

::: details I2C

![](./images/finding-hardware-md/i2c-trackpad.png)
These will almost always show up as a Microsoft HID device, though can appear as other trackpads as well. They will always show up under I2C though.

:::
  
### Audio Codec

| AIDA64 | DeviceManager|
| :--- | :--- |
| ![](./images/finding-hardware-md/audio-controller-aida64.png) | ![](./images/finding-hardware-md/audio-controller-aida64.png.png) |

Due to how certain OEMs present device names, the most accurate info you can get with DeviceManager is via the PCI ID(ie. pci 14F1,50F4). This means you'll need to google the ID and figure out the exact device ID, however AIDA64 can present the name properly which is quite a bit easier on the end user.

### Network Controller models

| AIDA64 | Device Manager|
| :--- | :--- |
| ![](./images/finding-hardware-md/nic-model-aida64.png) | ![](./images/finding-hardware-md/nic-model-devicemanager.png) |

Due to how certain OEMs present device names, the most accurate info you can get with Device Manager is via the PCI ID (ie. `PCI\VEN_14E4&DEV_43A0` corresponds to a vendor ID of `14E4` and a device ID of `43A0`). This means you'll need to Google the ID and figure out the exact device ID; however, AIDA64 can present the name properly which can be quite a bit easier.

### Drive Model

| AIDA64 | Device Manager|
| :--- | :--- |
| ![](./images/finding-hardware-md/disk-model-aida64.png) | ![](./images/finding-hardware-md/disk-model-devicemanager.png) |

Due to OEMs not providing much details about the drive, you'll need to Google a bit which drive matches up with the displayed name.

## Finding Hardware using Linux

For finding hardware using Linux, we'll be using a few tools:

* `cat`
* `pciutils`
* `dmidecode`

Below you'll find a list of commands to run in the terminal, thankfully most Linux distros will come with these tools already installed. If not, you will likely find them in your distro's package manager.

### CPU Model

```sh
cat /proc/cpuinfo | grep -i "model name"
```

### GPU Model

```sh
lspci | grep -i --color "vga\|3d\|2d"
```

### Chipset Model

```sh
dmidecode -t baseboard
```

### Keyboard, Trackpad and  Touchscreen Connection Type

```sh
dmesg | grep -i input
```

### Audio Codec

```sh
aplay -l
```

### Network Controller models

Basic info:

```sh
lspci | grep -i network
```

More in-depth info:

```sh
lshw -class network
```

### Drive Model

```sh
lshw -class disk -class storage
```
