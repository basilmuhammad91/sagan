<template>
    <FAQSection :showAll="true" />
</template>

<script>
import AppLayout from '@/Layouts/AppLayout.vue'
import FAQSection from '@/Components/home/FAQSection.vue'

export default {
  layout: AppLayout,
  components: {
    FAQSection
  }
}
</script>
