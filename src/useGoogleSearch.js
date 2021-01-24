import { useState, useEffect } from 'react'
import API_KEY from './key'
const CONTEXT_KEY = '91e7bec37daa40545'

const useGoogleSearch = (term) => {

    const [data, setData] = useState(null)

    const url = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term.term | ''}`
    useEffect(() => {
        const fetchData = async () => {
            fetch(url)
                .then((res => res.json()))
                .then(result => {
                    setData(result)
                })
        }
        fetchData()
    }, [term])

    return { data }
}

export default useGoogleSearch
