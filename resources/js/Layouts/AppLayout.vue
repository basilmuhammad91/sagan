<template>
  <div>
    <MainHeader />
    <div class="p-6">
      <slot />
    </div>
    <MainFooter />
  </div>
</template>

<script setup>
import MainHeader from '@/Components/layout/MainHeader.vue'
import MainFooter from '@/Components/layout/MainFooter.vue'
</script>
