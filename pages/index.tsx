import React from 'react'
import SwiperCore, { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import Loader from '../components/Loader'
import Header from '../components/Header'
import WeatherIcon from '../components/WeatherIcon'
import Sunset from '../components/Sunset'
import Card from '../components/Card'
import DetailItem from '../components/DetailItem'
import useCurrent from '../hooks/useCurrent'
import ForecastDay from '../components/ForecastDay'
import useForecast from '../hooks/useForecast'
import state from '../context/state'

SwiperCore.use([Pagination])

const Index: React.FC = () => {
	const [showLoader, setShowLoader] = React.useState(true)
	const current = useCurrent()
	const forecast = useForecast()

	React.useEffect(() => {
		const timerId = setTimeout(() => {
			setShowLoader(false)
		}, 1000)

		const city = localStorage.getItem('city')
		if (city) {
			state.selectedCity = JSON.parse(city)
		} else {
			//  temp default value
			state.selectedCity = { value: 2661552, label: 'Bern, Switzerland' }
		}

		return () => {
			clearTimeout(timerId)
		}
	}, [])

	if (showLoader) return <Loader />

	return (
		<div className="container py-10 px-6">
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
						<h2 className="text-lg">
							{new Date(current.datetime.split(':')[0]).toLocaleDateString('de-DE', {
								weekday: 'long',
								year: 'numeric',
								month: 'long',
								day: 'numeric',
							})}
						</h2>
						<p className="mt-5">
							<span className="text-8xl">{current.temp}</span>
							<span className="text-3xl">°C</span>
						</p>
						<p className="mt-10">Feels like {current.app_temp} °C</p>
						<WeatherIcon
							icon={current.weather.icon}
							description={current.weather.description}
						/>

						<div className="flex space-x-6 mt-10">
							<Sunset time={current.sunrise} level="HIGH" />
							<Sunset time={current.sunset} level="LOW" />
						</div>
					</Card>
				</SwiperSlide>

				<SwiperSlide>
					<Card>
						<h2 className="text-xl">Details</h2>
						<div className="flex flex-col gap-5 mt-8">
							<DetailItem title="Pressure" value={current.pres + ' mb'} />
							<DetailItem title="Wind speed" value={current.wind_spd + ' m/s'} />
							<DetailItem title="Wind direction" value={current.wind_dir + '°'} />
							<DetailItem title="Clouds" value={current.clouds + '%'} />
							<DetailItem title="Visibility" value={current.vis + ' km'} />
							<DetailItem title="Humidity" value={current.rh + '%'} />
						</div>
					</Card>
				</SwiperSlide>

				<SwiperSlide>
					<div className="mt-16 mb-5">
						<h2 className="text-xl mb-5">Next 16 Days</h2>
						<div className="flex flex-col gap-6 max-h-[480px] overflow-y-scroll">
							{forecast.map((fc) => (
								<ForecastDay key={fc.valid_date} forecast={fc} />
							))}
						</div>
					</div>
				</SwiperSlide>

				<div className="flex justify-between mt-10" />
			</Swiper>
			<p className="text-xs font-light italic mt-3">
				Last update at {new Date(current.ts * 1000).toLocaleTimeString('de-DE')}
			</p>
		</div>
	)
}

export default Index