import Link from 'next/link'
import { useSnapshot } from 'valtio'
import state from '../context/state'

const Header = () => {
	const { selectedCity } = useSnapshot(state)
	return (
		<header>
			<nav className="flex justify-between items-center">
				<div>
					<h2 className="text-lg">{selectedCity ? selectedCity.label : 'No City'}</h2>
					<p className="text-xs font-extralight">Current Location</p>
				</div>
				<div className="flex items-center">
					<Link href="/manage">
						<a>
							<svg
								className="w-7 h-7 text-gray-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
								/>
							</svg>
						</a>
					</Link>
				</div>
			</nav>
		</header>
	)
}

export default Header
