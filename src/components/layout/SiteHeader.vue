<script setup lang="ts">
import { ref } from 'vue'
import { BriefcaseBusiness, Home, Mail, Moon, Settings, UserRound } from '@lucide/vue'
import LucideIcon from '../LucideIcon.vue'

const navItems = ref([
  {
    labelKey: 'nav.home',
    href: '#home',
    icon: Home,
  },
  {
    labelKey: 'nav.home',
    href: '#about',
    icon: UserRound,
  },
  {
    labelKey: 'nav.home',
    href: '#projects',
    icon: BriefcaseBusiness,
  },
  {
    labelKey: 'nav.home',
    href: '#contact',
    icon: Mail,
  },
])
</script>

<template>
  <header
    class="fixed top-10 left-1/2 -translate-x-1/2 flex items-center gap-3 py-2 px-3 rounded-lg bg-dark-200"
  >
    <nav>
      <ul class="flex">
        <li
          v-for="navItem in navItems"
          :key="navItem.href"
          class="text-neutral-50"
        >
          <RouterLink
            :to="navItem.href"
            class="flex items-center justify-center min-w-11 min-h-11"
          >
            <LucideIcon :icon="navItem.icon" />
          </RouterLink>
        </li>
      </ul>
    </nav>

    <span class="w-px h-6 bg-white rounded-sm"></span>

    <button class="flex items-center justify-center min-w-11 min-h-11">
      <LucideIcon :icon="Settings" />
    </button>
  </header>
</template>
