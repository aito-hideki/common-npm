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

<style lang="scss" scoped>
.glass-box {
  flex: 1 1 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow:hidden;

  background-attachment: fixed !important;
  background-size: cover !important;
  background-position: center !important;
  background-repeat: no-repeat !important;

  &:before {
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    pointer-events: none;

    z-index: 0;
    background-attachment: fixed !important;
    background-size: cover !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
  }

  &:after {
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    z-index: 1;
  }

  & > * {
    z-index: 2;
  }
}
</style>
