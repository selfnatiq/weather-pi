import { ForecastType } from '../lib/types'
import TempLevel from './TempLevel'

interface Props {
	type: ForecastType
}

const ForecastItem: React.FC<Props> = ({ type }) => {
	const daily = type === 'DAILY'

	return (
		<div>
			<span className="text-sm">{daily ? '26 Dec' : '10:00'}</span>
			<span>
				<img
					className="w-10"
					src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAADNUlEQVR4nO2a20sVQRzHP5pgN7ujEAUV5YlMyi5UhFFvFUUlBRr42ENQz71ECQaB9DdED13oKXoQIsoiCIkIoiIoupDlIYyULpZYaQ+z284ez65znNnZc3I+MDCc3fP7fnfOmZ3f/HbB4XA4HA6Hw+FwTEbKLGrNA/YA24F6YAkw2zv2BXgLPAXuAp1Av0VvidIAXAWGgFHFNgRcAdam4NcYC4ALwAjqF57bRoDzwHzL3rVpBD4w9oKeAO3ADiADzPBaxvvsDGIa5H7vPbDV6hVo0MTYv/tNYF0BMTYAt3Ji/AQOGHWaALuBYQLTA8BejXj7vBh+vGFgl6bHxMgA3wjMvgBqDcRdCbyU4n41FNcoU4BHBCZ7gYUG4y8CslL8h55m0XCcwNwPYGMCGpsR9wFf52gCGhOiEvGL+8ZOJ6jVLulkgakJainTSmDqI1CVoNYsoE/SO5ygljI3CAydtKB3StLrtKAXSyVizvuGVlnQrJf0Bj0PqbFJMvPKou5rSVfrhluuaSQj9Z9rxioEWSsTeZYCugNQLfWzmrEKQdaqjjxLAd0BmC71P2nGKoQ+qT9TJ1CFwjm1iJw832A1Sv0/OkYKRNZqBE4g9gy9QDeGiynyDSeutZkUHYe2GB+/gC5gv0og3SkgY3sViKICUVu4BtwHlscFUqkJrgCaEYWLKJ4BlxEVHBuUI7LA1dJnc4A6YAvhjVI/cBC4Y8lb6lQDHYQ3ToOI2uSkogHoIRiEHmBuqo5SYCliefYHoSNdO+nQRLiuWJOunXToJhiEI/IBk8tgMXNR6oeKtLmZYFzWF0cWuIS9ZbBQuqR+bEFVNevL11pNuzZIFeGq8j9MToFRg7GskTsFdjJ+1pcPPxMsVhZLfZvb9qLhGMEUuJ6yF+uUAQ+IWAYnA4cIP7TRqiCVGrmp8Nl07dhlPeK9Av/i3yG2zP89NcA5wu8ofCfidZsKxE2ihfBS4aOS4U00ezTJNMTT6DrEQ1TZy2dEQeRx1Jdb0MvwdLLHpNs9YFmceZVfrdQyvN/AbcS/chvwJu7kMq81A2vyHFep9anUDJNmCFES98viAyl6cTgcDofD4XA4SoG/y38sM/gYqGUAAAAASUVORK5CYII="
				/>

				{daily ? (
					<div className="flex flex-col items-center justify-center gap-2 text-gray-500">
						<TempLevel deg={26} level="HIGH" size="sm" />
						<TempLevel deg={15} level="LOW" size="sm" />
					</div>
				) : (
					<p className="text-xs text-center font-extralight text-gray-500">26°C</p>
				)}
			</span>
		</div>
	)
}

export default ForecastItem
