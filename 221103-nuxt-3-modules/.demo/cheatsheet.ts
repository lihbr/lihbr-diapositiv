// Imports
import { defineNuxtModule, createResolver, addPlugin } from '@nuxt/kit'

// Setup
const setup = (options, nuxt) => {
	if (new Date().getHours() === 11) {
		console.warn("It's apero time you fool! What are you starting?!")
	}

	nuxt.options.ssr = false

	const { resolve } = createResolver(import.meta.url)

	nuxt.options.css.push(resolve('./runtime/style.css'))

	const plugin = resolve('./runtime/plugin.ts')
	nuxt.options.build.transpile.push(plugin)
	addPlugin(plugin)
}
