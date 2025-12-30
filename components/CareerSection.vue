<script setup lang="ts">
const skills = [
  { name: 'Cloud Architecture (AWS)', value: 98 },
  { name: 'Team Leadership', value: 100 },
  { name: 'Terraform', value: 85 },
  { name: 'Security & Compliance', value: 90 },
  { name: 'System Design', value: 92 },
  { name: 'Full-Stack (Vue/Node)', value: 85 },
]

const timeline = [
  {
    date: '2024 – Heute',
    role: 'Expertise Lead – Cloud Engineering',
    company: 'DKB Service GmbH, Berlin',
    current: true,
    achievements: [
      'Leitung eines Cloud Engineering Teams mit 20 Professionals',
      'Gestaltung der Zukunft durch strategische Chapter-Projekte',
      'Entwicklung von Engineers in Senior-Rollen',
    ],
  },
  {
    date: '2023 – 2024',
    role: 'Engineering Manager – Platform Engineering',
    company: 'Ratepay GmbH, Berlin',
    current: false,
    achievements: [
      'Co-Lead der Cloud Journey von Ratepay',
      'Spearheaded Migration von On-Premise zu nativen AWS Cloud Services',
      'Implementierung von Zero-Trust Security Architektur für ZAIT Compliance',
      'Mentoring von Senior Developers in QA, On-Premise und Cloud Infrastructure',
    ],
  },
  {
    date: '2022 – 2023',
    role: 'Infrastructure Architect',
    company: 'Ratepay GmbH, Berlin',
    current: false,
    achievements: [
      'Aufbau hochperformanter und sicherer Cloud-Infrastruktur auf AWS',
      'Start des unternehmensweiten Cloud-Migrationsprojekts',
    ],
  },
  {
    date: '2021 – 2022',
    role: 'Cloud Engineer',
    company: 'Ratepay GmbH, Berlin',
    current: false,
    achievements: [
      'Expertise in Terraform und Infrastructure as Code',
      'Grundstein für Cloud-Transformation gelegt',
    ],
  },
]
</script>

<template>
  <section id="career" class="py-32 px-8 lg:px-16 bg-bg-secondary">
    <div class="text-center mb-20">
      <div class="section-tag">Career Trajectory</div>
      <h2 class="section-title">Beruflicher Werdegang</h2>
      <p class="text-lg text-text-secondary max-w-2xl mx-auto">
        Vom Hands-on Coding zur strategischen Führung — geprägt durch das Lösen komplexer Probleme in kritischen Umgebungen.
      </p>
    </div>

    <div class="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24">
      <!-- Skills Panel -->
      <div class="lg:sticky lg:top-32 h-fit">
        <div class="bg-bg-card border border-border rounded-3xl p-8">
          <h3 class="font-display text-xs font-semibold tracking-[0.15em] uppercase text-text-muted mb-8">
            Technical Proficiency
          </h3>
          <div class="space-y-6">
            <div v-for="skill in skills" :key="skill.name" class="space-y-2">
              <div class="flex justify-between">
                <span class="text-sm font-medium">{{ skill.name }}</span>
                <span class="text-sm text-accent font-semibold">{{ skill.value }}%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-fill" :style="{ width: `${skill.value}%` }" />
              </div>
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
