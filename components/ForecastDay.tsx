import { Forecast } from '../lib/types'

interface Props {
	forecast: Forecast
}

const ForecastDay: React.FC<Props> = ({ forecast }) => {
	return (
		<div className="flex justify-between items-center px-2">
			<p>
				{new Date(forecast.datetime.split(':')[0]).toLocaleDateString('de-DE', {
					weekday: 'long',
				})}
			</p>
			<div className="flex gap-2 items-center">
				<img
					className="w-9"
					src={`https://www.weatherbit.io/static/img/icons/${forecast.weather.icon}.png`}
					alt={forecast.weather.description}
				/>
				<p className="whitespace-nowrap break-words overflow-x-hidden text-xs">
					{forecast.weather.description}
				</p>
			</div>
			<p>{forecast.temp}&nbsp;°C</p>
		</div>
	)
}

export default ForecastDay
