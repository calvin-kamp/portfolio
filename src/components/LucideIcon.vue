<script lang="ts" setup>
import { type LucideIcon } from '@lucide/vue'

defineProps<{
  icon: LucideIcon
}>()
</script>

<template>
  <component :is="icon" :size="24" />
</template>
