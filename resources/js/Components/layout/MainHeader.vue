<template>
  <header class="bg-white border-b border-gray-200 shadow-sm">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo Section -->
        <div class="flex items-center">
          <Link href="/" class="flex items-center space-x-2">
            <div class="flex items-center justify-center w-8 h-8 bg-red-500 rounded-full">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            <span class="text-xl font-bold text-gray-900">SAGAN</span>
          </Link>
        </div>

        <!-- Navigation Menu -->
        <nav class="items-center hidden space-x-8 md:flex">
          <Link
            href="/"
            class="font-medium text-red-500 transition-colors duration-200 hover:text-red-600"
            :class="{ 'text-red-500': $page.url === '/' }"
          >
            Home
          </Link>
          <Link
            href="/about"
            class="font-medium text-gray-700 transition-colors duration-200 hover:text-red-500"
            :class="{ 'text-red-500': $page.url === '/about' }"
          >
            About Us
          </Link>
          <Link
            href="/faq"
            class="font-medium text-gray-700 transition-colors duration-200 hover:text-red-500"
            :class="{ 'text-red-500': $page.url === '/faq' }"
          >
            FAQ
          </Link>
        </nav>

        <!-- Action Buttons -->
        <div class="flex items-center space-x-4">
          <Link
            href="/login"
            class="font-medium text-gray-700 transition-colors duration-200 hover:text-red-500"
          >
            Login
          </Link>
          <Link
            href="/start"
            class="flex items-center px-4 py-2 space-x-1 font-medium text-white transition-colors duration-200 bg-gray-800 rounded-md hover:bg-gray-900"
          >
            <span>Start</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button
            @click="toggleMobileMenu"
            class="text-gray-700 transition-colors duration-200 hover:text-red-500"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                :d="mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200 sm:px-3">
          <Link
            href="/"
            class="block px-3 py-2 font-medium text-red-500 hover:text-red-600"
            :class="{ 'text-red-500': $page.url === '/' }"
            @click="closeMobileMenu"
          >
            Home
          </Link>

          <div class="pt-4 pb-2 border-t border-gray-200">
            <Link
              href="/login"
              class="block px-3 py-2 font-medium text-gray-700 hover:text-red-500"
              @click="closeMobileMenu"
            >
              Login
            </Link>
            <Link
              href="/start"
              class="block px-3 py-2 mt-2 font-medium text-center text-white bg-gray-800 rounded-md hover:bg-gray-900"
              @click="closeMobileMenu"
            >
              Start
            </Link>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { Link } from '@inertiajs/vue3'

export default {
  name: 'MainHeader',
  components: {
    Link
  },
  data() {
    return {
      mobileMenuOpen: false
    }
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false
    }
  }
}
</script>
