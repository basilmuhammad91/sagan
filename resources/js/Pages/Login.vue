<template>
  <div class="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <div>
        <h2 class="mt-6 text-3xl font-extrabold text-center text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="submit">
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="email" class="sr-only">Email address</label>
            <input
              id="email"
              v-model="form.email"
              name="email"
              type="email"
              required
              class="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
            <div v-if="form.errors.email" class="mt-1 text-sm text-red-500">
              {{ form.errors.email }}
            </div>
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              v-model="form.password"
              name="password"
              type="password"
              required
              class="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
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
              class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label for="remember" class="block ml-2 text-sm text-gray-900">
              Remember me
            </label>
          </div>

          <div class="text-sm">
            <Link
              :href="route('password.request')"
              class="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Forgot your password?
            </Link>
          </div>
        </div>

        <div>
          <button
            type="submit"
            :disabled="form.processing"
            class="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
          >
            {{ form.processing ? 'Signing in...' : 'Sign in' }}
          </button>
        </div>

        <div class="text-center">
          <Link
            :href="route('register')"
            class="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Don't have an account? Sign up
          </Link>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useForm } from '@inertiajs/vue3'
import { Link } from '@inertiajs/vue3'

// Simple route helper
const route = (name) => {
  const routes = {
    'login': '/login',
    'register': '/register',
    'password.request': '/password/reset',
    'password.reset': '/password/reset',
    'dashboard': '/dashboard'
  }
  return routes[name] || '/'
}

const form = useForm({
  email: '',
  password: '',
  remember: false
})

const submit = () => {
  this.$inertia.post(route('login'))
}
</script>
