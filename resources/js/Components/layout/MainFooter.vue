<template>
    <div class="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-pink-200">
        <main class="px-4 pt-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="mb-5 text-center">
                <h1
                    class="px-4 mb-8 text-4xl font-light leading-tight text-gray-800 font-cormorant-upright md:text-5xl lg:text-6xl">
                    Join us in modernizing cash gift-giving—one<br class="hidden sm:block">
                    celebration at a time.
                </h1>
                <div class="flex justify-center mb-6 space-x-3">
                    <a v-for="social in socialLinks" :key="social.name" :href="social.url"
                        class="flex items-center justify-center w-10 h-10 text-white transition-colors duration-200 transform bg-[#000000] rounded-full hover:bg-gray-700 hover:scale-110"
                        :aria-label="social.name">
                        <i :class="social.icon" class="text-sm"></i>
                    </a>
                </div>
                <div class="mb-6 text-sm font-medium text-[#000000]">
                    <span class="mr-4">@Saganonline</span>
                    <span>#Saganonline</span>
                </div>
            </div>
        </main>

        <div class="relative w-full h-64 overflow-hidden">
            <div class="flex animate-slide">
                <template v-for="n in 2" :key="n">
                    <img v-for="(image, index) in images" :key="`${n}-${index}`" :src="image.src" :alt="image.alt"
                        class="object-cover h-64 w-68 shrink-0" />
                </template>
            </div>
        </div>

        <footer :class="[
            'py-12 border-t backdrop-blur-sm bg-footer',
            isMobile ? 'px-6' : 'px-28'
        ]">
            <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <!-- Mobile Layout -->
                <div v-if="isMobile" class="space-y-8">
                    <!-- Logo -->
                    <div class="flex justify-center">
                        <img src="/assets/images/logo.png" alt="Sagan Logo" class="w-32">
                    </div>

                    <!-- Mobile View: 2 columns, Help spans full width -->
                    <div v-if="isMobile" class="grid grid-cols-2 gap-6">
                        <div v-for="(section, index) in footerLinks" :key="index"
                            :class="index === 2 ? 'col-span-2' : ''">
                            <h3 class="mb-2 text-sm font-semibold text-[#272727] font-space-grotesk">
                                {{ section.title }}
                            </h3>
                            <ul class="space-y-2 text-xs">
                                <li v-for="(link, linkIndex) in section.links" :key="linkIndex">
                                    <a :href="link.href"
                                        class="text-[#272727] font-space-grotesk transition-colors duration-200 hover:text-primary font-medium">
                                        {{ link.label }}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- Desktop View: Original layout -->
                    <div v-else class="grid grid-cols-1 gap-8 sm:grid-cols-3 md:col-span-3">
                        <div v-for="(section, index) in footerLinks" :key="index">
                            <h3 class="mb-4 text-lg font-semibold text-[#272727] font-space-grotesk">
                                {{ section.title }}
                            </h3>
                            <ul class="space-y-3 text-sm">
                                <li v-for="(link, linkIndex) in section.links" :key="linkIndex">
                                    <a :href="link.href"
                                        class="text-[#272727] font-space-grotesk transition-colors duration-200 hover:text-primary font-medium">
                                        {{ link.label }}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <!-- Copyright - Mobile -->
                    <div class="pt-6 mt-8 text-center">
                        <p class="text-xs text-[#272727] font-normal font-space-grotesk leading-relaxed">
                            © 2025 - SAGANonline | All Rights Reserved |<br>
                            Designed By DevanceSoft
                        </p>
                    </div>
                </div>

                <!-- Desktop Layout -->
                <div v-else>
                    <div class="grid grid-cols-1 gap-8 md:grid-cols-4">
                        <div class="flex flex-col items-center md:col-span-1 md:items-start">
                            <img src="/assets/images/logo.png" alt="Sagan Logo" class="w-40">
                        </div>
                        <!-- Mobile View: col-6 left + col-6 right -->
                        <div v-if="isMobile" class="grid grid-cols-2 gap-6 text-center">
                            <div v-for="(section, index) in footerLinks" :key="index" class="space-y-3">
                                <h3 class="mb-2 text-sm font-semibold text-[#272727] font-space-grotesk">
                                    {{ section.title }}
                                </h3>
                                <ul class="space-y-2 text-xs">
                                    <li v-for="(link, linkIndex) in section.links" :key="linkIndex">
                                        <a :href="link.href"
                                            class="text-[#272727] font-space-grotesk transition-colors duration-200 hover:text-primary font-medium">
                                            {{ link.label }}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <!-- Desktop/Tablet View -->
                        <div v-else class="grid grid-cols-1 gap-8 sm:grid-cols-3 md:col-span-3">
                            <div v-for="(section, index) in footerLinks" :key="index">
                                <h3 class="mb-4 text-lg font-semibold text-[#272727] font-space-grotesk">
                                    {{ section.title }}
                                </h3>
                                <ul class="space-y-3 text-sm">
                                    <li v-for="(link, linkIndex) in section.links" :key="linkIndex">
                                        <a :href="link.href"
                                            class="text-[#272727] font-space-grotesk transition-colors duration-200 hover:text-primary font-medium">
                                            {{ link.label }}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <!-- Copyright - Desktop -->
                    <div class="pt-2 mt-8 text-center">
                        <p class="text-sm text-[#272727] font-medium font-space-grotesk">
                            © 2025 - SAGANonline | All Rights Reserved | Designed By DevanceSoft
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'SaganOnline',
    data() {
        return {
            visibleCount: 5,
            socialLinks: [
                { name: 'Facebook', icon: 'fab fa-facebook-f', url: '#' },
                { name: 'LinkedIn', icon: 'fab fa-linkedin-in', url: '#' },
                { name: 'Instagram', icon: 'fab fa-instagram', url: '#' },
                { name: 'Telegram', icon: 'fab fa-telegram-plane', url: '#' },
                { name: 'WhatsApp', icon: 'fab fa-whatsapp', url: '#' }
            ],
            images: [
                {
                    src: '/assets/images/footer/01.webp',
                    alt: 'Traditional celebration with colorful decorations and festive atmosphere'
                },
                {
                    src: '/assets/images/footer/02.jpeg',
                    alt: 'Happy family celebrating with birthday cake and joyful moments'
                },
                {
                    src: '/assets/images/footer/03.jpg',
                    alt: 'Couple gift exchange moment with wrapped presents'
                },
                {
                    src: '/assets/images/footer/04.jpg',
                    alt: 'Wedding ceremony celebration with elegant decorations'
                },
                {
                    src: '/assets/images/footer/05.jpg',
                    alt: 'Festival celebration with vibrant colors and happy people'
                },
                {
                    src: '/assets/images/footer/06.jpg',
                    alt: 'Festival celebration with vibrant colors and happy people'
                },
                {
                    src: '/assets/images/footer/01.webp',
                    alt: 'Traditional celebration with colorful decorations and festive atmosphere'
                },
                {
                    src: '/assets/images/footer/02.jpeg',
                    alt: 'Happy family celebrating with birthday cake and joyful moments'
                },
                {
                    src: '/assets/images/footer/03.jpg',
                    alt: 'Couple gift exchange moment with wrapped presents'
                },
                {
                    src: '/assets/images/footer/04.jpg',
                    alt: 'Wedding ceremony celebration with elegant decorations'
                },
                {
                    src: '/assets/images/footer/05.jpg',
                    alt: 'Festival celebration with vibrant colors and happy people'
                },
                {
                    src: '/assets/images/footer/06.jpg',
                    alt: 'Festival celebration with vibrant colors and happy people'
                }
            ],
            footerLinks: [
                {
                    title: 'Home',
                    links: [
                        { label: 'How it works', href: '#' },
                        { label: 'Secure Payments', href: '#' },
                        { label: 'Testimonial', href: '#' }
                    ]
                },
                {
                    title: 'Company',
                    links: [
                        { label: 'Our Story', href: '#' },
                        { label: 'Blogs', href: '#' }
                    ]
                },
                {
                    title: 'Help',
                    links: [
                        { label: 'FAQs', href: '#' }
                    ]
                }
            ]

        }
    }
}
</script>

<style scoped>
@keyframes slide {
    0% {
        transform: translateX(0%);
    }

    100% {
        transform: translateX(-50%);
    }
}

.animate-slide {
    animation: slide 30s linear infinite;
    width: fit-content;
}

.font-space-grotesk {
    font-family: 'Space Grotesk', sans-serif;
}

/* Additional mobile-specific styles */
@media (max-width: 768px) {
    .space-y-6> :not([hidden])~ :not([hidden]) {
        margin-top: 1.5rem;
    }

    .space-y-2> :not([hidden])~ :not([hidden]) {
        margin-top: 0.5rem;
    }
}
</style>
