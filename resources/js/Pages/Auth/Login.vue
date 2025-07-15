<template>
  <div class="flex items-center justify-center min-h-screen px-4 py-12 bg-background sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <div class="text-center">
        <div class="flex justify-center mb-6">
          <div class="flex items-center">
                    <Link href="/" class="flex items-center space-x-2">
                    <img src="/assets/images/logo.png" alt="Sagan Logo" class="w-40">
                    </Link>
                </div>
        </div>
        <h2 class="text-3xl font-bold text-text">Welcome back</h2>
        <p class="mt-2 text-sm text-gray-600">Sign in to your SAGAN account</p>
      </div>

      <form class="mt-8 space-y-6" @submit.prevent="submit">
        <div class="space-y-4">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
            <input
              id="email"
              v-model="form.email"
              name="email"
              type="email"
              required
              class="relative block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              placeholder="Enter your email"
            />
            <div v-if="form.errors.email" class="mt-1 text-sm text-red-500">
              {{ form.errors.email }}
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              v-model="form.password"
              name="password"
              type="password"
              required
              class="relative block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              placeholder="Enter your password"
            />
            <div v-if="form.errors.password" class="mt-1 text-sm text-red-500">
              {{ form.errors.password }}
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember"
              v-model="form.remember"
              name="remember"
              type="checkbox"
              class="w-4 h-4 border-gray-300 rounded text-primary focus:ring-primary"
            />
            <label for="remember" class="block ml-2 text-sm text-gray-900">
              Remember me
            </label>
          </div>

          <div class="text-sm">
            <Link
              href="/password/reset"
              class="font-medium transition-colors duration-200 text-primary hover:text-primary/80"
            >
              Forgot password?
            </Link>
          </div>
        </div>

        <div>
          <button
            type="submit"
            :disabled="form.processing"
            class="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white transition-colors duration-200 border border-transparent rounded-md bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ form.processing ? 'Signing in...' : 'Sign in' }}
          </button>
        </div>

        <div class="text-center">
          <Link
            href="/register"
            class="font-medium transition-colors duration-200 text-primary hover:text-primary/80"
          >
            Don't have an account? <span class="underline">Sign up</span>
          </Link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { useForm, Link } from '@inertiajs/vue3'

export default {
  name: 'Login',
  components: {
    Link
  },
  data() {
    return {
      form: useForm({
        email: 'basilmuhammad91@gmail.com',
        password: '',
        remember: false
      })
    }
  },
  methods: {
    submit() {
      this.form.post('/login')
    }
  }
}
</script>
