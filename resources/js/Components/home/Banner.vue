<template>
    <div class="w-full bg-[#feb5c0] relative overflow-hidden">
        <div class="flex items-stretch gap-0 mx-auto">

            <!-- Left Side - Text Content -->
            <div class="w-[45%] pl-20 z-10 flex flex-col justify-center flex-1 px-5 py-16">
                <h1 class="mb-5 text-4xl text-[#272727] font-bold leading-tight tracking-tight uppercase lg:text-5xl">
                    SEND & RECEIVE CASH<br />
                    FOR LIFE'S BIG MOMENT
                </h1>
                <p class="max-w-md mb-8 text-base leading-relaxed opacity-95 text-[#272727]">
                    Across cultures, giving cash is a cherished tradition—whether for weddings,
                    birthdays, baby showers, or just to show appreciation. SAGANonline makes it
                    seamless, secure, and meaningful.
                </p>
                <Link href="/register"
                    class="inline-flex w-fit items-center gap-1.5 px-4 py-1.5 text-sm rounded-full font-medium bg-[#272727] text-white transition-colors hover:bg-[#1f1f1f]">
                <span>Start</span>
                <ArrowUpRight class="w-4 h-4 text-white" />
                </Link>

            </div>

            <!-- Right Side - Image Collage -->
            <div class="relative flex-1">
                <div class="absolute inset-0">
                    <img src="/assets/images/banner2.jpg" alt="Wedding ceremony with flower petals"
                        class="object-cover w-full h-full" />
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

<style scoped>
/* Responsive layout adjustments */
@media (max-width: 1024px) {
    .flex {
        flex-direction: column;
        text-align: center;
        gap: 0;
    }

    .text-4xl {
        font-size: 2rem;
    }
}

@media (max-width: 768px) {
    .text-4xl {
        font-size: 1.5rem;
    }

    .text-base {
        font-size: 0.875rem;
    }
}
</style>
