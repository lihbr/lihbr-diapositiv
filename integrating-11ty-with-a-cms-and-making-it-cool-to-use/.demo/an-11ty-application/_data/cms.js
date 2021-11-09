const { getCMSData } = require("your-favorite-cms");

module.exports = async () => {
	const data = await getCMSData();

	return data;
};
