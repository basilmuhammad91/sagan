<template>
  <section class="px-4 py-16 bg-white">
    <div class="flex flex-col-reverse items-center gap-10 mx-auto max-w-7xl md:flex-row">
      <!-- Video or Image Mockup -->
      <div class="flex justify-center w-full md:w-1/2">
        <div class="p-6 bg-pink-300 rounded-xl">
          <div class="relative">
            <img
              src="https://i.ibb.co/GRn3kKD/laptop-frame.png"
              alt="Laptop Preview"
              class="max-w-full"
            />
            <!-- Play Button Overlay -->
            <div class="absolute inset-0 flex items-center justify-center">
              <button class="p-3 transition bg-white rounded-full shadow-lg hover:scale-105">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 text-pink-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Text Content -->
      <div class="w-full md:w-1/2">
        <ul class="mb-6 space-y-4">
          <li class="flex items-start gap-2">
            <svg class="w-5 h-5 mt-1 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <span class="text-sm text-gray-800 sm:text-base">
              A modern way to celebrate life’s milestones
            </span>
          </li>
          <li class="flex items-start gap-2">
            <svg class="w-5 h-5 mt-1 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <span class="text-sm text-gray-800 sm:text-base">
              Culturally meaningful and inclusive
            </span>
          </li>
          <li class="flex items-start gap-2">
            <svg class="w-5 h-5 mt-1 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <span class="text-sm text-gray-800 sm:text-base">
              Safe, fast, and simple
            </span>
          </li>
        </ul>

        <h3 class="mb-4 text-2xl font-bold text-pink-600 sm:text-3xl">
          START YOUR EVENT TODAY!
        </h3>

        <button
          class="inline-flex items-center px-5 py-2 font-medium text-white transition bg-black rounded-full hover:bg-gray-800"
        >
          Share
          <svg
            class="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EventPromoSection',
};
</script>

<style scoped>
</style>
