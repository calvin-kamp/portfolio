<script setup lang="ts">
import { FormInputField, FormTextareaField } from '../forms'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'
import { BaseButton } from '../base'

const formSchema = z.object({
  name: z.string(),
  email: z.email().optional(),
  message: z.string().optional(),
})

const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(formSchema),
  initialValues: {
    name: '',
    email: '',
    message: '',
  },
})

const onSubmit = handleSubmit((data) => {
  console.log(data)
})
</script>

<template>
  <form @submit="onSubmit">
    <FormInputField
      fieldName="name"
      id="contact-name"
      label="name"
    />

    <FormInputField
      fieldName="email"
      id="contact-email"
      label="Email"
    />

    <FormTextareaField
      fieldName="message"
      id="contact-message"
      label="Message"
    />

    <BaseButton type="submit">submit</BaseButton>
  </form>
</template>
