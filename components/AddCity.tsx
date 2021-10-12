import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import Select from 'react-select'
import useSWR, { mutate } from 'swr'
import citiesFetcher from '../lib/citiesFetcher'
import type { City, LSCity } from '../lib/types'

interface Props {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
	setCities: React.Dispatch<React.SetStateAction<LSCity[]>>
}

const AddCity: React.FC<Props> = ({ setIsOpen, setCities }) => {
	let { data } = useSWR<City[]>('/cities', citiesFetcher, {
		refreshInterval: 60 * 1000,
		revalidateIfStale: false,
	})

	const [city, setCity] = React.useState<LSCity | null>(null)

	const handleSave = () => {
		const cities = localStorage.getItem('cities')
		let _cities: LSCity[]

		if (!cities) {
			_cities = [city!]
			localStorage.setItem('cities', JSON.stringify([_cities]))
		} else {
			_cities = JSON.parse(cities)
			const foundCity = _cities.find((c) => c.value === city!.value)
			if (!foundCity) {
				localStorage.setItem('cities', JSON.stringify([..._cities, city]))
			}
		}
		setCities([..._cities, city!])
		setIsOpen(false)
	}

	return (
		<Transition appear show={true} as={Fragment}>
			<Dialog
				as="div"
				className="fixed inset-0 z-10 overflow-y-auto"
				onClose={() => setIsOpen(false)}
			>
				<div className="min-h-screen px-4 text-center">
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Dialog.Overlay className="fixed inset-0" />
					</Transition.Child>

					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95"
					>
						<div className="inline-block w-full max-w-md p-6 my-16 text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
							<Dialog.Title
								as="h3"
								className="text-lg font-medium leading-6 text-gray-900"
							>
								Add City
							</Dialog.Title>

							<div className="mt-2 flex flex-col gap-2">
								<label
									htmlFor="city"
									className="block text-sm font-medium text-gray-700"
								>
									City
								</label>
								<Select
									onChange={(v) => setCity(v)}
									onInputChange={(v) => {
										if (v.length > 2) {
											mutate(
												'/cities',
												citiesFetcher(
													`/cities?_where[_or][0][cityName_contains]=${v}&_where[_or][1][country_contains]=${v}`
												),
												false
											)
										}
									}}
									isDisabled={!data}
									placeholder={!data ? 'Loading cities...' : 'Select city'}
									options={
										data &&
										data
											.map((city) => ({
												value: city.cityId,
												label: `${city.cityName}, ${city.country}`,
											}))
											.sort((a, b) => (a.label > b.label ? 1 : -1))
									}
								/>
							</div>

							<div className="mt-4">
								<button
									type="button"
									className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
									onClick={handleSave}
								>
									Got it
								</button>
							</div>
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition>
	)
}

export default AddCity
