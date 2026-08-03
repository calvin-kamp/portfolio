<script setup lang="ts">
import { BaseSection } from '@components/base'

interface Fact {
  labelKey: string
  valueKey: string
}

const facts: Fact[] = [
  {
    labelKey: 'sections.about.facts.based.label',
    valueKey: 'sections.about.facts.based.value',
  },
  {
    labelKey: 'sections.about.facts.focus.label',
    valueKey: 'sections.about.facts.focus.value',
  },
  {
    labelKey: 'sections.about.facts.current.label',
    valueKey: 'sections.about.facts.current.value',
  },
  {
    labelKey: 'sections.about.facts.lookingFor.label',
    valueKey: 'sections.about.facts.lookingFor.value',
  },
  {
    labelKey: 'sections.about.facts.languages.label',
    valueKey: 'sections.about.facts.languages.value',
  },
]
</script>

<template>
  <BaseSection>
    <small>
      {{ $t('sections.about.eyebrow') }}
    </small>

    <h2>
      {{ $t('sections.about.title') }}
    </h2>

    <dl>
      <tempalte
        v-for="fact in facts"
        :key="$t(`${fact.labelKey}`)"
      >
        <dt>
          {{ $t(`${fact.labelKey}`) }}
        </dt>

        <dd>
          {{ $t(`${fact.valueKey}`) }}
        </dd>
      </tempalte>
    </dl>
  </BaseSection>
</template>
