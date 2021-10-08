interface Props {
	right?: boolean
	title: string
}

const SwipeArrow: React.FC<Props> = ({ title, right }) => {
	return (
		<div className="flex space-x-2">
			<span>{title}</span>
			<svg
				className="animate-pulse w-6 h-6"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M13 5l7 7-7 7M5 5l7 7-7 7"
				/>
			</svg>
		</div>
	)
}

export default SwipeArrow
