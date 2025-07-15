<template>
  <div class="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-pink-200">
    <!-- Main Content -->
    <main class="px-4 pt-16 pb-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <!-- Hero Text -->
      <div class="mb-12 text-center">
        <h1 style="font-family: Cormorant Upright;" class="px-4 mb-8 text-4xl font-light leading-tight text-gray-800 md:text-5xl lg:text-6xl">
          Join us in modernizing cash gift-giving—one<br class="hidden sm:block">
          celebration at a time.
        </h1>

        <!-- Social Media Icons -->
        <div class="flex justify-center mb-6 space-x-3">
          <a
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.url"
            class="flex items-center justify-center w-10 h-10 text-white transition-colors duration-200 transform bg-gray-900 rounded-full hover:bg-gray-700 hover:scale-110"
            :aria-label="social.name"
          >
            <i :class="social.icon" class="text-sm"></i>
          </a>
        </div>

        <!-- Social Handles -->
        <div class="mb-16 text-sm font-medium text-gray-700">
          <span class="mr-4">@Saganonline</span>
          <span>#Saganonline</span>
        </div>
      </div>
    </main>

    <!-- Auto-scrolling Image Slider -->
    <div class="w-full overflow-hidden slider-container">
      <div class="flex image-slider" style="width: 200%;">
        <!-- First set of images -->
        <div class="flex" style="width: 50%;">
          <img
            v-for="(image, index) in images"
            :key="`first-${index}`"
            :src="image.src"
            :alt="image.alt"
            class="object-cover w-1/5 h-64"
          >
        </div>
        <!-- Duplicate set for seamless loop -->
        <div class="flex" style="width: 50%;">
          <img
            v-for="(image, index) in images"
            :key="`second-${index}`"
            :src="image.src"
            :alt="image.alt"
            class="object-cover w-1/5 h-64"
          >
        </div>
        <!-- Duplicate set for seamless loop -->
        <div class="flex" style="width: 50%;">
          <img
            v-for="(image, index) in images"
            :key="`second-${index}`"
            :src="image.src"
            :alt="image.alt"
            class="object-cover w-1/5 h-64"
          >
        </div>
      </div>
    </div>

    <!-- Footer Section -->
    <footer class="py-12 border-t backdrop-blur-sm bg-footer">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-4">
          <!-- Logo Section -->
          <div class="flex flex-col items-center md:col-span-1 md:items-start">
           <img src="/assets/images/logo.png" alt="Sagan Logo" class="w-40">
          </div>

          <!-- Navigation Columns -->
          <div class="grid grid-cols-1 gap-8 sm:grid-cols-3 md:col-span-3">
            <!-- Home Column -->
            <div>
              <h3 class="mb-4 text-lg font-semibold text-gray-800">Home</h3>
              <ul class="space-y-3 text-sm">
                <li><a href="#" class="text-gray-600 transition-colors duration-200 hover:text-pink-600">How it works</a></li>
                <li><a href="#" class="text-gray-600 transition-colors duration-200 hover:text-pink-600">Secure Payments</a></li>
                <li><a href="#" class="text-gray-600 transition-colors duration-200 hover:text-pink-600">Testimonial</a></li>
              </ul>
            </div>

            <!-- Company Column -->
            <div>
              <h3 class="mb-4 text-lg font-semibold text-gray-800">Company</h3>
              <ul class="space-y-3 text-sm">
                <li><a href="#" class="text-gray-600 transition-colors duration-200 hover:text-pink-600">Our Story</a></li>
                <li><a href="#" class="text-gray-600 transition-colors duration-200 hover:text-pink-600">Blogs</a></li>
              </ul>
            </div>

            <!-- Help Column -->
            <div>
              <h3 class="mb-4 text-lg font-semibold text-gray-800">Help</h3>
              <ul class="space-y-3 text-sm">
                <li><a href="#" class="text-gray-600 transition-colors duration-200 hover:text-pink-600">FAQs</a></li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Copyright -->
        <div class="pt-8 mt-8 text-center border-t border-pink-200/50">
          <p class="text-sm text-gray-600">
            © 2025 - SAGANonline | All Rights Reserved | Designed By DevanceSoft
          </p>
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
        }
      ]
    }
  }
}
</script>

<style scoped>
.image-slider {
  animation: scroll 20s linear infinite;
}

@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}

.slider-container:hover .image-slider {
  animation-play-state: paused;
}
</style>
