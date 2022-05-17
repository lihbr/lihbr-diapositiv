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
```javascript {all|6|7|1,8|9-12|6,15}
import thirdModule from "third-module";

// nuxt.config.js
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
- Storyblok -> [nuxt-storyblok](https://github.com/storyblok/storyblok-nuxt)
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

<twemoji-bento-box class="inline" /> &nbsp;Nuxt modules can do pretty much anything.

<v-click>

-^

<twemoji-building-construction class="inline" /> &nbsp;Abtract code from your different projects and share it reliably.

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

<twemoji-heart-hands class="inline" /> &nbsp;Facilitate integration with the _(new or niche)_ tools you use.

-^

<twemoji-hammer-and-wrench class="inline" /> &nbsp;Craft modules for them, why not?

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
