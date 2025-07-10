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

      <!-- Image Gallery -->
      <div class="grid grid-cols-1 gap-4 mb-16 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="relative overflow-hidden transition-all duration-300 shadow-lg rounded-xl hover:shadow-2xl group"
          :class="getImageClass(index)"
        >
          <img
            :src="image.src"
            :alt="image.alt"
            class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
          <div class="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/20 to-transparent group-hover:opacity-100"></div>
        </div>
      </div>
    </main>

    <!-- Footer Section -->
    <footer class="py-12 border-t bg-white/70 backdrop-blur-sm border-pink-200/50">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-4">
          <!-- Logo Section -->
          <div class="flex flex-col items-center md:col-span-1 md:items-start">
            <div class="flex items-center mb-6">
              <div class="flex items-center justify-center w-10 h-10 mr-3 transform bg-pink-500 rounded-full rotate-12">
                <span class="text-lg font-bold text-white">★</span>
              </div>
              <div class="text-left">
                <span class="block text-2xl font-bold tracking-wide text-gray-800">SAGAN</span>
                <span class="block text-xs font-medium tracking-widest text-gray-500">ONLINE</span>
              </div>
            </div>
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
          src: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500&h=600&fit=crop',
          alt: 'Traditional celebration with colorful decorations and festive atmosphere'
        },
        {
          src: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=500&h=600&fit=crop',
          alt: 'Happy family celebrating with birthday cake and joyful moments'
        },
        {
          src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=500&h=600&fit=crop',
          alt: 'Couple gift exchange moment with wrapped presents'
        },
        {
          src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=500&h=600&fit=crop',
          alt: 'Wedding ceremony celebration with elegant decorations'
        },
        {
          src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=500&h=600&fit=crop',
          alt: 'Wedding ceremony celebration with elegant decorations'
        },
        {
          src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=500&h=600&fit=crop',
          alt: 'Wedding ceremony celebration with elegant decorations'
        },
        {
          src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=500&h=600&fit=crop',
          alt: 'Wedding ceremony celebration with elegant decorations'
        }
      ]
    }
  },
  methods: {
    getImageClass(index) {
      // Add varied heights to create a more dynamic gallery layout
      const classes = [
        'h-80 sm:h-96', // First image - taller
        'h-72 sm:h-80', // Second image - medium
        'h-76 sm:h-88', // Third image - medium-tall
        'h-72 sm:h-84'  // Fourth image - medium
      ]
      return classes[index] || 'h-72'
    }
  }
}
</script>
