<template>
    <div>
        <Banner />
        <HomeTraditionHighlight />
        <HomeHowItWorks />
        <EventPromoSection />
        <Payment />
        <LaptopMockup />
        <TrustedSection />
        <FAQSection :showAll="true" />
    </div>
</template>

<script>
import { Link } from '@inertiajs/vue3'
import AppLayout from '@/Layouts/AppLayout.vue'
import HomeTraditionHighlight from '@/Components/home/HomeTraditionHighlight.vue'
import HomeHowItWorks from '@/Components/home/HomeHowItWorks.vue'
import EventPromoSection from '@/Components/home/EventPromoSection.vue'
import LaptopMockup from '@/Components/home/LaptopMockup.vue'
import Banner from '@/Components/home/Banner.vue'
import Payment from '@/Components/home/Payment.vue'
import TrustedSection from '@/Components/home/TrustedSection.vue'
import FAQSection from '@/Components/home/FAQSection.vue'

export default {
  components: {
    Link,
    HomeTraditionHighlight,
    HomeHowItWorks,
    EventPromoSection,
    LaptopMockup,
    Banner,
    Payment,
    TrustedSection,
    FAQSection
  },
  layout: AppLayout
}
</script>
