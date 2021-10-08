import React from 'react'
import Head from 'next/head'
import Loader from '../components/Loader'
import Header from '../components/Header'
import TempLevel from '../components/TempLevel'
import WeatherIcon from '../components/WeatherIcon'
import Sunset from '../components/Sunset'
import Card from '../components/Card'

import SwiperCore, { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import Forecast from '../components/Forecast'
import DetailItem from '../components/DetailItem'

SwiperCore.use([Pagination])

const Index: React.FC = () => {
	const [showLoader, setShowLoader] = React.useState(false)

	React.useEffect(() => {
		const timerId = setTimeout(() => {
			setShowLoader(false)
		}, 1000)

		return () => {
			clearTimeout(timerId)
		}
	}, [])

	const meta = (
		<Head>
			<title>WeatherPi</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
	)

	if (showLoader) {
		return (
			<>
				{meta}
				<Loader />
			</>
		)
	}

	return (
		<div className="container py-10 px-6">
			{meta}
			<Header />
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				loop={true}
				pagination={{
					clickable: true,
				}}
			>
				<SwiperSlide>
					<Card center>
						<h2 className="text-lg">Monday, 04 November 2020</h2>
						<p className="mt-5">
							<span className="text-8xl">22</span>
							<span className="text-3xl">°C</span>
						</p>
						<div className="flex space-x-6 mt-10">
							<TempLevel deg={16} level="LOW" />
							<TempLevel deg={22} level="HIGH" />
						</div>
						<WeatherIcon />

						<div className="flex space-x-6 mt-10">
							<Sunset time="07:38 AM" level="HIGH" />
							<Sunset time="06:10 PM" level="LOW" />
						</div>
					</Card>
				</SwiperSlide>

				<SwiperSlide>
					<Card>
						<h2 className="text-xl">Details</h2>
						<div className="flex flex-col gap-5 mt-8">
							<DetailItem title="Prcipitation" value="0.0 mm" />
							<DetailItem title="SE Wind" value="10.23 km/h" />
						</div>
					</Card>
				</SwiperSlide>

				<SwiperSlide>
					<Card>
						<h2 className="text-xl">Forecast</h2>
						<Forecast type="HOURLY" />
						<Forecast type="DAILY" />
					</Card>
				</SwiperSlide>

				<div className="flex justify-between my-4" />
				<p className="text-xs font-light italic">Last update at 13:00 PM</p>
			</Swiper>
		</div>
	)
}

export default Index
