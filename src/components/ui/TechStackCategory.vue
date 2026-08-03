<script setup lang="ts">
import type { Component } from 'vue'
import TechStackCategoryItem from './TechStackCategoryItem.vue'
import type { Technology } from '@/types/technology.types.ts'

interface Props {
  category: string
  icon: Component
  technologies: Technology[]
}

const props = defineProps<Props>()
</script>

<template>
  <div>
    <div>
      <component
        :is="props.icon"
        aria-hidden="true"
      />

      <h3>
        {{ props.category }}
      </h3>

      <span aria-hidden="true">
        {{ props.technologies.length }}
      </span>
    </div>

    <ul>
      <li
        v-for="technology in props.technologies"
        :key="technology.label"
      >
        <TechStackCategoryItem
          :icon="technology.icon"
          :label="technology.label"
        />
      </li>
    </ul>
  </div>
</template>
