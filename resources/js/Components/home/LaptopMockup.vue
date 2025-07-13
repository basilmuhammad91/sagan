<template>
  <div class="flex items-center justify-center py-20 bg-gray-100">
    <div class="relative">
      <!-- Laptop Frame Image -->
      <img
        :src="laptopFrameImage"
        alt="Laptop Frame"
        class="w-auto h-auto max-w-full"
      />

      <!-- Content overlay positioned over the laptop screen -->
      <div class="absolute top-[3.5%] left-[11.5%] w-[77%] h-[70%] overflow-hidden">
        <!-- Website Content -->
        <div class="h-full bg-white">
          <MainHeader />

          <div class="h-full px-6 py-8 overflow-y-auto">
            <h1 class="mb-8 text-4xl font-bold text-center text-gray-900">SAGANONLINE</h1>

            <div class="flex justify-center mb-8 space-x-4 text-sm">
              <button
                v-for="category in categories"
                :key="category"
                :class="[
                  'px-4 py-2 rounded-full font-medium transition-all duration-200',
                  activeCategory === category
                    ? 'bg-pink-500 text-white shadow-md'
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
                class="overflow-hidden shadow-lg cursor-pointer rounded-xl group"
              >
                <img
                  :src="image.src"
                  :alt="image.alt"
                  class="object-cover w-full h-32 transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Link } from '@inertiajs/vue3';
import MainHeader from '@/Components/layout/MainHeader.vue';

export default {
  name: 'LaptopMockup',
  components: {
    Link,
    MainHeader
  },
  props: {
    currentUrl: {
      type: String,
      default: 'https://saganonline.com'
    },
  },
  data() {
    return {
        laptopFrameImage: '/assets/images/laptop-frame.png',
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

<style scoped>
/* Additional custom styles if needed */
</style>
