import { Header, Footer} from './components';
import { AllRoutes } from './routes/AllRoutes';
import { useState } from 'react';
import { WishListContext } from './context/WishListContext';
import '../src/style/style.css'


export default function App(){

  const [wishList, setWishList] = useState([])
  
  return(
    <>
      <WishListContext.Provider value={{wishList, setWishList}}>
        <Header />
        <main className='dark:bg-slate-800'>
          <AllRoutes />
        </main>
        <Footer/>
      </WishListContext.Provider>
    </>
  );
}
