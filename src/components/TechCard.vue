<script setup lang="ts">
import type { Technology } from './AboutSection.vue'

interface Props {
  technology: Technology
}

defineProps<Props>()
defineOptions({
  inheritAttrs: false,
})
</script>

<template>
  <div
    v-bind="$attrs"
    class="relative p-3 before:absolute before:inset-0 before:rounded-lg before:opacity-20 before:bg-[var(--tech-icon-background-color)]"
  >
    <component
      :is="technology.icon"
      class="size-8"
      aria-hidden="true"
    />
  </div>

  <div class="flex flex-col gap-1">
    <span class="font-semibold leading-tight">
      {{ technology.name }}
    </span>

    <small class="text-sm/tight">
      {{ technology.description }}
    </small>
  </div>
</template>
