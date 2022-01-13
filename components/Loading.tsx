import Image from 'next/image'

const Loading = () => {
	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<div className="animate-bounce opacity-60">
				<Image src="/images/icon-192.png" alt="Icon" width={100} height={100} />
			</div>
		</div>
	)
}

export default Loading
