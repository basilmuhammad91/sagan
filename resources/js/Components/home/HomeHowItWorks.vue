<template>
  <section class="px-4 py-12 bg-secondary">
    <!-- Toggle Buttons -->
    <div class="flex justify-center mb-8">
      <div class="inline-flex bg-white border rounded-full shadow-sm">
        <button
          @click="mode = 'host'"
          :class="[
            'px-6 py-2 text-sm font-semibold rounded-full focus:outline-none',
            mode === 'host' ? 'bg-primary text-white' : 'text-gray-600 hover:text-primary'
          ]"
        >
          HOST
        </button>
        <button
          @click="mode = 'guest'"
          :class="[
            'px-6 py-2 text-sm font-semibold rounded-full focus:outline-none',
            mode === 'guest' ? 'bg-primary text-white' : 'text-gray-600 hover:text-primary'
          ]"
        >
          GUEST
        </button>
      </div>
    </div>

    <!-- Title and Subtitle -->
    <div class="mb-12 text-center">
      <h2 class="text-2xl font-bold text-gray-900 sm:text-3xl">HOW IT WORKS</h2>
      <p class="mt-2 text-sm text-gray-700 sm:text-base">
        Follow these 3 simple steps and start receiving cash <br />
        for your life’s big moment
      </p>
    </div>

    <!-- Cards Section -->
    <div class="grid max-w-5xl gap-6 px-4 mx-auto sm:grid-cols-3">
      <template v-if="mode === 'host'">
        <div
          v-for="(step, i) in hostSteps"
          :key="'host-' + i"
          class="flex flex-col items-center p-6 bg-white border rounded-lg"
        >
          <component :is="step.icon" class="w-12 h-12 mb-4 text-gray-800" />
          <h3 class="text-base font-bold text-center text-gray-900" v-html="step.title" />
          <p class="mt-2 text-sm text-center text-gray-700">{{ step.description }}</p>
        </div>
      </template>

      <template v-else>
        <div
          v-for="(step, i) in guestSteps"
          :key="'guest-' + i"
          class="flex flex-col items-center p-6 bg-white border rounded-lg"
        >
          <component :is="step.icon" class="w-12 h-12 mb-4 text-gray-800" />
          <h3 class="text-base font-bold text-center text-gray-900" v-html="step.title" />
          <p class="mt-2 text-sm text-center text-gray-700">{{ step.description }}</p>
        </div>
      </template>
    </div>

    <!-- Bottom Timeline Diamond -->
    <div class="flex justify-center mt-12">
      <div class="relative w-full max-w-5xl px-6">
        <div class="w-full h-1 bg-pink-200 rounded-full"></div>
        <div
          class="absolute w-4 h-4 transform rotate-45 -translate-x-1/2 rounded-sm bg-primary left-1/2 -top-2"
        ></div>
      </div>
    </div>
  </section>
</template>

<script>
import {
  Calendar,
  UserPlus,
  Gift,
  Search,
  BadgeCheck,
  DollarSign,
} from 'lucide-vue-next';

export default {
  name: 'HowItWorksSection',
  components: {
    Calendar,
    UserPlus,
    Gift,
    Search,
    BadgeCheck,
    DollarSign,
  },
  data() {
    return {
      mode: 'host',
      hostSteps: [
        {
          icon: 'Calendar',
          title: 'CREATE AN EVENT',
          description: 'Set up a cash gift fund for any occasion.',
        },
        {
          icon: 'UserPlus',
          title: 'INVITE FAMILY <br /> & FRIENDS',
          description: 'Share your event link via WhatsApp, email, or social media.',
        },
        {
          icon: 'DollarSign',
          title: 'RECEIVE CASH GIFTS',
          description: 'Loved ones contribute securely, and funds are transferred to your account.',
        },
      ],
      guestSteps: [
        {
          icon: 'Search',
          title: 'FIND THE EVENT',
          description: 'Get the event link via invite or search.',
        },
        {
          icon: 'Gift',
          title: 'SEND A GIFT',
          description: 'Contribute easily via card or bank transfer.',
        },
        {
          icon: 'BadgeCheck',
          title: 'GIFT DELIVERED',
          description: 'Host is notified, and your gift is secure.',
        },
      ],
    };
  },
};
</script>


<style scoped>
/* Extend Tailwind for primary and secondary if not already configured */
</style>
