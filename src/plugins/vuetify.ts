import Vue from 'vue'
import Vuetify, { UserVuetifyPreset } from 'vuetify'

// Vuetify
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.min.css'

Vue.use(Vuetify)

export default (config: Partial<UserVuetifyPreset> | undefined): Vuetify => new Vuetify(config)
