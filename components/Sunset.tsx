import { Level } from '../lib/types'

interface Props {
	time: string
	level: Level
}

const Sunset: React.FC<Props> = ({ time, level }) => {
	const isHigh = level === 'HIGH'

	return (
		<div className="flex items-center space-x-2">
			{isHigh ? (
				<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABFUlEQVRIie3VPUoDURTF8R9io9gquIoURlCwUFIpuA1dga7GQkFXIGghaJGAH0EIWrgLCWhpiEVucBxB5yOJCvOHy7x5c885vJk3PCr+OAtooR3jiTCPB/SjnrA46dCJhbcj6DEROhzf5TGayhn8hns0EnONmOvl9CrMcMWFyLvikfFrwdMltC0lXnXFv+AW1+MOWUUT9cRc+j+uG2y4lSyGWXd1DWs4wGnK/AI32I6+WtyPhFl0fT0c0tWN3lIsYwczOArjHo4NVjwXtYqTeNbHYWh2ff40mbkKo+e4vmD9m/4NvKY0l0WCl9Dx8Ro3M2i2Ev2d8CjEfpic5dCch2Yvq6Dp581TtprDsEmfTtWhUjF+3gGNiWavXurr0AAAAABJRU5ErkJggg==" />
			) : (
				<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABEUlEQVRIie3WTUrDYBDG8R/iRnFr8BZdWEHBhS4VvIaeQE/jQkFPIOhCULCCWl0UXXgLKehW6qITGqPYmH5IJX8YkryZeZ4kE4aXigngDjd/YdyJKMXUEB/kfxpf4QFJZi2JtZH2u6nb1ye9HqfnzVEaz+MxY5rGMxZGafyd+VhMUxLcRyR9cisml7HM6hU0UM+s5Wd1HddYLiI4XdC4hlXs4yQnfo5bbEVeLa6Hwizavg6OfLQjdyCWsI0ZHIbwO45033guYgXHca+Dg6jZ8bk1hbkMoZc4vmLth/x1vOVqLsoYL6Kl9xk3CtRsZvJboVGKvRA5/UXNWdTsFi1o6P/zDBqN1GzcO5DSe7SKisJ8AMg+ZbAYJy1DAAAAAElFTkSuQmCC" />
			)}
			<span className="font-light text-md">{time}</span>
		</div>
	)
}

export default Sunset
