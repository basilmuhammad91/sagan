<template>
  <div class="flex items-center justify-center py-20 bg-gray-100">
    <!-- Laptop Container with proper spacing -->
    <div class="relative">
      <!-- Laptop Screen -->
      <div class="p-6 bg-gray-900 shadow-2xl rounded-t-3xl">
        <!-- Screen Frame -->
        <div class="p-3 bg-black rounded-2xl">
          <!-- Screen Content -->
          <div class="overflow-hidden bg-white rounded-xl"
               style="width: 900px; height: 550px;">

            <!-- Browser Top Bar -->
            <div class="flex items-center px-4 py-2 space-x-3 border-b border-gray-200 bg-gray-50">
              <!-- Traffic Light Buttons -->
              <div class="flex space-x-2">
                <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>

              <!-- Address Bar -->
              <div class="flex-1 ml-6">
                <div class="bg-white rounded-lg px-4 py-1.5 text-sm text-gray-600 border shadow-sm">
                  {{ currentUrl }}
                </div>
              </div>
            </div>

            <!-- Website Content -->
            <div class="bg-white">
              <!-- Top Navigation -->
              <nav class="px-8 py-4 border-b border-gray-100">
                <div class="flex items-center justify-between">
                  <!-- Logo Section -->
                  <div class="flex items-center space-x-3">
                    <div class="flex items-center justify-center w-10 h-10 bg-pink-500 rounded-full">
                      <span class="text-lg font-bold text-white">S</span>
                    </div>
                    <span class="text-xl font-bold text-gray-800">SAGAN</span>
                  </div>

                  <!-- Navigation Links -->
                  <div class="flex space-x-8">
                    <a href="#" class="font-medium text-gray-700 hover:text-gray-900">Home</a>
                    <a href="#" class="font-medium text-gray-700 hover:text-gray-900">About Us</a>
                    <a href="#" class="font-medium text-gray-700 hover:text-gray-900">Pics</a>
                    <a href="#" class="font-medium text-gray-700 hover:text-gray-900">Login</a>
                  </div>

                  <!-- Get Started Button -->
                  <button class="bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                    Get Started
                  </button>
                </div>
              </nav>

              <!-- Main Content Area -->
              <div class="px-8 py-12">
                <!-- Main Title -->
                <h1 class="mb-12 text-5xl font-bold text-center text-gray-900">
                  SAGANONLINE
                </h1>

                <!-- Category Navigation -->
                <div class="flex justify-center mb-12 space-x-8">
                  <button
                    v-for="category in categories"
                    :key="category"
                    :class="[
                      'px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200',
                      activeCategory === category
                        ? 'bg-pink-500 text-white shadow-lg'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    ]"
                    @click="activeCategory = category"
                  >
                    {{ category }}
                  </button>
                </div>

                <!-- Image Gallery Grid -->
                <div class="grid max-w-5xl grid-cols-3 gap-8 mx-auto">
                  <div
                    v-for="(image, index) in images"
                    :key="index"
                    class="overflow-hidden transition-all duration-300 shadow-lg cursor-pointer aspect-square rounded-2xl hover:shadow-xl group"
                  >
                    <img
                      :src="image.src"
                      :alt="image.alt"
                      class="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Laptop Base/Keyboard Area -->
      <div class="bg-gray-300 shadow-2xl rounded-b-3xl" style="height: 40px;">
        <!-- Keyboard Surface -->
        <div class="mx-4 bg-gray-400 shadow-inner rounded-b-3xl" style="height: 32px; margin-top: 4px;">
          <!-- Trackpad -->
          <div class="flex justify-center pt-2">
            <div class="w-20 h-3 bg-gray-500 rounded-lg opacity-60"></div>
          </div>
        </div>
      </div>

      <!-- Laptop Stand/Base Shadow -->
      <div class="absolute w-40 h-6 transform -translate-x-1/2 bg-gray-400 rounded-full -bottom-4 left-1/2 opacity-20 blur-lg"></div>
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
          src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop&crop=faces',
          alt: 'Traditional Wedding Ceremony'
        },
        {
          src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&h=400&fit=crop&crop=faces',
          alt: 'Wedding Celebration'
        },
        {
          src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=400&fit=crop&crop=faces',
          alt: 'Wedding Photography'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Additional shadows and effects */
.laptop-container {
  filter: drop-shadow(0 25px 50px rgba(0, 0, 0, 0.15));
}
</style>
