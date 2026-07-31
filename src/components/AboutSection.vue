<script setup lang="ts">
import type { Component } from 'vue'
import TechCard from './TechCard.vue'
import {
  AngularIcon,
  DjangoIcon,
  GitIcon,
  PythonIcon,
  SupabaseIcon,
  TailwindIcon,
  TypeScriptIcon,
  VueIcon,
} from './icons/'

export interface Technology {
  name: string
  description: string
  icon: Component
  backgroundColor: string
}

const technologies: Technology[] = [
  {
    name: 'Vue',
    description: 'JavaScript Framework',
    icon: VueIcon,
    backgroundColor: '#42B883',
  },
  {
    name: 'Angular',
    description: 'JavaScript Framework',
    icon: AngularIcon,
    backgroundColor: '#DD0031',
  },
  {
    name: 'Tailwind CSS',
    description: 'CSS Framework',
    icon: TailwindIcon,
    backgroundColor: '#0EA5E9',
  },
  {
    name: 'TypeScript',
    description: 'JavaScript but better',
    icon: TypeScriptIcon,
    backgroundColor: '#3178C6',
  },
  {
    name: 'Python',
    description: 'Backend Language',
    icon: PythonIcon,
    backgroundColor: '#3776AB',
  },
  {
    name: 'Django',
    description: 'Python Framework',
    icon: DjangoIcon,
    backgroundColor: '#44B78B',
  },
  {
    name: 'Supabase',
    description: 'Backend Tool',
    icon: SupabaseIcon,
    backgroundColor: '#3ECF8E',
  },
  {
    name: 'Git',
    description: 'Version Control',
    icon: GitIcon,
    backgroundColor: '#F05033',
  },
]
</script>

<template>
  <div class="grid grid-cols-1 gap-4 xl:grid-cols-12 xl:max-w-7xl xl:mx-auto">
    <section class="flex flex-col gap-3 p-4 bg-surface-a10 rounded-lg text-balance xl:col-span-3">
      <h2 class="text-3xl font-semibold tracking-tight">About me</h2>

      <p>
        Frontend developer with roots in media design. I work across the stack — Angular, Vue and
        TypeScript on the front, Django and DRF on the back. What interests me isn't just that
        something works, but why, which is why I'd rather understand a problem than route around it.
        I look for projects that put something new in front of me.
      </p>
    </section>

    <section class="flex flex-col gap-3 w-full p-4 bg-surface-a10 rounded-lg xl:col-span-9">
      <div class="flex flex-col gap-3">
        <h2 class="text-3xl font-semibold tracking-tight">My Tech Stack</h2>

        <p>
          I work with modern technologies to build reliable, accessible, high-performing solutions.
          <br />
          Here are my core tools.
        </p>
      </div>

      <ul class="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
        <li
          v-for="technology in technologies"
          :key="technology.name"
          class="flex items-center gap-4 w-full p-2 bg-surface-a30 rounded-md"
        >
          <TechCard
            :technology="technology"
            :style="`--tech-icon-background-color: ${technology.backgroundColor}`"
          />
        </li>
      </ul>
    </section>
  </div>
</template>
