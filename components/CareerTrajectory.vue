<template>
  <section id="leadership" class="py-20 md:py-32 bg-white">
    <div class="container-custom">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16">
        <!-- Left Column: Career Trajectory -->
        <div>
          <div class="mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Career Trajectory</h2>
            <p class="text-gray-600 leading-relaxed">
              From hands-on coding to defining strategy. My journey has been defined by solving 
              hard technical problems in high-stakes environments.
            </p>
          </div>

          <!-- Technical Proficiency -->
          <div class="mb-12">
            <h3 class="text-xl font-bold mb-6 uppercase tracking-wide">Technical Proficiency</h3>
            <div class="space-y-6">
              <div 
                v-for="skill in skills" 
                :key="skill.name"
                class="bg-white"
              >
                <div class="flex items-center justify-between mb-2">
                  <h4 class="text-sm font-medium text-gray-900">{{ skill.name }}</h4>
                  <span class="text-primary font-semibold text-sm">{{ skill.level }}%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                  <div 
                    class="bg-primary h-full rounded-full transition-all duration-1000 ease-out"
                    :style="{ width: skill.level + '%' }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Positions -->
        <div class="space-y-6">
          <div 
            v-for="(position, index) in positions" 
            :key="index"
            class="relative"
          >
            <div class="flex items-start gap-4 mb-4">
              <div class="w-3 h-3 rounded-full bg-gray-300 mt-2 flex-shrink-0"></div>
              <div class="flex-1">
                <div class="flex items-start justify-between gap-4 mb-2">
                  <h3 class="text-xl font-bold text-gray-900">{{ position.title }}</h3>
                  <span class="text-primary font-bold text-sm whitespace-nowrap">{{ position.period }}</span>
                </div>
                <p class="text-gray-900 font-semibold mb-1">{{ position.company }}</p>

                <ul class="space-y-2.5 mt-4">
                  <li 
                    v-for="(achievement, idx) in position.achievements" 
                    :key="idx"
                    class="flex items-start gap-2.5 text-gray-700 text-sm"
                  >
                    <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke-width="2"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
                    </svg>
                    <span>{{ achievement }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const skills = [
  { name: 'Cloud Architecture (AWS)', level: 98 },
  { name: 'Terraform', level: 85 },
  { name: 'Team Leadership', level: 100 },
  { name: 'Fintech Security & Compliance', level: 90 },
  { name: 'System Design', level: 92 },
  { name: 'Full-Stack (Vue/Node)', level: 85 }
]

const positions = [
  {
    title: 'Expertise Lead - Cloud Engineering',
    company: 'DKB Service GmbH',
    period: '2024 - Present',
    achievements: [
      'Leading a cloud engineering team of 20 professionals.',
      'Shaping the future with strategic chapter projects.',
      'Develop engineers into senior roles.'
    ]
  },
  {
    title: 'Engineering Manger - Platform Engineering',
    company: 'Ratepay GmbH',
    period: '2023 - 2024',
    achievements: [
      'Spearheaded the migration from on-premise to native cloud services on AWS.',
      'Implemented Zero-Trust security architecture for ZAIT compliance.',
      'Mentored senior developers in QA, on-premise and cloud infrastructure.'
    ]
  },
  {
    title: 'Cloud Engineering & Infrastructure Architect',
    company: 'Ratepay GmbH',
    period: '2021 - 2023',
    achievements: [
      'Built high-performance and secure cloud infrastructure (AWS).',
      'Started company wide cloud migration projectto AWS.'
    ]
  }
]
</script>
