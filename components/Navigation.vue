<template>
  <nav class="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-200">
    <div class="container-custom py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2">
          <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
            MT
          </div>
          <span class="font-bold text-xl hidden sm:block">Marc Trösken</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-8">
          <NuxtLink 
            v-for="item in navItems" 
            :key="item.name"
            :to="item.href"
            class="text-gray-600 hover:text-gray-900 transition-colors"
          >
            {{ item.name }}
          </NuxtLink>
          <a 
            href="#contact" 
            class="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Contact
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2"
          aria-label="Toggle menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              v-if="!mobileMenuOpen"
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path 
              v-else
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div 
        v-if="mobileMenuOpen"
        class="md:hidden pt-4 pb-2 space-y-2"
      >
        <NuxtLink 
          v-for="item in navItems" 
          :key="item.name"
          :to="item.href"
          class="block py-2 text-gray-600 hover:text-gray-900"
          @click="mobileMenuOpen = false"
        >
          {{ item.name }}
        </NuxtLink>
        <a 
          href="#contact" 
          class="block bg-gray-900 text-white px-6 py-2 rounded-lg text-center"
          @click="mobileMenuOpen = false"
        >
          Contact
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false)

const navItems = [
  { name: 'Expertise', href: '#expertise' },
  { name: 'Leadership', href: '#leadership' }
]
</script>
