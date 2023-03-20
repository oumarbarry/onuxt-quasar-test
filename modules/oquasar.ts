import { defineNuxtModule } from '@nuxt/kit'

export interface ModuleOptions { }

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'oquasar',
  },
  defaults: {},
  setup(_, nuxt) {
    nuxt.hook('prepare:types', ({ references }) => {
      references.unshift({ types: 'quasar' })
    })
  },
})
