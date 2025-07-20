<template>
    <div :class="['flex items-center justify-center py-5', comingSoon ? 'bg-pink-100' : 'bg-white']">
        <div class="relative">
            <!-- Mobile Frame Image -->
            <img :src="mobileFrameImage" alt="Mobile Frame" class="w-full h-auto max-w-xs mx-auto" />

            <!-- Screen Overlay positioned inside the frame -->
            <div class="absolute overflow-hidden bg-white rounded-3xl" :style="{
                top: '5%',
                left: '8.5%',
                width: '82%',
                height: '90%',
            }">
                <div class="h-full px-4 py-6 overflow-y-auto">

                    <h1 class="mb-4 text-xl font-bold text-center text-gray-900 font-space-grotesk">SAGANONLINE</h1>
                    <hr class="mb-4 border-gray-300" />

                    <!-- Horizontally scrollable categories -->
                    <div class="flex gap-3 mb-4 overflow-x-auto whitespace-nowrap no-scrollbar">
                        <button v-for="category in categories" :key="category" @click="activeCategory = category"
                            :class="[
                                'font-space-grotesk px-3 py-1 border-b-2 text-sm flex-shrink-0',
                                activeCategory === category
                                    ? 'text-pink-500 border-pink-500'
                                    : 'text-gray-600 border-transparent hover:text-gray-800'
                            ]">
                            {{ category }}
                        </button>
                    </div>

                    <!-- Images: One per row -->
                    <div class="space-y-4">
                        <div v-for="(image, index) in images" :key="index"
                            class="overflow-hidden rounded-lg shadow-md cursor-pointer group">
                            <img :src="image.src" :alt="image.alt"
                                class="object-cover w-full h-40 transition-transform duration-300 group-hover:scale-105"
                                loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Link } from '@inertiajs/vue3'
import MainHeader from '@/Components/layout/MainHeader.vue'

export default {
    name: 'MobileMockup',
    components: {
        Link,
        MainHeader
    },
    props: {
        currentUrl: {
            type: String,
            default: 'https://saganonline.com'
        }
    },
    data() {
        return {
            mobileFrameImage: '/assets/images/mobile-frame.png',
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
        }
    }
}
</script>

<style scoped>
/* Hide scroll bar in WebKit */
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

/* Hide scroll bar in Firefox and IE */
.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
