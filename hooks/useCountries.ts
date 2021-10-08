
const useCountries = async () => {
    try {
        const call = await fetch('https://khan-backend.herokuapp.com/countries')
        return await call.json()
    } catch (error) {
        return error
    }
}

export default useCountries
