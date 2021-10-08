interface Props {
	title: string
	value: string
}
const DetailItem: React.FC<Props> = ({ title, value }) => {
	return (
		<div>
			<p className="text-xs font-light">{title}</p>
			<p className="text-lg tracking-wide">{value}</p>
		</div>
	)
}

export default DetailItem
