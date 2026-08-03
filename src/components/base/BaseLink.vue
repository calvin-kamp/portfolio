<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

interface Props {
  to?: string
  href?: string
}

const props = defineProps<Props>()

const isInternal = computed(() => props.to !== undefined)
</script>

<template>
  <RouterLink
    v-if="isInternal"
    to="props.to"
  >
    <slot />
  </RouterLink>

  <a
    v-else
    :href="props.href"
    target="_blank"
    rel="noopener noreferrer"
  >
    <slot />
  </a>
</template>
