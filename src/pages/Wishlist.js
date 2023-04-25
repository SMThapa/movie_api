import { useContext, useEffect, useState } from "react";
import { WishListContext } from "../context/WishListContext";
import { WishlistCard } from "../components/WishlistCard"
// import { Card } from '../components/Card'

export const Wishlist = () => {
  
  
  const {wishList, setWishList} = useContext(WishListContext);
  const [data, setData] = useState([])


  const handleButton = () =>{
    setWishList([])
    setData([])
  }

  useEffect(()=>{
    async function getMovies(movieID){
      const res = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=6fc64fff7d8d4606f2aa7bea027b6c15`)
      const json = await res.json()
      setData(d => [...d, json])
    }
    wishList.length !== 0 ?
      wishList.map(id => (
        getMovies(id)
      )) : console.log('List is empty')

  },[])
  
  return (
    <div>
      {/* <div className="text-white">Wishlist <span>{wishList.length} :{data.length}</span></div> */}
      <button className="focus:outline-none text-white bg-blue-400 sm:w-36 w-26 font-medium rounded-lg sm:text-sm text-xs px-5 py-2.5 m-2 sm:m-5 dark:focus:ring-yellow-900" onClick={()=>handleButton()}>clear all</button>
      <div className="flex justify-center flex-wrap">    
        {data.map(movie =>(
          <div className="w-screen">
            <WishlistCard key={movie.id + Math.random() * 10} movie={movie} data={data} setData = {setData}/>
          </div>
          )
        )}
      </div>
    </div>

  )
}
