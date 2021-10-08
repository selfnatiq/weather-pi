import React from 'react'
import { Level } from '../lib/types'

interface Props {
	deg: number
	level: Level
	size?: 'sm' | 'lg'
}

const TempLevel: React.FC<Props> = ({ deg, level, size }) => {
	const isHigh = level === 'HIGH'
	const isSm = size === 'sm'

	return (
		<p className="flex gap-1">
			{isHigh ? (
				<svg
					className={`${isSm ? 'w-3 h-3' : 'w-5 h-5'}`}
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M5 10l7-7m0 0l7 7m-7-7v18"
					/>
				</svg>
			) : (
				<svg
					className={`${isSm ? 'w-3 h-3' : 'w-5 h-5'}`}
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M19 14l-7 7m0 0l-7-7m7 7V3"
					/>
				</svg>
			)}
			<span className={`${isSm && 'text-xs font-extralight'}`}>{deg}°C</span>
		</p>
	)
}

export default TempLevel
