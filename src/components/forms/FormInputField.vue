<script setup lang="ts">
import { Field } from 'vee-validate'

interface Props {
  fieldName: string
  id: string
  label: string
  type?: 'text' | 'email'
  required?: boolean
  description?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
})
</script>

<template>
  <div>
    <Field
      v-slot="{ field, errors }"
      :name="props.fieldName"
    >
      <label :for="props.id">
        {{ props.label }}

        <span
          v-if="props.required"
          aria-hidden="true"
        >
          *
        </span>
      </label>

      <input
        v-bind="field"
        :id="props.id"
        :type="props.type"
        :required="props.required"
        :aria-invalid="!!errors.length"
        :aria-describedby="
          [
            props.description ? `${props.id}-description` : null,
            errors.length ? `${props.id}-errors` : null,
          ]
            .filter(Boolean)
            .join(' ') || undefined
        "
      />

      <span
        v-if="props.description"
        :id="`${props.id}-description`"
      >
        {{ props.description }}
      </span>

      <ul
        v-if="errors.length"
        :id="`${props.id}-errors`"
        role="alert"
      >
        <li
          v-for="error in errors"
          :key="error"
        >
          {{ error }}
        </li>
      </ul>
    </Field>
  </div>
</template>
