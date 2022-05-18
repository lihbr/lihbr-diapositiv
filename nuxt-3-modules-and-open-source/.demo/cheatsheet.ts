// Imports
import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'

// Setup
const setup = (options, nuxt) => {
	if (new Date().getHours() === 11) {
		console.warn("It's apero time, stop developing you roast beef!")
	}

	nuxt.options.ssr = false

	const { resolve } = createResolver(import.meta.url)

	nuxt.options.css.push(resolve('./runtime/style.css'))

	const plugin = resolve('./runtime/plugin.ts')
	nuxt.options.build.transpile.push(plugin)
	addPlugin(plugin)

	nuxt.hook('generate:extendRoutes', (routes) => {
		console.info(`Generating ${routes.length} routes`)
	})

	// Hooks
	const hooks = {
		'generate:extendRoutes': (routes) => {
			console.info(`Generating ${routes.length} routes`)
		}
	}
}

// CSS
const css = /* css */`
body {
  /* rainbow background */
  background: linear-gradient(to right,#f00,#ff0,#0f0,#0ff,#00f,#f0f,#f0f);
}
`

// Plugin
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      myModule: {
        format: (data) => {
          // format data...
          return data
        }
      }
    }
  }
})
