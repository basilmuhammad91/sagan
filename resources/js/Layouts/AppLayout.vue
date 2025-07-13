<template>
  <div>
    <MainHeader />
    <div>
      <slot />
    </div>
    <MainFooter />
  </div>
</template>

<script setup>
import MainHeader from '@/Components/layout/MainHeader.vue'
import MainFooter from '@/Components/layout/MainFooter.vue'
</script>
