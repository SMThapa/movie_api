import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { useFetch } from "../hooks/useFetch";
import { Card } from "../components/Card";
import '../style/style.css'

export const MovieDetail = () => {

  const params = useParams();
  const [data, setData] = useState([])
  const [recData, setRecData] = useState([])
  const [genre, setGenre] = useState([])
  useEffect(()=>{
    async function fetchMovie(){
      const res = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=6fc64fff7d8d4606f2aa7bea027b6c15`)
      const json = await res.json()
      setData(json)
      
      const recRes = await fetch(`https://api.themoviedb.org/3/movie/${params.id}/similar?api_key=6fc64fff7d8d4606f2aa7bea027b6c15`)
      const recJson = await recRes.json();
      setRecData(recJson.results)

      setGenre(json.genres)
    }
    fetchMovie();
  })
  

  const theImage = data.backdrop_path;

  const background = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w500/${theImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  }

  return (
    <>
      <div className=" w-full h-screen sm:h-auto bg-gray-500 bg-blend-multiply flex justify-center items-center" style={background}>    
        <div className="flex flex-col sm:flex-row justify-around ">
          <div className="h-auto basis-1/3 flex justify-center items-center">
            <div className="flex-row w-80 sm:pb-7 flex items-center flex-col sm:pt-0 pt-5">
              <img className="w-60 pt-5 lg:pt-12 lg:w-80 md:pt-8 z-10" src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="" />
              <div className="flex flex-row justify-between">
                <p className="p-3 dark:text-white flex flex-row items-center"><img className="h-5" src="https://img.icons8.com/fluency/48/null/star.png" alt=""/>{data.vote_average}</p>
                <p className="p-3 dark:text-white flex flex-row items-center"><img className="h-5" src="https://img.icons8.com/material-outlined/24/ffffff/time.png" alt=""/> {data.runtime}min.</p>
                <p className="p-3 dark:text-white flex flex-row items-center"><img className="h-5" src="https://img.icons8.com/ios/50/ffffff/calendar--v1.png" alt=""/>&nbsp;{data.release_date}</p>
              </div>
            </div>
          </div>
          <div className="h-auto basis-2/3 mb-20 flex justify-center sm:justify-start items-end">
            <div className="dark:text-white w-10/12 h-4/5 flex flex-col justify-end">
              <h1 className="sm:text-5xl text-4xl sm:pb-5 font-medium sm:font-bold ">{data.original_title}</h1>
              <p className="flex flex-wrap">
                  {genre.map(gen=>(
                    <span key={gen.id} className="dark:text-white sm:p-2 p-1 sm:mr-2 mr-2 border-2 sm:font-medium font-small flex-wrap">{gen.name}</span>
                  ))}
              </p>
              <p className="text-base sm:text-2xl font-semibold mt-3">{data.overview}</p>
            </div>
          </div>
        </div>
      </div>
      <div
      className="py-7">
      </div>
      <div className="dark:text-white text-5xl p-8" >You may like,</div>
      <div className="flex justify-center flex-wrap">    
        {recData.map(movie =>(
          <Card key={movie.id} movie={movie}/>
          )
        )}
      </div> 
    </>
  )
}
