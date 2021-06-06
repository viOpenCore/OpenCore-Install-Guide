(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{354:function(e,t,a){e.exports=a.p+"assets/img/format-usb.85e5c924.png"},509:function(e,t,a){e.exports=a.p+"assets/img/pre-restore.6f49bfad.png"},510:function(e,t,a){e.exports=a.p+"assets/img/restore.1ce10dc5.png"},511:function(e,t,a){e.exports=a.p+"assets/img/sip-fail.5189ba42.png"},652:function(e,t,a){"use strict";a.r(t);var r=a(26),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"legacy-macos-disk-images"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#legacy-macos-disk-images"}},[e._v("#")]),e._v(" Legacy macOS: Disk Images")]),e._v(" "),r("p",[e._v("This method instead relies on hosted images either from Apple or Acidanthera, and restoring onto your drive.")]),e._v(" "),r("h4",{attrs:{id:"acidanthera-images"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#acidanthera-images"}},[e._v("#")]),e._v(" Acidanthera Images")]),e._v(" "),r("p",[e._v("The below installers were pulled from genuine Mac restore disks with their SMBIOS lock removed, contents of OS X itself have not been modified in any way.")]),e._v(" "),r("ul",[r("li",[r("p",[r("a",{attrs:{href:"https://archive.org/details/10.4.10-8-r-4088-acdt",target:"_blank",rel:"noopener noreferrer"}},[e._v("OS X 10.4.10(8R4088)"),r("OutboundLink")],1),r("a",{attrs:{href:"https://mega.nz/folder/D3ASzLzA#7sjYXE2X09f6aGjol_C7dg",target:"_blank",rel:"noopener noreferrer"}},[e._v("MEGA Mirror"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://archive.org/details/10.5.7-9-j-3050",target:"_blank",rel:"noopener noreferrer"}},[e._v("OS X 10.5.7(9J3050)"),r("OutboundLink")],1),r("a",{attrs:{href:"https://mega.nz/folder/inRBTarD#zanf7fUbviwz3WHBU5xpCg",target:"_blank",rel:"noopener noreferrer"}},[e._v("MEGA Mirror"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://archive.org/details/10.6.7-10j3250-disk-images",target:"_blank",rel:"noopener noreferrer"}},[e._v("OS X 10.6.7(10J4139)"),r("OutboundLink")],1),r("a",{attrs:{href:"https://mega.nz/folder/z5YUhYTb#gA_IRY5KMuYpnNCg7kR3ug/file/ioQkTagI",target:"_blank",rel:"noopener noreferrer"}},[e._v("MEGA Mirror"),r("OutboundLink")],1)])])]),e._v(" "),r("h4",{attrs:{id:"apple-images"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#apple-images"}},[e._v("#")]),e._v(" Apple Images")]),e._v(" "),r("p",[e._v("Note that these images require you to have an Apple Developer account to access.")]),e._v(" "),r("ul",[r("li",[r("p",[r("a",{attrs:{href:"https://download.developer.apple.com/Mac_OS_X/mac_os_x_v10.5_leopard_9a581/leopard_9a581_userdvd.dmg",target:"_blank",rel:"noopener noreferrer"}},[e._v("OS X 10.5.0 Golden Master(9a581)"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://download.developer.apple.com/Mac_OS_X/mac_os_x_version_10.6_snow_leopard_build_10a432/mac_os_x_v10.6_build_10a432_user_dvd.dmg",target:"_blank",rel:"noopener noreferrer"}},[e._v("OS X 10.6.0 Golden Master(10a432)"),r("OutboundLink")],1)])])]),e._v(" "),r("h3",{attrs:{id:"restoring-the-drive"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#restoring-the-drive"}},[e._v("#")]),e._v(" Restoring the drive")]),e._v(" "),r("p",[e._v("Now comes the fun part, you'll first want to open the dmg you just downloaded and have it mounted. Now open Disk Utility and format your drive as macOS Extended(HFS+) with a GUID partition map:")]),e._v(" "),r("p",[r("img",{attrs:{src:a(354),alt:"Formatting the USB"}})]),e._v(" "),r("p",[e._v("Next we have 2 options to follow:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#asr"}},[e._v("ASR Restore")]),e._v("(Apple Software Restore)\n"),r("ul",[r("li",[e._v("Terminal based, works with SIP enabled")])])]),e._v(" "),r("li",[r("a",{attrs:{href:"#disk-utility"}},[e._v("Disk Utility Restore")]),e._v(" "),r("ul",[r("li",[e._v("May require SIP disabled in newer OSes")])])])]),e._v(" "),r("h4",{attrs:{id:"asr"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#asr"}},[e._v("#")]),e._v(" ASR")]),e._v(" "),r("p",[e._v("Here you'll simply want to open terminal and run the following:")]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" asr restore -source /Volumes/Mac"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v(" OS"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v(" X"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v(" Install"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v(" DVD  -target /Volumes/MyVolume -erase -noverify\n")])])]),r("ul",[r("li",[r("strong",[e._v("Note")]),e._v(": This may not align with your setup, please change accordingly:\n"),r("ul",[r("li",[e._v("Change "),r("code",[e._v("/Volumes/Mac\\ OS\\ X\\ Install\\ DVD")]),e._v(" to what your mounted Disk Image is called")]),e._v(" "),r("li",[e._v("Change "),r("code",[e._v("/Volumes/MyVolume")]),e._v(" to what your USB is called")])])])]),e._v(" "),r("h3",{attrs:{id:"once-you-re-finished-you-can-head-to-setting-up-opencore-s-efi-environment"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#once-you-re-finished-you-can-head-to-setting-up-opencore-s-efi-environment"}},[e._v("#")]),e._v(" Once you're finished, you can head to "),r("RouterLink",{attrs:{to:"/installer-guide/mac-install.html#setting-up-opencore-s-efi-environment"}},[e._v("Setting up OpenCore's EFI environment")])],1),e._v(" "),r("h4",{attrs:{id:"disk-utility"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#disk-utility"}},[e._v("#")]),e._v(" Disk Utility")]),e._v(" "),r("p",[e._v("Due to some pesky issues with Disk Utility, many restores can fail if SIP is enabled. If you have issues we recommend either using the "),r("a",{attrs:{href:"#asr"}},[e._v("ASR Method")]),e._v(" or disable SIP.")]),e._v(" "),r("p",[e._v("To start, open Disk Utility and you should see both your USB drive and the Disk Image in the sidebar. From here, select restore")]),e._v(" "),r("p",[r("img",{attrs:{src:a(509),alt:""}}),e._v(" "),r("img",{attrs:{src:a(510),alt:""}})]),e._v(" "),r("details",{staticClass:"custom-block details"},[r("summary",[e._v("Troubleshooting")]),e._v(" "),r("p",[e._v("If you get an error such as this one during restore:")]),e._v(" "),r("p",[r("img",{attrs:{src:a(511),alt:""}})]),e._v(" "),r("p",[e._v("This likely means SIP needs to be disabled, however we recommend using "),r("a",{attrs:{href:"#asr"}},[e._v("ASR Method")]),e._v(" instead.")])]),e._v(" "),r("h3",{attrs:{id:"once-you-re-finished-you-can-head-to-setting-up-opencore-s-efi-environment-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#once-you-re-finished-you-can-head-to-setting-up-opencore-s-efi-environment-2"}},[e._v("#")]),e._v(" Once you're finished, you can head to "),r("RouterLink",{attrs:{to:"/installer-guide/mac-install.html#setting-up-opencore-s-efi-environment"}},[e._v("Setting up OpenCore's EFI environment")])],1)])}),[],!1,null,null,null);t.default=s.exports}}]);