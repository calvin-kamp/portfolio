<script setup lang="ts">
import { projects } from '@/data'
import { BaseSection } from '@components/base'
import ProjectCard from '../ui/ProjectCard.vue'
</script>

<template>
  <BaseSection>
    <div>
      <small>
        {{ $t('sections.stack.eyebrow') }}
      </small>

      <h2>
        {{ $t('sections.stack.title') }}
      </h2>

      <p>
        {{ $t('sections.stack.lead') }}
      </p>
    </div>

    <ul>
      <li
        v-for="project in projects"
        :key="project.id"
      >
        <ProjectCard :project="project" />
      </li>
    </ul>
  </BaseSection>
</template>
