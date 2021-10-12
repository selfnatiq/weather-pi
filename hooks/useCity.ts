import React from "react"

const useCity = () => {
    const [c, setC] = React.useState(null)

    React.useEffect(() => {
        const cityStr = localStorage.getItem('city')
        if (cityStr) setC(JSON.parse(cityStr))
    }, [])

    return c
}

export default useCity
