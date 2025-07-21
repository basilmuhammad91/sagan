<template>
  <section class="py-16 bg-white">
    <div class="container flex flex-col items-center gap-10 px-6 mx-auto md:px-12 md:flex-row">
      <!-- Left Text Content -->
      <div class="text-center md:w-1/2 md:text-left">
        <h4 class="font-space-grotesk mb-2 font-medium tracking-widest text-[#272727] uppercase text-md">
          About Us
        </h4>
        <h2 class="mb-4 text-3xl font-extrabold leading-tight text-[#272727] home-heading md:text-4xl">
          Honoring traditions, <br class="hidden md:block" />
          <span class="text-gray-800">digitally.</span>
        </h2>
        <p class="font-space-grotesk max-w-md mx-auto leading-relaxed text-[#272727] md:mx-0">
          At SAGANonline, we believe cash gifts are more than just money—they’re a gesture of love, generosity, and good fortune. Across cultures, gifting cash has been a time-honored tradition, from wedding contributions and baby blessings to group gifts and milestone celebrations.
        </p>
      </div>

      <!-- Right Image Content -->
      <div class="relative flex justify-center md:w-1/2">
        <!-- Actual Image -->
        <img
          src="/assets/images/about.jpg"
          alt="Gift Tradition"
          class="relative w-[500px] h-[400px] object-cover rounded-xl z-10"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutTradition',
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>
