<template>
    <div class="flex flex-col min-h-screen bg-pink-100">
        <!-- Header -->
        <header class="p-8">
            <div class="flex items-center">
                <img src="/assets/images/logo.png" alt="SAGAN" class="w-auto h-16">
            </div>
        </header>

        <!-- Main Content -->
        <main class="flex items-center justify-center flex-1 px-8 mb-16">
            <div class="w-full text-center">
                <!-- Main Heading -->
                <h1 class="mb-8 text-4xl font-bold leading-tight text-[#272727] md:text-5xl">
                    BE THE FIRST TO EXPERIENCE<br>
                    <span>SAGANONLINE!</span>
                </h1>

                <!-- Description -->
                <p class="max-w-lg px-4 mx-auto mb-8 text-lg leading-relaxed text-center text-[#272727]">
                    SaganOnline is redefining digital gift-giving, making every moment
                    more meaningful. Join our waiting list today and be among the first to
                    access exclusive features, early invites, and special perks.
                </p>

                <!-- Call to Action -->
                <p class="mb-12 font-medium text-[#272727]">
                    Sign up now and get ready to give and receive<br>
                    gifts in a whole new way!
                </p>

                <!-- Form -->
                <form @submit.prevent="handleSubmit" class="max-w-sm mx-auto space-y-4">
                    <input v-model="form.name" type="text" placeholder="Your Name"
                        class="w-full px-6 py-4 text-left placeholder-gray-400 transition-all bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
                        required>

                    <input v-model="form.email" type="email" placeholder="Enter your email"
                        class="w-full px-6 py-4 text-left placeholder-gray-400 transition-all bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
                        required>

                    <button type="submit" :disabled="isLoading"
                        class="w-full px-8 py-4 font-semibold text-white transition-all duration-200 transform bg-[#272727] rounded-full hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105">
                        <span v-if="!isLoading">I AM IN</span>
                        <span v-else>SUBMITTING...</span>
                    </button>
                </form>

                <!-- Success Message -->
                <div v-if="showSuccess"
                    class="p-4 mt-6 text-green-700 bg-green-100 border border-green-300 rounded-full">
                    Thank you for signing up! We'll be in touch soon.
                </div>
            </div>
        </main>

        <LaptopMockup v-if="!isMobile" :comingSoon="true" />
        <MobileMockup v-else :comingSoon="true" />

        <footer class="px-8 py-6 bg-[#FFB5C0]">
            <div class="container mx-auto">
                <!-- Logo and Brand -->
                <div class="flex items-center justify-center mb-4">
                    <div class="flex items-center">
                        <div>
                            <img src="/assets/images/logo.png" alt="SAGAN" class="w-auto h-20">
                        </div>
                    </div>
                </div>

                <!-- Copyright Text -->
                <div class="text-center">
                    <p class="text-md font-semibold text-[#272727]">
                        © 2024 - SAGAN Online | All Rights Reserved | Designed By
                        DixonSoft
                    </p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import LaptopMockup from '@/Components/home/LaptopMockup.vue';
import MobileMockup from '@/Components/home/MobileMockup.vue';
export default {
    name: 'SaganLandingPage',
    data() {
        return {
            form: {
                name: '',
                email: ''
            },
            isLoading: false,
            showSuccess: false
        }
    },
    components: {
        LaptopMockup,
        MobileMockup
    },
    methods: {
        async handleSubmit() {
            this.isLoading = true;

            try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1000));

                // Here you would typically send the data to your backend
                console.log('Form submitted:', this.form);

                // Show success message
                this.showSuccess = true;

                // Reset form
                this.form = {
                    name: '',
                    email: ''
                };

                // Hide success message after 5 seconds
                setTimeout(() => {
                    this.showSuccess = false;
                }, 5000);

            } catch (error) {
                console.error('Error submitting form:', error);
            } finally {
                this.isLoading = false;
            }
        }
    }
}
</script>

<style scoped>
/* Custom animations */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

main {
    animation: fadeIn 0.8s ease-out;
}

/* Smooth transitions */
input:focus {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

button:hover {
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

/* Responsive text */
@media (max-width: 640px) {
    h1 {
        font-size: 2.25rem;
        line-height: 1.2;
    }

    .description {
        font-size: 1rem;
    }
}
</style>