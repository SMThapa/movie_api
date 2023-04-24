import { Header, Footer} from './components';
import { AllRoutes } from './routes/AllRoutes';
import '../src/style/style.css'
import { useState } from 'react';

export default function App(){

  const [wishItem, setWishItem] = useState([])

  return(
    <>
      <Header 
        wishItem={wishItem}
      />
      <main className='dark:bg-slate-800'>
        <AllRoutes 
          wishItem={wishItem}
          setWishItems={setWishItem}
        />
      </main>
      <Footer/>
    </>
  );
}
