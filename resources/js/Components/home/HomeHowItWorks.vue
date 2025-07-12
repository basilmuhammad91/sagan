<template>
  <section class="px-4 py-12 bg-pink-50 sm:px-6 lg:px-12">
    <div class="mx-auto text-center max-w-7xl">
      <!-- Toggle Buttons -->
      <div class="inline-flex mb-8 overflow-hidden bg-white border border-gray-200 rounded-full shadow-sm">
        <button
          @click="activeTab = 'host'"
          :class="[
            'px-6 py-2 font-semibold focus:outline-none',
            activeTab === 'host' ? 'bg-pink-500 text-white' : 'text-gray-700'
          ]"
        >
          HOST
        </button>
        <button
          @click="activeTab = 'guest'"
          :class="[
            'px-6 py-2 font-semibold focus:outline-none',
            activeTab === 'guest' ? 'bg-pink-500 text-white' : 'text-gray-700'
          ]"
        >
          GUEST
        </button>
      </div>

      <!-- Heading -->
      <h2 class="mb-2 text-2xl font-extrabold text-gray-800 sm:text-3xl">HOW IT WORKS</h2>
      <p class="mb-10 text-sm text-gray-600">
        Follow these 3 simple steps and start receiving cash for your life’s big moment
      </p>

      <!-- Steps Grid -->
      <div class="grid grid-cols-1 gap-6 text-center md:grid-cols-3">
        <div
          v-for="(step, index) in steps[activeTab]"
          :key="index"
          class="p-6 transition bg-white rounded-lg shadow-sm hover:shadow-md"
        >
          <div class="mb-4 text-4xl">
            <i :class="step.icon"></i>
          </div>
          <h3 class="mb-2 text-lg font-bold">{{ step.title }}</h3>
          <p class="text-sm text-gray-600">{{ step.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeHowItWorks',
  data() {
    return {
      activeTab: 'host',
      steps: {
        host: [
          {
            icon: 'fas fa-calendar-plus',
            title: 'CREATE AN EVENT',
            description: 'Set up a cash gift fund for any occasion.',
          },
          {
            icon: 'fas fa-user-plus',
            title: 'INVITE FAMILY & FRIENDS',
            description: 'Share your event link via WhatsApp, email, or social media.',
          },
          {
            icon: 'fas fa-gift',
            title: 'RECEIVE CASH GIFTS',
            description: 'Loved ones contribute securely, and funds are transferred to your account.',
          },
        ],
        guest: [
          {
            icon: 'fas fa-link',
            title: 'RECEIVE INVITE LINK',
            description: 'Get invited by a host to join a celebration fund.',
          },
          {
            icon: 'fas fa-hand-holding-heart',
            title: 'CONTRIBUTE WITH LOVE',
            description: 'Add a message and contribute a cash gift securely.',
          },
          {
            icon: 'fas fa-check-circle',
            title: 'GIFT DELIVERED',
            description: 'Your contribution is received instantly and safely.',
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
</style>
