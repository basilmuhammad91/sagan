// Login.vue - Inertia page for login
<template>
  <div class="min-h-screen flex flex-col justify-center items-center bg-gray-100">
    <div class="w-full max-w-md p-8 bg-white rounded shadow">
      <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
      <form @submit.prevent="submit">
        <div class="mb-4">
          <label class="block mb-1 font-semibold" for="email">Email</label>
          <input v-model="form.email" id="email" type="email" class="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300" required autofocus />
        </div>
        <div class="mb-4">
          <label class="block mb-1 font-semibold" for="password">Password</label>
          <input v-model="form.password" id="password" type="password" class="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300" required />
        </div>
        <div class="mb-4 flex items-center">
          <input v-model="form.remember" id="remember" type="checkbox" class="mr-2" />
          <label for="remember">Remember Me</label>
        </div>
        <div v-if="form.errors" class="mb-4 text-red-600 text-sm">
          <div v-for="(error, key) in form.errors" :key="key">{{ error }}</div>
        </div>
        <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Login</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useForm } from '@inertiajs/vue3';

const form = useForm({
  email: '',
  password: '',
  remember: false,
});

function submit() {
  form.post(route('login'));
}
</script>
