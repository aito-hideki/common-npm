<template>
  <v-menu
    v-model="showMenu"
    :close-on-content-click="false"
    transition="scale-transition"
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-bind="$attrs"
        :value="dateValue"
        readonly
        v-on="on"
      />
    </template>
    <v-date-picker v-model="dateValue" @input="showMenu = false" />
  </v-menu>
</template>

<script>
import moment from 'moment'
import { watch, ref, onMounted } from '@vue/composition-api'

export default {
  props: {
    value: {
      type: [Date, String, Number, Object],
      default: null
    }
  },
  setup: (props, { emit }) => {
    const dateValue = ref('')
    const showMenu = ref(false)

    watch(() => props.value, (val) => {
      if (!val) { return }
      dateValue.value = moment(val).clone().format('YYYY-MM-DD')
    })
    watch(() => dateValue.value, (val) => {
      emit('input', moment(val).toDate())
    })

    onMounted(() => {
      if (!props.value) { return }
      dateValue.value = moment(props.value).clone().format('YYYY-MM-DD')
    })

    return {
      dateValue,
      showMenu
    }
  }
}
</script>
