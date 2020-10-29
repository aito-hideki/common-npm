declare module 'vue-toastr' {
  export default any
}

declare module 'vue-fragment' {
  import Vue, { AsyncComponent, ComponentOptions, PluginObject, VueConstructor } from 'vue'

  type Component = VueConstructor<Vue>

  export const Fragment: Component
  export const Plugin: PluginObject<undefined>

  namespace VueFragment {
    export const Fragment: Component
    export const Plugin: PluginObject<undefined>
  }
  export default VueFragment
}
