<script setup lang="ts">
import type { Project } from '@/types/project.types'
import { BaseLink } from '@components/base'

interface Props {
  project: Project
}

const props = defineProps<Props>()
</script>

<template>
  <article>
    <img
      src="https://placehold.co/600x400"
      alt="placeholder"
    />

    <div>
      <small>
        {{ $t(props.project.metaKey) }}
      </small>

      <h3>
        {{ $t(props.project.coverLabelKey) }}
      </h3>

      <p>
        {{ $t(props.project.descriptionKey) }}
      </p>

      <ul>
        <li
          v-for="tag in props.project.tags"
          :key="tag"
        >
          {{ tag }}
        </li>
      </ul>
    </div>

    <div>
      <BaseLink>
        {{ $t('sections.work.viewCode') }}
      </BaseLink>

      <BaseLink>
        {{ $t('sections.work.viewLive') }}
      </BaseLink>
    </div>
  </article>
</template>
