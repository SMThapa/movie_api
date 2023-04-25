import { useContext } from "react";
import { Link } from "react-router-dom"
import { WishListContext } from "../context/WishListContext";
import backUp from '../image/noImage.png'

export const WishlistCard = ({movie, data, setData}) => {


    const {wishList, setWishList} = useContext(WishListContext);
    const {poster_path} = movie;
    const image = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}`: backUp;

    const vote_average = movie.vote_average
    const savg = vote_average.toString().slice(0,3);
    const avg = Number(savg);

    const handleRemove = (e) =>{
        setWishList(wishList.filter(i => e !== i))
        const updatedData = data.filter(dat => e !== dat.id)
        setData(updatedData)
    }

    const handleScrollto = () => window.scrollTo(0,0);

  return (
    <div className="screen h-auto bg-white m-3 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex">
        <Link onClick={()=>handleScrollto()} to={`/movie/${movie.id}`} >
                <img className="rounded-t-lg sm:w-52 w-32  sm:h-72 h-40" src={image} alt="" />
        </Link>
        <div className="flex flex-col justify-between sm:mx-5 mx-2 sm:my-12 my-6">
            <Link to="#">
                <h5 className="text-xs py-1 sm:text-3xl sm:font-medium tracking-tight text-gray-900 dark:text-white">{movie.original_title}</h5>
                <p className="sm:p-3 py-1 dark:text-white sm:text-base text-xs flex flex-row items-center"><img className="h-3 sm:h-4" src="https://img.icons8.com/fluency/48/null/star.png" alt=""/>{avg}</p>
                <p className="sm:p-3 py-1 dark:text-white sm:text-base text-xs flex flex-row items-center"><img className="h-3 sm:h-4" src="https://img.icons8.com/ios/50/ffffff/calendar--v1.png" alt=""/>&nbsp;{movie.release_date}</p>
            </Link>
            <div>  
                <button type="button" onClick={()=>handleRemove(movie.id)} className="focus:outline-none text-black bg-yellow-400 sm:w-36 w-26 font-medium rounded-lg sm:text-sm text-xs px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">remove</button>
            </div>
        </div>
    </div>
  )
}
