<template>
    <div :class="['flex items-center justify-center py-5', comingSoon ? 'bg-pink-100' : 'bg-white']">
        <div class="relative">
            <!-- Laptop Frame Image -->
            <img :src="laptopFrameImage" alt="Laptop Frame" class="w-auto h-auto max-w-full" />

            <!-- Content overlay positioned over the laptop screen -->
            <div class="absolute top-[3.5%] left-[11.5%] w-[77%] h-[70%] overflow-hidden">
                <!-- Website Content -->
                <div class="h-full bg-white">
                    <MainHeader />

                    <div class="h-full px-6 py-8 overflow-y-auto">
                        <h1 class="mb-8 text-4xl font-bold text-center text-gray-900 font-space-grotesk">SAGANONLINE</h1>
                        <hr class="mb-8 border-gray-300" />
                        <div class="flex justify-center mb-8 space-x-6 text-sm font-medium">
                            <button v-for="category in categories" :key="category" @click="activeCategory = category"
                                :class="[
                                    'font-space-grotesk px-2 pb-1 border-b-2 transition-colors duration-200',
                                    activeCategory === category
                                        ? 'text-pink-500 border-pink-500'
                                        : 'text-gray-600 border-transparent hover:text-gray-800'
                                ]">
                                {{ category }}
                            </button>
                        </div>


                        <div class="grid max-w-4xl grid-cols-3 gap-4 mx-auto">
                            <div v-for="(image, index) in images.sort(() => Math.random() - 0.5)" :key="index"
                                class="overflow-hidden shadow-lg cursor-pointer rounded-xl group">
                                <img :src="image.src" :alt="image.alt"
                                    class="object-cover w-full h-[200px] transition-transform duration-300 group-hover:scale-105"
                                    loading="lazy" />
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
        comingSoon: {
            type: Boolean,
            default: null
        },
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
