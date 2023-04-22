import { useState, useEffect } from "react"

export const useFetch = (path, getQuerry = '' ) => {
    const [pageCount, setPageCount] = useState(1);
    useEffect(()=>{
        setPageCount(1)
    },[path])
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalResults , setTotalResults] = useState(1);
    const url = `https://api.themoviedb.org/3/${path}?api_key=${process.env.REACT_APP_API_KEY}&query=${getQuerry}&page=${pageCount}`
    useEffect(() => {
        async function fetchMovies(){
            const res = await fetch(url);
            const json = await res.json();
            setData(json.results)
            setTotalResults(json.total_results)
        }
        fetchMovies();
        data.length === 0 ? setLoading(true) :setLoading(false);
    }, [url, data.length, totalResults, pageCount])
    return {data, loading, totalResults,path, setPageCount, pageCount} 
}
