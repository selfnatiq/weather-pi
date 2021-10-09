const endPoint = "http://api.openweathermap.org/data/2.5/weather?appid=220646ed64a03f95b8487769387c6ec9&units=metric&q="

export const getWeather = async (city: string) => {
    if (!city) return

    try {
        const res = await fetch(endPoint + city)
        return await res.json()
    } catch (error) {
        return error
    }
}