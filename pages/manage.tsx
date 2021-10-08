import React from 'react'
import AddCity from '../components/AddCity'
import ManageItem from '../components/ManageItem'

const Manage: React.FC = () => {
	const [isOpen, setIsOpen] = React.useState(false)

	return (
		<div className="container py-10 px-6">
			<header className="flex justify-between items-center">
				<div className="flex items-center gap-2">
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
				</div>
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
					<ManageItem />
				</div>
			</main>

			{isOpen && <AddCity setIsOpen={setIsOpen} />}
		</div>
	)
}

export default Manage
