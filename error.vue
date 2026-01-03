<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="min-h-screen bg-stone-950 flex items-center justify-center px-6">
    <div class="text-center max-w-md">
      <h1 class="text-8xl font-bold text-stone-200 font-syne mb-4">
        {{ error.statusCode }}
      </h1>
      <h2 class="text-2xl font-semibold text-stone-300 mb-4">
        {{ error.statusCode === 404 ? 'Page Not Found' : 'Something went wrong' }}
      </h2>
      <p class="text-stone-400 mb-8">
        {{ error.message || 'An unexpected error occurred. Please try again.' }}
      </p>
      <button
        @click="handleError"
        class="px-6 py-3 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-lg transition-colors duration-200 font-medium"
      >
        Back to Home
      </button>
    </div>
  </div>
</template>
