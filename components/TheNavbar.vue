<script setup lang="ts">
import { ref } from 'vue'

const navLinks = [
  { href: '#expertise', label: 'Expertise' },
  { href: '#career', label: 'Career' },
  { href: '#contact', label: 'Contact' },
]

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 px-8 lg:px-16 py-6 flex justify-between items-center bg-bg-primary/80 backdrop-blur-xl border-b border-border transition-all duration-300">
    <div class="flex items-center gap-3 font-display font-bold text-xl tracking-tight">
      <div class="w-9 h-9 bg-gradient-gold rounded-lg flex items-center justify-center font-extrabold text-bg-primary text-sm">
        MT
      </div>
      <span class="hidden sm:inline">Marc Trösken</span>
      <span class="sm:hidden">MT</span>
    </div>

    <ul class="hidden md:flex gap-12">
      <li v-for="link in navLinks" :key="link.href">
        <a :href="link.href" class="nav-link">{{ link.label }}</a>
      </li>
    </ul>

    <div class="flex items-center gap-4">
      <a
        href="https://linkedin.com/in/marc-troesken"
        target="_blank"
        rel="noopener noreferrer"
        class="hidden sm:block px-6 py-3 rounded-full text-sm font-medium border border-border hover:bg-accent hover:border-accent hover:text-bg-primary transition-all duration-300"
      >
        Let's Connect
      </a>

      <button
        type="button"
        class="md:hidden p-2 text-text-primary"
        aria-label="Open menu"
        @click="toggleMenu"
      >
        <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </nav>

  <div
    v-if="isMenuOpen"
    class="fixed inset-0 z-40 bg-bg-primary/95 backdrop-blur-xl pt-24 px-8 md:hidden"
  >
    <ul class="flex flex-col gap-6">
      <li v-for="link in navLinks" :key="link.href">
        <a
          :href="link.href"
          class="block text-2xl font-medium text-text-primary hover:text-accent transition-colors"
          @click="closeMenu"
        >
          {{ link.label }}
        </a>
      </li>
      <li class="pt-4 border-t border-border">
        <a
          href="https://linkedin.com/in/marc-troesken"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 text-accent font-medium"
          @click="closeMenu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          LinkedIn
        </a>
      </li>
    </ul>
  </div>
</template>
