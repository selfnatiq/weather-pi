import { Transition } from '@headlessui/react'

const Loader: React.FC = () => {
	return (
		<Transition
			show
			appear
			enter="transition-opacity duration-75"
			enterFrom="opacity-0"
			enterTo="opacity-100"
			leave="transition-opacity duration-150"
			leaveFrom="opacity-100"
			leaveTo="opacity-0"
		>
			<div className="h-screen flex flex-col justify-between items-center">
				{/* this span will allow to center the title */}
				<span />
				<h1 className="text-2xl font-semibold">WeatherPi</h1>
				<p className="text-xs font-light mb-4">A minimalistic weather app</p>
			</div>
		</Transition>
	)
}

export default Loader
