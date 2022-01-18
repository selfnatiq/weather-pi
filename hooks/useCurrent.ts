import useSWR from 'swr'
import { useSnapshot } from 'valtio'
import state from '../context/state'
import { api, API_KEY, isDev, backend, isLocal } from '../lib/constants'
import { CurrentResponse } from '../lib/types'

const mock: CurrentResponse =
{
	"data":
		[{
			"rh": 80.9695,
			"pres": 958.13,
			"clouds": 90,
			"ts": 1633981681,
			"wind_spd": 0.929898,
			"vis": 5,
			"sunset": "16:48",
			"wind_dir": 116,
			"sunrise": "05:43",
			"weather":
			{
				"icon": "c02n",
				"code": 802,
				"description": "Verstreute Wolken"
			},
			"datetime": "2021-10-11:19",
			"temp": 4.4,
			"app_temp": 0.6,
		}], "count": 1
}

const useCurrent = () => {
	const { selectedCity } = useSnapshot(state)
	const uri = isLocal(selectedCity?.value) ?
		`/api/current` :
		`${api}/current?city_id=${selectedCity?.value}&lang=de&key=${API_KEY}`

	const { data } = useSWR<CurrentResponse>(
		!isDev && selectedCity ?
			`current-${selectedCity.value}` : null,
		() => fetch(uri).then(res => res.json()))

	return isDev ? mock.data[0] : data?.data[0]
}

export default useCurrent
