<template>
  <v-progress-circular
    v-if="loading === true"
    :class="spinnerClass"
    :size="70"
    :width="10"
    color="info"
    indeterminate
  />
  <div v-else-if="loading === null">
    <v-icon color="error">mdi-block-helper</v-icon> Sorry, We couldn't complete your request
  </div>
  <div
    v-else
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: () => false
    },
    spinnerClass: {
      type: [String, Object, Array],
      default: 'mx-auto'
    }
  }
}
</script>
