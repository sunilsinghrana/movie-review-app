import {Routes, Route} from 'react-router-dom';
import { lazy, Suspense} from 'react';
// import MovieDetails from './component/MovieDetails.jsx';
import PageNotFound from './component/PageNotFound.jsx';
import Footer from './component/Footer.jsx';
const Header = lazy(()=> import('./component/Header.jsx'))
const Home = lazy(()=> import('./component/Home.jsx'))
const MovieDetails = lazy(()=> import('./component/MovieDetails.jsx'))


function App() {

  return (
    <div className="App bg-dark box-border">
      <Suspense fallback={<h1>Loading.....</h1>}>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movie/:imdbID' element={<MovieDetails/>} />
        <Route element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
      </Suspense>
    </div>
  )
}

export default App
