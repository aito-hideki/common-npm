<template>
  <wrapper
    v-bind="$attrs"
    class="glass-box"
  >
    <slot />
  </wrapper>
</template>

<script>
import styled from 'vue-styled-components'

const wrapperProps = {
  backgroundColor: {
    type: String,
    default: 'white'
  },
  backgroundImage: {
    type: String,
    default: ''
  },
  opacity: {
    type: [Number, String],
    default: 1
  },
  blur: {
    type: [Number, String],
    default: 0
  },
  width: {
    type: [Number, String],
    default: 0
  },
  borderRadius: {
    type: [Number, String],
    default: 0
  },
  disabled: {
    type: Boolean,
    default: false
  }
}
const Wrapper = styled('div', wrapperProps)`
  ${({ disabled, width, borderRadius }) => disabled ? `
    background: none !important;
  ` : `
    ${width ? `max-width: ${width}px;` : ''}
    border-radius: ${borderRadius}px;
  `}
  background-image: url(${({
    backgroundImage,
    disabled
  }) => disabled ? '' : backgroundImage});

  &:before {
    content: '';
    ${({ disabled }) => disabled ? 'background: none !important;' : ''}
    filter: blur(${({ blur, disabled }) => disabled ? 0 : blur}px);
    background-image: url(${({
      backgroundImage,
      disabled
    }) => disabled ? '' : backgroundImage});
  }
  &:after {
    content: '';
    ${({ disabled }) => disabled ? 'background: none !important;' : ''}
    opacity: ${({ opacity }) => opacity};
    background-color: ${({ backgroundColor }) => backgroundColor};
  }
`

export default {
  components: {
    Wrapper
  }
}
</script>
