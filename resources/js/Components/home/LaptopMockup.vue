<template>
  <div class="flex items-center justify-center py-20 bg-secondary">
    <div class="relative scale-90 md:scale-100">
      <!-- Laptop Screen -->
      <div class="p-4 bg-gray-900 shadow-2xl rounded-t-2xl">
        <div class="p-2 bg-black rounded-xl">
          <div
            class="overflow-hidden bg-white rounded-lg w-[700px] h-[400px]"
          >
            <!-- Browser Top Bar -->
            <div class="flex items-center px-4 py-2 space-x-3 border-b border-gray-200 bg-gray-50">
              <div class="flex space-x-2">
                <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div class="flex-1 ml-6">
                <div class="bg-white rounded-lg px-4 py-1.5 text-sm text-gray-600 border shadow-sm">
                  {{ currentUrl }}
                </div>
              </div>
            </div>

            <!-- Website Content -->
            <div class="bg-white">
              <nav class="px-6 py-3 border-b border-gray-100">
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-3">
                    <div class="flex items-center justify-center bg-pink-500 rounded-full w-9 h-9">
                      <span class="text-lg font-bold text-white">S</span>
                    </div>
                    <span class="text-lg font-bold text-gray-800">SAGAN</span>
                  </div>
                  <div class="flex space-x-6 text-sm">
                    <a href="#" class="text-gray-700 hover:text-gray-900">Home</a>
                    <a href="#" class="text-gray-700 hover:text-gray-900">About Us</a>
                    <a href="#" class="text-gray-700 hover:text-gray-900">Pics</a>
                    <a href="#" class="text-gray-700 hover:text-gray-900">Login</a>
                  </div>
                  <button class="px-5 py-2 text-sm text-white bg-black rounded-full hover:bg-gray-800">
                    Get Started
                  </button>
                </div>
              </nav>

              <div class="px-6 py-8">
                <h1 class="mb-8 text-4xl font-bold text-center text-gray-900">SAGANONLINE</h1>
                <div class="flex justify-center mb-8 space-x-4 text-sm">
                  <button
                    v-for="category in categories"
                    :key="category"
                    :class="[
                      'px-4 py-2 rounded-full font-medium transition',
                      activeCategory === category
                        ? 'bg-pink-500 text-white shadow'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    ]"
                    @click="activeCategory = category"
                  >
                    {{ category }}
                  </button>
                </div>

                <div class="grid max-w-4xl grid-cols-3 gap-4 mx-auto">
                  <div
                    v-for="(image, index) in images"
                    :key="index"
                    class="overflow-hidden shadow rounded-xl group"
                  >
                    <img
                      :src="image.src"
                      :alt="image.alt"
                      class="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Laptop Base -->
      <div class="bg-gray-300 shadow-2xl rounded-b-2xl w-[700px] h-[30px]">
        <div class="mx-4 bg-gray-400 shadow-inner rounded-b-2xl h-[24px] mt-1">
          <div class="flex justify-center pt-1.5">
            <div class="w-16 h-2.5 bg-gray-500 rounded-lg opacity-60"></div>
          </div>
        </div>
      </div>

      <!-- Laptop Shadow -->
      <div class="absolute h-5 transform -translate-x-1/2 bg-gray-400 rounded-full w-36 -bottom-4 left-1/2 opacity-20 blur-md"></div>
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
      categories: ['Wedding Fund', 'Shagun', 'Eidiya', 'Hongbao', 'Salami', 'Gift'],
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
    };
  }
};
</script>

<style scoped></style>
