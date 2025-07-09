<template>
  <div class="flex items-center justify-center min-h-screen px-4 py-12 bg-background sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <div class="text-center">
        <div class="flex justify-center mb-6">
          <div class="flex items-center justify-center w-12 h-12 rounded-full bg-primary">
            <svg class="text-white w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
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
