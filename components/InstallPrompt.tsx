import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

const InstallPrompt: React.FC = () => {
	const [deferredPrompt, setDeferredPrompt] = React.useState<Event | null>(null)
	const [installPrompt, setInstallPrompt] = React.useState(false)

	React.useEffect(() => {
		window.addEventListener('beforeinstallprompt', beforeinstallpromptListener)
		window.addEventListener('appinstalled', appinstalledListener)

		return () => {
			window.removeEventListener('appinstalled', appinstalledListener)
			window.removeEventListener('beforeinstallprompt', beforeinstallpromptListener)
		}
	}, [])

	const beforeinstallpromptListener = (e: Event) => {
		// Prevent the mini-infobar from appearing on mobile
		e.preventDefault()
		// Stash the event so it can be triggered later.
		setDeferredPrompt(e)
		// Update UI notify the user they can install the PWA
		setInstallPrompt(true)
		// Optionally, send analytics event that PWA install promo was shown.
	}

	const installPromptWindow = async () => {
		// Hide the app provided install promotion
		setInstallPrompt(false)
		// Show the install prompt
		// @ts-ignore
		deferredPrompt.prompt()
		// Wait for the user to respond to the prompt
		//@ts-ignore
		await deferredPrompt.userChoice

		// We've used the prompt, and can't use it again, throw it away
		setDeferredPrompt(null)
	}

	const cancelInstallPrompt = () => {
		setInstallPrompt(false)
		setDeferredPrompt(null)
	}

	const appinstalledListener = () => {
		// Hide the app-provided install promotion
		setInstallPrompt(false)
		// Clear the deferredPrompt so it can be garbage collected
		setDeferredPrompt(null)
		// Optionally, send analytics event to indicate successful install
	}

	if (installPrompt) {
		return (
			<Transition appear show={true} as={Fragment}>
				<Dialog
					as="div"
					className="fixed inset-0 z-10 overflow-y-auto"
					onClose={() => 'close'}
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
							<div className="bottom-2 right-2 left-2 absolute p-6 overflow-hidden text-left align-middle transition-all bg-purple-700 text-white rounded-2xl">
								<Dialog.Title as="h3" className="text-lg font-medium leading-6">
									WeatherPi installieren
								</Dialog.Title>
								<div className="mt-2">
									<p className="text-sm ">
										Die Installation verbraucht fast keinen Speicherplatz und
										bietet eine schnelle Möglichkeit, zu dieser App
										zurückzukehren.
									</p>
								</div>

								<div className="mt-4 flex gap-4">
									<button
										type="button"
										className="inline-flex justify-center px-4 py-2 text-sm font-medium bg-white text-purple-700 border border-transparent rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-700"
										onClick={installPromptWindow}
									>
										Installieren
									</button>
									<button
										type="button"
										className="text-gray-300 text-sm"
										onClick={cancelInstallPrompt}
									>
										Nicht jetzt!
									</button>
								</div>
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition>
		)
	}

	return null
}

export default InstallPrompt
