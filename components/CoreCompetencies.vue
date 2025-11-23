<template>
  <section id="expertise" class="py-20 md:py-32 bg-white">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Core Competencies</h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Bridging the gap between complex financial requirements and modern cloud engineering.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div 
          v-for="competency in competencies" 
          :key="competency.title"
          class="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow"
        >
          <div class="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
            <component :is="competency.icon" class="w-7 h-7 text-primary" />
          </div>
          <h3 class="text-xl font-bold mb-3">{{ competency.title }}</h3>
          <p class="text-gray-600 leading-relaxed">{{ competency.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { h } from 'vue'

const CloudIcon = () => h('svg', { 
  fill: 'none', 
  stroke: 'currentColor', 
  viewBox: '0 0 24 24' 
}, [
  h('path', { 
    'stroke-linecap': 'round', 
    'stroke-linejoin': 'round', 
    'stroke-width': '2', 
    d: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z' 
  })
])

const ServerIcon = () => h('svg', { 
  fill: 'none', 
  stroke: 'currentColor', 
  viewBox: '0 0 24 24' 
}, [
  h('path', { 
    'stroke-linecap': 'round', 
    'stroke-linejoin': 'round', 
    'stroke-width': '2', 
    d: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01' 
  })
])

const ShieldIcon = () => h('svg', { 
  fill: 'none', 
  stroke: 'currentColor', 
  viewBox: '0 0 24 24' 
}, [
  h('path', { 
    'stroke-linecap': 'round', 
    'stroke-linejoin': 'round', 
    'stroke-width': '2', 
    d: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' 
  })
])

const UsersIcon = () => h('svg', { 
  fill: 'none', 
  stroke: 'currentColor', 
  viewBox: '0 0 24 24' 
}, [
  h('path', { 
    'stroke-linecap': 'round', 
    'stroke-linejoin': 'round', 
    'stroke-width': '2', 
    d: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' 
  })
])

const competencies = [
  {
    title: 'Cloud Strategy',
    description: 'Defining roadmaps for scalable, cost-effective cloud adoption.',
    icon: CloudIcon
  },
  {
    title: 'Infrastructure as Code',
    description: 'Automating reliable environments with Terraform and Ansible.',
    icon: ServerIcon
  },
  {
    title: 'Security & Compliance',
    description: 'Building banking-grade security postures (PCI-DSS, SOC2).',
    icon: ShieldIcon
  },
  {
    title: 'Engineering Leadership',
    description: 'Building and mentoring high-performance engineering teams.',
    icon: UsersIcon
  }
]
</script>
