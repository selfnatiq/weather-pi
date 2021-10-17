
const useCities = async (e: string) => {
    try {
        const call = await fetch('https://khan-backend.herokuapp.com' + e)
        const res = await call.json()
        return res
    } catch (error) {
        return error
    }
}

export default useCities
