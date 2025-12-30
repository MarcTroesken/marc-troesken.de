<script setup lang="ts">
const focusAreas = [
  { area: 'Cloud Platform', details: 'AWS, Terraform, GitOps' },
  { area: 'Engineering Leadership', details: 'Team Building, Mentoring' },
  { area: 'Security & Operations', details: 'IAM, Observability, Incident Response' },
  { area: 'Regulated Environments', details: 'Banking, Payments, Audit Readiness' },
]

const timeline = [
  {
    date: '2024 – Present',
    role: 'Expertise Lead – Cloud Engineering',
    company: 'DKB Service GmbH, Berlin',
    current: true,
    achievements: [
      'Leading a Cloud Engineering team of 20+ professionals',
      'Driving strategic chapter initiatives and platform evolution',
      'Growing engineers into senior technical roles',
    ],
  },
  {
    date: '2023 – 2024',
    role: 'Engineering Manager – Platform Engineering',
    company: 'Ratepay GmbH, Berlin',
    current: false,
    achievements: [
      'Co-led the company-wide cloud transformation journey',
      'Migrated on-premise workloads to native AWS services',
      'Implemented Zero-Trust architecture for regulatory compliance',
      'Mentored senior developers across QA and infrastructure',
    ],
  },
  {
    date: '2022 – 2023',
    role: 'Infrastructure Architect',
    company: 'Ratepay GmbH, Berlin',
    current: false,
    achievements: [
      'Designed secure, high-performance cloud infrastructure on AWS',
      'Initiated the enterprise-wide cloud migration program',
    ],
  },
  {
    date: '2021 – 2022',
    role: 'Cloud Engineer',
    company: 'Ratepay GmbH, Berlin',
    current: false,
    achievements: [
      'Built expertise in Terraform and Infrastructure as Code',
      'Laid the foundation for cloud transformation',
    ],
  },
]
</script>

<template>
  <section id="career" class="py-32 px-8 lg:px-16 bg-bg-secondary">
    <div class="text-center mb-20">
      <div class="section-tag">Experience</div>
      <h2 class="section-title">Career Path</h2>
      <p class="text-lg text-text-secondary max-w-2xl mx-auto">
        From hands-on engineering to strategic leadership — shaped by solving complex problems in critical environments.
      </p>
    </div>

    <div class="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24">
      <!-- Focus Areas Panel -->
      <div class="lg:sticky lg:top-32 h-fit">
        <div class="bg-bg-card border border-border rounded-3xl p-8">
          <h3 class="font-display text-xs font-semibold tracking-[0.15em] uppercase text-text-muted mb-8">
            Focus Areas
          </h3>
          <div class="space-y-6">
            <div v-for="item in focusAreas" :key="item.area" class="border-b border-border pb-4 last:border-0 last:pb-0">
              <div class="font-medium text-text-primary mb-1">{{ item.area }}</div>
              <div class="text-sm text-text-secondary">{{ item.details }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Timeline Line -->
        <div class="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent to-border" />

        <div class="space-y-16">
          <div
            v-for="item in timeline"
            :key="item.date"
            class="relative pl-16"
          >
            <div class="timeline-dot" :class="{ current: item.current }" />

            <span class="inline-block bg-accent-subtle text-accent text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full mb-4">
              {{ item.date }}
            </span>

            <h3 class="font-serif text-2xl lg:text-3xl font-normal mb-2">{{ item.role }}</h3>
            <p class="text-text-secondary mb-5">{{ item.company }}</p>

            <ul class="space-y-3">
              <li
                v-for="achievement in item.achievements"
                :key="achievement"
                class="relative pl-6 text-text-secondary leading-relaxed"
              >
                <span class="absolute left-0 top-2.5 w-1.5 h-1.5 bg-accent rounded-full" />
                {{ achievement }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
