import { ForecastType } from '../lib/types'
import ForecastItem from './ForecastItem'

interface Props {
	type: ForecastType
}

const Forecast: React.FC<Props> = ({ type }) => {
	const isDaily = type === 'DAILY'

	return (
		<div className="my-6">
			<p className="text-lg font-light">{isDaily ? 'Daily' : 'Hourly'} Forecast</p>
			<div className="mt-2 flex flex-wrap gap-7 overflow-y-scroll max-h-36">
				<ForecastItem type={type} />
				<ForecastItem type={type} />
				<ForecastItem type={type} />
				<ForecastItem type={type} />
				<ForecastItem type={type} />
				<ForecastItem type={type} />
				<ForecastItem type={type} />
				<ForecastItem type={type} />
				<ForecastItem type={type} />
				<ForecastItem type={type} />
				<ForecastItem type={type} />
				<ForecastItem type={type} />
				<ForecastItem type={type} />
				<ForecastItem type={type} />
				<ForecastItem type={type} />
				<ForecastItem type={type} />
			</div>
		</div>
	)
}

export default Forecast
