<template>
    <section class="px-4 py-16 bg-white">
        <div class="flex flex-col-reverse items-center gap-12 mx-auto max-w-7xl lg:flex-row lg:gap-16">
            <!-- Video Section - Desktop -->
            <div v-if="!isMobile" class="flex justify-center w-full lg:w-1/2">
                <div class="p-10 shadow-lg bg-primary rounded-3xl">
                    <div class="relative w-[400px] h-[250px] m-auto mt-6 mb-6">
                        <img src="/assets/images/event-laptop.png" alt="Laptop Frame"
                            class="absolute inset-0 z-10 object-contain w-full h-full pointer-events-none">

                        <div
                            class="absolute top-[24px] left-[44px] w-[310px] h-[190px] overflow-hidden rounded mx-auto">
                            <video ref="videoPlayer" class="object-cover w-full h-full" :poster="videoPoster"
                                preload="metadata" @loadedmetadata="onVideoLoaded">
                                <source :src="videoSrc" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                            <div v-if="!isPlaying"
                                class="absolute inset-0 flex items-center justify-center bg-black cursor-pointer bg-opacity-20"
                                @click="togglePlay">
                                <button
                                    class="p-4 transition-all duration-300 bg-white rounded-full shadow-2xl hover:scale-110 hover:shadow-3xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 ml-1 text-primary"
                                        fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </button>
                            </div>

                            <div v-if="isPlaying"
                                class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                                <div class="flex items-center gap-4">
                                    <button @click="togglePlay" class="text-white transition-colors hover:text-primary">
                                        <svg v-if="isPlaying" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                                        </svg>
                                        <svg v-else class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </button>
                                    <div class="flex-1 h-2 bg-gray-600 rounded-full cursor-pointer"
                                        @click="handleProgressClick">
                                        <div class="h-2 transition-all duration-300 rounded-full bg-primary"
                                            :style="{ width: `${progress}%` }"></div>
                                    </div>
                                    <span class="text-sm text-white">{{ formatTime(currentTime) }} / {{
                                        formatTime(duration) }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Text Content -->
            <div class="w-full text-center lg:w-1/2 lg:text-left">
                <ul class="mb-8 space-y-4">
                    <li v-for="(feature, index) in features" :key="index"
                        :class="['flex items-start gap-3', isMobile ? 'justify-start' : 'justify-center lg:justify-start']">
                        <div class="w-6 h-6 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                            <CircleCheckBig size="40" class="w-4 h-4 font-medium text-primary" />
                        </div>
                        <span class="text-base font-medium leading-relaxed text-gray-700 md:text-lg">
                            {{ feature }}
                        </span>
                    </li>
                </ul>

                <h3
                    class="mb-8 text-3xl font-bold leading-tight md:text-4xl home-heading font-space-grotesk text-primary lg:text-5xl">
                    START YOUR<br />
                    EVENT TODAY!
                </h3>

                <div class="flex justify-center lg:justify-start">
                    <Link
                        class="cursor-pointer inline-flex w-fit items-center gap-1.5 px-6 md:px-8 py-2.5 text-sm rounded-full font-medium bg-[#000000] text-white transition-colors hover:bg-[#1f1f1f]">
                    <span>Share</span>
                    <ArrowUpRight class="w-4 h-4 text-white" />
                    </Link>
                </div>
            </div>

            <!-- Video Section - Mobile (DYNAMIC) -->
            <div v-if="isMobile" class="flex justify-center w-full mb-8">
                <div class="max-w-sm p-6 shadow-lg bg-primary rounded-3xl">
                    <div class="relative w-[280px] h-[180px] m-auto" ref="mobileContainer">
                        <!-- Mobile frame image -->
                        <img ref="mobileFrame" src="/assets/images/event-mobile.png" alt="Mobile Frame"
                            class="absolute inset-0 z-10 object-contain w-full h-full pointer-events-none"
                            @load="calculateMobileVideoArea">

                        <!-- Dynamic video container positioning -->
                        <div class="absolute overflow-hidden rounded-lg" :style="mobileVideoStyle">
                            <video ref="mobileVideoPlayer" class="object-cover w-full h-full" :poster="videoPoster"
                                preload="metadata" @loadedmetadata="onVideoLoaded">
                                <source :src="videoSrc" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                            <div v-if="!isPlaying"
                                class="absolute inset-0 flex items-center justify-center bg-black cursor-pointer bg-opacity-20"
                                @click="togglePlay">
                                <button
                                    class="p-3 transition-all duration-300 bg-white rounded-full shadow-2xl hover:scale-110 hover:shadow-3xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 ml-0.5 text-primary"
                                        fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </button>
                            </div>

                            <div v-if="isPlaying"
                                class="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                                <div class="flex items-center gap-2">
                                    <button @click="togglePlay" class="text-white transition-colors hover:text-primary">
                                        <svg v-if="isPlaying" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                                        </svg>
                                        <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </button>
                                    <div class="flex-1 h-1.5 bg-gray-600 rounded-full cursor-pointer"
                                        @click="handleProgressClick">
                                        <div class="h-1.5 transition-all duration-300 rounded-full bg-primary"
                                            :style="{ width: `${progress}%` }"></div>
                                    </div>
                                    <span class="text-xs text-white">{{ formatTime(currentTime) }} / {{
                                        formatTime(duration) }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { CircleCheckBig, ArrowUpRight } from 'lucide-vue-next'
export default {
    name: 'EventPromoSection',
    iconSize: 52,
    data() {
        return {
            features: [
                "A modern way to celebrate life's milestones",
                'Culturally meaningful and inclusive',
                'Safe, fast, and simple',
            ],
            isPlaying: false,
            currentTime: 0,
            duration: 0,
            progress: 0,
            videoSrc: '/assets/videos/event-promo.mp4',
            videoPoster: '/assets/images/event-promotion.png',
            isMobile: false,
            mobileVideoStyle: {
                top: '28px',
                left: '-10px',
                width: '295px',
                height: '125px'
            }
        };
    },
    components: {
        CircleCheckBig,
        ArrowUpRight
    },
    mounted() {
        this.checkMobile();
        window.addEventListener('resize', this.checkMobile);
        window.addEventListener('resize', this.handleResize);

        // Setup video events
        this.$nextTick(() => {
            const videoPlayer = this.isMobile ? this.$refs.mobileVideoPlayer : this.$refs.videoPlayer;
            if (videoPlayer) {
                videoPlayer.addEventListener('timeupdate', this.updateProgress);
                videoPlayer.addEventListener('ended', this.onVideoEnded);
                videoPlayer.addEventListener('play', this.onVideoPlay);
                videoPlayer.addEventListener('pause', this.onVideoPause);
            }
        });
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.checkMobile);
        window.removeEventListener('resize', this.handleResize);

        const videoPlayer = this.isMobile ? this.$refs.mobileVideoPlayer : this.$refs.videoPlayer;
        if (videoPlayer) {
            videoPlayer.removeEventListener('timeupdate', this.updateProgress);
            videoPlayer.removeEventListener('ended', this.onVideoEnded);
            videoPlayer.removeEventListener('play', this.onVideoPlay);
            videoPlayer.removeEventListener('pause', this.onVideoPause);
        }
    },
    methods: {
        checkMobile() {
            this.isMobile = window.innerWidth < 1024; // Using lg breakpoint
        },
        handleResize() {
            if (this.isMobile) {
                this.$nextTick(() => {
                    this.calculateMobileVideoArea();
                });
            }
        },
        calculateMobileVideoArea() {
            if (!this.$refs.mobileFrame || !this.$refs.mobileContainer) return;

            const container = this.$refs.mobileContainer;
            const containerRect = container.getBoundingClientRect();

            // Base dimensions for the mobile frame container
            const baseWidth = 280;
            const baseHeight = 180;

            // Current container dimensions
            const currentWidth = containerRect.width;
            const currentHeight = containerRect.height;

            // Calculate scale factors
            const scaleX = currentWidth / baseWidth;
            const scaleY = currentHeight / baseHeight;

            // Base video positioning (your original values)
            const baseVideoConfig = {
                top: 28,
                left: -10,
                width: 295,
                height: 125
            };

            // Apply scaling
            this.mobileVideoStyle = {
                top: `${baseVideoConfig.top * scaleY}px`,
                left: `${baseVideoConfig.left * scaleX}px`,
                width: `${baseVideoConfig.width * scaleX}px`,
                height: `${baseVideoConfig.height * scaleY}px`
            };
        },
        togglePlay() {
            const video = this.isMobile ? this.$refs.mobileVideoPlayer : this.$refs.videoPlayer;
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        },
        onVideoPlay() {
            this.isPlaying = true;
        },
        onVideoPause() {
            this.isPlaying = false;
        },
        updateProgress() {
            const video = this.isMobile ? this.$refs.mobileVideoPlayer : this.$refs.videoPlayer;
            this.currentTime = video.currentTime;
            this.progress = (video.currentTime / video.duration) * 100;
        },
        onVideoLoaded() {
            const video = this.isMobile ? this.$refs.mobileVideoPlayer : this.$refs.videoPlayer;
            this.duration = video.duration;
        },
        onVideoEnded() {
            this.isPlaying = false;
            this.progress = 0;
            this.currentTime = 0;
        },
        handleProgressClick(event) {
            const progressBar = event.currentTarget;
            const rect = progressBar.getBoundingClientRect();
            const clickX = event.clientX - rect.left;
            const width = rect.width;
            const newTime = (clickX / width) * this.duration;
            const video = this.isMobile ? this.$refs.mobileVideoPlayer : this.$refs.videoPlayer;
            video.currentTime = newTime;
        },
        formatTime(seconds) {
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = Math.floor(seconds % 60);
            return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
        },
        handleShareClick() {
            console.log('Share button clicked');
        }
    },
};
</script>

<style scoped>
.text-secondary {
    color: var(--secondary-color, #6b7280);
}

.shadow-3xl {
    box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
}
</style>
