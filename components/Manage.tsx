import React from 'react'
import AddCity from '../components/AddCity'
import ManageItem from '../components/ManageItem'
import { LSCity } from '../lib/types'
import { Transition } from '@headlessui/react'
import { useSnapshot } from 'valtio'
import state from '../context/state'

const Manage: React.FC = () => {
	const [isOpen, setIsOpen] = React.useState(false)
	const [cities, setCities] = React.useState<LSCity[]>([])
	const { showManage } = useSnapshot(state)

	React.useEffect(() => {
		let _cities = localStorage.getItem('cities')
		if (_cities) setCities(JSON.parse(_cities))
	}, [])

	return (
		<>
			<Transition
				show={showManage}
				enter="transition ease-in-out duration-300 transform"
				enterFrom="translate-x-full opacity-0"
				enterTo="translate-x-0 opacity-100"
				leave="transition ease-in-out duration-300 transform"
				leaveFrom="translate-x-0 opacity-100"
				leaveTo="translate-x-full opacity-0"
				className="absolute inset-2 -right-2 container py-10 px-6 z-10 rounded-xl bg-white shadow-2xl"
				as="div"
			>
				<header className="flex justify-between items-center">
					<button onClick={() => (state.showManage = false)}>
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
							<p>Stadt wählen</p>
						</a>
					</button>
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
								<ManageItem key={city.value} city={city} setCities={setCities} />
							))
						) : (
							<h1>Keine Städte gefunden</h1>
						)}
					</div>
				</main>

				{isOpen && <AddCity setIsOpen={setIsOpen} setCities={setCities} />}
			</Transition>
		</>
	)
}

export default Manage
