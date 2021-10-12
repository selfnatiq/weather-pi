interface Props {
	icon: string
	description: string
}

const WeatherIcon: React.FC<Props> = ({ icon, description }) => {
	return (
		<div className="mt-10 flex flex-col items-center">
			<img
				className="w-40"
				src={`https://www.weatherbit.io/static/img/icons/${icon}.png`}
				alt={description}
			/>
			<p className="mt-3 font-light">{description}</p>
		</div>
	)
}

export default WeatherIcon
