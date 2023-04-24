// Imports
import { addCustomTab } from '@nuxt/devtools-kit'
import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'

// Setup
const setup = (options, nuxt) => {
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

	const { resolve } = createResolver(import.meta.url)

	nuxt.options.css.push(resolve('./runtime/style.css'))

	const plugin = resolve('./runtime/plugin.ts')
	nuxt.options.build.transpile.push(plugin)
	addPlugin(plugin)
}
