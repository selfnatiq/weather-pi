
const useCities = async (e: string) => {
    console.log("query", e)
    try {
        const call = await fetch('https://khan-backend.herokuapp.com' + e)
        const res = await call.json()
        console.log(res)
        return res
    } catch (error) {
        return error
    }
}

export default useCities
