<script setup lang="ts">
const competencies = [
  {
    icon: 'cloud',
    title: 'Cloud Platform',
    description: 'Building scalable, cost-effective cloud infrastructure on AWS with focus on self-service and developer experience.',
  },
  {
    icon: 'tool',
    title: 'Infrastructure as Code',
    description: 'Standardized, auditable infrastructure with Terraform and GitOps. Enabling teams through reusable modules and guardrails.',
  },
  {
    icon: 'shield',
    title: 'Security & Operations',
    description: 'IAM, network segmentation, and policy-as-code for regulated environments. Building for audit readiness from day one.',
  },
  {
    icon: 'users',
    title: 'Engineering Leadership',
    description: 'Growing high-performance teams through empowerment, clear guardrails, and continuous learning culture.',
  },
]
</script>

<template>
  <section id="expertise" class="py-32 px-8 lg:px-16 relative">
    <div class="text-center mb-20">
      <div class="section-tag">Core Competencies</div>
      <h2 class="section-title">Expertise & Focus</h2>
      <p class="text-lg text-text-secondary max-w-xl mx-auto">
        Bridging complex financial requirements with modern cloud technology.
      </p>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div 
        v-for="competency in competencies" 
        :key="competency.title"
        class="competency-card"
      >
        <div class="w-14 h-14 bg-accent-subtle rounded-[14px] flex items-center justify-center mb-6">
          <!-- Cloud Icon -->
          <svg v-if="competency.icon === 'cloud'" class="w-7 h-7 stroke-accent" viewBox="0 0 24 24" fill="none" stroke-width="1.5">
            <path d="M3 15a4 4 0 0 0 4 4h9a5 5 0 0 0 .5-9.97 7 7 0 0 0-13.63 3.21A4 4 0 0 0 3 15z"/>
          </svg>
          <!-- Tool Icon -->
          <svg v-if="competency.icon === 'tool'" class="w-7 h-7 stroke-accent" viewBox="0 0 24 24" fill="none" stroke-width="1.5">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
          </svg>
          <!-- Shield Icon -->
          <svg v-if="competency.icon === 'shield'" class="w-7 h-7 stroke-accent" viewBox="0 0 24 24" fill="none" stroke-width="1.5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          <!-- Users Icon -->
          <svg v-if="competency.icon === 'users'" class="w-7 h-7 stroke-accent" viewBox="0 0 24 24" fill="none" stroke-width="1.5">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        </div>
        <h3 class="font-display font-semibold text-lg mb-3">{{ competency.title }}</h3>
        <p class="text-sm text-text-secondary leading-relaxed">{{ competency.description }}</p>
      </div>
    </div>
  </section>
</template>
