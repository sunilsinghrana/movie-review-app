import React, { useEffect } from 'react';
import MovieList from './MovieList';
import coverImg from '../assets/coverpage.jpg'
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../features/movies/movieSlice';

const Home = () => {
  const dispatch = useDispatch();
  const movieText = 'batman';
  const showText = 'vikings'
  useEffect(()=>{
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
  },[dispatch]);
  return (
    <div className='bg-slate-700'>
    <div className="hero h-96" style={{backgroundImage: `url(${coverImg})`, backgroundPosition: 'top'}}>
  <div className="hero-overlay bg-opacity-50"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Pacific Rim 2022</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
  </div>
</div>
  <MovieList/>
    </div>
  )
}

export default Home
