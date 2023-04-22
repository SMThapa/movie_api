import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Card } from "../components/Card";

export const Search = ({api}) => {

  const [serachParams] = useSearchParams();
  const getQuerry = serachParams.get('q');
  const { data: movies, loading, totalResults} = useFetch(api, getQuerry)
  

  return (
    <section className="max-w-9xl mx-auto py-7">
      <div className="flex justify-center">
        <p className="text-white text-5xl">{loading&&totalResults ? `loading...`: ''}</p>  
      </div>
      <p className="text-white text-3xl py-7 mx-7">{totalResults === 0? `Result not found for "${getQuerry}"`: `Result for "${getQuerry}"`}</p>
      <div className="flex justify-center flex-wrap">   
        {movies.map(movie =>(
          <Card key={movie.id} movie={movie}/>)
        )}
      </div>
    </section>
    )
}
