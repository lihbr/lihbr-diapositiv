const debug = require("debug")("Eleventy:Demo");
const { getCMSData } = require("your-favorite-cms");

// _data/cms.js
// .eleventy.js
module.exports = (eleventyConfig) => {
	const cmsData = (async () => {
		const data = await getCMSData();

		debug(data);

		return data;
	})();

	eleventyConfig.addGlobalData("cms", cmsData);
};

/* html */ `
<ul>
{%- for page in cms.pages -%}
	<li>{{ page.title }}</li>
{%- endfor -%}
</ul>
`;

// .eleventy.d.ts
export type PluginOptions = {
	/**
	 * Your CMS endpoint
	 *
	 * @see Plugin documentation: https://lucie.red/5ddu3
	 */
	endpoint: string,
};

/**
 * @type {import("an-11ty-application").PluginOptions}
 */
const pluginOptions = {};
