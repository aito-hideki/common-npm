import { reactive } from '@vue/composition-api'

export default {
  title: 'Common/Form',
  argTypes: {
    onSubmit: {
      action: 'submit',
      description: 'Dispatch \'submit\' event'
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <v-card width="500">
      <common-form
        name="common-form"
        @submit="onSubmit"
      >
        <v-card-title>
          Common Form
        </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="profile.firstname"
            label="First Name"
            :rules="[$validators.isValid(profile.firstname)]"
          />
          <v-text-field
            v-model="profile.lastname"
            label="Last Name"
            :rules="[$validators.isValid(profile.lastname)]"
          />
          <v-text-field
            v-model="profile.email"
            label="Email"
            :rules="[
              $validators.isValid(profile.email),
              $validators.isEmail(profile.email)
            ]"
          />
        </v-card-text>
        <v-card-actions>
        <v-btn
          color="primary"
          type="submit"
          rounded
        >
          Submit
        </v-btn>
        <v-spacer />
        <v-btn
          rounded
          @click="$events.emit('form.reset.common-form')"
        >
          Reset validation
        </v-btn>
        </v-card-actions>
      </common-form>
    </v-card>
  `,
  setup: () => {
    const profile = reactive({
      firstname: '',
      lastname: '',
      email: ''
    })

    return {
      profile
    }
  }
})

export const Default = Template.bind({})
Default.args = {}
