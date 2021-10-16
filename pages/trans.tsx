import { Transition } from '@headlessui/react'
import { useState } from 'react'

const Trans = () => {
	const [isShowing, setIsShowing] = useState(false)

	return (
		<div className="p-10">
			<button onClick={() => setIsShowing((isShowing) => !isShowing)}>Toggle</button>
			<Transition
				as="div"
				show={isShowing}
				// animation action
				enter="transition-opacity duration-75"
				enterFrom="opacity-0"
				enterTo="opacity-100"
				leave="transition-opacity duration-150"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
			>
				I will appear and disappear.
			</Transition>
		</div>
	)
}

export default Trans
