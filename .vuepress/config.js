const {
    description
} = require('../package')

module.exports = {
    title: 'OpenCore Install Guide',
    head: [
        ['meta', {
            name: 'theme-color',
            content: '#3eaf7c'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
        }],
        ["link", {
            rel: "'stylesheet",
            href: "/styles/website.css"
        },],
        ['link', {
          rel: "shortcut icon",
          href: "/assets/favicons/favicon.ico"
        },],
    ],
    base: '/OpenCore-Install-Guide/',

	watch: {
	    $page(newPage, oldPage) {
	      if (newPage.key !== oldPage.key) {
	        requestAnimationFrame(() => {
	          if (this.$route.hash) {
	            const element = document.getElementById(this.$route.hash.slice(1));

	            if (element && element.scrollIntoView) {
	              element.scrollIntoView();
	            }
	          }
	        });
	      }
	    }
	  },

	markdown: {
		extendMarkdown: md => {
			md.use(require('markdown-it-multimd-table'), {
				rowspan: true,
			});
		}
	},

    theme: 'vuepress-theme-succinct',
    globalUIComponents: [
        'ThemeManager'
    ],

    themeConfig: {
        lastUpdated: true,
        repo: 'https://github.com/viopencore/OpenCore-Install-Guide',
		editLinks: true,
        docsBranch: 'vietnamese',
		editLinkText: 'Dịch page này hộ chúng tôi!',
        logo: 'homepage.png',
        nav: [{
            text: 'viOpenCore Guides',
            ariaLabel: 'Language Menu',
            items: [{
                text: 'Trang chủ',
                link: 'https://viopencore.github.io/'
            },
            {
                text: 'Getting Started With ACPI',
                link: 'https://viopencore.github.io/Getting-Started-With-ACPI/'
            },
            {
                text: 'OpenCore Post-Install',
                link: 'https://viopencore.github.io/OpenCore-Post-Install/'
            },
            {
                text: 'OpenCore Multiboot',
                link: 'https://viopencore.github.io/OpenCore-Multiboot/'
            },
            {
                text: 'GPU Buyers Guide',
                link: 'https://viopencore.github.io/GPU-Buyers-Guide/'
            },
            {
                text: 'Wireless Buyers Guide',
                link: 'https://viopencore.github.io/Wireless-Buyers-Guide/'
            },
            {
                text: 'Anti Buyers Guide',
                link: 'https://viopencore.github.io/Anti-Hackintosh-Buyers-Guide/'
            },
            ]
        },
        ],
        sidebar: [{
            title: 'Introduction',
            collapsable: false,
            sidebarDepth: 1,
            children: [
				'prerequisites',
				'macos-limits',
				'find-hardware',
                'terminology',
                'why-oc',
            ]

        },
        {
            title: 'USB Creation',
            collapsable: false,
            sidebarDepth: 2,
            children: [{
                title: 'Creating the USB',
                collapsable: true,
                path: '/installer-guide/',
                sidebarDepth: 1,
                children: [
                    '/installer-guide/mac-install',
                    '/installer-guide/winblows-install',
                    '/installer-guide/linux-install',
                ],
            },
                '/installer-guide/opencore-efi',
                'ktext',
            ['https://viopencore.github.io/Getting-Started-With-ACPI/', 'Getting started with ACPI'],
                '/config.plist/',
            ]
        },
        {
            title: 'Configs',
            collapsable: false,
            children: [{
                title: 'Intel Desktop config.plist',
                collapsable: true,
				sidebarDepth: 1,
                children: [
                    ['/config.plist/penryn', 'Penryn'],
                    ['/config.plist/clarkdale', 'Clarkdale'],
                    ['/config.plist/sandy-bridge', 'Sandy Bridge'],
                    ['/config.plist/ivy-bridge', 'Ivy Bridge'],
                    ['/config.plist/haswell', 'Haswell'],
                    ['/config.plist/skylake', 'Skylake'],
                    ['/config.plist/kaby-lake', 'Kaby Lake'],
                    ['/config.plist/coffee-lake', 'Coffee Lake'],
                    ['/config.plist/comet-lake', 'Comet Lake'],
                ]
            },
            {
                title: 'Intel Laptop config.plist',
                collapsable: true,
				sidebarDepth: 1,
                children: [
                    ['/config-laptop.plist/arrandale', 'Arrandale'],
                    ['/config-laptop.plist/sandy-bridge', 'Sandy Bridge'],
                    ['/config-laptop.plist/ivy-bridge', 'Ivy Bridge'],
                    ['/config-laptop.plist/haswell', 'Haswell'],
					['/config-laptop.plist/broadwell', 'Broadwell'],
                    ['/config-laptop.plist/skylake', 'Skylake'],
                    ['/config-laptop.plist/kaby-lake', 'Kaby Lake'],
                    ['/config-laptop.plist/coffee-lake', 'Coffee Lake và Whiskey Lake'],
					['/config-laptop.plist/coffee-lake-plus', 'Coffee Lake Plus và Comet Lake'],
                    ['/config-laptop.plist/icelake', 'Ice Lake'],
                ]
            },
            {
                title: 'Intel HEDT config.plist',
                collapsable: true,
				sidebarDepth: 1,
                children: [
                    '/config-HEDT/nehalem',
                    '/config-HEDT/ivy-bridge-e',
                    '/config-HEDT/haswell-e',
                    '/config-HEDT/broadwell-e',
                    '/config-HEDT/skylake-x',
                ]
            },
            {
                title: 'AMD Desktop config.plist',
                collapsable: true,
				sidebarDepth: 1,
                children: [
                    '/AMD/fx',
                    '/AMD/zen',
                ]
            },
            ]
        },
        {
            title: 'Installation',
            collapsable: false,
            children: [
                '/installation/installation-process',

            ]
        },
        {
            title: 'Troubleshooting',
            collapsable: false,
            children: [
                '/troubleshooting/troubleshooting',
				{
            		title: '',
            		collapsable: false,
		            children: [
		                '/troubleshooting/extended/opencore-issues',
						'/troubleshooting/extended/kernel-issues',
						'/troubleshooting/extended/userspace-issues',
						'/troubleshooting/extended/post-issues',
						'/troubleshooting/extended/misc-issues',

		            ]
				},
                '/troubleshooting/debug',
                '/troubleshooting/boot',
				'/troubleshooting/kernel-debugging',
            ]
        },
        {
            title: 'Post Install',
            collapsable: false,
            children: [
                ['https://viopencore.github.io/OpenCore-Post-Install/', 'Post-Install'],
                {
                    title: 'Universal',
                    collapsable: true,
                    sidebarDepth: 1,
                    children: [
                        ['https://viopencore.github.io/OpenCore-Post-Install/universal/security', 'Security và FileVault'],
                        ['https://viopencore.github.io/OpenCore-Post-Install/universal/audio', 'Fix Audio'],
                        ['https://viopencore.github.io/OpenCore-Post-Install/universal/oc2hdd', 'Boot không cần USB'],
                        ['https://viopencore.github.io/OpenCore-Post-Install/universal/update', 'Update OpenCore, kexts và macOS'],
                        ['https://viopencore.github.io/OpenCore-Post-Install/universal/drm', 'Fix DRM'],
                        ['https://viopencore.github.io/OpenCore-Post-Install/universal/iservices', 'Fix iServices'],
                        ['https://viopencore.github.io/OpenCore-Post-Install/universal/pm', 'Fix Power Management'],
                        ['https://viopencore.github.io/OpenCore-Post-Install/universal/sleep', 'Fix Sleep'],
                        ['https://viopencore.github.io/OpenCore-Post-Install/usb/', 'Fix USB'],
                    ]
                },
                {
                    title: 'Laptop Specifics',
                    collapsable: true,
                    children: [
                        ['https://viopencore.github.io/OpenCore-Post-Install/laptop-specific/battery', 'Fix Battery Read-outs'],

                    ]
                },
                {
                    title: 'Cosmetics',
                    collapsable: true,
                    children: [
                        ['https://viopencore.github.io/OpenCore-Post-Install/cosmetic/verbose', 'Fix Resolution và Verbose'],
                        ['https://viopencore.github.io/OpenCore-Post-Install/cosmetic/gui', 'Add GUI và Boot-chime'],
                    ]
                },
                {
                    title: 'Multiboot',
                    collapsable: true,
                    children: [
						['https://viopencore.github.io/OpenCore-Multiboot/', 'OpenCore Multiboot'],
                        ['https://viopencore.github.io/OpenCore-Post-Install/multiboot/bootstrap', 'Set up LauncherOption'],
                        ['https://viopencore.github.io/OpenCore-Post-Install/multiboot/bootcamp', 'Cài BootCamp'],
                    ]
                },
                {
                    title: 'Miscellaneous',
                    collapsable: true,
                    children: [
                        ['https://viopencore.github.io/OpenCore-Post-Install/misc/rtc', 'Fix RTC'],
                        ['https://viopencore.github.io/OpenCore-Post-Install/misc/msr-lock', 'Fix CFG Lock'],
                        ['https://viopencore.github.io/OpenCore-Post-Install/misc/nvram', 'Emulated NVRAM'],
                    ]
                },
            ]
        },
        {
            title: 'Extras',
            collapsable: false,
			sidebarDepth: 2,
            children: [
                '/extras/kaslr-fix',
                '/extras/spoof',
                '/extras/big-sur/',
                ['https://github.com/dortania/OpenCore-Install-Guide/tree/master/clover-conversion', 'Clover Conversion'],
                '/extras/smbios-support.md',
            ]
        },
        {
            title: 'Misc',
            collapsable: false,
            children: [
                'CONTRIBUTING',
                '/misc/credit',
            ]
        },
        ],
    },
    plugins: [
        '@vuepress/plugin-back-to-top',
        'vuepress-plugin-smooth-scroll',
        ['vuepress-plugin-medium-zoom',
            {
                selector: "img",
                options: {
                    background: 'var(--bodyBgColor)'
                }
            }],
    ]
}
