import { Header, Footer} from './components';
import { AllRoutes } from './routes/AllRoutes';
import '../src/style/style.css'

export default function App(){
  return(
    <>
      <Header/>
      <main className='dark:bg-slate-800'>
        <AllRoutes/>
      </main>
      <Footer/>
    </>
  );
}
