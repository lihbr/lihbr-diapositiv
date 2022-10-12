#!/usr/bin/env node

const path = require("path");
const { readUser } = require("rc9");
const { readUser, writeUser } = require("rc9");

// 1. Compute our module path
const modulePath = path.join(__dirname, "..");

console.log(modulePath);

// 2. Read our current .nuxtrc file
const current = readUser(".nuxtrc");

console.log(current);

// 3. If module is activated, deactivate it, else activate it
if (current.buildModules && current.buildModules.includes(modulePath)) {
	current.buildModules = current.buildModules.filter(
		module => module !== modulePath
	);

	writeUser(current, ".nuxtrc");
	console.info("❌ Module Docs disabled");
} else {
	current.buildModules = current.buildModules || [];
	current.buildModules.push(modulePath);

	writeUser(current, ".nuxtrc");
	console.info("✅ Module Docs enabled");
}

~/../module-docs

D:\Libraries\Desktop\global-modules-intro\module-docs

#!/usr/bin/env node

"bin": {
	"module-docs": "bin/cli.js"
},

npm install --global @lihbr/module-docs
npm uninstall --global @lihbr/module-docs
