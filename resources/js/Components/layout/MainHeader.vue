<template>
    <header :class="[
        'sticky top-0 z-50 border-b border-gray-200 shadow-sm bg-white/80 backdrop-blur-sm',
        isMobile ? 'py-1 px-3' : 'py-2 px-6'
    ]">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                    <Link href="/" class="flex items-center space-x-2">
                    <img src="/assets/images/logo.png" alt="Sagan Logo" class="w-40">
                    </Link>
                </div>

                <nav class="items-center hidden space-x-8 md:flex">
                    <Link href="/"
                        class="font-medium text-gray-700 transition-colors duration-200 font-space-grotesk hover:text-primary navigation-font-family"
                        :class="{ 'text-primary': $page.url === '/' }">Home</Link>
                    <Link href="/about"
                        class="font-medium text-gray-700 transition-colors duration-200 font-space-grotesk navigation-font-family hover:text-primary"
                        :class="{ 'text-primary': $page.url === '/about' }">About Us</Link>
                    <Link href="/faq"
                        class="font-medium text-gray-700 transition-colors duration-200 font-space-grotesk navigation-font-family hover:text-primary"
                        :class="{ 'text-primary': $page.url === '/faq' }">FAQ</Link>
                </nav>

                <div class="items-center hidden space-x-4 md:flex">
                    <template v-if="!user">
                        <Link href="/login"
                            class="font-space-grotesk inline-flex items-center gap-1.5 px-8 py-2.5 text-sm rounded-full border font-medium text-[#272727] border-[#272727] transition-colors hover:bg-[#272727] hover:text-white box-border">
                        Login
                        </Link>

                        <Link href="/register"
                            class="font-space-grotesk inline-flex items-center gap-1.5 px-8 py-2.5 text-sm rounded-full font-medium bg-[#000000] text-white transition-colors hover:bg-[#1f1f1f]">
                        <span>Start</span>
                        <ArrowUpRight class="w-4 h-4" />
                        </Link>
                    </template>

                    <template v-else>
                        <div class="relative">
                            <button @click="toggleUserDropdown"
                                class="flex items-center px-3 py-2 space-x-2 font-medium text-[#0E0E0E] transition-colors duration-200 rounded-md hover:text-primary hover:bg-pink-50">
                                <div
                                    class="flex items-center justify-center w-8 h-8 text-sm font-medium text-white rounded-full font-space-grotesk bg-primary">
                                    {{ getUserInitials(user.name) }}
                                </div>
                                <span class="hidden font-space-grotesk sm:block">{{ user.name }}</span>
                                <svg class="w-4 h-4 transition-transform duration-200"
                                    :class="{ 'rotate-180': userDropdownOpen }" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div v-if="userDropdownOpen"
                                class="absolute right-0 z-50 w-48 mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
                                <div class="py-1">
                                    <div class="px-4 py-2 text-sm text-gray-700 border-b border-gray-100">
                                        <div class="font-medium font-space-grotesk">{{ user.name }}</div>
                                        <div class="text-gray-500 font-space-grotesk">{{ user.email }}</div>
                                    </div>
                                    <Link href="/profile"
                                        class="block px-4 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-pink-50"
                                        @click="closeUserDropdown">Profile</Link>
                                    <Link href="/dashboard"
                                        class="block px-4 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-pink-50"
                                        @click="closeUserDropdown">Dashboard</Link>
                                    <Link href="/settings"
                                        class="block px-4 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-pink-50"
                                        @click="closeUserDropdown">Settings</Link>
                                    <hr class="border-gray-200">
                                    <Link href="/logout" method="post" as="button"
                                        class="block w-full px-4 py-2 text-sm text-left text-red-600 transition-colors duration-200 hover:bg-red-50"
                                        @click="closeUserDropdown">Logout</Link>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>

                <div class="flex items-center md:hidden">
                    <button @click="toggleMobileMenu"
                        class="inline-flex items-center justify-center p-2 text-[#0E0E0E] transition-colors duration-200 rounded-md hover:text-primary hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" :class="{ 'hidden': mobileMenuOpen, 'block': !mobileMenuOpen }" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <svg class="w-6 h-6" :class="{ 'block': mobileMenuOpen, 'hidden': !mobileMenuOpen }" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

            <div v-if="mobileMenuOpen"
                class="absolute left-0 right-0 bg-white border-t border-gray-200 shadow-lg top-full md:hidden">
                <div class="px-2 pt-2 pb-3 space-y-1">
                    <Link href="/"
                        class="block px-3 py-2 text-base font-medium text-gray-700 transition-colors duration-200 rounded-md navigation-font-family hover:text-primary hover:bg-pink-50"
                        :class="{ 'text-primary bg-pink-50': $page.url === '/' }" @click="closeMobileMenu">Home</Link>
                    <Link href="/about"
                        class="block px-3 py-2 text-base font-medium text-gray-700 transition-colors duration-200 rounded-md navigation-font-family hover:text-primary hover:bg-pink-50"
                        :class="{ 'text-primary bg-pink-50': $page.url === '/about' }" @click="closeMobileMenu">About Us
                    </Link>
                    <Link href="/faq"
                        class="block px-3 py-2 text-base font-medium text-gray-700 transition-colors duration-200 rounded-md navigation-font-family hover:text-primary hover:bg-pink-50"
                        :class="{ 'text-primary bg-pink-50': $page.url === '/faq' }" @click="closeMobileMenu">FAQ</Link>

                    <div class="pt-4 pb-3 border-t border-gray-200">
                        <template v-if="!user">
                            <div class="flex space-x-2">
                                <Link href="/login"
                                    class="flex-1 inline-flex items-center justify-center gap-1.5 px-6 py-2.5 text-sm rounded-full border font-medium text-[#272727] border-[#272727] transition-colors hover:bg-[#272727] hover:text-white box-border"
                                    @click="closeMobileMenu">
                                Login
                                </Link>
                                <Link href="/register"
                                    class="flex-1 inline-flex items-center justify-center gap-1.5 px-6 py-2.5 text-sm rounded-full font-medium bg-[#000000] text-white transition-colors hover:bg-[#1f1f1f]"
                                    @click="closeMobileMenu">
                                <span>Start</span>
                                <ArrowUpRight class="w-4 h-4" />
                                </Link>
                            </div>
                        </template>

                        <template v-else>
                            <div class="flex items-center px-3 pb-3">
                                <div
                                    class="flex items-center justify-center w-8 h-8 text-sm font-medium text-white rounded-full bg-primary">
                                    {{ getUserInitials(user.name) }}
                                </div>
                                <div class="ml-3">
                                    <div class="text-base font-medium text-gray-800">{{ user.name }}</div>
                                    <div class="text-sm text-gray-500">{{ user.email }}</div>
                                </div>
                            </div>
                            <div class="space-y-1">
                                <Link href="/profile"
                                    class="block px-3 py-2 text-base font-medium text-gray-700 transition-colors duration-200 rounded-md hover:text-primary hover:bg-pink-50"
                                    @click="closeMobileMenu">Profile</Link>
                                <Link href="/dashboard"
                                    class="block px-3 py-2 text-base font-medium text-gray-700 transition-colors duration-200 rounded-md hover:text-primary hover:bg-pink-50"
                                    @click="closeMobileMenu">Dashboard</Link>
                                <Link href="/settings"
                                    class="block px-3 py-2 text-base font-medium text-gray-700 transition-colors duration-200 rounded-md hover:text-primary hover:bg-pink-50"
                                    @click="closeMobileMenu">Settings</Link>
                                <Link href="/logout" method="post" as="button"
                                    class="block w-full px-3 py-2 text-base font-medium text-left text-red-600 transition-colors duration-200 rounded-md hover:bg-red-50"
                                    @click="closeMobileMenu">Logout</Link>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { Link } from '@inertiajs/vue3'
import { ArrowUpRight } from 'lucide-vue-next'

export default {
    name: 'MainHeader',
    components: {
        Link,
        ArrowUpRight
    },
    computed: {
        user() {
            return this.$page.props.auth.user || null
        }
    },
    data() {
        return {
            mobileMenuOpen: false,
            userDropdownOpen: false
        }
    },
    methods: {
        toggleMobileMenu() {
            this.mobileMenuOpen = !this.mobileMenuOpen
        },
        closeMobileMenu() {
            this.mobileMenuOpen = false
        },
        toggleUserDropdown() {
            this.userDropdownOpen = !this.userDropdownOpen
        },
        closeUserDropdown() {
            this.userDropdownOpen = false
        },
        getUserInitials(name) {
            return name
                .split(' ')
                .map(word => word.charAt(0))
                .join('')
                .toUpperCase()
                .substring(0, 2)
        }
    },
    mounted() {
        document.addEventListener('click', (e) => {
            if (!this.$el.contains(e.target)) {
                this.userDropdownOpen = false
                this.mobileMenuOpen = false
            }
        })

        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) {
                this.mobileMenuOpen = false
            }
        })
    }
}
</script>
