import { defineNuxtModule, createResolver, addPlugin } from '@nuxt/kit'

export interface ModuleOptions {
  addPlugin: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'my-module',
    configKey: 'myModule'
  },
  defaults: {
    addPlugin: true
  },
  setup (options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    if (options.addPlugin) {
      const plugin = resolve('./runtime/plugin.ts')
      nuxt.options.build.transpile.push(plugin)
      addPlugin(plugin)
    }
  }
})
