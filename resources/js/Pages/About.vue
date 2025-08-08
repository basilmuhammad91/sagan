<template>
    <div>
        <AboutTradition />
        <AboutEvent />
        <TrustedSection />

    </div>
</template>

<script>
import AppLayout from '@/Layouts/AppLayout.vue'
import AboutTradition from '@/Components/about/AboutTradition.vue'
import TrustedSection from '@/Components/home/TrustedSection.vue'
import AboutEvent from '@/Components/about/AboutEvent.vue'

export default {
  layout: AppLayout,
    components: {
        AboutTradition,
        TrustedSection,
        AboutEvent
    },
}
</script>
