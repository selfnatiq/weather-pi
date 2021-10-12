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
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Component {...pageProps} />
		</React.Fragment>
	)
}

export default MyApp
