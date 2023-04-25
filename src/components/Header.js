import { useState, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { WishListContext } from "../context/WishListContext";

export const Header = () => {

  const {wishList} = useContext(WishListContext)

  const [hidden, setHidden] = useState(true);
  // const [darkMode, setDarkMode] = useState();

  const ActiveLink = "text-base block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
  const NonActiveLink = "text-base block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"

  const navigate = useNavigate();
  const handleSubmit = (e) =>{
    e.preventDefault();
    const catchQuerry = e.target.search.value;
    e.target.reset()
    setHidden(!hidden)
    return navigate(`search?q=${catchQuerry}`)
  }

  return (
    <header>
      <nav className="bg-white w-full border-gray-200 px-2 z-1 sm:px-4 py-2.5 dark:bg-gray-900">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link to="/" className="flex items-center">
              <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">MML</span>
          </Link>

          <div className="flex md:order-2">

          <NavLink to={'/wishlist'}>
            <button type="button" className="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <span className="text-white self-center sm:text-1xl text-sm">Wishlist : <span>{wishList.length}</span></span>
            </button>
          </NavLink>
          
            
            <button onClick={() => setHidden(!hidden)} data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
              <span className="sr-only">Open menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
          </div>
          <div className={`${hidden ? 'hidden':''} justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-search`}>
            <div className="relative mt-3 md:hidden">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
              </div>
              <form onSubmit={handleSubmit}>
              <input type="text" id="search-navbar" name="search" autoComplete="off" className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
              </form>
            </div>
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink to="/" onClick={() => setHidden(!hidden)} className={({isActive}) => isActive ? ActiveLink : NonActiveLink} end>Home</NavLink>
              </li>
              <li>
                <NavLink to="/movies/popular" onClick={() => setHidden(!hidden)} className={({isActive}) => isActive ? ActiveLink : NonActiveLink}>Popular</NavLink>
              </li>
              <li>
                <NavLink to="/movies/top" onClick={() => setHidden(!hidden)} className={({isActive}) => isActive ? ActiveLink : NonActiveLink}>Top Rated</NavLink>
              </li>
              <li>
                <NavLink to="/movies/upcoming" onClick={() => setHidden(!hidden)} className={({isActive}) => isActive ? ActiveLink : NonActiveLink}>Upcoming</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </header>
  )
}
