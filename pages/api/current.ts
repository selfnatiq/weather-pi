import type { NextApiRequest, NextApiResponse } from 'next'
import { CurrentResponse } from '../../lib/types'

export default async (req: NextApiRequest, res: NextApiResponse<CurrentResponse>) => {
    // get weather from weather station
    const call = await fetch('http://api.weatherpi.k8s.joelgraf.io/current')
    const wsRes = await call.json()

    res.status(200).json({
        count: 1,
        data: [
            {
                rh: wsRes.humidity,
                pres: wsRes.pressure,
                ts: wsRes.sampled_at,
                wind_spd: wsRes.wind_average_speed,
                sunset: "16:10",
                wind_dir: wsRes.wind_degrees_direction,
                rain_fall: wsRes.rain_fall,
                sunrise: "07:10",
                weather: {
                    icon: "local",
                    code: 999,
                    description: "Ruhe",
                },
                datetime: wsRes.datetime,
                temp: wsRes.ground_temperature,
                app_temp: wsRes.air_temperature,
                clouds: null,
                vis: null
            }
        ]
    })
}
