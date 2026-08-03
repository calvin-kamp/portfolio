<script setup lang="ts">
import { BaseLink, BaseSection } from '@components/base'
</script>

<template>
  <BaseSection>
    <p>
      {{ $t('sections.hero.availability') }}
    </p>

    <h1>
      <i18n-t
        keypath="sections.hero.title"
        scope="global"
        tag="span"
      >
        <template #accent>
          <span>
            {{ $t('sections.hero.titleAccent') }}
          </span>
        </template>
      </i18n-t>
    </h1>

    <p>
      {{ $t('sections.hero.lead') }}
    </p>

    <div>
      <BaseLink>
        {{ $t('sections.hero.actions.work') }}
      </BaseLink>

      <BaseLink>
        {{ $t('sections.hero.actions.contact') }}
      </BaseLink>
    </div>
  </BaseSection>
</template>
