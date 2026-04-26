import { Roboto } from "next/font/google";
import React from "react";
import "./globals.scss";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import ConfigProvider from "antd/es/config-provider";
import ResponsiveHeader from "@/layouts/Header";
import ResponsiveFooter from "@/layouts/Footer";
import App from "antd/es/app";
import QueryProvider from "@/lib/react-query/query-provider";
import ScreenWidthDisplay from "@/components/screen-width-display";
import ToastContainer from "@/shared/components/Toast/ToastContainer";
import { Metadata } from "next";
import { env } from "@/config";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
const roboto = Roboto({
	weight: ["300", "400", "500", "700"],
	subsets: ["latin", "vietnamese"],
	display: "swap",
	variable: "--font-roboto",
});

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { cookies } from "next/headers";
import { fetchConfig } from "@/lib/fetch/config";
import { StoreInitializer } from "@/shared/providers/store-initializer";
import { UserDetailResponse } from "@/types/user";

import { Suspense } from "react";

export const metadata: Metadata = {
	metadataBase: new URL(
		env.app.canonicalURL || "http://localhost:3000",
	),
	title: "Medpro",
	description: "Dịch vụ y tế thông minh",
};

/**
 * RootProviders handles dynamic data fetching for the application.
 * By moving cookies() and getMessages() here and wrapping it in Suspense,
 * we enable Partial Prerendering (PPR) for the RootLayout shell.
 */
async function RootProviders({
	children,
}: {
	children: React.ReactNode;
}) {
	const messages = await getMessages();
	const cookieStore = await cookies();
	const token = cookieStore.get("token")?.value;
	const serverUser = null;

	return (
		<>
			<NextIntlClientProvider messages={messages}>
				<StoreInitializer
					user={serverUser}
					token={token}
				/>
				<ToastContainer />
				<ResponsiveHeader />
				<Suspense
					fallback={
						<>
							<div style={{ height: "70px" }} />{" "}
							{/* Header skeleton placeholder */}
							<div style={{ minHeight: "80vh" }} />{" "}
							{/* Content placeholder */}
							<div style={{ height: "300px" }} />{" "}
							{/* Footer skeleton placeholder */}
						</>
					}
				>
					{children}
				</Suspense>
				<ResponsiveFooter />
				<ScreenWidthDisplay />
			</NextIntlClientProvider>
			<Analytics />
			<SpeedInsights />
		</>
	);
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			{/* DNS Prefetch handles early discovery for dynamic chunks */}
			<link
				rel='dns-prefetch'
				href='https://bo-api.medpro.com.vn'
			/>
			<link
				rel='dns-prefetch'
				href='https://api-v2.medpro.com.vn'
			/>
			<link
				rel='dns-prefetch'
				href='https://dev-strapi.medpro.com.vn'
			/>
			{/* Preconnect to critical assets if strictly needed later */}
			<link
				rel='preconnect'
				href='https://dev-strapi.medpro.com.vn'
				crossOrigin='anonymous'
			/>
			<body
				className={`${roboto.className} ${roboto.variable} antialiased`}
			>
				<QueryProvider>
					<Suspense
						fallback={
							<div
								style={{
									minHeight: "100vh",
									background: "#f5f5f5",
								}}
							>
								<div
									style={{
										height: "70px",
										background: "#fff",
									}}
								/>
							</div>
						}
					>
						<AntdRegistry>
							<ConfigProvider
								theme={{
									cssVar: {
										prefix: "ant",
									},
									hashed: false,
								}}
							>
								<App>
									<RootProviders>
										{children}
									</RootProviders>
								</App>
							</ConfigProvider>
						</AntdRegistry>
					</Suspense>
				</QueryProvider>
			</body>
		</html>
	);
}
