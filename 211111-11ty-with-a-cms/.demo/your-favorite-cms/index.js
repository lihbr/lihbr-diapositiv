// This function mocks the use of a CMS client that actually gets data from a CMS.
exports.getCMSData = () =>
	new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				pages: [
					{
						id: "home",
						title: "Home",
					},
					{
						id: "about",
						title: "About",
					},
				],
				posts: [
					{
						id: "hello-world",
						title: "Hello World",
					},
					{
						id: "lorem-ipsum",
						title: "Lorem Ipsum",
					},
					{
						id: "dolor-sit-amet",
						title: "Dolor Sit Amet",
					},
				],
			});
		}, 500);
	});
