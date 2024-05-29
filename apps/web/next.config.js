/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	transpilePackages: ["@in-sync/ui"],
	compiler: {
		relay: require("./relay.config"),
	},
};
