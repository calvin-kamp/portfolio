<script setup lang="ts">
import { BaseSection } from '@components/base'
import { techCategories } from '@/data/tech-stack.data.ts'
import TechStackCategory from '../ui/TechStackCategory.vue'
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

    <div>
      <TechStackCategory
        v-for="techCategory in techCategories"
        :key="techCategory.id"
        :category="$t(techCategory.titleKey)"
        :icon="techCategory.icon"
        :technologies="techCategory.technologies"
      />
    </div>
  </BaseSection>
</template>
