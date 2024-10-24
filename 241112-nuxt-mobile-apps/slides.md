---
theme: ../../slidev-theme-diapositiv
title: Can Nuxt Make Great Mobile Apps?
info: |
  ## can nuxt make great mobile apps?

  or can the javascript ecosystem compete against native code

  <br />

  Everything from<br>this talk & more -^<br>[lucie.red/nuxtnation](https://lucie.red/nuxtnation)
xTheme: flamingo
---

# can nuxt make great mobile apps?

or can the javascript ecosystem compete against native code

---
layout: title
align: left
theme: flamingo
---

<h1 class="text-theme">can nuxt make great mobile apps?</h1>

or can the javascript ecosystem compete against native code

---
layout: interaction
---

# making mobile apps <br> with Nuxt

---
layout: interaction
---

# let's have a look at some applications

---

TODO: Placeholder phone camera app

---

## a "native app"

<v-clicks depth="2">

- Developed with the phone's specific<br>programming language
  - <vscode-icons-file-type-java /> Java or <vscode-icons-file-type-kotlin /> Kotlin on Android
  - <vscode-icons-file-type-swift /> Switft or <vscode-icons-file-type-objectivec /> Objective C on iOS

</v-clicks>

---
layout: interaction
---

As developers<v-click>, we don't want to code things twice.</v-click><br><br>

---
layout: interaction
---

# so what<br>do we do?

---
layout: interaction
---

# we only code an iOS app and call it a day?

---
layout: interaction
align: left
---

<AndroidIosWorld />

<AndroidIosUsa class="!mt-32" />

---
layout: interaction
---

# so we'll need 2 apps<br><br>

---

## <vscode-icons-file-type-flutter /> Flutter

<v-clicks>

- <vscode-icons-file-type-dartlang /> Dart-based framework
- Developped by <logos-google class="align-middle" />
- Creates apps for Android and iOS in one go

</v-clicks>

---

<div class="flex justify-between">

<p class="flex-1 flex flex-col gap-8 items-center">
	<logos-google-pay-icon class="text-[6rem]" />
	Pay
</p>
<p class="flex-1 flex flex-col gap-8 items-center">
	<logos-google-ads class="text-[6rem]" />
	Ads
</p>
<p class="flex-1 flex flex-col gap-8 items-center">
	<logos-google-one class="text-[6rem]" />
	One
</p>
<p class="flex-1 flex flex-col gap-8 items-center">
	<logos-google-cloud class="text-[6rem]" />
	Cloud
</p>
<p class="flex-1 flex flex-col gap-8 items-center">
	<logos-google-analytics class="text-[6rem]" />
	Analytics
</p>

<p class="text-[6rem]">...</p>

</div>

---

TODO: Placeholder Philips Hue app

---
layout: interaction
---

<p>
<vscode-icons-file-type-flutter /> Flutter + <vscode-icons-file-type-dartlang /> Dart is an option<br><br>
</p>

---
layout: interaction
---

# we're mostly JavaScript developers aren't we?

---

## <vscode-icons-file-type-reactjs/> React Native

<v-clicks>

Also creates apps for Android and iOS in one go.

</v-clicks>

---

TODO: Placeholder React Native camera app

---
layout: interaction
---

# cool Lucie, that's quite some technologies you got there, but I came here to hear about Nuxt!

---

TODO: Placeholder Kamera app

---
layout: interaction
---

# back to mobile apps...

<v-clicks>

None of those camera things are really associated with Nuxt, or web development as a whole.

</v-clicks>

---
layout: interaction
---

# we can make any<br>kind of website with<br>Vue and Nuxt...

---
layout: interaction
---

# ...but we can also make really capable mobile apps with them!

---

## I'm Lucie Haberer

<v-clicks>

Working in <twemoji-flag-france/> France for <logos-prismic-icon/> Prismic, a headless CMS, as a Developer Experience Engineer.

</v-clicks>

---
layout: interaction
---

I've been a lot into cameras lately.

<v-clicks>

Any kind of camera.

</v-clicks>

---

<div class="flex justify-between">

![Lille](/lille-01.jpg)

![Lille](/lille-02.jpg)

</div>

---
ffront: true
centered: true
---

![Lille](/lille-03.jpg)

---
full: true
centered: true
---

![Paris](/paris-01.jpg)

---

<Nokia />

---
centered: true
---

![Bordeaux](/bordeaux-01.jpg)

<small>Left-to-right: Daniel, Julien, Pooya, Alexander<br>Nuxt team in Bordeaux, France - June 2024</small>

---
layout: interaction
---

# let's have a little selfie together

---

<video src="/kamera-gallery.mp4" muted autoplay loop>could not play video</video>

<v-clicks>

Background story

</v-clicks>

---

<video src="/keirin-intro.mp4" muted autoplay loop class="mx-auto relative -z-1">could not play video</video>

## KEIRIN 競輪

<v-clicks>

A camera prototype developed by a ~~big company~~ group of enthusiasts mainly based in <twemoji-flag-japan/> Japan.

</v-clicks>

---
centered: true
---

![KEIRIN Showcase](/keirin-showcase-01.jpg)

<small>KEIRIN showcase in Tokyo, Japan - April 2024</small>

---
centered: true
---

![KEIRIN Showcase](/keirin-showcase-02.jpg)

<small>KEIRIN showcase in Tokyo, Japan - April 2024</small>

---
layout: interaction
---

What if instead, I developed its UI through a mobile app?

<v-clicks>

And that's how it started...

</v-clicks>

---
layout: interaction
---

# I embarked on a journey to build a mobile app

---
layout: interaction
---

I'm not a mobile app developer.

<v-clicks>

But I've had some experience building some.

</v-clicks>

---
layout: interaction
---

<p><twemoji-woman-gesturing-no/> native</p>

<v-clicks>

<p><twemoji-check-mark class="invert" /> JavaScript</p>

</v-clicks>

---

## <vscode-icons-file-type-reactjs/> React Native

<v-clicks>

(that's a joke!)

</v-clicks>

---

## <vscode-icons-file-type-vue /> Vue <v-click>+ <vscode-icons-file-type-nuxt /> Nuxt</v-click>

<v-clicks>

(also a joke!)

</v-clicks>

---
layout: interaction
---

# how do you build a<br>mobile app with Nuxt?

---
layout: poll
id: app
left:
  id: "yes"
  href: "https://lucie.red/app"
  label: "yes"
right:
  id: "no"
  href: "https://lucie.red/noapp"
  label: "no"
---

## have you ever built a mobile app with Nuxt?

---
layout: interaction
---

# how do you build a<br>mobile app with Nuxt?

---

## building a mobile app with Nuxt:

<v-clicks>

- <twemoji-chequered-flag /> Mobile app
- <twemoji-woman-technologist /> Feel like developing a website

</v-clicks>

---
layout: title
centered: true
---

# in the javascript<br>world: capacitor

---
layout: poll
id: app
left:
  id: "yes"
  href: "https://lucie.red/app"
  label: "yes"
right:
  id: "no"
  href: "https://lucie.red/noapp"
  label: "no"
---

## have you ever built a mobile app with Nuxt?

---
layout: interaction
---

# what is Capacitor?<br><br>

---

## <vscode-icons-file-type-capacitor /> Capacitor

<v-clicks depth="2">

- A native runtime for building web native apps
- For Android, iOS, and more
  - Today we'll only focus on Android and iOS
- Modern successor of Apache <mdi-cordova /> Cordova

</v-clicks>

---
layout: interaction
---

# how does Capacitor works?

---
nofig: true
---

<Capacitor />

---
layout: interaction
---

<Native class="mt-16" />

<ReactNative class="!mt-32" />

---
layout: interaction
---

<CapacitorStatic />

<v-clicks>

# this impacts performances

But it's tolerable.

</v-clicks>

---
layout: interaction
---

<CapacitorStatic />

# on the brighter side

<v-clicks>

<p class="pb-12">We benefit from everything we already know<br>about web development to build our app.</p>

</v-clicks>

---

<ul>
	<li><twemoji-bento-box/> Components can be shared between ou apps</li>
	<v-clicks depth="2">
		<li><twemoji-woman-technologist/> Same developer experience
			<ul>
				<li><twemoji-laptop/> Develop in browser with HMR</li>
				<li><twemoji-mobile-phone/> Or on a phone directly, still with HMR</li>
			</ul>
		</li>
	</v-clicks>
</ul>

---

## <vscode-icons-file-type-nuxt /> Nuxt app <v-click>+ <vscode-icons-file-type-capacitor /> Capacitor</v-click>

---

## Get started with:

```bash {all|1-2|4-7}{lines:false}
npm install @capacitor/cli @capacitor/core
npx cap init

npm install @capacitor/ios @capacitor/android
npx cap add ios
npx cap add android
```

---

<h1 style="font-family: serif; font-feature-settings: initial">&lt;div&gt;Capacitor App&lt;/div&gt;</h1>

<p style="font-family: serif; font-feature-settings: initial" v-click>&lt;div&gt;Lorem ipsum dolor sit amet, &lt;span&gt;<strong>consectetur adipiscing</strong>&lt;/span&gt; elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.&lt;/div&gt;</p>

---

<h1
  class="ml-32 bg-clip-text text-transparent bg-gradient-to-r from-navy via-flamingo to-mantis"
  style="font-family: Comic Sans MS, Graphit; font-feature-settings: initial"
>Capacitor App</h1>

<p
  class="rotate-[-2deg] translate-y-8"
  style="font-family: Comic Sans MS, Graphit; font-feature-settings: initial"
>Lorem ipsum dolor sit amet, <strong>consectetur adipiscing</strong> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

---
layout: interaction
---

# how did I make anything with the camera of my phone if it's just<br>a web app?

---
layout: interaction
---

<CapacitorBridge />

<ul>

<li v-click><twemoji-woman-raising-hand/> Asking for permisions</li>
<li v-click><twemoji-bread/> Firing up toasts</li>

<v-click>
	<li><twemoji-camera/> Operating the camera</li>
	<li>etc.</li>
</v-click>

</ul>

---
layout: title
centered: true
---

# introducing:<br>capacitor plugins

---
layout: interaction
---

# we have a lot of Nuxt developers in this room, do we?

---

## Nuxt modules

<v-clicks>

- <vscode-icons-file-type-tailwind/> [@nuxtjs/tailwindcss](https://tailwindcss.nuxtjs.org)
- <twemoji-framed-picture/> [@nuxt/image](https://image.nuxt.com)
- <logos-prismic-icon/> [@nuxtjs/prismic](https://prismic.nuxtjs.org)
- [etc.](https://nuxt.com/modules)

</v-clicks>

---
layout: interaction
---

# with Nuxt modules, we can extend our Nuxt app, and add endless functionalities to it

---

## Capacitor plugins

<v-clicks>

- Can extend our Capacitor app to add endless native functionalities to it
- Lots of Capacitor plugins out there

</v-clicks>

---

![Dialog](/capacitor-dialog.jpg)

---

![Filesystem](/capacitor-filesystem.jpg)

---
layout: interaction
---

# that's just 2 of them

<v-clicks>

Complete list on Capacitor's documentation<br>-> [capacitorjs.com/docs](https://capacitorjs.com/docs)

</v-clicks>

---

<video src="/kamera-gallery.mp4" muted autoplay loop>could not play video</video>

Some plugins I used:

- [@capacitor/filesystem](https://capacitorjs.com/docs/apis/filesystem)
- [@capacitor/preferences](https://capacitorjs.com/docs/apis/preferences)
- [@capacitor/screen-orientation](https://capacitorjs.com/docs/apis/screen-orientation)
- [@capacitor/share](https://capacitorjs.com/docs/apis/sharen)
- [@capacitor/status-bar](https://capacitorjs.com/docs/apis/status-bar)

<v-clicks>

- A camera plugin!

</v-clicks>

---

![Camera](/capacitor-camera.jpg)

---

## I tried it, but:

<v-clicks depth="2">

- It could only take basic pictures
- It offered little to no control over the sensor
  - I wanted to control the ISO,<br>shutter speed, and aperture

</v-clicks>

---
layout: interaction
---

# let's see if I can contribute to the plugin to add the functionalities I want

<v-clicks>

So I went to its GitHub...

</v-clicks>

---
full: true
centered: true
nofig: true
---

![Camera GitHub](/capacitor-camera-github.jpg)

---
full: true
centered: true
nofig: true
---

![Camera GitHub](/capacitor-camera-github-pkg.jpg)

---
full: true
centered: true
nofig: true
---

![Camera GitHub](/capacitor-camera-github-native.jpg)

---
full: true
centered: true
nofig: true
---

![Camera GitHub](/capacitor-camera-github-src.jpg)

---

`src/definitions.ts`

```typescript {all|62|66-68|all}{lines:true,startLine:59}
/* ... */

export type CameraPreviewPlugin = {
	start: (options: CameraPreviewOptions) => Promise<{}>
	startRecordVideo: (options: CameraPreviewOptions) => Promise<{}>
	stop: () => Promise<{}>
	stopRecordVideo: () => Promise<{}>
	capture: (
		options: CameraPreviewPictureOptions
	) => Promise<{ value: string }>
	captureSample: (options: CameraSampleOptions) => Promise<{ value: string }>
	getSupportedFlashModes: () => Promise<{
		result: CameraPreviewFlashMode[]
	}>
	setFlashMode: (options: {
		flashMode: CameraPreviewFlashMode | string
	}) => Promise<void>
	flip: () => Promise<void>
	setOpacity: (options: CameraOpacityOptions) => Promise<{}>
}
```

The API exposed by the plugin.

---
layout: interaction
---

That's the TypeScript part of the plugin.

<v-clicks>

Let's now peek inside the Android folder.

</v-clicks>

---

<v-clicks depth="4">

- `android/src/main/`
  - `java/com/ahm/`
    - `capacitor/camera/preview/`
      - `CameraPreview.java` <twemoji-party-popper/>

</v-clicks>

<v-clicks>

`CameraPreview.java` is the entry point of the Capacitor plugin on the Android side.

There's a similar entry point on the iOS side: `ios/Plugin/Plugin.swift`

</v-clicks>

---

`android/.../CameraPreview.java`

```java {all|40-43|45-48|all}{lines:true,startLine:28}
/* ... */

@CapacitorPlugin(
	name = "CameraPreview",
	permissions = {@Permission(
		strings = { CAMERA },
		alias = CameraPreview.CAMERA_PERMISSION_ALIAS
	)}
)
public class CameraPreview extends Plugin
	implements CameraActivity.CameraPreviewListener {

	@PluginMethod
	public void start(PluginCall call) {
		/* ... */
	}

	@PluginMethod
	public void capture(PluginCall call) {
		/* ... */
	}

	/* ... */
}
```

---
layout: interaction
---

Back to my problem...

<v-clicks>

I wanted to add new features to this plugin.

</v-clicks>

---
layout: interaction
---

# maybe I could add the few methods I wanted here and there and roll with it<v-click>, right?</v-click>

---

`android/.../CameraPreview.java`

```java {all|9}{lines:true}
package com.ahm.capacitor.camera.preview;

import static android.Manifest.permission.CAMERA;

/* ... */

import android.graphics.Color;
import android.graphics.Point;
import android.hardware.Camera;
import android.util.DisplayMetrics;
import android.util.TypedValue;

/* ... */

@CapacitorPlugin(
	name = "CameraPreview",
	permissions = {@Permission(
		strings = { CAMERA },
		alias = CameraPreview.CAMERA_PERMISSION_ALIAS
	)}
)
public class CameraPreview extends Plugin
	implements CameraActivity.CameraPreviewListener {

	/* ... */
}
```

---
full: true
---

![Android documentation](/android-documentation.jpg)

---
layout: interaction
---

`android.hardware.camera` does not provide fine-grain control over the phone camera sensor.

---
nofig: true
---

<AndroidTimeline />

<v-clicks at="-0">

`android.hardware.camera2` was introduced in 2014

</v-clicks>

<v-clicks>

- A modern and future-proof camera library
- But an entirely different API

</v-clicks>

---
layout: interaction
---

It was not possible to contribute the features I wanted to the Capacitor camera plugin...

---
layout: interaction
---

# I thought I had reached<br>a dead end

---

## <vscode-icons-file-type-reactjs/> React Native

<v-clicks>

Like Capacitor, it has its own plugin ecosystem.

And there are some camera plugins for it.

</v-clicks>

---
layout: interaction
---

# but React Native camera plugins had the same limitations Capacitor camera plugins had

---

<ul>
	<li>Relying on <code>android.hardware.camera</code></li>
	<li v-click>Offering too limited APIs</li>
</ul>

---
layout: interaction
---

# that seemed like a dead end in my journey of making a camera app with JavaScript

<v-clicks>

Unless...

</v-clicks>

---
layout: title
centered: true
---

# I made my own<br>capacitor camera<br>plugin!

---
centered: true
---

![Liberty Leading the People](/liberty-leading-the-people.jpg)

<small>Liberty Leading the People, Delacroix - 1830</small>

---
layout: poll
id: pkg
left:
  id: "yes"
  href: "https://lucie.red/pkg"
  label: "yes"
right:
  id: "no"
  href: "https://lucie.red/nopkg"
  label: "no"
---

## do you build or use in-house packages (NPM packages, or anything) in your company?
