<template>
  <div>
    <Banner />
    <HomeTraditionHighlight />
    <HomeHowItWorks />
    <EventPromoSection />
    <Payment />
    <LaptopMockup v-if="!isMobile" />
    <MobileMockup v-if="isMobile" />
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
import MobileMockup from '@/Components/home/MobileMockup.vue'
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
    FAQSection,
    MobileMockup
  },
  layout: AppLayout,
  data() {
    return {
      isMobile: false
    }
  },
  mounted() {
    this.checkScreenSize()
    window.addEventListener('resize', this.checkScreenSize)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkScreenSize)
  },
  methods: {
    checkScreenSize() {
      this.isMobile = window.innerWidth <= 768
    }
  }
}
</script>
