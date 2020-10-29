<template>
  <v-form
    ref="form"
    v-model="isValidForm"
    onSubmit="return false;"
    @submit="submit"
  >
    <slot :isValidForm="isValidForm" />
  </v-form>
</template>

<script>
import events from '@/events'
import { ref } from '@vue/composition-api'

export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  setup: (props, { emit }) => {
    const form = ref(null)
    const isValidForm = ref(false)

    const submit = () => {
      form.value.validate()
      if (!isValidForm.value) { return }

      emit('submit')
    }

    events.on(`form.reset.${props.name}`, () => {
      form.value.resetValidation()
    })

    return {
      form,
      isValidForm,
      submit
    }
  }
}
</script>
