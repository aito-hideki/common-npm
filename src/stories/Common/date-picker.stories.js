export default {
  title: 'Common/Date Picker',
  argTypes: {
    value: {
      control: { type: 'date' }
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <common-date-picker
      :value="value"
      label="Date Picker"
      outlined
      hide-details
      @change="value => $emit('input', value)"
    />
  `
})

export const Default = Template.bind({})
Default.args = {
  value: new Date()
}
