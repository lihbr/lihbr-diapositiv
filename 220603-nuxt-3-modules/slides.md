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

  **-> [lucie.red/amsterdam](https://lucie.red/amsterdam)**

  <br />

  Personal site:

  **-> [lucie.red](https://lucie.red)**

  <br />

  Twitter:

  **-> [lucie.red/twitter](https://lucie.red/twitter)**
---

# Nuxt 3 Modules and Open-Source

_Make your own, for your team or the whole community._

--- slides
layout: center

---

<talk-timeline />

::before::

### Talking To You Today...

--- slides
layout: center

---

<img src="/phone.gif" alt="Phone gif" class="h-screen object-contain" />

--- slides
layout: items
cols: 2

---

<v-clicks>

<div>
<logos-vue />

Vue 3

</div>

<div class="opacity-40">
<logos-nuxt-icon />

Nuxt 3

</div>

</v-clicks>

::before::

### Back in August 2021...

--- slides
layout: v-center

---

<v-clicks>

- <twemoji-2nd-place-medal /> Nuxt 2
- <twemoji-bento-box /> Nuxt 2 modules
- <twemoji-exploding-head /> Awesome stuff
- <twemoji-rocket /> Next steps

</v-clicks>

--- slides
layout: center

---

<img src="/kidding.gif" alt="Kidding gif" class="h-screen object-contain" />

--- slides
layout: center

---

## We'll talk about<br />Nuxt 3!

--- slides
layout: center

---

## We'll talk about<br />Nuxt 3 Modules!

--- slides
layout: v-center

---

### Nuxt 3 modules:

<v-clicks>

- <twemoji-thinking-face /> What they're about?
- <twemoji-technologist /> How you can make some?
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

- <twemoji-woman-student /> Just done with Computer Science
- <logos-prismic-icon /> Developer Experience Engineer at Prismic
- <logos-nuxt-icon /> Proud Nuxt contributor & ambassador

</v-clicks>

::before::

### About Me

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

<small>— [Nuxt.js docs](https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-modules)</small>

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

### What are Nuxt modules?

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

export default {
	modules: [
		"@nuxtjs/pwa",
		"~/modules/my-module",
		thirdModule,
		[
			"@nuxtjs/prismic",
			{ endpoint: "https://example.cdn.prismic.io/api/v2" }
		],
	],
	
	pwa: { icon: false }
};
```
<!-- prettier-ignore-end -->

::before::

### What are Nuxt modules?

--- slides
layout: center

---

## Modules with Nuxt 2

--- slides
layout: items
cols: 3
rows: 2
centered: true

---

<logos-pwa v-click />

<v-click>

<div class="heading-h2 heading-reset" v-click>-></div>

### [@nuxtjs/pwa](https://pwa.nuxtjs.org)

</v-click>

<logos-prismic-icon v-click />

<v-click>

<div class="heading-h2 heading-reset" >-></div>

### [@nuxtjs/prismic](https://prismic.nuxtjs.org)

</v-click>

::before::

### Modules with Nuxt 2

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

Comprehensive list -> [modules.nuxtjs.org](https://modules.nuxtjs.org)

--- slides
layout: center

---

## Let's talk about Nuxt 3!

--- slides
layout: v-center

---

Nuxt 3 modules:

- <twemoji-check-mark-button /> Are now a thing

<v-clicks>

- <twemoji-check-mark-button /> Nicer developer experience
- <twemoji-prohibited /> Tiny ecosystem as of today
- <twemoji-rocket /> They're the future!

</v-clicks>

::before::

### Let's talk about Nuxt 3!

--- slides
layout: v-center

---

<v-clicks>

- <twemoji-bento-box /> Modules are addons for Nuxt
- <twemoji-gear /> Modules are registered inside Nuxt config
- <twemoji-2nd-place-medal /> Nuxt 2 module ecosystem is rich but _"legacy"_
- <twemoji-3rd-place-medal /> Nuxt 3 is fancy but _"newborn"_

</v-clicks>

::before::

### Nuxt Module Recap

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

<twemoji-bento-box /> &nbsp;Nuxt modules can do pretty much anything.

<v-click>

-^

<twemoji-building-construction /> &nbsp;Abtract code from your different projects and share it reliably.

</v-click>

--- slides
layout: v-center

---

Things that I abstracted from my project:

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

<twemoji-heart-hands class="inline" /> &nbsp;Facilitate integration with the tools you use.

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

<twemoji-heart-hands /> &nbsp;Facilitate integration with the _(new or niche)_ tools you use.

-^

<twemoji-hammer-and-wrench /> &nbsp;Craft modules for them, why not?

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

--- slides
layout: v-center

---

What's new:

<v-clicks>

- <twemoji-japanese-service-charge-button /> First-class TypeScript support
- <twemoji-classical-building /> Stronger structure
- <twemoji-triangular-ruler /> Nicer developer experience and defaults

</v-clicks>

::before::

### Let’s Learn How to Create Nuxt 3 Modules

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
layout: center

---

## &lt;live-coding /&gt;

--- slides
layout: center

---

### That was 3 things you can do with modules

--- slides
layout: v-center

---

- <twemoji-cyclone /> Adding auto-imports for composables

<v-clicks>

- <twemoji-bento-box /> Adding auto-imports for components
- <twemoji-abacus /> And many more...

</v-clicks>

--- slides
layout: center

---

## <twemoji-index-pointing-up /> What about hooks?

--- slides
layout: items
cols: 1

---

<twemoji-window /> &nbsp;Hooks are windows to Nuxt internals to which you can hook to.

<v-click>

-^

<twemoji-person-running /> &nbsp;They allow you to get information about, and alter Nuxt behaviors.

<v-click>

<twemoji-rocket /> &nbsp;They are a bit advanced, but really what make Nuxt modules capable of anything.

</v-click>

</v-click>

::before::

### What about hooks?

--- slides
layout: v-center

---

<!-- prettier-ignore-start -->
```typescript {6-10,14-16|14-16|6-10|all}
import { defineNuxtModule } from "@nuxt/kit";

export default defineNuxtModule({
	meta: { /* ... */ },
	defaults: { /* ... */ },
	hooks: {
		"pages:extend": (pages) => {
			console.info(`Discovered ${pages.length} pages`);
		},
	},
	setup(options, nuxt) {
		/* ... */

		nuxt.hook("pages:extend", (pages) => {
			console.info(`Discovered ${pages.length} pages`);
		});
	},
});
```
<!-- prettier-ignore-end -->

--- slides
layout: v-center

---

### About writing modules:

<v-clicks>

- <twemoji-ferris-wheel /> Any code can run in the module `setup` function
- <twemoji-toolbox /> `@nuxt/kit` provides a lot of utilities for common tasks
- <twemoji-sunrise-over-mountains /> The `runtime` directory holds assets made available by the module
- <twemoji-hook /> Hooks are windows to Nuxt internals, that can react to, and alter them

</v-clicks>

--- slides
layout: center

---

## So we know how to module, what now?

--- slides
layout: v-center
clicks: 3

---

- <twemoji-newspaper /> Share our module on npm: pick a version + `npm publish`

<v-click at=1>

- <twemoji-alembic /> Let's test it at some point!

  <v-click at="2">

  - <twemoji-alarm-clock /> Nuxt Test Utils still on their way~

  </v-click>

</v-click>

<v-click at="3">

- <twemoji-abacus /> Streamline publishing process [Standard Version CLI](https://github.com/conventional-changelog/standard-version)

</v-click>

::before::

### So we know how to module, what now?

--- slides
layout: center
clicks: 1

---

<h2 v-if="$slidev.nav.clicks < 1">That's...</h2>
<h2 v-if="$slidev.nav.clicks >= 1">That’s not all folks</h2>
<small v-click="1">I lied...</small>

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

<small v-click>All community modules -> [modules.nuxtjs.org](https://modules.nuxtjs.org)</small>

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

<twemoji-books class="inline mb-2" /> &nbsp;Everything from this talk & more:

#### -> [lucie.red/amsterdam](https://lucie.red/amsterdam)

</div>

<div class="mt-6" v-click>

<twemoji-megaphone class="inline mb-2" /> &nbsp;Twitter:

#### -> [lucie.red/twitter](https://lucie.red/twitter)

</div>

::before::

### All the Info

--- slides
layout: cover

---

# Thanks!

<small>

[lucie.red/amsterdam](https://lucie.red/amsterdam) — [lucie.red/twitter](https://lucie.red/twitter)

</small>
