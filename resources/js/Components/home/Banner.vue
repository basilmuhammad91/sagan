<template>
    <div class="w-full bg-[#feb5c0] relative overflow-hidden">
        <div class="flex flex-col lg:flex-row items-stretch gap-0 mx-auto">

            <!-- Right Side - Image Collage (First on mobile, second on desktop) -->
            <div class="relative w-full lg:flex-1 h-64 sm:h-80 lg:h-auto order-1 lg:order-2">
                <img src="/assets/images/banner2.jpg" alt="Wedding ceremony with flower petals"
                    class="object-cover w-full h-full" />
            </div>

            <!-- Left Side - Text Content (Second on mobile, first on desktop) -->
            <div class="w-full lg:w-[45%] px-5 sm:px-8 lg:pl-20 z-10 flex flex-col justify-center py-12 sm:py-16 order-2 lg:order-1">
                <h1 class="mb-5 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-[#272727] font-bold leading-tight tracking-tight uppercase text-center lg:text-left">
                    SEND & RECEIVE CASH<br />
                    FOR LIFE'S BIG MOMENT
                </h1>
                <p class="max-w-md mb-8 text-sm sm:text-base leading-relaxed opacity-95 text-[#272727] mx-auto lg:mx-0 text-center lg:text-left">
                    Across cultures, giving cash is a cherished tradition—whether for weddings,
                    birthdays, baby showers, or just to show appreciation. SAGANonline makes it
                    seamless, secure, and meaningful.
                </p>
                <div class="flex justify-center lg:justify-start">
                    <Link href="/register"
                        class="inline-flex w-fit items-center gap-1.5 px-4 py-1.5 text-sm rounded-full font-medium bg-[#272727] text-white transition-colors hover:bg-[#1f1f1f]">
                        <span>Start</span>
                        <ArrowUpRight class="w-4 h-4 text-white" />
                    </Link>
                </div>
            </div>

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
    methods: {
        handleStartClick() {
            console.log('Start button clicked')
        }
    }
}
</script>
