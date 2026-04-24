import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
	output: "standalone", // for k8s
	reactCompiler: true,
	compress: true, // Explicitly enable compression
	transpilePackages: ["antd", "@ant-design/icons"],
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
			},
			{
				protocol: "http",
				hostname: "localhost",
				port: "1337",
			},
		],
		dangerouslyAllowSVG: true,
	},
	sassOptions: {
		additionalData: `@use "@/assets/styles/abstracts/variables" as *; @use "@/assets/styles/abstracts/typography" as *; @use "@/assets/styles/abstracts/mixins" as *;`,
	},
	experimental: {
		optimizePackageImports: ["lucide-react", "antd"],
		scrollRestoration: true,
	},
	// We remove manual splitChunks for antd/react to prevent "Unused Preloaded CSS" warnings.
	// Next.js 15+ handles these automatically and more efficiently.
	webpack: (config) => {
		return config;
	},
	basePath: "",
};

export default withNextIntl(nextConfig);
