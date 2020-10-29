export default {
  title: 'Common/Loading',
  argTypes: {
    loading: {
      control: { type: 'boolean' }
    },
    spinnerClass: {
      control: { type: 'text' }
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <div class="d-flex">
      <common-loading
        :loading="loading"
        :spinner-class="spinnerClass"
      >
        <h2>Contents are loaded</h2>
        <h3>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h3>
      </common-loading>
    </div>
  `
})

export const Loading = Template.bind({})
Loading.args = {
  loading: true,
  spinnerClass: 'mx-auto'
}

export const Loaded = Template.bind({})
Loaded.args = {
  loading: false,
  spinnerClass: 'mx-auto'
}
