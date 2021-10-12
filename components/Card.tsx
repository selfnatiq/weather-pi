interface Props {
	center?: boolean
}

const Card: React.FC<Props> = ({ children, center }) => {
	return (
		<main
			className={`flex flex-col ${
				center ? 'items-center' : 'items-start'
			} justify-center mt-16 mb-5`}
		>
			{children}
		</main>
	)
}

export default Card
