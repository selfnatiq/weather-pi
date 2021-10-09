export type Level = 'HIGH' | 'LOW'
export type ForecastType = 'DAILY' | 'HOURLY'

export type Country = {
    id: string,
    name: string,
    capital: string,
    region: string
}

export type City = {
    value: string
    label: string
}