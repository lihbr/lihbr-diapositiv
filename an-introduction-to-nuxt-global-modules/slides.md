---
theme: diapositiv
lineNumbers: true
layout: cover
themeConfig:
  pip: "large"
info: |
  #### An Introduction to Nuxt<br />Global Modules

  _Like Chrome extensions, but for your Nuxt.js environments._

  <br />

  Everything from this talk & more:

  **-> [lucie.red/nuxtnation](https://lucie.red/nuxtnation)**

  <br />

  My blog:

  **-> [lucie.red](https://lucie.red)**

  <br />

  Twitter:

  **-> [lucie.red/twitter](https://lucie.red/twitter)**
---

# An Introduction to Nuxt Global Modules

_Like Chrome extensions, but for your Nuxt.js environments._

--- slides
layout: items
cols: 3

---

<twemoji-light-bulb />

<div class="self-center heading-h2 heading-reset">-></div>

<twemoji-mobile-phone />

::before::

### Philips Hue

--- slides
layout: items
cols: 2

---

<div>
<twemoji-satellite />

API?

</div>

<div v-click>
<twemoji-antenna-bars />

Local netork?

</div>

::before::

### Philips Hue

--- slides
layout: center

---

## What if I Make a Nuxt Module for Philips Hue?

--- slides
layout: v-center

---

- <twemoji-rocket /> Triggers lights on Nuxt startup

<v-clicks>

- <twemoji-vertical-traffic-light /> Triggers other lights when ready
- <twemoji-fire /> And maybe some other upon error

</v-clicks>

::before::

### Philips Hue x Nuxt?

--- slides
layout: v-center

---

- <twemoji-check-mark-button /> That's possible

<v-clicks>

- <twemoji-party-popper /> It's a fun concept
- <twemoji-megaphone /> Would make for a great tweet and video

</v-clicks>

::before::

### Philips Hue x Nuxt?

--- slides
layout: center

---

![Nuxt Hue announcement tweet](/tweetNuxtHue-light.png)
![Nuxt Hue announcement tweet](/tweetNuxtHue-dark.png)

<small>
Thank you all&nbsp; <twemoji-folded-hands class="inline" />
</small>

--- slides
layout: center

---

<nuxt-hue-plan />

::before::

### 3 Months to Make Nuxt Hue

--- slides
layout: center

---

## What about collaborators that don't have Philips Hue?

--- slides
layout: v-center

---

### People who won't<br /> care about Nuxt Hue:

<v-clicks>

- <twemoji-robot /> GitHub CI
- <twemoji-technologist /> Most of my coworkers

</v-clicks>

--- slides
layout: center

---

## Why would I impact my codebase with something that's only "fun"?

<small v-click>(apart from next level developer experience, ofc.)</small>

--- slides
layout: v-center

---

### Nuxt Hue:

<v-clicks>

- <twemoji-prohibited /> No impact on the codebase
- <twemoji-wrench /> Configured once
- <twemoji-globe-with-meridians /> Installed globally

</v-clicks>

--- slides
layout: center

---

## Nuxt Hue is a<br />Nuxt global module

--- slides
layout: cover

---

## I'm Lucie Haberer

_a.k.a. lihbr_

--- slides
layout: v-center

---

- <twemoji-baguette-bread /> I'm from Paris

<v-clicks>

- <twemoji-woman-student /> Computer Science Student
- <logos-prismic-icon /> Developer Experience Engineer at Prismic
- <logos-nuxt-icon /> Proud Nuxt ambassador
- <twemoji-1st-place-medal /> First talk ever

</v-clicks>

::before::

### About Me

--- slides
layout: cover

---

<v-clicks>

## Quick Nuxt Module<br />Recap <twemoji-index-pointing-up class="inline" />

<small>Beginner friendly~</small>

</v-clicks>

--- slides
layout: center

---

## What are Nuxt modules?

--- slides
layout: v-center

---

> Modules are Nuxt.js extensions which can extend its core functionality and add endless integrations.

<small>— [Nuxt.js docs](https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-modules)</small>

--- slides
layout: items
cols: 3
rows: 2
centered: true

---

<logos-pwa v-click />

<v-click>

<div class="heading-h2 heading-reset" v-click>-></div>

### [@nuxtjs/pwa](https://pwa.nuxtjs.org/)

</v-click>

<logos-prismic-icon v-click />

<v-click>

<div class="heading-h2 heading-reset" >-></div>

### [@nuxtjs/prismic](https://prismic.nuxtjs.org/)

</v-click>

::before::

### What are Nuxt modules?

--- slides
layout: v-center

---

- Content -> [@nuxt/content](https://content.nuxtjs.org)
- Storyblok -> [nuxt-storyblok](https://github.com/storyblok/storyblok-nuxt)
- Strapi -> [@nuxtjs/strapi](https://strapi.nuxtjs.org)
- Sanity -> [@nuxtjs/sanity](https://sanity.nuxtjs.org)
- [And more CMS modules...](https://modules.nuxtjs.org/?orderBy=desc#CMS)

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
layout: v-center

---

Nuxt Modules are registered inside your Nuxt config file:

<!-- prettier-ignore-start -->
```javascript {all|4|5|6}
// nuxt.config.js
export default {
	modules: [
		"@nuxtjs/pwa",
		"~/modules/my-module",
		["@nuxtjs/prismic", { /* ... */ }],
	],
	buildModules: [/* works the same way */],
};
```
<!-- prettier-ignore-end -->

::before::

### More Nuxt Modules Basics

--- slides
layout: v-center

---

A Nuxt module is a function:

```javascript {all|3-4|6-7}
// ~/modules/my-module
export default function (moduleOptions) {
	// Options provided to the module...
	console.log(moduleOptions);

	// Nuxt instance
	console.log(this);
}
```

::before::

### More Nuxt Modules Basics

--- slides
layout: v-center

---

<v-clicks>

- <twemoji-mobile-phone /> “There's a module for that”
- <twemoji-gear /> Modules are registered inside Nuxt config
- <twemoji-building-construction /> Modules are functions

</v-clicks>

::before::

### Quick Nuxt Module Recap

--- slides
layout: cover

---

## Nuxt Global Modules

<small>(finally)</small>

--- slides
layout: center

---

## What are Nuxt global modules?

--- slides
layout: v-center
clicks: 6

---

<ul>
<li v-if="$slidev.nav.clicks <= 1" :class="{ invisible: $slidev.nav.clicks < 1 }">

<twemoji-mobile-phone /> “There's a module for that”

<br />

</li>
<li v-if="$slidev.nav.clicks > 1">

<twemoji-prohibited /> ~~“There's a module for that”~~

- <twemoji-check-mark-button /> There's plenty to be built

</li>

<li v-if="$slidev.nav.clicks <= 3" :class="{ invisible: $slidev.nav.clicks < 3 }">

<twemoji-gear /> Modules are registered inside Nuxt config

<div class="invisible">

- <twemoji-check-mark-button /> Global modules are registered and configured globally (once)

</div>

</li>
<li v-if="$slidev.nav.clicks > 3">

<twemoji-prohibited /> ~~Modules are registered inside Nuxt config~~

- <twemoji-check-mark-button /> Global modules are registered and configured globally (once)

</li>

<li v-if="$slidev.nav.clicks <= 5" :class="{ invisible: $slidev.nav.clicks < 5 }">
	<twemoji-building-construction /> Modules are functions
</li>
<li v-if="$slidev.nav.clicks > 5">
	<twemoji-check-mark-button /> Global modules are functions
</li>
</ul>

::before::

### Global Module Features

--- slides
layout: v-center

---

- <twemoji-construction /> There's plenty to be built
- <twemoji-gear /> Global modules are registered and configured globally (once)
- <twemoji-building-construction /> Global modules are functions

<v-click>

- <twemoji-prohibited /> Global modules have no impact on the codebase nor the final website

</v-click>

::before::

### Global Module Features

--- slides
layout: center

---

## What do global modules enable us to do?

--- slides
layout: items
cols: 1

---

<twemoji-prohibited class="inline" /> &nbsp;Global modules have no impact on the codebase nor the final website.

<v-click>

-^

<twemoji-magic-wand class="inline" /> &nbsp;Global modules work transparently across **all Nuxt projects** on your computer.

</v-click>

::before::

### Global Modules Power

--- slides
layout: items
cols: 1

---

A Chrome extension personalizes your experience on every website you visit.

<v-click>

-^

A global module personalizes your experience on every Nuxt project you work on.

</v-click>

::before::

### Global Modules Power

--- slides
layout: center

---

## Global modules are about personalization

--- slides
layout: center

---

![Nuxt Hue logo](/nuxtHue-light.svg)
![Nuxt Hue logo](/nuxtHue-dark.svg)

<small class="mt-6 block">Enlighten your Nuxt experience</small>

<footnote>

Documentation: [nuxt-hue.lihbr.com](https://nuxt-hue.lihbr.com)

</footnote>

::before::

### Global Modules x Personalization

--- slides
layout: v-center

---

- Having to install it on every project felt off

<v-click>

- Wouldn't have used it so extensively if so

</v-click>

::before::

### Global Modules x Personalization

--- slides
layout: center

---

![Bongo Cat cursor on Google](/googleBongoCat-light.gif)
![Bongo Cat cursor on Google](/googleBongoCat-dark.gif)

--- slides
layout: v-center

---

<v-clicks>

- <twemoji-warning /> A global module that warns you when there are updates to your other Nuxt modules.
- <twemoji-chart-increasing /> A global module that gives you performance statistics about your current Nuxt project.

</v-clicks>

::before::

### Global Modules x Personalization

--- slides
layout: v-center

---

<v-click>

A hypothetical Google Analytics module:

</v-click>

<v-clicks>

- <twemoji-prohibited /> Needs to impact your site directly
- <twemoji-prohibited /> Requires a per-project/shared configuration
- <twemoji-prohibited /> Overall is just not about personalization

</v-clicks>

::before::

### A Bad Example

--- slides
layout: cover

---

<v-click>

## Let's Build One<br />Together!

<small>...and jump to some code~</small>

</v-click>

--- slides
layout: center

---

## &lt;live-coding /&gt;

--- slides
layout: center

---

## .nuxtrc

--- slides
layout: v-center

---

### .nuxtrc:

<v-clicks>

- <twemoji-house-with-garden /> Lives in your home directory: `~/.nuxtrc`
- <twemoji-bar-chart /> Used by Nuxt to store telemetry preferences
- <twemoji-gear /> Uses the same interface as `nuxt.config.js`
- <twemoji-japanese-castle /> Used as a base to resolve Nuxt configs
- <twemoji-japanese-service-charge-button /> Uses RC syntax instead of JSON/JavaScript

</v-clicks>

--- slides
layout: center

---

## &lt;live-coding /&gt;

--- slides
layout: cover

---

## What We Achieved

--- slides
layout: v-center

---

### .nuxtrc:

<v-clicks>

- <twemoji-house-with-garden /> Lives in our home directory: `~/.nuxtrc`
- <twemoji-japanese-castle /> Used as a base to resolve Nuxt configs
- <twemoji-pencil /> Easily editable by a script using [`rc9`](https://www.npmjs.com/package/rc9)
- <twemoji-woman-running /> The go-to way to register global modules

</v-clicks>

--- slides
layout: v-center

---

### Node CLIs:

<v-clicks>

- <twemoji-receipt /> Are basically Node.js scripts
- <twemoji-file-cabinet /> Are shipped using the `bin` config of `package.json`:
  ```json
  {
  	"bin": {
  		"module-docs": "./bin/cli.js"
  	}
  }
  ```
- <twemoji-anger-symbol /> A [hashbang](<https://en.wikipedia.org/wiki/Shebang_(Unix)>) is necessary for the CLI to execute correctly:

  ```javascript
  #!/usr/bin/env node

  // CLI code...
  ```

</v-clicks>

--- slides
layout: items
cols: 3
centered: true

---

<div>
<twemoji-triangular-ruler />

Regular module

</div>

<v-click>

<div class="heading-h2 heading-reset" v-click>-></div>

<div>
<twemoji-globe-with-meridians />

Global module

</div>

</v-click>

<div class="text-left col-span-full">

<v-clicks>

- <twemoji-ninja /> Now available transparently on all our Nuxt projects
- <twemoji-rocket /> Shipped to npm, give it a try yourself:

  ```bash
  npm install --global @lihbr/module-docs && module-docs
  ```

</v-clicks>

</div>

::before::

### What We Achieved

--- slides
layout: cover

---

## Global Modules Takeaways

--- slides
layout: v-center

---

### Global modules:

<v-clicks>

- <twemoji-straight-ruler /> Are about personalization
- <twemoji-prohibited /> Have no impact on your codebase nor the final website
- <twemoji-hammer-and-wrench /> Are built just like regular modules
- <twemoji-globe-with-meridians /> Are registered and configured globally through the `.nuxtrc` file
- <twemoji-ninja /> Work transparently across all our Nuxt projects
- <twemoji-control-knobs /> A simple CLI makes for a great interface to enable, disable, and configure a global module

</v-clicks>

--- slides
layout: cover

---

# An Introduction to Nuxt Global Modules

_Like Chrome extensions, but for your Nuxt.js environments._

--- slides
layout: v-center

---

<div>

<twemoji-books class="inline mb-2" /> &nbsp;Everything from this talk & more:

#### -> [lucie.red/nuxtnation](https://lucie.red/nuxtnation)

</div>

<div class="mt-6" v-click>

<twemoji-newspaper class="inline mb-2" /> &nbsp;My blog:

#### -> [lucie.red](https://lucie.red)

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

[lucie.red/nuxtnation](https://lucie.red/nuxtnation) — [lucie.red](https://lucie.red) — [lucie.red/twitter](https://lucie.red/twitter)

</small>
