interface Props {
	weather: {
		main: string
		icon: string
	}
}

const WeatherIcon: React.FC<Props> = ({ weather: { main, icon } }) => {
	return (
		<div className="mt-10 flex flex-col items-center">
			<img
				className="w-40"
				src={`http://openweathermap.org/img/wn/${icon}@4x.png`}
				alt={main}
			/>
			<p className="mt-3 font-light">{main}</p>
		</div>
	)
}

export default WeatherIcon
