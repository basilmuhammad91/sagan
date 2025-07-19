<template>
    <section class="relative px-8 py-20 overflow-hidden bg-white sm:px-16 lg:px-32">
        <div class="max-w-4xl mx-auto">
            <div class="mb-16 text-center">
                <h2 class="text-4xl font-bold tracking-wide text-gray-900 home-heading">
                    FREQUENTLY ASKED QUESTIONS
                </h2>
            </div>

            <div class="">
                <div v-for="(faq, index) in faqs" :key="faq.id" class="rounded-lg">
                    <button @click="toggleFaq(index)"
                        class="flex items-center justify-between w-full px-6 py-5 text-left transition-colors duration-200 rounded-lg hover:bg-gray-100">
                        <span class="text-lg font-medium text-gray-900 font-space-grotesk">
                            {{ faq.question }}
                        </span>
                        <ArrowRight :class="{ 'rotate-45': faq.isOpen }"
                            class="font-space-grotesk w-7 h-7 text-[#FFB5C0] transition-transform duration-200 transform" />

                    </button>

                    <div v-if="faq.isOpen" class="px-6 pb-6 transition-all duration-300">
                        <p class="mt-3 leading-relaxed text-gray-600 answer font-space-grotesk">
                            {{ faq.answer }}
                        </p>
                    </div>

                    <!-- Pink divider except after last FAQ -->
                    <div v-if="index !== faqs.length - 1" class="h-px bg-primary"></div>
                </div>
            </div>

            <div v-if="showAll == true" class="mt-12 text-center">
                <button
                    class="font-medium text-gray-900 transition-colors duration-200 border-b border-gray-900 font-space-grotesk hover:text-pink-500 hover:border-pink-500">
                    View all FAQs
                </button>
            </div>
        </div>
    </section>
</template>

<script>
import { ArrowRight } from 'lucide-vue-next'

export default {
    name: 'FaqSection',
    props: ["showAll"],
    components: {
        ArrowRight,
    },
    data() {
        return {
            faqs: [
                {
                    id: 1,
                    question: 'What is SAGANonline?',
                    answer:
                        'SAGANonline is a digital platform that makes it easy to send and receive cash gifts for special occasions like weddings, birthdays, baby showers, and milestone celebrations.',
                    isOpen: true,
                },
                {
                    id: 2,
                    question: 'How does it work?',
                    answer:
                        'Our platform allows you to create gift collections, invite friends and family to contribute, and easily manage all contributions in one place. Recipients can withdraw funds directly to their bank account.',
                    isOpen: false,
                },
                {
                    id: 3,
                    question: 'Is it safe?',
                    answer:
                        'Yes, we use bank-level encryption and security measures to protect all transactions. Your financial information is never stored on our servers, and all payments are processed through secure, PCI-compliant payment processors.',
                    isOpen: false,
                },
                {
                    id: 4,
                    question: 'Do guests need an account to contribute?',
                    answer:
                        'No, guests can contribute to your gift collection without creating an account. They simply need the link you share with them to make a secure contribution using their credit card or bank account.',
                    isOpen: false,
                },
            ],
        }
    },
    methods: {
        toggleFaq(index) {
            this.faqs[index].isOpen = !this.faqs[index].isOpen
        },
    },
}
</script>

<style scoped>
.rotate-45 {
    transform: rotate(45deg);
}

.answer {
    color: #272727;
    font-weight: 500;
}
</style>
