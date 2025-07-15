<template>
  <section class="relative px-8 py-20 overflow-hidden bg-white sm:px-16 lg:px-32">
    <div class="max-w-4xl mx-auto">
      <div class="mb-16 text-center">
        <h2 class="text-4xl font-bold tracking-wide text-gray-900 home-heading">
          FREQUENTLY ASKED QUESTIONS
        </h2>
      </div>

      <div class="space-y-4">
        <div
          v-for="(faq, index) in faqs"
          :key="faq.id"
          class="rounded-lg bg-gray-50"
        >
          <button
            @click="toggleFaq(index)"
            class="flex items-center justify-between w-full px-6 py-5 text-left transition-colors duration-200 rounded-lg hover:bg-gray-100"
          >
            <span class="text-lg font-medium text-gray-900">
              {{ faq.question }}
            </span>
            <div class="flex-shrink-0 ml-4">
              <svg
                :class="{ 'rotate-90': faq.isOpen }"
                class="w-5 h-5 text-pink-400 transition-transform duration-200 transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>

          <div
            v-if="faq.isOpen"
            class="px-6 pb-6 transition-all duration-300"
          >
            <p class="mt-3 leading-relaxed text-gray-600">
              {{ faq.answer }}
            </p>
          </div>
        </div>
      </div>

      <div v-if="showAll == true" class="mt-12 text-center">
        <button class="font-medium text-gray-900 transition-colors duration-200 border-b border-gray-900 hover:text-pink-500 hover:border-pink-500">
          View all FAQs
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FaqSection',
  props: ["showAll"],
  data() {
    return {
      faqs: [
        {
          id: 1,
          question: 'What is SAGANonline?',
          answer: 'SAGANonline is a digital platform that makes it easy to send and receive cash gifts for special occasions like weddings, birthdays, baby showers, and milestone celebrations.',
          isOpen: true
        },
        {
          id: 2,
          question: 'How does it work?',
          answer: 'Our platform allows you to create gift collections, invite friends and family to contribute, and easily manage all contributions in one place. Recipients can withdraw funds directly to their bank account.',
          isOpen: false
        },
        {
          id: 3,
          question: 'Is it safe?',
          answer: 'Yes, we use bank-level encryption and security measures to protect all transactions. Your financial information is never stored on our servers, and all payments are processed through secure, PCI-compliant payment processors.',
          isOpen: false
        },
        {
          id: 4,
          question: 'Do guests need an account to contribute?',
          answer: 'No, guests can contribute to your gift collection without creating an account. They simply need the link you share with them to make a secure contribution using their credit card or bank account.',
          isOpen: false
        }
      ]
    }
  },
  methods: {
    toggleFaq(index) {
      this.faqs[index].isOpen = !this.faqs[index].isOpen
    }
  }
}
</script>

<style scoped>
</style>
