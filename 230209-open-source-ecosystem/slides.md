---
theme: diapositiv
lineNumbers: true
layout: cover
themeConfig:
  pip: "off"
info: |
  #### Maintaining Your Company’s Open-Source Ecosystem

  _...or how to make great npm packages for the mere mortal._

  <br />

  Everything from this talk & more:

  **-> [lucie.red/amsterdam](https://lucie.red/amsterdam)**

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

# Maintaining Your Company’s Open-Source Ecosystem

_...or how to make great npm packages for the mere mortal._

--- slides
layout: center

---

## Let's start with a little story, shall we?

--- slides
layout: items
cols: 5

---

<div class="self-center heading-h2 heading-reset" v-click><logos-nuxt-icon /></div>

<v-click>

<div class="self-center heading-h2 heading-reset">+</div>

<div class="self-center heading-h2 heading-reset"><logos-netlify /></div>

</v-click>

<v-click>

<div class="self-center heading-h2 heading-reset">+</div>

<div>
<logos-wordpress-icon />
<logos-prismic-icon />
<logos-storyblok-icon />
</div>

</v-click>

--- slides
layout: center

---

## It worked great!

<small v-click>However...</small>

--- slides
layout: center

---

![Modern Times Charlie Chaplin GIF](/modernTimes.gif)

--- slides
layout: center

---

## <twemoji-thinking-face /> &nbsp;Making my own packages?

--- slides
layout: center

---

![lihbr utils Nuxt preview](/utilsNuxt-light.png)
![lihbr utils Nuxt preview](/utilsNuxt-dark.png)

--- slides
layout: center

---

![lihbr utils Netlify preview](/utilsNetlify-light.png)
![lihbr utils Netlify preview](/utilsNetlify-dark.png)

--- slides
layout: v-center

---

### That worked great!

<v-clicks>

- <twemoji-cherries /> Cherry-picking my packages on a need basis
- <twemoji-scissors /> No more copy/pasting the same snippets from project to project!

</v-clicks>

--- slides
layout: center

---

## Do you know who faced a similar story around the same period?

--- slides
layout: center

---

![NuxtLabs team](/nuxtlabs.png)

<footnote>

Technically, it's [NuxtLabs](https://nuxtlabs.com) team pictured here~

</footnote>

--- slides
layout: items
cols: 3

---

<div class="self-center">

<img src="/nuxtContrib.png" alt="Nuxt Contrib logo" class="w-32 mx-auto mb-6" />

Then

</div>

<v-click>

<div class="self-center heading-h2 heading-reset">-></div>

<div class="self-center">

<img src="/unjs.png" alt="UnJS logo" class="w-32 mx-auto mb-6" />
Now

</div>

</v-click>

--- slides
layout: v-center

---

<v-click>

### Let's talk package:

</v-click>

<v-clicks>

- <twemoji-globe-with-meridians /> What's a package ecosystems, and why would you have your own?
- <logos-npm /> How package work with NPM?
- <twemoji-wrench /> What package maintenance looks like?

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
- <twemoji-bank /> I worked at a bank™
- <logos-prismic-icon /> Developer Experience Engineer at Prismic
- <logos-nuxt-icon /> Proud Nuxt contributor & ambassador

</v-clicks>

::before::

### About Me

--- slides
layout: center

---

## Let's make it interactive

<small v-click>A little~</small>

--- slides
layout: poll
id: pkg
choices: ["yes", "no"]

---

<qr-code content="https://lucie.red/pkg">
Yes
</qr-code>

<qr-code content="https://lucie.red/nopkg">
No
</qr-code>

::before::

<h3 class="text-center">Have you ever published a package?</h3>

--- slides
layout: cover

---

<v-clicks>

## Package Ecosystems

</v-clicks>

--- slides
layout: items
cols: 3

---

<div>

<twemoji-package />
Packages

</div>

<v-click>

<div class="self-center heading-h2 heading-reset">-></div>

<div>

<twemoji-globe-with-meridians />
Ecosystem of packages

</div>

</v-click>

::before::

### Package Ecosystems

--- slides
layout: center

---

## A better way to think about making packages as an organization or an individual.

--- slides
layout: cover

---

## What’s a Package<br />Ecosystem?

--- slides
layout: v-center

---

> A package ecosystem is all the packages under the responsibility of an entity, whether it's an individual, a company, etc.

--- slides
layout: items
cols: 3

---

<div>

<logos-prismic-icon />
Prismic

</div>

<v-click>

<div class="self-center heading-h2 heading-reset">-></div>

<div>

<twemoji-abacus />
CMS

</div>

</v-click>

<v-click>

<div>

<twemoji-family-man-woman-boy />
Users

</div>

</v-click>

<v-click>

<div class="self-center heading-h2 heading-reset">-></div>

<div>

<twemoji-toolbox />
SDKs (packages)

</div>

</v-click>

--- slides
layout: center

---

<prismic-ecosystem class="mt-12" />

::before::

###  What’s a Package Ecosystem?

--- slides
layout: center

---

<lucie-ecosystem class="mt-12" />

::before::

###  What’s a Package Ecosystem?

--- slides
layout: center

---

## That's my definition of a package ecysostem

<small v-click>But let's precise a few things...</small>

--- slides
layout: v-center

---

- <twemoji-locked-with-key /> Ecosystems can be private

<div class="invisible">

- foo

</div>

::before::

### What’s a Package Ecosystem?

--- slides
layout: cover

---

## <twemoji-bank /> &nbsp;I worked at a bank™

--- slides
layout: v-center

---

- <twemoji-locked-with-key /> Ecosystems can be private
- <twemoji-index-pointing-up /> Ecosystems with just one package are valid

::before::

### What’s a Package Ecosystem?

--- slides
layout: center

---

## That's where considering packages as an ecosystem helps

--- slides
layout: items
cols: 1

---

<p>

<twemoji-cross-mark /> &nbsp;Making an exception

</p>

<v-click>

-^

<p>

<twemoji-check-mark-button /> &nbsp;You're growing an ecosystem that will support you in your journey

</p>

</v-click>

--- slides
layout: v-center

---

<v-clicks>

- <twemoji-globe-with-meridians /> Defines packages under the responsibility of an entity
- <twemoji-locked-with-key /> Can be private or public
- <twemoji-bar-chart /> Can hold as many or as few packages as needed

</v-clicks>

::before::

### Package Ecosystem Recap

--- slides
layout: center

---

<img src="/packageEcosystem.png" alt="Package ecosystem big brain meme" class="h-screen object-contain" v-click />

--- slides
layout: center

---

## Why would I want to grow my own ecosystem, or even make packages?

--- slides
layout: items
cols: 2

---

<div class="flex items-center justify-center">
<img src="/evanYou.jpg" alt="Evan You" class="h-1/2" />
</div>

<div class="flex items-center justify-center" v-click>
<img src="/jordanWalke.jpg" alt="Jordan Walke" class="h-1/2" />
</div>

--- slides
layout: center

---

<img src="/amsterdam2022.jpg" alt="Vue.js Amsterdam 2022" class="h-screen !max-w-full object-contain" />

<footnote>

Vue.js Amsterdam 2022, photo by [@dawntraoz](https://twitter.com/dawntraoz)

</footnote>

--- slides
layout: center

---

## Abstracting things

--- slides
layout: items
cols: 3

---

<div>

<logos-prismic-icon />
Prismic

</div>

<v-click>

<div class="self-center heading-h2 heading-reset">-></div>

<div>

<twemoji-satellite />
API

</div>

</v-click>

<v-click>

<div>

<twemoji-family-man-woman-boy />
Users

</div>

</v-click>

<v-click>

<div class="self-center heading-h2 heading-reset">-></div>

<div>

<twemoji-toolbox />
[@prismicio/client](https://github.com/prismicio/prismic-client)

</div>

</v-click>

--- slides
layout: center

---

## This works for other kind of companies!

--- slides
layout: cover

---

## <twemoji-bank /> &nbsp;I worked at a bank™

--- slides
layout: items
cols: 3

---

<div>

<twemoji-locked-with-key />
Internal auth service

</div>

<v-click>

<div class="self-center heading-h2 heading-reset">-></div>

<div>

<twemoji-package />
Auth package

</div>

</v-click>

--- slides
layout: items
cols: 3

---

<v-clicks>

<div>

<twemoji-woman-raising-hand />
Maintain SDKs

</div>

<div class="self-center heading-h2 heading-reset">-></div>

<div>

<logos-vitejs />
Built with Vite

</div>

</v-clicks>

--- slides
layout: center

---

![vite-plugin-sdk on npm](/vitePluginSDK.png)

<small>[`vite-plugin-sdk` on npm](https://www.npmjs.com/package/vite-plugin-sdk)</small>

--- slides
layout: center

---


![Nuxt extends example from Docus GitHub](/nuxtExtends-light.png)
![Nuxt extends example from Docus GitHub](/nuxtExtends-dark.png)

<small>[Nuxt extends example from Docus GitHub](https://github.com/nuxt-themes/docus#docus)</small>

--- slides
layout: v-center

---

Packages are qui handy to abstract code you use often:

<v-clicks>

- <twemoji-bookmark-tabs /> Small libraries
- <twemoji-hammer-and-wrench /> Helpers
- <twemoji-gear /> Configuration

</v-clicks>

::before::

### Why Making Packages?

--- slides
layout: center

---

## <twemoji-index-pointing-up /> &nbsp;Don't abstract prematurely

<small v-click>Abstraction never comes for free, neither does creating packages.</small>

--- slides
layout: v-center

---

- <twemoji-bento-box /> Abstracting things

<v-clicks>

- <twemoji-fork-and-knife /> Forking an existing packages
- <twemoji-sparkles /> Creating a new technology
- etc.

</v-clicks>

::before::

### Why Making Packages?

--- slides
layout: center

---

## We're building packages to make our developer nicer, and our software stronger

--- slides
layout: items
cols: 2

---

<logos-vue />

<logos-react v-click />

--- slides
layout: v-center

---

Small packages also make a difference.

<v-clicks>

- <twemoji-woman-artist /> Easier to start with as an author
- <twemoji-office-building /> More realistic for most companies
- <twemoji-microscope /> Smaller surface and scope than a big codebase
- <logos-vitest /> Small APIs can easily be battle-tested
- <twemoji-bank /> Give us confidence to build on trusty foundations

</v-clicks>

::before::

### Why Making Packages?

--- slides
layout: center

---

## It's fine if you don't want or need to create packages yet.

<small v-click>But it's always cool to know how to.</small>

--- slides
layout: cover

---

## How Packages Work?

--- slides
layout: v-center

---

<v-clicks>

- <twemoji-package /> PHP packages
- <twemoji-t-rex /> Deno modules
- <twemoji-building-construction /> Rust crates
- <twemoji-gem-stone /> Ruby gems
- etc.

</v-clicks>

::before::

### How Packages Work?

--- slides
layout: center

---

## <twemoji-package /> &nbsp;npm packages

--- slides
layout: center

---

## How npm packages work, and their intricacies

--- slides
layout: v-center
clicks: 3

---

Few disclaimers before we embark:

<ul>

<li :class="{ invisible: $slidev.nav.clicks < 1 }">
<twemoji-cross-mark /> This is not about which bundler or linter to use
<ul>
<li :class="{ invisible: $slidev.nav.clicks < 2 }">
	<twemoji-woman-raising-hand /> Come chat with me during breaks if you want those
</li>
</ul>
</li>

<li :class="{ invisible: $slidev.nav.clicks < 3 }">

<twemoji-check-mark-button /> Yes I'll talk about writing a `package.json`, but no worries

</li>

</ul>

::before::

### How Packages Work?

--- slides
layout: center

---

<v-clicks>

<logos-npm class="text-10xl"/>

<small>It's two things!</small>

</v-clicks>

--- slides
layout: v-center

---

<img src="/npmInstall-light.gif" alt="npm install command showcased with vue" class="w-[70%] object-contain" />
<img src="/npmInstall-dark.gif" alt="npm install command showcased with vue" class="w-[70%] object-contain" />

::before::

### npm

--- slides
layout: items
cols: 3

---

<logos-yarn />

<v-clicks>

<logos-pnpm />

<div class="flex items-center justify-center">etc.</div>

<p class="col-start-1 col-end-4 mt-6 italic">tl;dr; they all claim to do something better than npm (that's pretty much true)</p>

</v-clicks>

--- slides
layout: v-center

---

npm is also an only database.

<v-clicks>

- <twemoji-card-file-box /> A registry
- <twemoji-rocket /> Where packages can be published
- <twemoji-satellite-antenna /> Where packages can be downloaded

</v-clicks>

::before::

### npm

--- slides
layout: center

---

![npmjs.com screenshot](/npm.png)

<small>[npmjs.com](https://npmjs.com)</small>

--- slides
layout: v-center

---

You can configure npm to resolve your dependencies across multiple registries.

```bash
# .npmrc

# Fetch `@lihbr` packages from GitHub registry
@lihbr:registry=https://npm.pkg.github.com

# Fetch `@my-company` packages from My Company registry
@my-company:registry=https://npm.pkg.my-company.com
```

::before::

### npm

--- slides
layout: cover

---

## <twemoji-bank /> &nbsp;I worked at a bank™

--- slides
layout: v-center

---

- <twemoji-laptop /> A CLI
- <twemoji-computer-disk /> An only database (registry)

<br />

<v-clicks>

- <twemoji-woman-gesturing-no /> Don't like the CLI? You can change it
- <twemoji-man-gesturing-no /> Don't want to be on the public registry? Use another

</v-clicks>

::before::

### npm

--- slides
layout: items
cols: 5

---

<logos-npm class="pt-4" />

<v-click>

<div class="self-center heading-h2 heading-reset">-></div>

<mdi-github />

</v-click>

<v-click>

<div class="self-center heading-h2 heading-reset">-></div>

<logos-microsoft-icon />

</v-click>

<v-click>

<logos-visual-studio-code class="fixed !w-16 top-[16%] left-[28%]" />

<simple-icons-openai class="fixed !w-16 top-[64%] left-[78%]" />

<logos-linkedin-icon class="fixed !w-16 top-[20%] left-[68%]" />

<logos-typescript-icon class="fixed !w-16 top-[72%] left-[52%]" />

<img src="/minecraft.png" alt="Minecraft icon" class="fixed !w-16 top-[60%] left-[16%]" />

</v-click>

--- slides
layout: center

---

## package.json

<small v-click>...our package definition</small>

--- slides
layout: v-center

---

### package.json

```json{all|16|9-19|4-8|all}
{
	"name": "elk.zone",
	"version": "0.5.0",
	"scripts": {
		"build": "nuxi build",
		"dev": "nuxi dev --port 5314",
		"generate": "nuxi generate"
	},
	"dependencies": {
		"@vueuse/core": "^9.10.0",
		"blurhash": "^2.0.4",
		"masto": "^5.5.0"
	},
	"devDependencies": {
		"eslint": "^8.31.0",
		"nuxt": "^3.0.0",
		"prettier": "^2.8.2",
		"typescript": "^4.9.4"
	}
}
```

--- slides
layout: center

---

## Two fields are mandatory

--- slides
layout: v-center

---

Mandatory `name` field.

<v-clicks>

- <twemoji-package /> Our package name
- <twemoji-meat-on-bone /> Anything kebab case will be fine
- <twemoji-telescope /> Can be scoped!

</v-clicks>

::before::

### package.json

--- slides
layout: center

---

<h2 class="mb-6"><code><span class="text-$slidev-theme-primary">@prismicio</span>/client</code></h2>

<v-clicks>

<p><twemoji-telescope /> &nbsp;Represents a user or an organization</p>
<p><twemoji-unlocked /> &nbsp;You can only publish to scopes you have access to</p>
<p><twemoji-bust-in-silhouette /> &nbsp;Hint, at a glance, who's the package publisher</p>

</v-clicks>

--- slides
layout: v-center

---

Mandatory `version` field.

<v-clicks>

- <twemoji-slot-machine /> Our package version

</v-clicks>

<div class="invisible">

- foo
- bar

</div>

::before::

### package.json

--- slides
layout: poll
id: semver
choices: ["valid", "invalid"]

---

<qr-code content="https://lucie.red/true">
Valid
</qr-code>

<qr-code content="https://lucie.red/false">
Invalid
</qr-code>

::before::

<h3 class="text-center">

Is `2.3` a valid version number?

</h3>

--- slides
layout: center

---

![npm version command showcased](/npmVersion-light.png)
![npm version command showcased](/npmVersion-dark.png)

::before::

### package.json

--- slides
layout: v-center

---

Mandatory `version` field.

<ul>
<li><twemoji-slot-machine /> Our package version</li>

<li>
<twemoji-check-mark-button /> Has to be a valid SemVer number

<v-clicks>

- <twemoji-bookmark /> A versioning convention
- <twemoji-straight-ruler /> Reflects kind of changes between two versions
- <twemoji-link /> Learn more at [semver.org](https://semver.org)

</v-clicks>

</li>

</ul>

::before::

### package.json

--- slides
layout: center

---

## Let's now see more package-oriented fields

--- slides
layout: items
cols: 1

---

<p>

<twemoji-delivery-truck /> &nbsp;A package is about delivering code.

</p>

<v-click>

-^

<p>

<twemoji-door /> &nbsp;Entry points, what's accessible on our package.

</p>

</v-click>

::before::

### package.json

--- slides
layout: items
cols: 1
gap: "gap-0"

---

```json{4}
{
	"name": "my-package",
	"version": "0.0.1",
	"main": "dist/index.js",
	"scripts": { ... },
	"dependencies": { ... },
	"devDependencies": { ... }
}
```

<v-click>

-^

```javascript
const myPackage = require("my-package");
```

</v-click>

::before::

### package.json

--- slides
layout: items
cols: 1
gap: "gap-0"

---

```json{5}
{
	"name": "my-package",
	"version": "0.0.1",
	"main": "dist/index.js",
	"module": "dist/index.mjs",
	"scripts": { ... },
	"dependencies": { ... },
	"devDependencies": { ... }
}
```

-^

```javascript
import myPackage from "my-package";
```

::before::

### package.json

--- slides
layout: v-center

---

```json{4-5}
{
	"name": "my-package",
	"version": "0.0.1",
	"main": "dist/index.js",
	"module": "dist/index.mjs",
	"scripts": { ... },
	"dependencies": { ... },
	"devDependencies": { ... }
}
```

<div class="invisible py-1">

-^

```javascript
import myPackage from "my-package";
```

</div>

::before::

### package.json

--- slides
layout: v-center

---

```json{6-11|8-9|4|5|6-11}
{
	"name": "my-package",
	"version": "0.0.1",
	"main": "dist/index.js",
	"module": "dist/index.mjs",
	"exports": {
		".": {
			"require": "./dist/index.js",
			"import": "./dist/index.mjs"
		}
	},
	"scripts": { ... },
	"dependencies": { ... },
	"devDependencies": { ... }
}
```

::before::

### package.json

--- slides
layout: center

---

## Which ones are we supposed to use?

--- slides
layout: v-center

---

Not straightforward to answer, but "basically":

<v-clicks>

- `exports` only if you want to be future-facing, and only future-facing
- `main`, `module`, and `exports` if you want (or need to) be compatible with most setup

</v-clicks>

::before::

### package.json

--- slides
layout: v-center

---

Package code entry points:

- `main`, default entry point (CJS or ESM)
- `module`, ESM-specific entry point
- `exports`, modern entry points, more flexible

::before::

### package.json

--- slides
layout: v-center

---

### package.json

```json{12}
{
	"name": "my-package",
	"version": "0.0.1",
	"main": "dist/index.js",
	"module": "dist/index.mjs",
	"exports": {
		".": {
			"require": "./dist/index.js",
			"import": "./dist/index.mjs"
		}
	},
	"types": "dist/index.d.ts",
	"bin": {
		"my-package": "bin/cli.js"
	},
	"scripts": { ... },
	"dependencies": { ... },
	"devDependencies": { ... }
}
```

--- slides
layout: v-center

---

### package.json

```json{13-15}
{
	"name": "my-package",
	"version": "0.0.1",
	"main": "dist/index.js",
	"module": "dist/index.mjs",
	"exports": {
		".": {
			"require": "./dist/index.js",
			"import": "./dist/index.mjs"
		}
	},
	"types": "dist/index.d.ts",
	"bin": {
		"my-package": "bin/cli.js"
	},
	"scripts": { ... },
	"dependencies": { ... },
	"devDependencies": { ... }
}
```

--- slides
layout: v-center

---

### package.json

```json{16}
{
	"name": "my-package",
	"version": "0.0.1",
	"main": "dist/index.js",
	"module": "dist/index.mjs",
	"exports": {
		".": {
			"require": "./dist/index.js",
			"import": "./dist/index.mjs"
		}
	},
	"types": "dist/index.d.ts",
	"bin": {
		"my-package": "bin/cli.js"
	},
	"files": ["src"],
	"scripts": { ... },
	"dependencies": { ... },
	"devDependencies": { ... }
}
```

--- slides
layout: v-center

---

<v-click>

```json{4-17}
{
	"name": "@prismicio/client",
	"version": "7.0.0",
	"exports": {
		".": {
			"require": "./dist/index.cjs",
			"import": "./dist/index.js"
		},
		"./package.json": "./package.json"
	},
	"main": "dist/index.cjs",
	"module": "dist/index.js",
	"types": "dist/index.d.ts",
	"files": [
		"dist",
		"src"
	],
	"scripts": { ... },
	"dependencies": { ... },
	"devDependencies": { ... }
}
```

<footnote>

Abstract from [`@prismicio/client` package definition](https://github.com/prismicio/prismic-client/blob/master/package.json)

</footnote>

</v-click>

--- slides
layout: v-center

---

Types of dependencies:

<v-clicks>

- `dependencies`
- `devDependencies`

</v-clicks>

<div class="invisible">

- foo

</div>

<v-clicks>

<p>

<twemoji-warning /> &nbsp;Only package's `dependencies` are installed when it's installed, `devDependencies` are ignored

</p>

</v-clicks>

::before::

### package.json

--- slides
layout: v-center

---

```json{7|10-12}
{
	"name": "my-package",
	"version": "0.0.1",
	"main": "dist/index.js",
	"module": "dist/index.mjs",
	"scripts": {
		"build": "vite build"
	},
	"dependencies": { ... },
	"devDependencies": {
		"vite": "^4.0.4"
	}
}
```

::before::

### package.json

--- slides
layout: v-center

---

Types of dependencies:

- `dependencies`, required to run the package
- `devDependencies`, required to build the package
- `peerDependencies`

<p class="invisible">foo</p>

::before::

### package.json

--- slides
layout: v-center

---

```json{9-11}
{
	"name": "vue-router",
	"version": "4.1.6",
	"main": "index.js",
	"module": "dist/vue-router.mjs",
	"scripts": { ... },
	"dependencies": { ... },
	"devDependencies": { ... },
	"peerDependencies": {
		"vue": "^3.2.0"
	}
}
```

<footnote>

Abstract from [`vue-router` package definition](https://github.com/vuejs/router/blob/main/packages/router/package.json)

</footnote>

::before::

### package.json

--- slides
layout: v-center

---

Main things to consider:

- <twemoji-identification-card /> Required `name` and `version` fields
- <twemoji-door /> Entry points declaration
- <twemoji-books /> Proper dependency declaration

::before::

### package.json

--- slides
layout: v-center

---

Things I omitted:

<v-clicks>

- <twemoji-control-knobs /> `engine`
- <twemoji-dna /> `type` (no `s`!)
- `repository`, `sideEffects`, `publishConfig`, etc.

</v-clicks>

<div class="invisible">

- foo

</div>

<p v-click>

<twemoji-blue-book /> &nbsp;More on the documentation: https://docs.npmjs.com/cli/v9/configuring-npm/package-json

</p>

::before::

### package.json

--- slides
layout: cover

---

<v-click>

## Maintaining Packages

</v-click>

--- slides
layout: poll
id: issue
choices: ["yes", "no"]

---

<qr-code content="https://lucie.red/open">
Yes
</qr-code>

<qr-code content="https://lucie.red/never">
No
</qr-code>

::before::

<h3 class="text-center -mt-[0.5em]">

Have you ever opened an issue or a feature request on an open-source project?

</h3>

--- slides
layout: v-center

---

People expect a lot from open-source packages.

<v-clicks>

- <twemoji-japanese-service-charge-button /> It's fine if you don't support TypeScript from the get-go
- <twemoji-globe-with-meridians /> It's fine if you don't have both CJS and ESM
- <twemoji-bookmark-tabs /> It's fine if you don't write TSDocs
- etc.

</v-clicks>

::before::

### Maintaining Packages

--- slices
layout: center
class: prWelcome

---

<style>
.slidev-layout.prWelcome {
	background: url("/prWelcome-light.png");
	background-size: 100%;
}
.dark .slidev-layout.prWelcome {
	background: url("/prWelcome-dark.png");
	background-size: 100%;
}
</style>

<v-click>

If the package works fine enough for you and others, it's already great!

</v-click>

--- slides
layout: center

---

## Inspire from other open-source projects

<small v-click>Things that work great for others, might work great for you!</small>

--- slices
layout: center
class: issueTemplate

---

<img src="/issueTemplate-light.png" alt="Prismic client GitHub issue template" class="mt-[-6px]" />
<img src="/issueTemplate-dark.png" alt="Prismic client GitHub issue template" class="mt-[-8px]" />

<footnote>

Shamefully inspired and adapted from Nuxt's old bug report template~

</footnote>

--- slides
layout: v-center

---

You can learn a lot this way.

<v-clicks>

- <twemoji-file-folder /> Do crazy things through the `.github` folder
- <twemoji-abacus /> Automate your release process with tools like [Standard Version CLI](https://github.com/conventional-changelog/standard-version)
- <twemoji-magnifying-glass-tilted-right /> Update dependencies with tools like [VSCode Version Lens](https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens)

</v-clicks>

::before::

### Maintaining Packages

--- slides
layout: v-center

---

Regular maintenance:

<v-clicks>

- <twemoji-bug /> Fixing bugs if any
- <twemoji-books /> Maintaining dependencies (updating them)

</v-clicks>

<div class="invisible">

- foo

</div>

<p v-click>

<twemoji-red-question-mark /> &nbsp;Helps ensuring your package keeps working and is easy to work with.

</p>

<p v-click>

<logos-prismic-icon /> &nbsp;At Prismic, once a week if there are issues, otherwise, once a month.

</p>

::before::

### Maintaining Packages

--- slices
layout: center

---

<img src="/botReply-light.png" alt="Prismic client GitHub issue bot reply" class="w-[64%]" />
<img src="/botReply-dark.png" alt="Prismic client GitHub issue bot reply" class="w-[64%]" />

<footnote>

GitHub auto issue reply message bot, feel free to steal it: [github.com/prismicio/prismic-client](https://github.com/prismicio/prismic-client/blob/master/.github/workflows/issues.yml)

</footnote>

--- slides
layout: v-center
clicks: 6

---

Evolving?

<v-clicks>

- <twemoji-party-popper /> Adding new features and changing existing ones
- <twemoji-hand-with-index-finger-and-thumb-crossed /> No rule of thumb for that
- <twemoji-small-orange-diamond /> Adding small features can often be done as-is

</v-clicks>

<ul>

<li :class="{ invisible: $slidev.nav.clicks < 4 }">
<twemoji-large-orange-diamond /> For bigger ones and breaking changes, planning is encouraged
<ul>
<li :class="{ invisible: $slidev.nav.clicks < 5 }">
<logos-prismic-icon /> &nbsp;RFCs work great for us at Prismic
</li>
<li :class="{ invisible: $slidev.nav.clicks < 6 }">

<twemoji-page-facing-up /> &nbsp;[Nuxt 3 `<NuxtLink />` RFC example](https://github.com/nuxt/framework/discussions/2086#discussioncomment-1683819)

</li>
</ul>
</li>

</ul>

::before::

### Maintaining Packages

--- slides
layout: v-center
clicks: 6

---

A package can die.

<v-clicks>

- <twemoji-pager /> Maybe its functionalities are now native, or not relevant anymore
- <twemoji-sparkles /> Maybe it has been replaced with something better
- <twemoji-ghost /> Maybe no one wants to maintain it anymore

</v-clicks>

<div class="invisible">

- foo

</div>

<p v-click>

<logos-npm /> &nbsp;Be a great citizen and use the `npm deprecate` command.

</p>

::before::

### Maintaining Packages

--- slides
layout: cover

---

# Maintaining Your Company’s Open-Source Ecosystem

_...or how to make great npm packages for the mere mortal._

--- slides
layout: v-center

---

### We discussed:

<v-clicks>

- <twemoji-globe-with-meridians /> Package ecosystems, for organizations and individuals
- <logos-npm /> NPM packages and their intricacies
- <twemoji-wrench /> Package maintenance tips

</v-clicks>

--- slides
layout: v-center

---

<div>

<p class="mb-2">

<twemoji-books class="inline" /> &nbsp;Everything from this talk & more:

</p>

#### -> [lucie.red/amsterdam](https://lucie.red/amsterdam)

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

[lucie.red/amsterdam](https://lucie.red/amsterdam) — [lucie.red/twitter](https://lucie.red/twitter) — [lucie.red/mastodon](https://lucie.red/mastodon)

</small>
