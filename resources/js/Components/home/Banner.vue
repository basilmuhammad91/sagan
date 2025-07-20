<template>
    <div class="w-full bg-[#feb5c0] relative overflow-hidden">
        <!-- Slider Container -->
        <div class="relative h-full">
            <!-- Slide 1 - Image Slide -->
            <div class="inset-0 transition-transform duration-700 ease-in-out"
                :class="{ 'translate-x-0': currentSlide === 0, 'translate-x-full': currentSlide !== 0 }">
                <div class="flex flex-col items-stretch h-full gap-0 mx-auto lg:flex-row">
                    <!-- Right Side - Image -->
                    <div class="relative order-1 w-full h-64 lg:flex-1 sm:h-80 lg:h-auto lg:order-2">
                        <img src="/assets/images/banner-image.png" alt="Wedding ceremony with flower petals"
                            class="object-cover w-full h-full" />
                    </div>

                    <!-- Left Side - Text Content -->
                    <div
                        class="w-full lg:w-[45%] px-5 sm:px-8 lg:pl-20 z-10 flex flex-col justify-center py-12 sm:py-16 order-2 lg:order-1">
                        <h1
                            class="home-heading mb-5 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-[#272727] leading-tight tracking-tight uppercase text-center lg:text-left">
                            SEND & RECEIVE CASH<br />
                            FOR LIFE'S BIG MOMENT
                        </h1>
                        <p
                            class="font-bold font-space-grotesk max-w-md mb-8 text-sm sm:text-base leading-relaxed opacity-95 text-[#272727] mx-auto lg:mx-0 text-center lg:text-left">
                            Across cultures, giving cash is a cherished tradition—whether for weddings,
                            birthdays, baby showers, or just to show appreciation. SAGANonline makes it
                            seamless, secure, and meaningful.
                        </p>
                        <div class="flex justify-center lg:justify-start">
                            <Link href="/register"
                                class="inline-flex w-fit items-center gap-1.5 px-8 py-2.5 text-sm rounded-full font-medium bg-[#000000] text-white transition-colors hover:bg-[#1f1f1f]">
                            <span>Start</span>
                            <ArrowUpRight class="w-4 h-4 text-white" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Slide 2 - Video Slide -->
            <div class="absolute inset-0 transition-transform duration-700 ease-in-out"
                :class="{ 'translate-x-0': currentSlide === 1, '-translate-x-full': currentSlide !== 1 }">
                <div class="relative w-full h-full">
                    <!-- Video Background -->
                    <video ref="videoElement" :src="videoSrc" class="object-cover w-full h-full" muted loop autoplay
                        playsinline></video>

                    <!-- Video Overlay -->
                    <div class="absolute inset-0 bg-black bg-opacity-40"></div>

                    <!-- Text Content Over Video -->
                    <div class="absolute inset-0 flex items-center justify-center px-5 sm:px-8">
                        <div class="z-10 max-w-4xl text-center">
                            <h1
                                class="mb-5 text-2xl leading-tight tracking-tight text-white uppercase home-heading lg:text-4xl xl:text-6xl">
                                SEND & RECEIVE CASH FOR
                            </h1>
                            <h3 class="font-cormorant-upright text-2xl text-[#feb5c0] font-bold mb-2 lg:text-4xl xl:text-5xl">
                                Shagun
                            </h3>
                            <p
                                class="max-w-2xl mx-auto mb-8 text-sm font-bold leading-relaxed text-white font-space-grotesk sm:text-base lg:text-lg opacity-90">
                                Across cultures, giving cash is a cherished tradition
                            </p>
                            <div class="flex justify-center lg:justify-center">
                                <Link href="/register"
                                    class="inline-flex w-fit items-center gap-1.5 px-8 py-2.5 text-sm rounded-full font-medium bg-[#000000] text-white transition-colors hover:bg-[#1f1f1f]">
                                <span>Start</span>
                                <ArrowUpRight class="w-4 h-4 text-white" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Navigation Dots -->
            <div class="absolute z-20 flex space-x-2 transform -translate-x-1/2 bottom-6 left-1/2">
                <button v-for="(slide, index) in totalSlides" :key="index" @click="goToSlide(index)" :class="[
                    'w-2 h-2 rounded-full transition-all duration-300',
                    currentSlide === index
                        ? 'bg-white scale-125'
                        : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                ]"></button>
            </div>

            <!-- Navigation Arrows (Optional) -->
            <button @click="previousSlide"
                class="absolute z-20 p-2 text-white transition-all duration-300 transform -translate-y-1/2 bg-white rounded-full left-4 top-1/2 bg-opacity-20 hover:bg-opacity-30">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
            </button>

            <button @click="nextSlide"
                class="absolute z-20 p-2 text-white transition-all duration-300 transform -translate-y-1/2 bg-white rounded-full right-4 top-1/2 bg-opacity-20 hover:bg-opacity-30">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
import { Link } from '@inertiajs/vue3'
import { ArrowUpRight } from 'lucide-vue-next'

export default {
    name: 'CelebrationBanner',
    components: {
        Link,
        ArrowUpRight
    },
    data() {
        return {
            currentSlide: 0,
            totalSlides: 2,
            slideInterval: null,
            autoSlideDelay: 5000, // 5 seconds
            videoSrc: '/assets/videos/event-promo.mp4',
            isHovered: false
        }
    },
    mounted() {
        this.startAutoSlide()
        this.setupVideoHandling()
    },
    beforeUnmount() {
        this.stopAutoSlide()
    },
    methods: {
        startAutoSlide() {
            this.slideInterval = setInterval(() => {
                if (!this.isHovered) {
                    this.nextSlide()
                }
            }, this.autoSlideDelay)
        },
        stopAutoSlide() {
            if (this.slideInterval) {
                clearInterval(this.slideInterval)
                this.slideInterval = null
            }
        },
        nextSlide() {
            this.currentSlide = (this.currentSlide + 1) % this.totalSlides
            this.handleVideoPlayback()
        },
        previousSlide() {
            this.currentSlide = this.currentSlide === 0 ? this.totalSlides - 1 : this.currentSlide - 1
            this.handleVideoPlayback()
        },
        goToSlide(index) {
            this.currentSlide = index
            this.handleVideoPlayback()
            // Restart auto-slide timer
            this.stopAutoSlide()
            this.startAutoSlide()
        },
        handleVideoPlayback() {
            this.$nextTick(() => {
                const video = this.$refs.videoElement
                if (video) {
                    if (this.currentSlide === 1) {
                        video.play().catch(console.error)
                    } else {
                        video.pause()
                    }
                }
            })
        },
        setupVideoHandling() {
            // Pause auto-slide on hover
            this.$el.addEventListener('mouseenter', () => {
                this.isHovered = true
            })

            this.$el.addEventListener('mouseleave', () => {
                this.isHovered = false
            })
        },
        handleStartClick() {
            console.log('Start button clicked')
        }
    }
}
</script>

<style scoped>
.home-heading {
    font-weight: 700;
    letter-spacing: -0.02em;
}

/* Ensure smooth video transitions */
video {
    transition: opacity 0.3s ease-in-out;
}

/* Custom scrollbar for better aesthetics */
::-webkit-scrollbar {
    display: none;
}
</style>