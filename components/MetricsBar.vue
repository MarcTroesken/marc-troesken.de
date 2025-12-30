<script setup lang="ts">
const metrics = [
  { value: '20', suffix: '+', label: 'Cloud Engineers im Team' },
  { value: '4', suffix: '+', label: 'Jahre Cloud Infrastructure' },
  { value: '99.99', suffix: '%', label: 'System Uptime' },
  { value: 'ZAIT', suffix: '', label: 'Compliant Architecture' },
]
</script>

<template>
  <section class="bg-bg-secondary border-y border-border py-12 px-8 lg:px-16">
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
      <div 
        v-for="(metric, index) in metrics" 
        :key="metric.label"
        class="text-center px-4"
        :class="{ 
          'border-r border-border': index < metrics.length - 1 && (index % 2 === 0 || index < 3),
          'lg:border-r': index < 3
        }"
      >
        <div class="font-serif text-4xl lg:text-5xl font-normal leading-none mb-2">
          {{ metric.value }}<span class="text-accent">{{ metric.suffix }}</span>
        </div>
        <div class="text-sm text-text-secondary tracking-wide">{{ metric.label }}</div>
      </div>
    </div>
  </section>
</template>
