<template>
  <div>
    <MainHeader />
    <div class="p-6">
      <slot />
    </div>
  </div>
</template>

<script setup>
import MainHeader from '@/Components/layout/MainHeader.vue'
</script>
