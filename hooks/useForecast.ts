import { Forecast } from "../lib/types"

const mock: {
    data: Forecast[];
    city_name: string;
    lon: string;
    timezone: string;
    lat: string;
    country_code: string;
    state_code: string;
} = { "data": [{ "moonrise_ts": 1633948941, "wind_cdir": "ONO", "rh": 62, "pres": 958.338, "high_temp": 5.3, "sunset_ts": 1633971023, "ozone": 271.667, "moon_phase": 0.355163, "wind_gust_spd": 6.37318, "snow_depth": 0, "clouds": 53, "ts": 1633903260, "sunrise_ts": 1633930850, "app_min_temp": 0.6, "wind_spd": 1.45337, "pop": 0, "wind_cdir_full": "Osten-Nordöstlich", "slp": 1025.19, "moon_phase_lunation": 0.15, "valid_date": "2021-10-11", "app_max_temp": 12.4, "vis": 0, "dewpt": 1.9, "snow": 0, "uv": 0.828221, "weather": { "icon": "c03d", "code": 803, "description": "Aufgelockert Bewölkt" }, "wind_dir": 59, "max_dhi": null, "clouds_hi": 52, "precip": 0, "low_temp": 1.1, "max_temp": 12.4, "moonset_ts": 1633982911, "datetime": "2021-10-11", "temp": 8.7, "min_temp": 4.4, "clouds_mid": 33, "clouds_low": 0 }, { "moonrise_ts": 1634039938, "wind_cdir": "OSO", "rh": 84, "pres": 955.672, "high_temp": 11.4, "sunset_ts": 1634057310, "ozone": 289.125, "moon_phase": 0.472689, "wind_gust_spd": 4.77048, "snow_depth": 0, "clouds": 88, "ts": 1633989660, "sunrise_ts": 1634017333, "app_min_temp": -3.7, "wind_spd": 0.925445, "pop": 10, "wind_cdir_full": "Osten-Südöstlich", "slp": 1023.07, "moon_phase_lunation": 0.19, "valid_date": "2021-10-12", "app_max_temp": 11.4, "vis": 0, "dewpt": 3.4, "snow": 0, "uv": 2.26153, "weather": { "icon": "c04d", "code": 804, "description": "Bewölkt" }, "wind_dir": 110, "max_dhi": null, "clouds_hi": 30, "precip": 0.0957031, "low_temp": 1, "max_temp": 11.4, "moonset_ts": 1634072976, "datetime": "2021-10-12", "temp": 6.3, "min_temp": 1, "clouds_mid": 55, "clouds_low": 53 }, { "moonrise_ts": 1634130284, "wind_cdir": "OSO", "rh": 84, "pres": 956.174, "high_temp": 10, "sunset_ts": 1634143597, "ozone": 290.302, "moon_phase": 0.589634, "wind_gust_spd": 9.57063, "snow_depth": 0, "clouds": 62, "ts": 1634076060, "sunrise_ts": 1634103817, "app_min_temp": 0.5, "wind_spd": 1.67559, "pop": 55, "wind_cdir_full": "Osten-Südöstlich", "slp": 1023.4, "moon_phase_lunation": 0.22, "valid_date": "2021-10-13", "app_max_temp": 10, "vis": 0, "dewpt": 4.6, "snow": 0, "uv": 2.32875, "weather": { "icon": "c03d", "code": 803, "description": "Aufgelockert Bewölkt" }, "wind_dir": 108, "max_dhi": null, "clouds_hi": 3, "precip": 1.16211, "low_temp": 0.3, "max_temp": 10, "moonset_ts": 1634077176, "datetime": "2021-10-13", "temp": 7.1, "min_temp": 4.3, "clouds_mid": 43, "clouds_low": 50 }, { "moonrise_ts": 1634219830, "wind_cdir": "ONO", "rh": 83, "pres": 959.321, "high_temp": 11.3, "sunset_ts": 1634229885, "ozone": 278.562, "moon_phase": 0.699267, "wind_gust_spd": 9.56766, "snow_depth": 0, "clouds": 24, "ts": 1634162460, "sunrise_ts": 1634190301, "app_min_temp": -4.6, "wind_spd": 1.91885, "pop": 0, "wind_cdir_full": "Osten-Nordöstlich", "slp": 1027.23, "moon_phase_lunation": 0.26, "valid_date": "2021-10-14", "app_max_temp": 11.3, "vis": 0, "dewpt": 2.6, "snow": 0, "uv": 3.44249, "weather": { "icon": "c02d", "code": 802, "description": "Verstreute Wolken" }, "wind_dir": 70, "max_dhi": null, "clouds_hi": 1, "precip": 0, "low_temp": 0.3, "max_temp": 11.3, "moonset_ts": 1634168035, "datetime": "2021-10-14", "temp": 5.5, "min_temp": 0.3, "clouds_mid": 0, "clouds_low": 23 }, { "moonrise_ts": 1634308642, "wind_cdir": "SSO", "rh": 74, "pres": 949.438, "high_temp": 13.6, "sunset_ts": 1634316174, "ozone": 280.833, "moon_phase": 0.796226, "wind_gust_spd": 2, "snow_depth": 0, "clouds": 39, "ts": 1634248860, "sunrise_ts": 1634276785, "app_min_temp": -5.1, "wind_spd": 1.17903, "pop": 0, "wind_cdir_full": "Süd-Südost", "slp": 1022.27, "moon_phase_lunation": 0.29, "valid_date": "2021-10-15", "app_max_temp": 13.6, "vis": 24.128, "dewpt": 0.8, "snow": 0, "uv": 3.64151, "weather": { "icon": "c02d", "code": 802, "description": "Verstreute Wolken" }, "wind_dir": 163, "max_dhi": null, "clouds_hi": 39, "precip": 0, "low_temp": -0.1, "max_temp": 13.6, "moonset_ts": 1634258910, "datetime": "2021-10-15", "temp": 5.5, "min_temp": -0.2, "clouds_mid": 9, "clouds_low": 0 }, { "moonrise_ts": 1634396895, "wind_cdir": "O", "rh": 86, "pres": 948.893, "high_temp": 13.1, "sunset_ts": 1634402464, "ozone": 291.036, "moon_phase": 0.796226, "wind_gust_spd": 3.61523, "snow_depth": 0, "clouds": 27, "ts": 1634335260, "sunrise_ts": 1634363269, "app_min_temp": -3.3, "wind_spd": 1.63356, "pop": 0, "wind_cdir_full": "Osten", "slp": 1022, "moon_phase_lunation": 0.32, "valid_date": "2021-10-16", "app_max_temp": 12.9, "vis": 24.128, "dewpt": 2.2, "snow": 0, "uv": 3.43949, "weather": { "icon": "c02d", "code": 802, "description": "Verstreute Wolken" }, "wind_dir": 82, "max_dhi": null, "clouds_hi": 27, "precip": 0, "low_temp": 1.3, "max_temp": 13.2, "moonset_ts": 1634345310, "datetime": "2021-10-16", "temp": 4.6, "min_temp": 1.3, "clouds_mid": 1, "clouds_low": 0 }, { "moonrise_ts": 1634484769, "wind_cdir": "O", "rh": 83, "pres": 950.562, "high_temp": 13.3, "sunset_ts": 1634488754, "ozone": 294.812, "moon_phase": 0.876649, "wind_gust_spd": 3.04688, "snow_depth": 0, "clouds": 18, "ts": 1634421660, "sunrise_ts": 1634449754, "app_min_temp": -2.7, "wind_spd": 1.28201, "pop": 0, "wind_cdir_full": "Osten", "slp": 1023.06, "moon_phase_lunation": 0.36, "valid_date": "2021-10-17", "app_max_temp": 13.1, "vis": 24.128, "dewpt": 3.3, "snow": 0, "uv": 2.46211, "weather": { "icon": "c02d", "code": 801, "description": "Wenige Wolken" }, "wind_dir": 83, "max_dhi": null, "clouds_hi": 18, "precip": 0, "low_temp": 1.8, "max_temp": 13.3, "moonset_ts": 1634436073, "datetime": "2021-10-17", "temp": 6.4, "min_temp": 1.8, "clouds_mid": 0, "clouds_low": 0 }, { "moonrise_ts": 1634572405, "wind_cdir": "O", "rh": 83, "pres": 952.188, "high_temp": 14.1, "sunset_ts": 1634575046, "ozone": 292, "moon_phase": 0.937941, "wind_gust_spd": 3.51172, "snow_depth": 0, "clouds": 1, "ts": 1634508060, "sunrise_ts": 1634536239, "app_min_temp": -2.7, "wind_spd": 1.11809, "pop": 0, "wind_cdir_full": "Osten", "slp": 1025, "moon_phase_lunation": 0.39, "valid_date": "2021-10-18", "app_max_temp": 13.3, "vis": 24.128, "dewpt": 3.5, "snow": 0, "uv": 3.22287, "weather": { "icon": "c02d", "code": 801, "description": "Wenige Wolken" }, "wind_dir": 84, "max_dhi": null, "clouds_hi": 1, "precip": 0, "low_temp": 1.6, "max_temp": 14, "moonset_ts": 1634526694, "datetime": "2021-10-18", "temp": 6.4, "min_temp": 1.8, "clouds_mid": 0, "clouds_low": 0 }, { "moonrise_ts": 1634659906, "wind_cdir": "S", "rh": 79, "pres": 954.312, "high_temp": 15.5, "sunset_ts": 1634661338, "ozone": 286.062, "moon_phase": 0.978523, "wind_gust_spd": 1.80859, "snow_depth": 0, "clouds": 33, "ts": 1634594460, "sunrise_ts": 1634622724, "app_min_temp": -2.9, "wind_spd": 0.986658, "pop": 0, "wind_cdir_full": "Süd", "slp": 1027.12, "moon_phase_lunation": 0.43, "valid_date": "2021-10-19", "app_max_temp": 14.1, "vis": 24.128, "dewpt": 3.2, "snow": 0, "uv": 3.188, "weather": { "icon": "c02d", "code": 802, "description": "Verstreute Wolken" }, "wind_dir": 174, "max_dhi": null, "clouds_hi": 33, "precip": 0, "low_temp": 4.5, "max_temp": 15.1, "moonset_ts": 1634617199, "datetime": "2021-10-19", "temp": 7, "min_temp": 1.6, "clouds_mid": 0, "clouds_low": 0 }, { "moonrise_ts": 1634747352, "wind_cdir": "SSW", "rh": 65, "pres": 948.188, "high_temp": 10.5, "sunset_ts": 1634747632, "ozone": 272.625, "moon_phase": 0.997696, "wind_gust_spd": 3.4043, "snow_depth": 0, "clouds": 93, "ts": 1634680860, "sunrise_ts": 1634709210, "app_min_temp": 0.7, "wind_spd": 1.46966, "pop": 0, "wind_cdir_full": "Süd-südwesten", "slp": 1019.94, "moon_phase_lunation": 0.46, "valid_date": "2021-10-20", "app_max_temp": 15.5, "vis": 24.128, "dewpt": 3.1, "snow": 0, "uv": 1.02322, "weather": { "icon": "c04d", "code": 804, "description": "Bewölkt" }, "wind_dir": 208, "max_dhi": null, "clouds_hi": 87, "precip": 0, "low_temp": 3.7, "max_temp": 15.8, "moonset_ts": 1634707635, "datetime": "2021-10-20", "temp": 9.6, "min_temp": 4.5, "clouds_mid": 64, "clouds_low": 17 }, { "moonrise_ts": 1634834811, "wind_cdir": "S", "rh": 96, "pres": 941, "high_temp": 6.6, "sunset_ts": 1634833926, "ozone": 285.812, "moon_phase": 0.995601, "wind_gust_spd": 3.79883, "snow_depth": 0, "clouds": 98, "ts": 1634767260, "sunrise_ts": 1634795696, "app_min_temp": 7.5, "wind_spd": 1.30532, "pop": 95, "wind_cdir_full": "Süd", "slp": 1012.12, "moon_phase_lunation": 0.49, "valid_date": "2021-10-21", "app_max_temp": 10.4, "vis": 18.015, "dewpt": 8.5, "snow": 0, "uv": 0, "weather": { "icon": "r03d", "code": 502, "description": "Starker Regen" }, "wind_dir": 191, "max_dhi": null, "clouds_hi": 18, "precip": 18.3125, "low_temp": 0.5, "max_temp": 10.5, "moonset_ts": 1634798045, "datetime": "2021-10-21", "temp": 9.2, "min_temp": 3.4, "clouds_mid": 91, "clouds_low": 88 }, { "moonrise_ts": 1634922352, "wind_cdir": "SO", "rh": 93, "pres": 943.25, "high_temp": 2.7, "sunset_ts": 1634920221, "ozone": 301.625, "moon_phase": 0.973171, "wind_gust_spd": 1.11426, "snow_depth": 0, "clouds": 79, "ts": 1634853660, "sunrise_ts": 1634882182, "app_min_temp": -0.3, "wind_spd": 0.87741, "pop": 20, "wind_cdir_full": "Südöstlich", "slp": 1015.5, "moon_phase_lunation": 0.53, "valid_date": "2021-10-22", "app_max_temp": 7.7, "vis": 24.128, "dewpt": 4.6, "snow": 0, "uv": 0, "weather": { "icon": "c04d", "code": 804, "description": "Bewölkt" }, "wind_dir": 142, "max_dhi": null, "clouds_hi": 0, "precip": 0.25, "low_temp": 2.1, "max_temp": 10, "moonset_ts": 1634888451, "datetime": "2021-10-22", "temp": 5.7, "min_temp": 3.7, "clouds_mid": 12, "clouds_low": 79 }, { "moonrise_ts": 1635010047, "wind_cdir": "S", "rh": 90, "pres": 940.5, "high_temp": 1.5, "sunset_ts": 1635006518, "ozone": 307.625, "moon_phase": 0.932036, "wind_gust_spd": 1.2041, "snow_depth": 0, "clouds": 77, "ts": 1634940060, "sunrise_ts": 1634968668, "app_min_temp": 2.2, "wind_spd": 0.850712, "pop": 30, "wind_cdir_full": "Süd", "slp": 1012.5, "moon_phase_lunation": 0.56, "valid_date": "2021-10-23", "app_max_temp": 3.3, "vis": 24.128, "dewpt": 4.5, "snow": 0, "uv": 0, "weather": { "icon": "c04d", "code": 804, "description": "Bewölkt" }, "wind_dir": 180, "max_dhi": null, "clouds_hi": 77, "precip": 0.4375, "low_temp": 1.3, "max_temp": 10.6, "moonset_ts": 1634978840, "datetime": "2021-10-23", "temp": 6.1, "min_temp": 5.2, "clouds_mid": 50, "clouds_low": 55 }, { "moonrise_ts": 1635097986, "wind_cdir": "SO", "rh": 96, "pres": 928, "high_temp": 8.6, "sunset_ts": 1635092816, "ozone": 335.125, "moon_phase": 0.874361, "wind_gust_spd": 12.7969, "snow_depth": 0, "clouds": 100, "ts": 1635026460, "sunrise_ts": 1635055155, "app_min_temp": -0.1, "wind_spd": 3.43666, "pop": 80, "wind_cdir_full": "Südöstlich", "slp": 999.5, "moon_phase_lunation": 0.6, "valid_date": "2021-10-24", "app_max_temp": 1.6, "vis": 18.412, "dewpt": 4, "snow": 0, "uv": 0, "weather": { "icon": "r04d", "code": 520, "description": "Leichter Schauerregen" }, "wind_dir": 145, "max_dhi": null, "clouds_hi": 52, "precip": 4.5, "low_temp": 0.1, "max_temp": 8.6, "moonset_ts": 1635069142, "datetime": "2021-10-24", "temp": 4.6, "min_temp": 0.1, "clouds_mid": 100, "clouds_low": 78 }, { "moonrise_ts": 1635186270, "wind_cdir": "SSW", "rh": 96, "pres": 929.5, "high_temp": 5, "sunset_ts": 1635179115, "ozone": 341.5, "moon_phase": 0.802636, "wind_gust_spd": 4.80469, "snow_depth": 0, "clouds": 100, "ts": 1635112860, "sunrise_ts": 1635141642, "app_min_temp": -4.2, "wind_spd": 1.50903, "pop": 45, "wind_cdir_full": "Süd-südwesten", "slp": 1002, "moon_phase_lunation": 0.63, "valid_date": "2021-10-25", "app_max_temp": -1.5, "vis": 12.6185, "dewpt": 1, "snow": 0, "uv": 0, "weather": { "icon": "c04d", "code": 804, "description": "Bewölkt" }, "wind_dir": 210, "max_dhi": null, "clouds_hi": 56, "precip": 0.75, "low_temp": 1.4, "max_temp": 5, "moonset_ts": 1635159240, "datetime": "2021-10-25", "temp": 1.6, "min_temp": 0.5, "clouds_mid": 100, "clouds_low": 88 }, { "moonrise_ts": 1635275006, "wind_cdir": "S", "rh": 98, "pres": 945.75, "high_temp": 5.2, "sunset_ts": 1635265415, "ozone": 346.875, "moon_phase": 0.719494, "wind_gust_spd": 5.82031, "snow_depth": 0, "clouds": 69, "ts": 1635199260, "sunrise_ts": 1635228129, "app_min_temp": -3, "wind_spd": 1.49678, "pop": 80, "wind_cdir_full": "Süd", "slp": 1019.5, "moon_phase_lunation": 0.66, "valid_date": "2021-10-26", "app_max_temp": -2.3, "vis": 12.0791, "dewpt": 1.5, "snow": 0, "uv": 0, "weather": { "icon": "r04d", "code": 520, "description": "Leichter Schauerregen" }, "wind_dir": 186, "max_dhi": null, "clouds_hi": 50, "precip": 3.5625, "low_temp": -0.5, "max_temp": 5.2, "moonset_ts": 1635248990, "datetime": "2021-10-26", "temp": 1.8, "min_temp": -0.5, "clouds_mid": 50, "clouds_low": 69 }], "city_name": "Bern", "lon": "7.44744", "timezone": "Europe\/Zurich", "lat": "46.94809", "country_code": "CH", "state_code": "BE" }



const useForecast = () => {
    return mock.data
}

export default useForecast