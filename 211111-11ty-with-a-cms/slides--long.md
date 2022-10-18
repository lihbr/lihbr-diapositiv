---
theme: diapositiv
lineNumbers: true
layout: cover
themeConfig:
  pip: "large"
info: |
  #### Integrating 11ty With a CMS<br />and Making It Cool to Use

  _Getting dynamic data down for 11ty 1.0._

  <br />

  Everything from this talk & more:

  **-> [lucie.red/11ties](https://lucie.red/11ties)**

  <br />

  Personal site:

  **-> [lucie.red](https://lucie.red)**

  <br />

  Twitter:

  **-> [lucie.red/twitter](https://lucie.red/twitter)**
---

# Integrating 11ty With a CMS and Making It Cool to Use

_Getting dynamic data down for 11ty 1.0._

--- slides
layout: items
cols: 3

---

<mdi-language-markdown />

<v-click>

<div class="self-center heading-h2 heading-reset">or</div>

<mdi-code-json />

</v-click>

::before::

### 11ty websites with...

--- slides
layout: center

---

## What about data coming from elsewhere than our filesystem?

<small v-click>More precisely, from a CMS?</small>

--- slides
layout: v-center

---

### This talk:

<v-clicks>

- <twemoji-airplane-arrival /> How can we get data from a CMS?
- <twemoji-balloon /> What's the 11ty 1.0 version of doing so?
- <twemoji-electric-plug /> How can we abstract that into a plugin?

</v-clicks>

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
- <twemoji-woman-gesturing-no /> Not an ad
- <twemoji-green-heart /> Vue & proud Nuxt ambassador

</v-clicks>

::before::

### About Me

--- slides
layout: cover

---

<v-clicks>

## What's a CMS and why one?

</v-clicks>

--- slides
layout: v-center

---

<v-clicks>

- <twemoji-open-book /> **C**ontent **M**anagement **S**ystem
- <twemoji-hammer-and-wrench /> A tool dedicated to managing content

</v-clicks>

::before::

### What's a CMS

--- slides
layout: v-center

---

### Anything is a CMS:

<v-clicks>

- <twemoji-spiral-notepad /> A notebook is a CMS
- <twemoji-abacus /> Excel is a CMS
- <twemoji-computer-disk /> GitHub's a CMS
- <twemoji-family-man-woman-girl /> WordPress, Sanity, Prismic, Contentful, are all CMSs

</v-clicks>

--- slides
layout: v-center

---

<v-clicks>

- <twemoji-open-book /> The way users interact with them
- <twemoji-hammer-and-wrench /> How easy it is to get content from them to a website

</v-clicks>

::before::

### What's the difference between all of those?

--- slides
class: shitUserStory

---

<style>
.slidev-layout.shitUserStory {
	@apply font-light text-cream;
	background: linear-gradient(60deg, #f5b108 0%, #e48845 17%, #d3637b 33%, #c137be 50%, #9847e8 67%, #7276f1 83%, #36c0fe 100%);
	font-size: 1.875rem !important;
}

.slidev-layout.pip-large.shitUserStory {
	font-size: 1.5rem !important;
}
</style>

<v-click>

As an...

<strong class="ml-6 block">agency</strong>

</v-click>

<v-click>

I want to...

<strong class="ml-6 block">tell my client to write their blog posts in a notebook, and then send pictures of it to a service</strong>

</v-click>

<v-click>

So that...

<strong class="ml-6 block">the content of their website gets updated</strong>

<footnote class="!text-cream">

More like this [@ShitUserStory](https://twitter.com/ShitUserStory)

</footnote>

</v-click>

--- slides
layout: center

---

![Sanity's dashboard](/sanityDashboard.png)

--- slides
layout: center

---

![Prismic's dashboard](/prismicDashboard.png)

--- slides
layout: v-center

---

<v-clicks>

- <twemoji-hatching-chick /> Not everyone is familiar with MarkDown, JSON, or even GitHub
- <twemoji-abacus /> "Traditional" CMSs are here to make managing content accessible to anyone
- <twemoji-rocket /> You can then use this content on your 11ty website

</v-clicks>

::before::

### Why a CMS?

--- slides
layout: cover

---

<v-clicks>

## How to get data from a CMS inside 11ty?

</v-clicks>

--- slides
layout: items
cols: 3

---

<div>

<twemoji-card-file-box />

Data

</div>

<v-click>

<div class="self-center heading-h2 heading-reset">-></div>

<div>

<twemoji-water-wave />

Data cascade

</div>

</v-click>

::before::

### How to get data from a CMS inside 11ty?

--- slides
layout: v-center
clicks: 2

---

### Data cascade in 11ty 0.x:

1. Computed Data
2. Front Matter Data in a Template
3. Front Matter Data in Layouts
4. Template Data Files
5. Directory Data Files
6. Global Data Files <span v-click="2"><- Savior &nbsp;<twemoji-party-popper class="inline" /></span>

<v-click at="1">

7. ~~CMS Data~~

</v-click>

<footnote>

[Data cascade documentation page](https://11ty.dev/docs/data-cascade)

</footnote>

--- slides
layout: center

---

## &lt;live-coding /&gt;

--- slides
layout: center

---

<v-clicks>

## So... that was 11ty 0.x?

</v-clicks>

--- slides
layout: center

---

## What about 11ty 1.0?

--- slides
layout: items
cols: 3

---

<div>

<twemoji-card-file-box />

Data

</div>

<v-click>

<div class="self-center heading-h2 heading-reset">-></div>

<div>

<twemoji-water-wave />

Data cascade

</div>

</v-click>

::before::

### How to get data from a CMS inside 11ty?

--- slides
layout: v-center
clicks: 2

---

### Data cascade in 11ty 1.0:

1. Computed Data
2. Front Matter Data in a Template
3. Template Data Files
4. Directory Data Files
5. Front Matter Data in Layouts
6. Global Data Files <span v-click><- Still here! &nbsp;<twemoji-party-popper class="inline" /></span>
7. Custom Global Data <span v-click><- New! &nbsp;<twemoji-sparkles class="inline" /></span>

<footnote>

[Data cascade documentation page](https://11ty.dev/docs/data-cascade)

</footnote>

--- slides
layout: center

---

## What are custom global data?

--- slides
layout: v-center
clicks: 4

---

### Custom global data:

<ul>

<li v-click><twemoji-gear /> Injects global data directly from 11ty configuration</li>
<li v-click><twemoji-page-facing-up /> No global data files involved</li>

<li :class="{ 'invisible': $slidev.nav.clicks < 3, 'opacity-30': $slidev.nav.clicks > 3 }">

<twemoji-electric-plug /> Easier to bundle logic into a plugin

</li>

</ul>

--- slides
layout: center

---

## &lt;live-coding /&gt;

--- slides
layout: center

---

<v-clicks>

## God, that was complicated!

<small>...at least compared to global data files.</small>

</v-clicks>

--- slides
layout: center

---

## Our code is now ready to be shared as a plugin!

--- slides
layout: v-center
class: shipItToNPM

---

<style>
.slidev-layout.shipItToNPM .fun {
	@apply bg-clip-text text-transparent;
	background-image: linear-gradient(60deg, #f5b108 0%, #e48845 17%, #d3637b 33%, #c137be 50%, #9847e8 67%, #7276f1 83%, #36c0fe 100%);
}
</style>

### How to ship it to npm:

<ol>

<li v-click>

Update your `package.json`:

```json {4}
{
	"name": "eleventy-plugin-your-favorite-cms",
	"version": "1.0.0",
	"main": ".eleventy.js",
	"scripts": {
		/* ... */
	},
	"dependencies": {
		/* ... */
	},
	"devDependencies": {
		/* ... */
	}
}
```

</li>

<li v-click>

Publish it:

```bash
npm publish
```

</li>

</ol>

<h2 class="fun absolute top-30 left-10 transform -rotate-z-30" v-after>Boom!</h2>
<h2 class="fun absolute bottom-30 right-30 transform rotate-z-30 z-10" v-click>We're done!</h2>

--- slides
layout: center

---

## Not so fast <twemoji-index-pointing-up class="inline" />

--- slides
layout: center

---

![11ty Prismic plugin GitHub](/eleventyPluginPrismic-light.png)
![11ty Prismic plugin GitHub](/eleventyPluginPrismic-dark.png)

--- slides
layout: cover

---

## Tips on Creating a Plugin

--- slides
layout: v-center

---

### 1. Using the [debug](https://www.npmjs.com/package/debug) package

<ul>

<li v-click>

<twemoji-1st-place-medal /> [Preferred 11ty way to log things](https://www.11ty.dev/docs/debugging)

</li>
<li v-click>

<twemoji-desktop-computer /> From our example:

```javascript {1,8}
const debug = require("debug")("Eleventy:Demo");
const { getCMSData } = require("your-favorite-cms");

module.exports = (eleventyConfig) => {
	const cmsData = (async () => {
		const data = await getCMSData();

		debug(data);

		return data;
	})();

	eleventyConfig.addGlobalData("cms", () => cmsData);
};
```

</li>

</ul>

--- slides
layout: v-center

---

### 2. Allowing for options if necessary

<v-clicks>

- <twemoji-anger-symbol /> Pretty crucial with CMSs
- <twemoji-2nd-place-medal /> Comes as a second argument to the config function

  ```javascript
  module.exports = (eleventyConfig, pluginOptions) => {
  	/* ... */
  };
  ```

</v-clicks>

--- slides
layout: v-center

---

### 3. Providing shortcodes

<v-clicks>

- <twemoji-bookmark /> `eleventyConfig` comes with more than just `addGlobalData()`

  ```javascript
  module.exports = (eleventyConfig, pluginOptions) => {
  	eleventyConfig.addShortcode("helloWorld", (name = "world") => {
  		return `Hello ${name}!`;
  	});

  	/* ... */
  };
  ```

- <twemoji-call-me-hand /> Handy to help template specific data structures

</v-clicks>

--- slides
layout: v-center

---

### 4. Shipping type definitions with [TSDoc](https://tsdoc.org)

<v-clicks>

- <twemoji-chart-increasing /> A bit advanced
- <twemoji-factory /> Not mandatory to have a TypeScript build pipeline

</v-clicks>

--- slides
layout: center

---

## &lt;live-coding /&gt;

--- slides
layout: cover

---

## Takeaways

--- slides
layout: v-center

---

### Integrating 11ty With a CMS:

<ul>

<li v-click="1">

<twemoji-globe-with-meridians /> [Global Data Files](https://www.11ty.dev/docs/data-global) are great at doing so with 11ty 0.x and 1.0

</li>

<li v-click="2">

<twemoji-wrench /> [Custom Global Data](https://www.11ty.dev/docs/data-global-custom) is a new way in 11ty 1.0 to do so

<v-clicks at="3">

- <twemoji-anger-symbol /> A bit more complicated
- <twemoji-electric-plug /> Eases the work of creating a plugin

</v-clicks>

</li>

</ul>

--- slides
layout: v-center

---

### Creating plugins:

<v-clicks>

- <twemoji-page-facing-up /> Plugins can be nothing more than an 11ty configuration file
- <twemoji-loudspeaker /> Use the [debug](https://www.11ty.dev/docs/debugging) package for logging things
- <twemoji-control-knobs /> Allow for options with the 2nd configuration argument
- <twemoji-pager /> `addGlobalData`, `addShortcode` and many more through the `eleventyConfig` object
- <twemoji-japanese-service-charge-button /> Providing type definitions with [TSDoc](https://tsdoc.org) is a nice touch

</v-clicks>

--- slides
layout: cover

---

# Integrating 11ty With a CMS and Making It Cool to Use

_Getting dynamic data down for 11ty 1.0._

--- slides
layout: v-center

---

<div>

<p class="mb-2">

<twemoji-books class="inline" /> &nbsp;Everything from this talk & more:

</p>

#### -> [lucie.red/11ties](https://lucie.red/11ties)

</div>

<div class="mt-6" v-click>

<p class="mb-2">

<twemoji-newspaper class="inline" /> &nbsp;My blog:

</p>

#### -> [lucie.red](https://lucie.red)

</div>

<div class="mt-6" v-click>

<p class="mb-2">

<twemoji-megaphone class="inline" /> &nbsp;Twitter:

</p>

#### -> [lucie.red/twitter](https://lucie.red/twitter)

</div>

::before::

### All the Info

--- slides
layout: cover

---

# Thanks!

<small>

[lucie.red/11ties](https://lucie.red/11ties) — [lucie.red](https://lucie.red) — [lucie.red/twitter](https://lucie.red/twitter)

</small>
