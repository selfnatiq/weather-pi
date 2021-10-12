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
				<link rel="icon" type="image/png" href="/icons/favicon-16x16.png" sizes="16x16" />
				<link rel="icon" type="image/png" href="/icons/favicon-32x32.png" sizes="32x32" />
				<link rel="icon" type="image/png" href="/icons/icon-192x192.png" sizes="192x192" />
				<link rel="apple-touch-icon" href="/icons/icon-192x192.png" sizes="180x180" />
				<meta name="msapplication-config" content="/iconx/browserconfig.xml" />
			</Head>
			<Component {...pageProps} />
		</React.Fragment>
	)
}

export default MyApp
