<script setup lang="ts">
const currentYear = new Date().getFullYear()

const socialLinks = [
  { href: 'https://linkedin.com/in/marc-troesken', label: 'LinkedIn' },
  { href: 'https://github.com/MarcTroesken', label: 'GitHub' },
]
</script>

<template>
  <footer class="border-t border-border py-8 px-8 lg:px-16 flex flex-col sm:flex-row justify-between items-center gap-4">
    <div class="text-sm text-text-muted">
      © {{ currentYear }} Marc Trösken. All rights reserved.
    </div>
    <div class="flex gap-8">
      <a
        v-for="link in socialLinks"
        :key="link.label"
        :href="link.href"
        target="_blank"
        rel="noopener noreferrer"
        class="text-sm text-text-secondary hover:text-accent transition-colors duration-300"
      >
        {{ link.label }}
      </a>
      <NuxtLink
        to="/impressum"
        class="text-sm text-text-secondary hover:text-accent transition-colors duration-300"
      >
        Impressum
      </NuxtLink>
    </div>
  </footer>
</template>
