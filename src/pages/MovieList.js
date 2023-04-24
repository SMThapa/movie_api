import { useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Card } from "../components/Card";

export const MovieList = ({api}) => {

  const { data: movies, loading, pageCount, setPageCount} = useFetch(api)

  const navigate = useNavigate();
  const handleSubmit = (e) =>{
    e.preventDefault();
    const catchQuerry = e.target.search.value;
    e.target.reset()
    return navigate(`search?q=${catchQuerry}`)
  }

  const handlePrevious = () =>{
    setPageCount(pageCount-1);
    window.scrollTo(0,0)
  }
  const handleNext = () =>{
    setPageCount(pageCount+1);
    window.scrollTo(0,0);
  }


  return (
    <section className="max-w-9xl mx-auto">
      { api==='movie/now_playing' ? (
        <div className="hero">
            <div className="items">
            <div className="slogan">
              <h1 className="text-white sm:text-5xl text-3xl pb-5 sm:pb-10">My Movie List</h1>
            </div>
            <div className="searchBar">
              <form onSubmit={handleSubmit}>   
                  <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                  <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                      </div>
                      <input type="search" name='search' id="default-search" autoComplete="off" className="w-full block p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                      <button  type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                  </div>
              </form>
            </div>
          </div>
        </div>
      ) : ('')}
      <div className="flex justify-center">
        <p className="text-white text-5xl">{loading? 'loading....': ''}</p>  
      </div>
      <div
      className="sm:py-7 py-3">
      </div>
      <div className="flex justify-center flex-wrap">    
        {movies.map(movie =>(
          <Card key={movie.id} movie={movie}/>
          )
        )}
      </div>
      <div className="buttons w-full flex justify-between">
        {pageCount>1 && <button className="p-5 dark:text-white m-5" onClick={()=>handlePrevious()}>Previous</button>}
        <button className="p-5 dark:text-white m-5" onClick={()=>handleNext()}>Next</button>
      </div>
    </section>
  )
}
