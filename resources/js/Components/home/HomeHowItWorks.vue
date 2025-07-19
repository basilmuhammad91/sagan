<template>
    <section class="px-4 py-12 bg-secondary">
        <!-- Toggle Buttons -->
        <div class="flex justify-center mb-8">
            <div class="inline-flex p-1 overflow-hidden bg-gray-100 border border-gray-200 rounded-full shadow-sm">
                <button @click="mode = 'host'" :class="[
                    'px-8 py-3 text-sm font-bold tracking-wide transition-all duration-200 rounded-full',
                    mode === 'host' ? 'bg-[#feb5c0] text-gray-800 shadow-sm' : 'text-gray-500 hover:text-gray-700 bg-transparent'
                ]">
                    HOST
                </button>
                <button @click="mode = 'guest'" :class="[
                    'px-8 py-3 text-sm font-bold tracking-wide transition-all duration-200 rounded-full',
                    mode === 'guest' ? 'bg-[#feb5c0] text-gray-800 shadow-sm' : 'text-gray-500 hover:text-gray-700 bg-transparent'
                ]">
                    GUEST
                </button>
            </div>
        </div>

        <!-- Title and Subtitle -->
        <div class="mb-12 text-center">
            <h2 class="mb-4 text-3xl font-extrabold tracking-wide text-gray-900 home-heading">HOW IT WORKS</h2>
            <p class="max-w-md mx-auto text-lg font-medium leading-relaxed text-gray-600">
                Follow these 3 simple steps and start receiving cash <br />
                for your life's big moment
            </p>
        </div>

        <!-- Cards Section -->
        <div class="grid max-w-4xl gap-6 px-4 mx-auto sm:grid-cols-1 md:grid-cols-3">
            <template v-if="mode === 'host'">
                <div v-for="(step, i) in hostSteps" :key="'host-' + i"
                    class="flex flex-col items-center p-8 transition-shadow duration-200 bg-white border border-gray-200 shadow-sm rounded-xl hover:shadow-md">
                    <div class="flex items-center justify-center w-16 h-16 mb-6">
                        <component :is="step.icon" class="w-12 h-12 text-gray-800 stroke-2" />
                    </div>
                    <h3 class="text-2xl font-extrabold leading-tight text-center text-gray-900 home-heading sm:text-3xl md:text-xl"
                        v-html="step.title" />
                    <p class="text-sm leading-relaxed text-center text-gray-600 font-space-grotesk">
                        {{ step.description }}
                    </p>
                </div>
            </template>

            <template v-else>
                <div v-for="(step, i) in guestSteps" :key="'guest-' + i"
                    class="flex flex-col items-center p-8 transition-shadow duration-200 bg-white border border-gray-200 shadow-sm rounded-xl hover:shadow-md">
                    <div class="flex items-center justify-center w-16 h-16 mb-6">
                        <component :is="step.icon" class="w-12 h-12 text-gray-800 stroke-2" />
                    </div>
                    <h3 class="mb-3 text-lg font-bold leading-tight tracking-wide text-center text-gray-900 home-heading"
                        v-html="step.title" />
                    <p class="text-sm leading-relaxed text-center text-gray-600">
                        {{ step.description }}
                    </p>
                </div>
            </template>
        </div>

        <!-- Bottom Timeline with Diamond -->
        <div class="flex justify-center mt-12">
            <div class="relative w-full max-w-xl px-8">
                <!-- Timeline line -->
                <div class="w-full h-1 rounded-full bg-rose-200"></div>
                <div class="absolute left-0 w-3 h-3 transform rotate-45 -translate-y-1/2 rounded-sm bg-primary top-1/2">
                </div>
                <div
                    class="absolute right-0 w-3 h-3 transform rotate-45 -translate-y-1/2 rounded-sm bg-primary top-1/2">
                </div>
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
                    title: 'INVITE FAMILY<br/>& FRIENDS',
                    description: 'Share your event link via WhatsApp, email, or social media.',
                },
                {
                    icon: 'DollarSign',
                    title: 'RECEIVE<br/>CASH GIFTS',
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
/* Custom styles if needed for your project */
</style>
