import useSWR from 'swr'
import { useSnapshot } from 'valtio'
import state from '../context/state'
import { api, API_KEY, isDev } from '../lib/constants'
import { CurrentResponse } from '../lib/types'

const mock: CurrentResponse =
	{ "data": [{ "rh": 80.9695, "pod": "n", "lon": 7.44744, "pres": 958.13, "timezone": "Europe\/Zurich", "ob_time": "2021-10-11 19:48", "country_code": "CH", "clouds": 90, "ts": 1633981681, "solar_rad": 0, "state_code": "BE", "city_name": "Bern", "wind_spd": 0.929898, "wind_cdir_full": "Osten-Südöstlich", "wind_cdir": "OSO", "slp": 1025.97, "vis": 5, "h_angle": -90, "sunset": "16:48", "dni": 0, "dewpt": 1.4, "snow": 0, "uv": 0, "precip": 0, "wind_dir": 116, "sunrise": "05:43", "ghi": 0, "dhi": 0, "aqi": 58, "lat": 46.94809, "weather": { "icon": "c02n", "code": 802, "description": "Verstreute Wolken" }, "datetime": "2021-10-11:19", "temp": 4.4, "station": "LSZB", "elev_angle": -32.46, "app_temp": 0.6 }], "count": 1 }

const useCurrent = () => {
	const { selectedCity } = useSnapshot(state)
	console.log(selectedCity)
	const { data } = useSWR<CurrentResponse>(!isDev && selectedCity ? `current-${selectedCity.value}` : null, () => fetch(`${api}/current?city_id=${selectedCity?.value}&lang=de&key=${API_KEY}`).then(res => res.json()))

	return isDev ? mock.data[0] : data?.data[0]
}

export default useCurrent
