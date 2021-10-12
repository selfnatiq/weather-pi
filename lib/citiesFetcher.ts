export default async function citiesFetcher(q: string) {
    try {
        const res = await fetch('https://khan-backend.herokuapp.com' + q)
        return await res.json()
    } catch (err) {
        console.error(err)
        return err
    }
}