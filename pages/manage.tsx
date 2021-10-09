import React from 'react'
import Link from 'next/link'

import AddCity from '../components/AddCity'
import ManageItem from '../components/ManageItem'
import { City } from '../lib/types'

const Manage: React.FC = () => {
	const [isOpen, setIsOpen] = React.useState(false)
	const [cities, setCities] = React.useState<City[]>([])

	React.useEffect(() => {
		const _cities = localStorage.getItem('cities')

		if (_cities) {
			setCities(JSON.parse(_cities))
		}
	}, [])

	const deleteCity = (city: City) => {
		const cities = localStorage.getItem('cities')

		if (cities) {
			let _cities: City[] = JSON.parse(cities)
			const foundCity = _cities.findIndex((c) => c.value === city.value)
			_cities.splice(foundCity, 1)
			localStorage.setItem('cities', JSON.stringify(_cities))

			setCities(_cities)
		}
	}

	return (
		<div className="container py-10 px-6">
			<header className="flex justify-between items-center">
				<Link href="/">
					<a className="flex items-center gap-2">
						<svg
							className="w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M15 19l-7-7 7-7"
							/>
						</svg>
						<p>Select City</p>
					</a>
				</Link>
				<button onClick={() => setIsOpen(true)}>
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
							d="M12 6v6m0 0v6m0-6h6m-6 0H6"
						/>
					</svg>
				</button>
			</header>

			<main>
				<div className="flex flex-col mt-10 px-1 gap-6">
					{cities.length ? (
						cities.map((city) => (
							<ManageItem key={city.value} city={city} deleteCity={deleteCity} />
						))
					) : (
						<h1>No cities found</h1>
					)}
				</div>
			</main>

			{isOpen && <AddCity setIsOpen={setIsOpen} setCities={setCities} />}
		</div>
	)
}

export default Manage
