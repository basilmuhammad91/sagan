// Register.vue - Inertia page for registration
<template>
  <div class="min-h-screen flex flex-col justify-center items-center bg-gray-100">
    <div class="w-full max-w-md p-8 bg-white rounded shadow">
      <h2 class="text-2xl font-bold mb-6 text-center">Register</h2>
      <form @submit.prevent="submit">
        <div class="mb-4">
          <label class="block mb-1 font-semibold" for="name">Name</label>
          <input v-model="form.name" id="name" type="text" class="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300" required autofocus />
        </div>
        <div class="mb-4">
          <label class="block mb-1 font-semibold" for="email">Email</label>
          <input v-model="form.email" id="email" type="email" class="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300" required />
        </div>
        <div class="mb-4">
          <label class="block mb-1 font-semibold" for="password">Password</label>
          <input v-model="form.password" id="password" type="password" class="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300" required />
        </div>
        <div class="mb-4">
          <label class="block mb-1 font-semibold" for="password_confirmation">Confirm Password</label>
          <input v-model="form.password_confirmation" id="password_confirmation" type="password" class="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300" required />
        </div>
        <div v-if="form.errors" class="mb-4 text-red-600 text-sm">
          <div v-for="(error, key) in form.errors" :key="key">{{ error }}</div>
        </div>
        <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Register</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useForm } from '@inertiajs/vue3';

const form = useForm({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
});

function submit() {
  form.post(route('register'));
}
</script>
