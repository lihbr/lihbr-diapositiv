import fetch from "node-fetch";
import chalk from "chalk";

export default async function moduleDocs() {
	// 1. Get all modules manifests from modules.nuxtjs.org
	let allModuleManifests;
	try {
		const res = await fetch(
			"https://unpkg.com/@nuxt/modules/dist/modules.json",
		);
		if (!res.ok) {
			throw res;
		}
		allModuleManifests = await res.json();
	} catch (err) {
		console.error("Failed to init Module Docs module:", err);

		return;
	}

	// 2. Get registered modules
	const registeredModules = [
		...this.options.modules,
		...this.options.buildModules,
	].map((module) => (Array.isArray(module) ? module[0] : module));

	// 3. Get registered modules manifests and sort them
	const registeredModuleManifests = allModuleManifests
		.filter((manifest) => registeredModules.includes(manifest.npm))
		.sort((a, b) => (a.category > b.category ? 1 : -1));

	// A function that displays our modules info
	const printModulesInfo = () => {
		const lines = [];

		lines.push(chalk.blueBright("📚 Modules Docs:\n"));
		registeredModuleManifests.forEach((manifest) => {
			lines.push(
				`${chalk.yellow(manifest.npm)} (${
					manifest.category
				}): ${chalk.cyanBright(manifest.website)}`,
			);
		});
		lines.push("");

		console.log(lines.join("\n"));
	};

	// 5. Print modules info at each Nuxt reload
	this.nuxt.hook("bundler:done", printModulesInfo);

	// 6. Print modules info once
	printModulesInfo();
}

module.exports.meta = require("../package.json");
