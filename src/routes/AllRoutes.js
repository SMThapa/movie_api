import {Routes, Route} from "react-router-dom";
import { MovieList, MovieDetail, PageNotFound, Search ,Wishlist} from "../pages";

export const AllRoutes = ({wishItem, setWishItem}) => {
  return (
    <>
        <Routes>
            <Route path="/" element={<MovieList api="movie/now_playing"/>}/>
            <Route path="movie/:id" element={<MovieDetail setWishItem = {setWishItem}/>}/>
            <Route path="movies/popular" element={<MovieList api="movie/popular"/>}/>
            <Route path="movies/top" element={<MovieList api="movie/top_rated"/>}/>
            <Route path="movies/upcoming" element={<MovieList api="movie/upcoming"/>}/>
            <Route path="search" element={<Search api="search/movie"/>}/>
            <Route path="wishlist" element={<Wishlist wishItem = {wishItem} setWishItem = {setWishItem}/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    </>
  )
}

