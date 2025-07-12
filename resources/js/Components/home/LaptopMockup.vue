<template>
  <div class="flex items-center justify-center min-h-screen p-8 bg-gray-100">
    <!-- Laptop Container -->
    <div class="relative">
      <!-- Laptop Screen -->
      <div class="p-4 bg-gray-800 shadow-2xl rounded-t-2xl">
        <!-- Screen Bezel -->
        <div class="p-1 bg-black rounded-lg">
          <!-- Actual Screen Content -->
          <div class="overflow-hidden bg-white rounded-lg"
               :style="{ width: screenWidth + 'px', height: screenHeight + 'px' }">


            <!-- Website Content -->
            <div class="h-full overflow-hidden bg-white">
              <!-- Navigation -->
              <nav class="px-8 py-4 bg-white border-b border-gray-200">
                <div class="flex items-center justify-between">
                  <!-- Logo -->
                  <div class="flex items-center space-x-2">
                    <div class="flex items-center justify-center w-8 h-8 bg-pink-500 rounded-full">
                      <span class="text-sm font-bold text-white">S</span>
                    </div>
                    <span class="text-xl font-bold">SAGAN</span>
                  </div>

                  <!-- Navigation Menu -->
                  <div class="hidden space-x-8 md:flex">
                    <a href="#" class="text-gray-700 hover:text-gray-900">Home</a>
                    <a href="#" class="text-gray-700 hover:text-gray-900">About Us</a>
                    <a href="#" class="text-gray-700 hover:text-gray-900">Pics</a>
                    <a href="#" class="text-gray-700 hover:text-gray-900">Login</a>
                  </div>

                  <!-- CTA Button -->
                  <button class="px-6 py-2 text-sm text-white bg-black rounded-full">
                    Get Started
                  </button>
                </div>
              </nav>

              <!-- Main Content -->
              <div class="px-8 py-12">
                <!-- Title -->
                <h1 class="mb-8 text-4xl font-bold text-center">SAGANONLINE</h1>

                <!-- Category Tabs -->
                <div class="flex justify-center mb-8 space-x-8">
                  <button
                    v-for="category in categories"
                    :key="category"
                    :class="[
                      'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                      activeCategory === category
                        ? 'bg-pink-500 text-white'
                        : 'text-gray-600 hover:text-gray-900'
                    ]"
                    @click="activeCategory = category"
                  >
                    {{ category }}
                  </button>
                </div>

                <!-- Image Gallery -->
                <div class="grid max-w-4xl grid-cols-3 gap-6 mx-auto">
                  <div
                    v-for="(image, index) in images"
                    :key="index"
                    class="overflow-hidden transition-shadow rounded-lg shadow-md cursor-pointer aspect-square hover:shadow-lg"
                  >
                    <img
                      :src="image.src"
                      :alt="image.alt"
                      class="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Laptop Base -->
      <div class="h-6 bg-gray-300 shadow-lg rounded-b-2xl">
        <div class="h-4 mx-2 bg-gray-400 rounded-b-2xl"></div>
      </div>

      <!-- Laptop Stand -->
      <div class="absolute w-32 h-4 transform -translate-x-1/2 bg-gray-400 rounded-full -bottom-2 left-1/2 opacity-30"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LaptopMockup',
  props: {
    currentUrl: {
      type: String,
      default: 'https://saganonline.com'
    },
    screenWidth: {
      type: Number,
      default: 800
    },
    screenHeight: {
      type: Number,
      default: 600
    }
  },
  data() {
    return {
      activeCategory: 'Wedding Fund',
      categories: [
        'Wedding Fund',
        'Shagun',
        'Eidiya',
        'Hongbao',
        'Salami',
        'Gift'
      ],
      images: [
        {
          src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop',
          alt: 'Traditional Wedding Ceremony'
        },
        {
          src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&h=400&fit=crop',
          alt: 'Modern Wedding Celebration'
        },
        {
          src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=400&fit=crop',
          alt: 'Outdoor Wedding'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
