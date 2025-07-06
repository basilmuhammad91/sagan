<template>
    <div class="min-h-screen bg-gray-100">
        <!-- Your welcome page content -->
        <div class="flex items-center justify-center min-h-screen">
            <div class="text-center">
                <h1 class="mb-8 text-4xl font-bold">Welcome to Laravel</h1>

                <!-- Use Inertia Link instead of regular anchor -->
                <Link
                    :href="route('login')"
                    class="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                >
                    Log in
                </Link>
            </div>
        </div>
    </div>
</template>

<script>
import { Link } from '@inertiajs/vue3'

export default {
    components: {
        Link
    }
}
</script>
