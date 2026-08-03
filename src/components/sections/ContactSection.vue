<script setup lang="ts">
import { BaseSection } from '@components/base'
import ContactForm from '../ui/ContactForm.vue'
</script>

<template>
  <BaseSection>
    <small>
      {{ $t('sections.contact.eyebrow') }}
    </small>

    <h2>
      {{ $t('sections.contact.title') }}
    </h2>

    <p>
      {{ $t('sections.contact.lead') }}
    </p>

    <ContactForm />
  </BaseSection>
</template>
