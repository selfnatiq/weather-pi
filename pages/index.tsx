import React from 'react'
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
import { useSnapshot } from 'valtio'
import state from '../context/state'
import useSWR from 'swr'
import { getWeather } from '../lib/api'
import Loading from '../components/Loading'

SwiperCore.use([Pagination])

const date = new Date(Date.now())
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

const Index: React.FC = () => {
	const [showLoader, setShowLoader] = React.useState(true)
	const { selectedCity } = useSnapshot(state)
	const { data: weatherInfo } = useSWR(selectedCity ? 'weatherInfo' : null, () =>
		getWeather(selectedCity?.value!)
	)

	React.useEffect(() => {
		const timerId = setTimeout(() => {
			setShowLoader(false)
		}, 1000)

		const city = localStorage.getItem('city')
		if (city) {
			state.selectedCity = JSON.parse(city)
		}

		return () => {
			clearTimeout(timerId)
		}
	}, [])

	if (showLoader) return <Loader />

	if (!weatherInfo) return <Loading />

	return (
		<div className="container py-10 px-6">
			<Header />
			{selectedCity ? (
				<>
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
								<h2 className="text-lg">
									{date.toLocaleDateString('de-DE', options as any)}
								</h2>
								<p className="mt-5">
									<span className="text-8xl">{weatherInfo.main.temp}</span>
									<span className="text-3xl">°C</span>
								</p>
								<div className="flex space-x-6 mt-10">
									<TempLevel deg={weatherInfo.main.temp_min} level="LOW" />
									<TempLevel deg={weatherInfo.main.temp_max} level="HIGH" />
								</div>
								<WeatherIcon weather={weatherInfo.weather[0]} />

								<div className="flex space-x-6 mt-10">
									<Sunset
										time={new Date(
											weatherInfo.sys.sunrise * 1000
										).toLocaleTimeString('de-DE')}
										level="HIGH"
									/>
									<Sunset
										time={new Date(
											weatherInfo.sys.sunset * 1000
										).toLocaleTimeString('de-DE')}
										level="LOW"
									/>
								</div>
							</Card>
						</SwiperSlide>

						<SwiperSlide>
							<Card>
								<h2 className="text-xl">Details</h2>
								<div className="flex flex-col gap-5 mt-8">
									<DetailItem
										title="Pressure"
										value={weatherInfo.main.pressure + ' hpa'}
									/>
									<DetailItem
										title="Wind Speed"
										value={weatherInfo.wind.speed + ' m/s'}
									/>
									<DetailItem
										title="Wind Temperature"
										value={weatherInfo.wind.deg + ' °C'}
									/>
									<DetailItem
										title="Clouds"
										value={weatherInfo.clouds.all + '%'}
									/>
									<DetailItem
										title="Visibility"
										value={weatherInfo.visibility / 1000 + 'km'}
									/>
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

						<div className="flex justify-between mt-10" />
					</Swiper>
					<p className="text-xs font-light italic mt-3">
						Last update at {new Date(weatherInfo.dt * 1000).toLocaleTimeString('de-DE')}
					</p>
				</>
			) : (
				<h1>No city selected yet!</h1>
			)}
		</div>
	)
}

export default Index
