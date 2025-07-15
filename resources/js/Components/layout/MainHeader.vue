<template>
    <header class="sticky top-0 z-50 border-b border-gray-200 shadow-sm bg-white/80 backdrop-blur-sm">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                    <Link href="/" class="flex items-center space-x-2">
                    <img src="/assets/images/logo.png" alt="Sagan Logo" class="w-40">
                    </Link>
                </div>

                <nav class="items-center hidden space-x-8 md:flex">
                    <Link href="/"
                        class="font-medium text-gray-700 transition-colors duration-200 hover:text-pink-600 navigation-font-family"
                        :class="{ 'text-pink-600': $page.url === '/' }">Home</Link>
                    <Link href="/about"
                        class="font-medium text-gray-700 transition-colors duration-200 navigation-font-family hover:text-pink-600"
                        :class="{ 'text-pink-600': $page.url === '/about' }">About Us</Link>
                    <Link href="/faq"
                        class="font-medium text-gray-700 transition-colors duration-200 navigation-font-family hover:text-pink-600"
                        :class="{ 'text-pink-600': $page.url === '/faq' }">FAQ</Link>
                </nav>

                <div class="flex items-center space-x-4">
                    <template v-if="!user">
                        <!-- Login Button -->
                        <Link href="/login"
                            class="px-4 py-1.5 rounded-full border font-medium text-[#272727] border-[#272727] transition-colors hover:bg-[#272727] hover:text-white">
                        Login
                        </Link>

                        <!-- Start Button -->
                        <Link href="/register"
                            class="flex items-center space-x-2 px-4 py-1.5 rounded-full font-medium bg-[#272727] text-white transition-colors hover:bg-[#1f1f1f]">
                        <span>Start</span>
                        <ArrowUpRight class="w-4 h-4" />
                        </Link>
                    </template>


                    <template v-else>
                        <div class="relative">
                            <button @click="toggleUserDropdown"
                                class="flex items-center px-3 py-2 space-x-2 font-medium text-gray-700 transition-colors duration-200 rounded-md hover:text-pink-600 hover:bg-pink-50">
                                <div
                                    class="flex items-center justify-center w-8 h-8 text-sm font-medium text-white rounded-full bg-primary">
                                    {{ getUserInitials(user.name) }}
                                </div>
                                <span class="hidden sm:block">{{ user.name }}</span>
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
                                        <div class="font-medium">{{ user.name }}</div>
                                        <div class="text-gray-500">{{ user.email }}</div>
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
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.$el.contains(e.target)) {
                this.userDropdownOpen = false
            }
        })
    }
}
</script>
