import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

const InstallPrompt: React.FC = () => {
	return (
		<Transition appear show={true} as={Fragment}>
			<Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={() => 'close'}>
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
						<div className="bottom-2 right-2 left-2 absolute p-6 overflow-hidden text-left align-middle transition-all bg-purple-700 text-white rounded-2xl">
							<Dialog.Title as="h3" className="text-lg font-medium leading-6">
								Install WeatherPi
							</Dialog.Title>
							<div className="mt-2">
								<p className="text-sm ">
									Installing uses almost no storage and provides a quick way to
									return to this app.
								</p>
							</div>

							<div className="mt-4 flex gap-4">
								<button
									type="button"
									className="inline-flex justify-center px-4 py-2 text-sm font-medium bg-white text-purple-700 border border-transparent rounded-full hover:bg-purple-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-700"
									onClick={() => 'confirm'}
								>
									Install
								</button>
								<button
									type="button"
									className="text-gray-300 text-sm"
									onClick={() => 'close'}
								>
									Not now
								</button>
							</div>
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition>
	)
}

export default InstallPrompt
