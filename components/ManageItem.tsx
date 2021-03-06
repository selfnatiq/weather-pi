import state from '../context/state'
import { isLocal } from '../lib/constants'
import { LSCity } from '../lib/types'

interface Props {
	city: LSCity
	setCities: React.Dispatch<React.SetStateAction<LSCity[]>>
}

const ManageItem: React.FC<Props> = ({ city, setCities }) => {
	const deleteCity = (city: LSCity) => {
		const cities = localStorage.getItem('cities')

		if (cities) {
			let _cities: LSCity[] = JSON.parse(cities)
			const foundCity = _cities.findIndex((c) => c.value === city.value)
			_cities.splice(foundCity, 1)
			localStorage.setItem('cities', JSON.stringify(_cities))
			setCities(_cities)
		}
	}

	return (
		<div className="flex justify-between items-center">
			<div>
				<button
					className="text-lg text-blue-600 border-b-2"
					onClick={() => {
						localStorage.setItem('city', JSON.stringify(city))
						state.selectedCity = city
						state.showManage = false
					}}
				>
					{city.label}
				</button>
				{/* <p className="text-sm">22°C</p> */}
				{/* <p className="text-xs font-extralight">Light Rain</p> */}
			</div>

			{!isLocal(city.value) && (
				<button onClick={() => deleteCity(city)}>
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
						/>
					</svg>
				</button>
			)}
		</div>
	)
}

export default ManageItem
