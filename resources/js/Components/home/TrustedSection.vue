<template>
    <section class="px-8 py-20 bg-gray-50 sm:px-12 lg:px-16">
        <div class="mx-auto max-w-7xl">
            <div class="mb-12 text-center">
                <h2 class="text-3xl font-bold tracking-wide text-gray-900 home-heading">
                    THEY TRUSTED US
                </h2>
            </div>

            <div class="relative">
                <div class="overflow-hidden">
                    <div class="flex transition-transform duration-700 ease-in-out"
                        :style="{ transform: `translateX(${translateX}px)` }">
                        <div v-for="(testimonial, index) in testimonials" :key="testimonial.id"
                            class="flex-shrink-0 px-3" :style="{ width: `${cardWidth}px` }">
                            <div class="p-6 bg-white border border-pink-200 rounded-lg shadow-sm h-80">
                                <div class="flex items-center mb-4">
                                    <div v-if="testimonial.avatar" class="w-12 h-12 overflow-hidden rounded-full">
                                        <img :src="testimonial.avatar" :alt="testimonial.name"
                                            class="object-cover w-full h-full">
                                    </div>
                                    <div v-else
                                        class="flex items-center justify-center w-12 h-12 text-sm font-medium text-gray-400 bg-gray-200 rounded-full">
                                        {{ getInitials(testimonial.name) }}
                                    </div>
                                    <div class="ml-3">
                                        <h3 class="font-medium text-gray-900 font-space-grotesk">{{ testimonial.name }}</h3>
                                        <p class="text-sm text-gray-500 font-space-grotesk">{{ testimonial.company }}</p>
                                    </div>
                                </div>
                                <div class="flex mb-4">
                                    <span class="text-lg text-yellow-400">★★★★★</span>
                                </div>
                                <p class="text-sm leading-relaxed text-gray-600 font-space-grotesk">
                                    "{{ testimonial.text }}"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="absolute inset-y-0 left-0 z-10 w-32 pointer-events-none bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent">
                </div>
                <div
                    class="absolute inset-y-0 right-0 z-10 w-32 pointer-events-none bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent">
                </div>
            </div>

            <div class="flex justify-center mt-8 space-x-2">
                <div v-for="(dot, index) in totalDots" :key="index"
                    class="w-2 h-2 transition-colors duration-200 rounded-full cursor-pointer"
                    :class="index === currentDotIndex ? 'bg-gray-400' : 'bg-gray-300'" @click="goToSlide(index)"></div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'TestimonialsSection',
    data() {
        return {
            currentSlide: 0,
            translateX: 0,
            cardWidth: 300,
            containerWidth: 0,
            visibleCards: 4,
            autoSlideInterval: null,
            testimonials: [
                {
                    id: 1,
                    name: 'Jennifer',
                    company: 'Google',
                    avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=400&h=400&fit=crop&crop=face',
                    rating: 5,
                    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                    borderColor: 'border border-pink-200'
                },
                {
                    id: 2,
                    name: 'Maseeha Hadid',
                    company: 'Google',
                    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
                    rating: 5,
                    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                    borderColor: 'border border-pink-200'
                },
                {
                    id: 3,
                    name: 'Ennie Laren',
                    company: 'Google',
                    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
                    rating: 5,
                    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                    borderColor: 'border border-pink-200'
                },
                {
                    id: 4,
                    name: 'Karen',
                    company: 'Google',
                    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
                    rating: 5,
                    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                    borderColor: 'border border-pink-200'
                },
                {
                    id: 5,
                    name: 'John Smith',
                    company: 'Microsoft',
                    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
                    rating: 5,
                    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                    borderColor: 'border border-pink-200'
                },
                {
                    id: 6,
                    name: 'Sarah Wilson',
                    company: 'Apple',
                    avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=400&h=400&fit=crop&crop=face',
                    rating: 5,
                    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                    borderColor: 'border border-pink-200'
                },
                {
                    id: 7,
                    name: 'Mike Johnson',
                    company: 'Facebook',
                    avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400&h=400&fit=crop&crop=face',
                    rating: 5,
                    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                    borderColor: 'border border-pink-200'
                },
                {
                    id: 8,
                    name: 'Emily Davis',
                    company: 'Netflix',
                    avatar: 'https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?w=400&h=400&fit=crop&crop=face',
                    rating: 5,
                    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                    borderColor: 'border border-pink-200'
                }
            ],
        }
    },
    computed: {
        totalDots() {
            return Math.max(1, this.testimonials.length - this.visibleCards + 1);
        },
        currentDotIndex() {
            return Math.min(this.currentSlide, this.totalDots - 1);
        }
    },
    mounted() {
        this.calculateDimensions();
        window.addEventListener('resize', this.calculateDimensions);
        this.startAutoSlide();
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.calculateDimensions);
        this.stopAutoSlide();
    },
    methods: {
        calculateDimensions() {
            const width = window.innerWidth;

            if (width >= 1280) {
                this.visibleCards = 4;
                this.cardWidth = 300;
            } else if (width >= 1024) {
                this.visibleCards = 3;
                this.cardWidth = 320;
            } else if (width >= 640) {
                this.visibleCards = 2;
                this.cardWidth = 300;
            } else {
                this.visibleCards = 1;
                this.cardWidth = width - 48;
            }

            this.containerWidth = width;
            this.updateTranslate();
        },
        updateTranslate() {
            this.translateX = -this.currentSlide * this.cardWidth;
        },
        goToSlide(index) {
            this.currentSlide = Math.min(index, this.testimonials.length - this.visibleCards);
            this.updateTranslate();
            this.restartAutoSlide();
        },
        nextSlide() {
            const maxSlide = this.testimonials.length - this.visibleCards;
            this.currentSlide = this.currentSlide >= maxSlide ? 0 : this.currentSlide + 1;
            this.updateTranslate();
        },
        startAutoSlide() {
            this.autoSlideInterval = setInterval(() => {
                this.nextSlide();
            }, 3000);
        },
        stopAutoSlide() {
            if (this.autoSlideInterval) {
                clearInterval(this.autoSlideInterval);
            }
        },
        restartAutoSlide() {
            this.stopAutoSlide();
            this.startAutoSlide();
        },
        getInitials(name) {
            return name.charAt(0).toUpperCase();
        }
    }
}
</script>

<style scoped></style>
