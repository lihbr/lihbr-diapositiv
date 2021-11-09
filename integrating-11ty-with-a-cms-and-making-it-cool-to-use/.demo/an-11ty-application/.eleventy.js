const { getCMSData } = require("your-favorite-cms");

module.exports = (eleventyConfig) => {
	/**
	 * @type {import("an-11ty-application").PluginOptions}
	 */
	const pluginOptions = {};

	const cmsData = (async () => {
		const data = await getCMSData();

		console.log(data);

		return data;
	})();

	eleventyConfig.addGlobalData("cms", cmsData);
};
