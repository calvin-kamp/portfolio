<script setup lang="ts">
import type { Component } from 'vue'

interface Props {
  icon: Component
  label: string
}

const props = defineProps<Props>()
</script>

<template>
  <component :is="props.icon" />

  <span>
    {{ props.label }}
  </span>
</template>
