---
theme: diapositiv
lineNumbers: true
layout: cover
themeConfig:
  pip: "off"
info: |
  #### Nuxt 3 Modules and<br />Open-Source

  _Make your own, for your team or the whole community._

  <br />

  Everything from this talk & more:

  **-> [lucie.red/london](https://lucie.red/london)**

  <br />

  Personal site:

  **-> [lucie.red](https://lucie.red)**

  <br />

  Twitter:

  **-> [lucie.red/twitter](https://lucie.red/twitter)**

  <br />

  Mastodon:

  **-> [lucie.red/mastodon](https://lucie.red/mastodon)**
---

# Nuxt 3 Modules and Open-Source

_Make your own, for your team or the whole community._

--- slides
layout: center

---

## Let's start with some numbers, shall we?

--- slides
layout: center

---

## 2 million

<v-click>

Number of <logos-nuxt-icon /> **Nuxt** downloads<br/>over the last 30 days

<footnote>

Source: [npmjs.com/package/nuxt](https://www.npmjs.com/package/nuxt)

</footnote>

</v-click>

--- slides
layout: center

---

## 16 million

<v-click>

Number of <logos-vue /> **Vue** downloads<br/>over the last 30 days

<footnote>

Source: [npmjs.com/package/vue](https://www.npmjs.com/package/vue)

</footnote>

</v-click>

--- slides
layout: items
cols: 2

---

<div>
<logos-vue />

16 million downloads

</div>

<div v-click>
<logos-nuxt-icon />

2 million downloads

</div>

--- slides
layout: center

---

## 14 million

<v-click>

Number of <logos-nuxt-icon /> **Nuxt Modules** downloads<br/>over the last 30 days

<footnote>

Source: [github.com/nuxt/modules](https://github.com/nuxt/modules)

</footnote>

</v-click>

--- slides
layout: items
cols: 3

---

<div>
<twemoji-woman-raising-hand />

1 person installed<br />14 million modules

</div>

<v-clicks>

<div class="self-center heading-h3 heading-reset">OR</div>

<div>
<logos-nuxt-icon />

Nuxt projects use<br />7 modules on average

</div>

</v-clicks>

--- slides
layout: center

---

<img src="/maths.gif" alt="Maths gif" class="h-screen object-contain" />

--- slides
layout: center

---

## Nuxt Modules are a central part of Nuxt 

--- slides
layout: v-center

---

### Nuxt 3 modules:

<v-clicks>

- <twemoji-thinking-face /> What they're about?
- <twemoji-technologist /> How you can make some and why?
- <twemoji-handshake /> How to get involved in open-source with Nuxt Modules?

</v-clicks>

--- slides
layout: center

---

## Let's get started<br />shall we?

--- slides
layout: cover

---

## I'm Lucie Haberer

_a.k.a. lihbr_

--- slides
layout: v-center

---

- <twemoji-baguette-bread /> I'm from France

<v-clicks>

- <vscode-icons-file-type-wikitext /> Started development with MediaWiki
- <logos-prismic-icon /> Developer Experience Engineer at Prismic
- <logos-nuxt-icon /> Proud Nuxt contributor & team member

</v-clicks>

::before::

### About Me

--- slides
layout: poll
id: mod
choices: ["yes", "no"]

---

<qr-code content="https://lucie.red/mod">
Yes
</qr-code>

<qr-code content="https://lucie.red/nomod">
No
</qr-code>

::before::

<h3 class="text-center">Have you ever written a Nuxt module?</h3>

--- slides
layout: cover

---

<v-clicks>

## What are Nuxt Modules?

<small>Beginner friendly~</small>

</v-clicks>

--- slides
layout: v-center

---

> Modules are Nuxt.js extensions which can extend its core functionality and add endless integrations.

<small>— [Nuxt.js docs](https://nuxt.com/docs/api/configuration/nuxt-config#modules)</small>

--- slides
layout: items
cols: 3

---

<logos-pwa />

<v-click>

<div class="self-center heading-h2 heading-reset">-></div>

<twemoji-mirror-ball />

</v-click>

::before::

### What are Nuxt Modules?

--- slides
layout: center

---

![Nuxt Hue announcement tweet](/tweetNuxtHue-light.png)
![Nuxt Hue announcement tweet](/tweetNuxtHue-dark.png)

--- slides
layout: v-center

---

Nuxt Modules are registered inside your Nuxt config file:

<!-- prettier-ignore-start -->
```typescript {all|5|6|1,7|8-11|5,14}
import thirdModule from "third-module";

export default defineNuxtConfig({
	modules: [
		"@vite-pwa/nuxt",
		"~/modules/my-module",
		thirdModule,
		[
			"@nuxtjs/prismic",
			{ endpoint: "example" }
		],
	],
	
	pwa: { writePlugin: false }
});
```
<!-- prettier-ignore-end -->

::before::

### What are Nuxt Modules?

--- slides
layout: center

---

## More on Modules

--- slides
layout: items
cols: 3
rows: 2
centered: true

---

<logos-pwa v-click />

<v-click>

<div class="heading-h2 heading-reset" v-click>-></div>

### [@vite-pwa/nuxt](https://vite-pwa-org.netlify.app/frameworks/nuxt)

</v-click>

<logos-prismic-icon v-click />

<v-click>

<div class="heading-h2 heading-reset" >-></div>

### [@nuxtjs/prismic](https://prismic.nuxtjs.org)

</v-click>

::before::

### More on Modules

--- slides
layout: v-center

---

- Content -> [@nuxt/content](https://content.nuxtjs.org)
- Storyblok -> [@storyblok/nuxt](https://github.com/storyblok/storyblok-nuxt)
- Strapi -> [@nuxtjs/strapi](https://strapi.nuxtjs.org)
- Sanity -> [@nuxtjs/sanity](https://sanity.nuxtjs.org)
- [And more CMS modules...](https://modules.nuxtjs.org/?orderBy=desc&category=CMS)

--- slides
layout: center

---

## You want to do X?

--- slides
layout: center

---

![There's a Nuxt module for that](/aModuleForThat.png)

<br />

Comprehensive list -> [nuxt.com/modules](https://nuxt.com/modules)

--- slides
layout: center

---

## Let's stay focused on Nuxt 3 modules

--- slides
layout: cover

---

<v-clicks>

## You Can Make Your Own!

</v-clicks>

--- slides
layout: center

---

## Don't believe me?

--- slides
layout: center

---

<you-nuxt-module />

::before::

### Don't believe me?

--- slides
layout: center

---

<you-nuxt-module-final />

::before::

### Don't believe me?

--- slides
layout: cover

---

## You Can Make Modules!

--- slides
layout: center

---

## Realistically, why would you want to make Nuxt modules of your own?

<small v-click>Especially with so many modules already out there?</small>

--- slides
layout: items
cols: 1

---

<p>

<twemoji-bento-box /> &nbsp;Nuxt modules can do pretty much anything.

</p>

<v-click>

-^

<p>

<twemoji-building-construction /> &nbsp;Abtract code from your different projects and share it reliably.

</p>

</v-click>

--- slides
layout: v-center

---

Things that I abstracted from my projects:

<v-clicks>

- <twemoji-camera-with-flash /> Vue Meta helpers
- <twemoji-package /> Nuxt payload transformer
- <twemoji-bar-chart /> Project statistics

</v-clicks>

::before::

### You Can Make Modules!

--- slides
layout: items
cols: 1

---

<p>

<twemoji-heart-hands class="inline" /> &nbsp;Facilitate integration with the tools you use.

</p>

<span class="opacity-0">placeholder</span>

<span class="opacity-0">placeholder</span>

--- slides
layout: items
cols: 2
class: tailwindSentry

---

<style>
.slidev-layout.tailwindSentry .sentryIcon path {
	fill: #6f5faa;
}
</style>

<div>
<logos-tailwindcss-icon />

Tailwind CSS

</div>

<div v-click>
<logos-sentry-icon class="sentryIcon" />

Sentry

</div>

--- slides
layout: items
cols: 1

---

<p>

<twemoji-heart-hands /> &nbsp;Facilitate integration with the _(new or niche)_ tools you use.

</p>

-^

<p>

<twemoji-hammer-and-wrench /> &nbsp;Craft modules for them, why not?

</p>

--- slides
layout: center

---

## There are reasons to create Nuxt modules.

--- slides
layout: center

---

## How do we do so?

--- slides
layout: cover

---

## Let’s Learn How to Create Nuxt 3 Modules!

<small v-click>Concretely~</small>

--- slides
layout: center
class: nuxiInit

---

<style>
.slidev-layout.nuxiInit code {
	font-size: 1.875rem;
	padding-left: .25rem;
	padding-right: .25rem;
}
</style>

### Let's start with Nuxt 3 CLI:

<br />

`npx nuxi@latest init -t module my-module`

<br />

<small>Then, we'll install dependencies...</small>

--- slides
layout: center

---

## &lt;live-coding /&gt;

--- slides
layout: v-center

---

### About our project:

<v-clicks>

- <twemoji-control-knobs /> Creating a module can be done with `nuxi init`
- <twemoji-building-construction /> Modules come with new defaults and a bundler by Nuxt
- <twemoji-toolbox /> `@nuxt/kit` is a set of helpers to develop Nuxt modules
- <twemoji-japanese-service-charge-button /> Modules are TypeScript by default
- <twemoji-factory /> Modules are defined through `defineNuxtModule` from `@nuxt/kit`

</v-clicks>

--- slides
layout: poll
id: demo
choices: ["assets", "devtools"]

---

<qr-code content="https://lucie.red/asset">
Providing stylesheet, helpers, etc.
</qr-code>

<qr-code content="https://lucie.red/devt">
Integrating with Nuxt DevTools 
</qr-code>

::before::

<h3 class="text-center">What do you want our module to do?</h3>

--- slides
layout: center

---

## &lt;live-coding /&gt;

--- slides
layout: center
class: nuxiInit

---

<style>
.slidev-layout.nuxiInit code {
	font-size: 1.625rem;
	padding-left: .25rem;
	padding-right: .25rem;
}
</style>

### Nuxt module with devtools integration starter:

<br />

`npx nuxi@latest init -t module-devtools my-module-devtools`

<br />

<small>Then, we'll again install dependencies...</small>

--- slides
layout: center

---

## &lt;live-coding /&gt;

--- slides
layout: center

---

### That was an example of what modules can do

--- slides
layout: v-center

---

- <twemoji-cyclone /> Adding auto-imports for composables

<v-clicks>

- <twemoji-bento-box /> Adding auto-imports for components
- <twemoji-alembic /> Interacting with Nitro, Nuxt server engine
- <twemoji-hook /> Listening to Nuxt lifecycles with hooks
- <twemoji-abacus /> And many more...

</v-clicks>

--- slides
layout: center

---

## No FOMO!

<small>

Many recipes are documented: [nuxt.com/docs/guide/going-further/modules](https://nuxt.com/docs/guide/going-further/modules#recipes)

</small>

--- slides
layout: center
clicks: 1

---

<h2 v-if="$slidev.nav.clicks < 1">That's...</h2>
<h2 v-if="$slidev.nav.clicks >= 1">That’s not all folks</h2>

--- slides
layout: cover

---

## Extra Perks to Learning<br />Nuxt Modules

--- slides
layout: v-center

---

- <twemoji-diving-mask /> Deeper understanding of Nuxt behaviors and internals and easier issue troubleshooting.

<v-clicks>

- <twemoji-light-bulb /> Nuxt itself is partly made of modules and relies on module APIs.

</v-clicks>

::before::

### Extra Perks to Learning Nuxt Modules

--- slides
layout: v-center

---

Being familiar with Nuxt module structure allows to:

<v-clicks>

- <twemoji-card-file-box /> Have a better understanding of modules you use

</v-clicks>

<div class="invisible" aria-hidden="true">

- foo
  - bar
	- baz

</div>

::before::

### Extra Perks to Learning Nuxt Modules

--- slides
layout: v-center

---

<!-- prettier-ignore-start -->
```typescript {all|9-15}
import { defineNuxtModule } from "@nuxt/kit";

export default defineNuxtModule({
	meta: { /* ... */ },
	defaults: { /* ... */ },
	setup(options, nuxt) {
		/* ... */

		// Inject options via virtual template
		nuxt.options.alias['#color-mode-options'] = addTemplate({
			filename: 'color-mode-options.mjs',
			getContents: () => Object.entries(options).map(([key, value]) =>
				`export const ${key} = ${JSON.stringify(value, null, 2)}
			`).join('\n')
		}).dst

		/* ... */
	},
});
```
<!-- prettier-ignore-end -->

<footnote>

Source: [github.com/nuxt-community/color-mode-module](https://github.com/nuxt-community/color-mode-module/blob/07b261f/src/module.ts#L37-L43)

</footnote>

::before::

### Extra Perks to Learning Nuxt Modules

--- slides
layout: v-center

---

Being familiar with Nuxt module structure allows to:

- <twemoji-card-file-box /> Have a better understanding of modules you use
- <twemoji-technologist /> Contribute to the ecosystem

  <v-clicks>

  - <twemoji-anger-symbol /> Found a bug? You can fix it!
  - <twemoji-drooling-face /> Craving for a feature? Open a PR~

  </v-clicks>

::before::

### Extra Perks to Learning Nuxt Modules

--- slides
layout: center

---

## Nuxt modules are an excellent way to get started and comfortable with open-source!

<small v-click>All community modules -> [nuxt.com/modules](https://nuxt.com/modules)</small>

--- slides
layout: cover

---

# Nuxt 3 Modules and Open-Source

_Make your own, for your team or the whole community._

--- slides
layout: v-center

---

### Nuxt modules:

<v-clicks>

- <twemoji-snow-capped-mountain /> Are a way to extend Nuxt functionalities endlessly
- <twemoji-astonished-face /> You can make Nuxt modules, for your team or the whole community
- <twemoji-triangular-ruler /> Modules are nicely structured and come with an improved developer experience in Nuxt 3
- <twemoji-woman-student /> Learning that structure gives you a better understanding of Nuxt
- <twemoji-green-heart /> Allows you to get involved in the community

</v-clicks>

--- slides
layout: v-center

---

<div>

<p class="mb-2">

<twemoji-books class="inline" /> &nbsp;Everything from this talk & more:

</p>

#### -> [lucie.red/london](https://lucie.red/london)

</div>

<div class="mt-6" v-click>

<p class="mb-2">

<twemoji-megaphone class="inline" /> &nbsp;Twitter:

</p>

#### -> [lucie.red/twitter](https://lucie.red/twitter)

</div>

<div class="mt-6" v-click>

<p class="mb-2">

<twemoji-elephant class="inline" /> &nbsp;Mastodon:

</p>

#### -> [lucie.red/mastodon](https://lucie.red/mastodon)

</div>

::before::

### All the Info

--- slides
layout: cover

---

# Thanks!

<small>

[lucie.red/london](https://lucie.red/london) — [lucie.red/twitter](https://lucie.red/twitter) — [lucie.red/mastodon](https://lucie.red/mastodon)

</small>
