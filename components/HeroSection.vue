<script setup lang="ts">
import profileImage from '~/assets/images/profile.jpg'

const stats = [
  { value: '20+', label: 'Engineers' },
  { value: '4+', label: 'Years Cloud' },
]
</script>

<template>
  <section class="min-h-[calc(100svh-80px)] grid lg:grid-cols-2 px-8 lg:px-16 pt-24 pb-8 lg:pt-28 lg:pb-12 gap-8 lg:gap-16 relative overflow-hidden">
    <!-- Background Glow -->
    <div class="absolute -top-1/2 -right-1/5 w-4/5 h-[150%] bg-[radial-gradient(ellipse_at_center,rgba(201,162,39,0.08)_0%,transparent_60%)] pointer-events-none" />

    <!-- Content -->
    <div class="flex flex-col justify-center z-10 text-center lg:text-left">
      <div class="section-tag opacity-0 animate-fade-up animation-delay-200">
        <span class="w-2 h-2 bg-accent rounded-full animate-pulse-dot" />
        Cloud Platform Leadership
      </div>

      <h1 class="font-serif text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tight mb-8 opacity-0 animate-fade-up animation-delay-400">
        Cloud Engineering<br>
        Leadership for<br>
        <span class="text-accent italic">Fintech</span>
      </h1>

      <p class="text-lg text-text-secondary max-w-lg leading-relaxed mb-8 lg:mb-12 opacity-0 animate-fade-up animation-delay-600 mx-auto lg:mx-0">
        I build and lead cloud platform teams in regulated fintech environments — focused on secure standards, fast delivery, and operational excellence.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up animation-delay-800 justify-center lg:justify-start">
        <a href="#career" class="btn-primary">
          View Experience
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M7 17L17 7M17 7H7M17 7V17"/>
          </svg>
        </a>
        <a href="https://linkedin.com/in/marc-troesken" target="_blank" rel="noopener noreferrer" class="btn-secondary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          LinkedIn
        </a>
      </div>
    </div>

    <!-- Visual -->
    <div class="flex items-center justify-center z-10 order-first lg:order-last">
      <div class="relative opacity-0 animate-fade-scale animation-delay-600">
        <div class="relative w-[240px] lg:w-[420px] h-[300px] lg:h-[520px] rounded-[240px_240px_24px_24px] overflow-hidden border border-border">
          <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-primary/90 z-10" />
          <img
            :src="profileImage"
            alt="Marc Troesken - Cloud Engineering Leader and Expertise Lead at DKB Service GmbH in Berlin"
            width="420"
            height="520"
            loading="eager"
            fetchpriority="high"
            class="w-full h-full object-cover object-top grayscale-[20%]"
          >
        </div>

        <!-- Badge -->
        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 bg-bg-card/90 backdrop-blur-xl border border-border rounded-2xl px-6 py-4 z-20 flex items-center gap-4">
          <div class="w-10 h-10 bg-accent-subtle rounded-xl flex items-center justify-center">
            <svg class="w-5 h-5 stroke-accent" viewBox="0 0 24 24" fill="none" stroke-width="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          </div>
          <div>
            <div class="text-xs text-text-muted tracking-wide uppercase">Current Role</div>
            <div class="font-semibold text-sm">Expertise Lead @ DKB</div>
          </div>
        </div>

        <!-- Floating Stats -->
        <div class="hidden lg:flex absolute top-12 -right-8 flex-col gap-4">
          <div
            v-for="(stat, index) in stats"
            :key="stat.label"
            class="bg-bg-card/90 backdrop-blur-xl border border-border rounded-full px-5 py-3 flex items-center gap-3 opacity-0 animate-slide-in"
            :class="`animation-delay-${1000 + index * 200}`"
          >
            <span class="font-display font-bold text-xl text-accent">{{ stat.value }}</span>
            <span class="text-xs text-text-secondary">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
