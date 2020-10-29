// Imports for configuring Vuetify
import Vue from 'vue'
import Vuetify from 'vuetify'
import useVuetify from '@/plugins/vuetify' // <== important

import '@/plugins/composition-api'
import '@/plugins/validators'
import '@/plugins/fragment'
import '@/plugins/events'
import '@/components'

import '@/styles/index.scss'
import './storybook.css'

// configure Vue to use Vuetify
Vue.use(Vuetify)

// this was the only thing here by default
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

// THIS is my decorator
export const decorators = [
  (story, context) => {
    // instantiate Vuetify instance with any component/story level params
    const vuetify = useVuetify()
    // wrap the passed component within the passed context
    const wrapped = story(context)
    // extend Vue to use Vuetify around the wrapped component
    return Vue.extend({
      vuetify,
      components: { wrapped },
      props: {
        dark: {
          type: Boolean,
          default: context.args.dark,
        },
        locale: {
          type: String,
          default: 'en',
        },
      },
      watch: {
        dark: {
          immediate: true,
          handler (val) {
            this.$vuetify.theme.dark = val
          }
        }
      },
      template: `
        <v-app>
          <v-container fluid>
            <wrapped />
          </v-container>
        </v-app>
      `
    })
  },
]
