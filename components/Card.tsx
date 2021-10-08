interface Props {
	center?: boolean
}

const Card: React.FC<Props> = ({ children, center }) => {
	return (
		<main
			className={`flex flex-col ${
				center ? 'items-center' : 'items-start'
			} justify-center mt-14 py-5`}
		>
			{children}
		</main>
	)
}

export default Card
