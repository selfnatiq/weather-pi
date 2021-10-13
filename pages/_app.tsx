import '../styles/globals.css'
import 'swiper/css/bundle'

import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import Loader from '../components/Loader'

function MyApp({ Component, pageProps }: AppProps) {
	const [showLoader, setShowLoader] = React.useState(true)

	React.useEffect(() => {
		const timerId = setTimeout(() => {
			setShowLoader(false)
		}, 1000)

		return () => {
			clearTimeout(timerId)
		}
	}, [])

	if (showLoader) return <Loader />

	return (
		<React.Fragment>
			<Head>
				<title>WeatherPi</title>
				<link rel="icon" href="/logo.png" />
				<link rel="manifest" href="manifest.json" />
				<meta name="theme-color" content="#ffffff" />

				<link rel="icon" type="image/png" href="/images/icon-36x36.png" sizes="36x36" />
				<link rel="icon" type="image/png" href="/images/icon-96x96.png" sizes="96x96" />
				<link rel="icon" type="image/png" href="/images/icon-192.png" sizes="192x192" />

				<link rel="apple-touch-icon" href="/images/icon-192.png" sizes="192x192" />
				<meta name="msapplication-config" content="/iconx/browserconfig.xml" />

				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
				/>
			</Head>
			<Component {...pageProps} />
		</React.Fragment>
	)
}

export default MyApp
