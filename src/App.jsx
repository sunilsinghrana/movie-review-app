import {Routes, Route} from 'react-router-dom';
import MovieDetails from './component/MovieDetails.jsx';
import PageNotFound from './component/PageNotFound.jsx';
import Header from './component/Header.jsx';
import Home from './component/Home.jsx';
import Footer from './component/Footer.jsx';
import { SkeletonTheme } from 'react-loading-skeleton';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncPopularMovie, getPopularMovie } from './features/movies/movieSlice.jsx';

function App() {
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(fetchAsyncPopularMovie());
  },[dispatch])
  const popular = useSelector(getPopularMovie)
  console.log(popular);

  return (
    <div className="App bg-dark box-border">
     <SkeletonTheme baseColor='#313131' highlightColor='#525252'>
      <Header/>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='movie/:id' element={<MovieDetails/>} />
        <Route element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
      </SkeletonTheme>
    </div>
  )
}

export default App
