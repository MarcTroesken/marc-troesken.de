<template>
  <section class="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-gray-50 to-white">
    <div class="container-custom">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="space-y-6">
          <div class="inline-block px-3 py-1.5 bg-primary/10 rounded-full">
            <span class="text-primary text-xs font-medium flex items-center gap-1.5">
              <svg class="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="3"/>
              </svg>
              LEADERSHIP & INFRASTRUCTURE
            </span>
          </div>

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Building the<br />
            Backbone <span class="text-primary">of<br />Finance</span>
          </h1>

          <p class="text-lg text-gray-600 leading-relaxed max-w-xl">
            Passionate Leader in Fintech guiding Cloud Engineers in Cloud Infrastructure. 
            Leading cloud engineering teams to build robust, scalable infrastructure. 
            Former full-stack developer now utilizing deep technical roots to drive 
            architectural excellence and operational resilience in the financial sector.
          </p>

          <div class="flex flex-wrap gap-4 pt-4">
            <a 
              href="#expertise" 
              class="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors font-medium"
            >
              View Experience
            </a>
            <a 
              href="https://linkedin.com/in/marc-troesken" 
              target="_blank"
              rel="noopener noreferrer"
              class="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-900 hover:text-white transition-colors font-medium flex items-center gap-2"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        <!-- Right Content - Image & Stats -->
        <div class="relative w-full">
          <div class="relative rounded-2xl overflow-hidden shadow-2xl aspect-square">
            <img
              src="/profile.jpg"
              alt="Marc Trösken"
              class="w-full h-full object-cover"
            />

            <!-- Stats Overlay -->
            <div class="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg w-[calc(100%-6rem)]">
              <div class="flex items-center gap-3">
                <div class="w-5 h-5 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                  <svg class="w-2.5 h-2.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <div>
                  <div class="text-[10px] text-gray-500 font-medium leading-tight">CURRENT FOCUS</div>
                  <div class="font-semibold text-gray-900 text-xs leading-tight">Leading Cloud Engineering</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
</script>
