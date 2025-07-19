<template>
  <div class="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-pink-200">
    <main class="px-4 pt-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="mb-5 text-center">
        <h1 style="font-family: Cormorant Upright;"
          class="px-4 mb-8 text-4xl font-light leading-tight text-gray-800 md:text-5xl lg:text-6xl">
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
      <img
        v-for="(image, index) in images"
        :key="`${n}-${index}`"
        :src="image.src"
        :alt="image.alt"
        class="object-cover h-64 w-68 shrink-0"
      />
    </template>
  </div>
</div>

    <footer class="py-12 border-t backdrop-blur-sm bg-footer">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div class="flex flex-col items-center md:col-span-1 md:items-start">
            <img src="/assets/images/logo.png" alt="Sagan Logo" class="w-40">
          </div>
          <div class="grid grid-cols-1 gap-8 sm:grid-cols-3 md:col-span-3">
            <div>
              <h3 class="mb-4 text-lg font-semibold text-gray-800">Home</h3>
              <ul class="space-y-3 text-sm">
                <li><a href="#" class="text-gray-600 transition-colors duration-200 hover:text-pink-600">How it works</a></li>
                <li><a href="#" class="text-gray-600 transition-colors duration-200 hover:text-pink-600">Secure Payments</a></li>
                <li><a href="#" class="text-gray-600 transition-colors duration-200 hover:text-pink-600">Testimonial</a></li>
              </ul>
            </div>
            <div>
              <h3 class="mb-4 text-lg font-semibold text-gray-800">Company</h3>
              <ul class="space-y-3 text-sm">
                <li><a href="#" class="text-gray-600 transition-colors duration-200 hover:text-pink-600">Our Story</a></li>
                <li><a href="#" class="text-gray-600 transition-colors duration-200 hover:text-pink-600">Blogs</a></li>
              </ul>
            </div>
            <div>
              <h3 class="mb-4 text-lg font-semibold text-gray-800">Help</h3>
              <ul class="space-y-3 text-sm">
                <li><a href="#" class="text-gray-600 transition-colors duration-200 hover:text-pink-600">FAQs</a></li>
              </ul>
            </div>
          </div>
        </div>
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
</style>
