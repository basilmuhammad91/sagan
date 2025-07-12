<template>
  <section class="px-4 py-12 bg-pink-50">
    <!-- Toggle Buttons -->
    <div class="flex justify-center mb-8">
      <div class="inline-flex bg-white border rounded-full shadow-sm">
        <button
          @click="mode = 'host'"
          :class="[
            'px-6 py-2 text-sm font-semibold rounded-full focus:outline-none',
            mode === 'host' ? 'bg-pink-500 text-white' : 'text-gray-600 hover:text-pink-500'
          ]"
        >
          HOST
        </button>
        <button
          @click="mode = 'guest'"
          :class="[
            'px-6 py-2 text-sm font-semibold rounded-full focus:outline-none',
            mode === 'guest' ? 'bg-pink-500 text-white' : 'text-gray-600 hover:text-pink-500'
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

    <!-- Cards Section (Host vs Guest) -->
    <div class="grid max-w-5xl gap-6 px-4 mx-auto sm:grid-cols-3">
      <!-- HOST view -->
      <template v-if="mode === 'host'">
        <div
          v-for="(step, i) in hostSteps"
          :key="'host-' + i"
          class="flex flex-col items-center p-6 bg-white border rounded-lg"
        >
          <img :src="step.icon" :alt="step.title" class="w-12 h-12 mb-4" />
          <h3 class="text-base font-bold text-center text-gray-900" v-html="step.title" />
          <p class="mt-2 text-sm text-center text-gray-700">{{ step.description }}</p>
        </div>
      </template>

      <!-- GUEST view -->
      <template v-else>
        <div
          v-for="(step, i) in guestSteps"
          :key="'guest-' + i"
          class="flex flex-col items-center p-6 bg-white border rounded-lg"
        >
          <img :src="step.icon" :alt="step.title" class="w-12 h-12 mb-4" />
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
          class="absolute w-4 h-4 transform rotate-45 -translate-x-1/2 bg-pink-500 rounded-sm left-1/2 -top-2"
        ></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HowItWorksSection',
  data() {
    return {
      mode: 'host',
      hostSteps: [
        {
          icon: 'https://img.icons8.com/ios-filled/100/calendar--v1.png',
          title: 'CREATE AN EVENT',
          description: 'Set up a cash gift fund for any occasion.',
        },
        {
          icon: 'https://img.icons8.com/ios-filled/100/add-user-group-man-man.png',
          title: 'INVITE FAMILY <br /> & FRIENDS',
          description: 'Share your event link via WhatsApp, email, or social media.',
        },
        {
          icon: 'https://img.icons8.com/ios-filled/100/money-envelope.png',
          title: 'RECEIVE CASH GIFTS',
          description: 'Loved ones contribute securely, and funds are transferred to your account.',
        },
      ],
      guestSteps: [
        {
          icon: 'https://img.icons8.com/ios-filled/100/search--v1.png',
          title: 'FIND THE EVENT',
          description: 'Get the event link via invite or search.',
        },
        {
          icon: 'https://img.icons8.com/ios-filled/100/gift--v1.png',
          title: 'SEND A GIFT',
          description: 'Contribute easily via card or bank transfer.',
        },
        {
          icon: 'https://img.icons8.com/ios-filled/100/checked.png',
          title: 'GIFT DELIVERED',
          description: 'Host is notified, and your gift is secure.',
        },
      ],
    };
  },
};
</script>

<style scoped></style>
