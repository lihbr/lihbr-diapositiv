// Imports
import { addCustomTab } from '@nuxt/devtools-kit'
import { defineNuxtModule, addPlugin, createResolver, addImportsDir } from '@nuxt/kit'

// Setup
const setup = (options, nuxt) => {
	const resolver = createResolver(import.meta.url)

	nuxt.options.css.push(resolver.resolve('./runtime/style.css'))

	const plugin = resolver.resolve('./runtime/plugin.ts')
	nuxt.options.build.transpile.push(plugin)
	addPlugin(plugin)

	addImportsDir(resolver.resolve('./runtime/imports'))

	addCustomTab({
		name: 'my-module',
		title: 'My Module',
		icon: 'carbon:edt-loop',
		view: {
			type: 'iframe',
			src: 'http://localhost:3000'
			// src: 'https://www.nytimes.com/games/wordle/index.html'
		}
	})
}
