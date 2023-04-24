import { Link } from "react-router-dom"
import backUp from '../image/noImage.png'

export const Card = ({movie}) => {
  const {original_title, poster_path, vote_average, release_date} = movie;
  const image = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}`: backUp;

  const handleScrollto = () => window.scrollTo(0,0);

  return (
  <>
    <div className="sm:w-72 w-36 h-auto bg-white m-3 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link onClick={()=>handleScrollto()} to={`/movie/${movie.id}`} >
            <img className="rounded-t-lg sm:w-80 w-80  sm:h-96 h-40" src={image} alt="" />
        </Link>
        <div className="sm:p-5 p-1">
            <Link to="#">
                <h5 className="text-xs py-1 sm:text-base sm:font-medium tracking-tight text-gray-900 dark:text-white">{original_title}</h5>
            </Link>
            <div className="flex flex-row justify-between">
              <p className="sm:p-3 py-1 dark:text-white sm:text-base text-xs flex flex-row items-center"><img className="h-3 sm:h-4" src="https://img.icons8.com/fluency/48/null/star.png" alt=""/>{vote_average}</p>
              <p className="sm:p-3 py-1 dark:text-white sm:text-base text-xs flex flex-row items-center"><img className="h-3 sm:h-4" src="https://img.icons8.com/ios/50/ffffff/calendar--v1.png" alt=""/>&nbsp;{release_date}</p>
            </div>
        </div>
    </div>
  </>
  )
}
