<template>
    <section class="px-4 py-16 bg-white">
        <div class="flex flex-col-reverse items-center gap-12 mx-auto max-w-7xl lg:flex-row lg:gap-16">
            <!-- Video Section -->
            <div class="flex justify-center w-full lg:w-1/2">
                <div class="p-10 shadow-lg bg-primary rounded-3xl">

                    <div
                        class="relative w-[90%] max-w-md h-auto m-auto mt-6 mb-6 overflow-hidden bg-black shadow-xl rounded-xl">

                        <!-- Video Element -->
                        <video ref="videoPlayer" class="w-full h-auto max-w-lg" :poster="videoPoster" preload="metadata"
                            @loadedmetadata="onVideoLoaded">
                            <source :src="videoSrc" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        <!-- Play Button Overlay -->
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

                        <!-- Video Controls (when playing) -->
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
                                <div class="flex-1 h-2 bg-gray-600 rounded-full">
                                    <div class="h-2 transition-all duration-300 rounded-full bg-primary"
                                        :style="{ width: `${progress}%` }"></div>
                                </div>
                                <span class="text-sm text-white">{{ formatTime(currentTime) }} / {{ formatTime(duration)
                                    }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Text Content -->
            <div class="w-full text-center lg:w-1/2 lg:text-left">
                <ul class="mb-8 space-y-4">
                    <li class="flex items-start justify-center gap-3 lg:justify-start">
                        <div
                            class="w-6 h-6 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                            <CircleCheckBig :size="iconSize" class="w-4 h-4 text-primary" />
                        </div>
                        <span class="text-lg leading-relaxed text-gray-700">
                            A modern way to celebrate life's milestones
                        </span>
                    </li>

                    <li class="flex items-start justify-center gap-3 lg:justify-start">
                        <div class="w-6 h-6 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                            <CircleCheckBig class="w-4 h-4 text-primary" />
                        </div>
                        <span class="text-lg leading-relaxed text-gray-700">
                            Culturally meaningful and inclusive
                        </span>
                    </li>

                    <li class="flex items-start justify-center gap-3 lg:justify-start">
                        <div
                            class="w-6 h-6 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                            <CircleCheckBig class="w-4 h-4 text-primary" />
                        </div>
                        <span class="text-lg leading-relaxed text-gray-700">
                            Safe, fast, and simple
                        </span>
                    </li>
                </ul>

                <h3 class="mb-8 text-4xl font-bold leading-tight font-grotesk text-primary lg:text-5xl">
                    START YOUR<br />
                    EVENT TODAY!
                </h3>

              <Link
  class="inline-flex items-center gap-1.5 px-5 py-2 text-sm rounded-full font-medium bg-[#272727] text-white transition-colors hover:bg-[#1f1f1f]"
>
  <span>Start</span>
  <ArrowUpRight class="w-4 h-4" />
</Link>

            </div>
        </div>
    </section>
</template>

<script>
import { CircleCheckBig, ArrowUpRight } from 'lucide-vue-next'
export default {
    name: 'EventPromoSection',
    iconSize: 22,
    data() {
        return {
            isPlaying: false,
            currentTime: 0,
            duration: 0,
            progress: 0,
            videoSrc: '/assets/videos/event-promo.mp4',
            videoPoster: '/assets/images/event-promotion.png',
        };
    },
    components: {
        CircleCheckBig,
        ArrowUpRight
    },
    mounted() {
        if (this.$refs.videoPlayer) {
            this.$refs.videoPlayer.addEventListener('timeupdate', this.updateProgress);
            this.$refs.videoPlayer.addEventListener('ended', this.onVideoEnded);
        }
    },
    beforeUnmount() {
        if (this.$refs.videoPlayer) {
            this.$refs.videoPlayer.removeEventListener('timeupdate', this.updateProgress);
            this.$refs.videoPlayer.removeEventListener('ended', this.onVideoEnded);
        }
    },
    methods: {
        togglePlay() {
            const video = this.$refs.videoPlayer;
            if (video.paused) {
                video.play();
                this.isPlaying = true;
            } else {
                video.pause();
                this.isPlaying = false;
            }
        },
        updateProgress() {
            const video = this.$refs.videoPlayer;
            this.currentTime = video.currentTime;
            this.progress = (video.currentTime / video.duration) * 100;
        },
        onVideoLoaded() {
            this.duration = this.$refs.videoPlayer.duration;
        },
        onVideoEnded() {
            this.isPlaying = false;
            this.progress = 0;
            this.currentTime = 0;
        },
        formatTime(seconds) {
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = Math.floor(seconds % 60);
            return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
        },
        handleShareClick() {
            // Add your share functionality here
            console.log('Share button clicked');
        }
    },
};
</script>

<style scoped>
.text-primary {
    color: var(--primary-color, #ec4899);
}

.text-secondary {
    color: var(--secondary-color, #6b7280);
}

/* Custom shadow for better depth */
.shadow-3xl {
    box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
}
</style>
