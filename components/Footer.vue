<template>
  <footer class="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
    <div class="container-custom">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <p class="text-sm">
          © {{ currentYear }} Marc Trösken. All rights reserved.
        </p>
        
        <div class="flex items-center gap-6">
          <a 
            v-for="social in socials" 
            :key="social.name"
            :href="social.url" 
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-white transition-colors"
            :aria-label="social.name"
          >
            {{ social.name }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()

const socials = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/marc-troesken' },
  { name: 'GitHub', url: 'https://github.com/MarcTroesken' },
]
</script>
