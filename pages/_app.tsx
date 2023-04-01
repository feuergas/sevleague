import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from "next/head";
import { useEffect } from "react";
config.autoAddCss = false;
library.add(far, fas);

const App = ({ Component, pageProps }: AppProps) => {
	useEffect(() => {
		if ("serviceWorker" in navigator) {
			window.addEventListener("load", () => {
				navigator.serviceWorker.register("/sw.js").then(
					(registration) =>
						console.log(
							"Service Worker registration successful with scope: ",
							registration.scope
						),
					(err) => {
						console.log(
							"Service Worker registration failed: ",
							err
						);
					}
				);
			});
		}
	}, []);

	return (
		<>
			<Head>
				<meta charSet='utf-8' />
				<meta
					httpEquiv='X-UA-Compatible'
					content='IE=edge'
				/>
				<meta
					name='viewport'
					content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
				/>
				<meta
					name='description'
					content='Platform to create and host math contests, upload and solve problems.'
				/>
				<meta
					name='keywords'
					content='math, contests, problems'
				/>
				<title>SevLeague</title>

				<link
					rel='manifest'
					href='/manifest.json'
				/>
				<link
					href='/icons/icon-16x16.png'
					rel='icon'
					type='image/png'
					sizes='16x16'
				/>
				<link
					href='/icons/icon-32x32.png'
					rel='icon'
					type='image/png'
					sizes='32x32'
				/>
				<link
					href='/icons/icon-192x192.png'
					rel='apple-touch-icon'
				></link>
				<meta
					name='theme-color'
					content='#3F83F8'
				/>
			</Head>
			<ThemeProvider attribute='class'>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</>
	);
};

export default App;
