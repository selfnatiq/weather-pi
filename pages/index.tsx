import React from 'react'
import SwiperCore, { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import Header from '../components/Header'
import WeatherIcon from '../components/WeatherIcon'
import Sunset from '../components/Sunset'
import Card from '../components/Card'
import DetailItem from '../components/DetailItem'
import useCurrent from '../hooks/useCurrent'
import ForecastDay from '../components/ForecastDay'
import useForecast from '../hooks/useForecast'
import state from '../context/state'
import InstallPrompt from '../components/InstallPrompt'

SwiperCore.use([Pagination])

const Index: React.FC = () => {
	const current = useCurrent()
	const forecast = useForecast()

	const [deferredPrompt, setDeferredPrompt] = React.useState<Event | null>(null)
	const [installPromt, setInstallPromt] = React.useState(false)

	React.useEffect(() => {
		const city = localStorage.getItem('city')
		if (city) {
			state.selectedCity = JSON.parse(city)
		} else {
			//  temp default value
			state.selectedCity = { value: 2661552, label: 'Bern, Switzerland' }
		}

		window.addEventListener('beforeinstallprompt', (e) => {
			// Prevent the mini-infobar from appearing on mobile
			e.preventDefault()
			// Stash the event so it can be triggered later.
			setDeferredPrompt(e)
			// Update UI notify the user they can install the PWA
			setInstallPromt(true)
			// Optionally, send analytics event that PWA install promo was shown.
			console.log(`'beforeinstallprompt' event was fired.`)
		})
	}, [])

	return (
		<div className="container py-10 px-6">
			{/* {installPromt && (
				<button
					onClick={async () => {
						// Hide the app provided install promotion
						setInstallPromt(false)
						// Show the install prompt
						// @ts-ignore
						deferredPrompt.prompt()
						// Wait for the user to respond to the prompt
						//@ts-ignore
						const { outcome } = await deferredPrompt.userChoice
						// Optionally, send analytics event with outcome of user choice
						console.log(`User response to the install prompt: ${outcome}`)
						// We've used the prompt, and can't use it again, throw it away
						setDeferredPrompt(null)
					}}
					className="bg-indigo-400 w-full py-5 rounded-lg shadow-lg text-white text-xl font-bold tracking-wider transition animate-pulse"
				>
					Install WeatherPi
				</button>
			)} */}
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
			<InstallPrompt />
		</div>
	)
}

export default Index
