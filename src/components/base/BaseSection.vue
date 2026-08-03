<script setup lang="ts">
interface Props {
  id?: string
}

const props = defineProps<Props>()
</script>

<template>
  <section
    :id="props.id"
    class="container-page py-section"
  >
    <slot />
  </section>
</template>
