export type Level = 'HIGH' | 'LOW'
export type ForecastType = 'DAILY' | 'HOURLY'

export type CurrentResponse = {
    data: Current[];
    count: number;
}

export type Current = {
    datetime: string;
    temp: number;
    app_temp: number;
    weather: Weather;
    sunrise: string;
    sunset: string;
    pres: number;
    wind_spd: number;
    wind_dir: number;
    clouds: number | null;
    vis: number | null;
    rh: number;
    ts: number;
    rain_fall: number | null;
}

export type ForecastResponse = {
    data: Forecast[];
    city_name: string;
    lon: string;
    timezone: string;
    lat: string;
    country_code: string;
    state_code: string;
}

export type Forecast = {
    moonrise_ts: number;
    wind_cdir: string;
    rh: number;
    pres: number;
    high_temp: number;
    sunset_ts: number;
    ozone: number;
    moon_phase: number;
    wind_gust_spd: number;
    snow_depth: number;
    clouds: number;
    ts: number;
    sunrise_ts: number;
    app_min_temp: number;
    wind_spd: number;
    pop: number;
    wind_cdir_full: string;
    slp: number;
    moon_phase_lunation: number;
    valid_date: string;
    app_max_temp: number;
    vis: number;
    dewpt: number;
    snow: number;
    uv: number;
    weather: Weather;
    wind_dir: number;
    max_dhi?: any;
    clouds_hi: number;
    precip: number;
    low_temp: number;
    max_temp: number;
    moonset_ts: number;
    datetime: string;
    temp: number;
    min_temp: number;
    clouds_mid: number;
    clouds_low: number;
}

type Weather = {
    icon: string;
    code: number;
    description: string;
}

export type Country = {
    id: string;
    name: string;
    alpha2Code: string;
    alpha3Code: string;
    capital: string;
    region: string;
}

export type City = {
    id: string;
    cityId: number;
    cityName: string;
    stateCode: string;
    countryCode: string;
    country: string;
}

export type LSCity = {
    value: number;
    label: string;
}



