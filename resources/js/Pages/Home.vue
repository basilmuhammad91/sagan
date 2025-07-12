<template>
    <div>
        <!-- <div class="space-y-6 text-center">
            <h1 class="text-4xl font-bold">Welcome to Laravel</h1>

            <Link
                :href="route('login')"
                class="inline-block rounded-md bg-white px-5 py-2 text-gray-800 ring-1 ring-gray-300 transition hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF2D20] dark:bg-gray-800 dark:text-white dark:ring-gray-700 dark:hover:bg-gray-700"
            >
                Log in
            </Link>
        </div> -->

        <HomeTraditionHighlight />
        <HomeHowItWorks />
        <EventPromoSection />

    </div>
</template>

<script>
import { Link } from '@inertiajs/vue3'
import AppLayout from '@/Layouts/AppLayout.vue'
import HomeTraditionHighlight from '@/Components/home/HomeTraditionHighlight.vue'
import HomeHowItWorks from '@/Components/home/HomeHowItWorks.vue'
import EventPromoSection from '@/Components/home/EventPromoSection.vue'

export default {
  components: {
    Link,
    HomeTraditionHighlight,
    HomeHowItWorks,
    EventPromoSection
  },
  layout: AppLayout
}
</script>
