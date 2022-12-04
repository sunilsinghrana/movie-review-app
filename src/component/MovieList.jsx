import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncPopularMovie,
  getPopularMovie,
} from "../features/movies/movieSlice";
import MovieCard from "./MovieCard";
import "react-loading-skeleton/dist/skeleton.css";
import CardSkeleton from "./CardSkeleton";

const MovieList = () => {
  const [category, setCategory] = useState('popular')
  const dispatch = useDispatch();
  const popular = useSelector(getPopularMovie)
  const handleSubmit = (term)=>{
    dispatch(fetchAsyncPopularMovie(term))
    setCategory(term)
  }
  console.log(popular);

  let renderMovie = "";
    renderMovie =
    popular.page === 1
    ? popular.results.map((movie,index) => (
        <MovieCard key={index} data={movie} />
    )) : (
      Array(10).fill(0).map((_,i)=>(
        <CardSkeleton key={i}/>
        ))
    )

  return (
    <div className="movie-wrapper">
      <div className="movie-List">
        <div className="btn-group w-full flex justify-center my-4">
          <button className={`btn btn-${category === 'popular' ? 'active' : ''}`} onClick={()=> handleSubmit('popular')} >Pupular</button>
          <button className={`btn btn-${category === 'top_rated' ? 'active' : ''}`} onClick={()=> handleSubmit('top_rated')}>Top Rated</button>
          <button className={`btn btn-${category === 'upcoming' ? 'active' : ''}`} onClick={()=> handleSubmit('upcoming')}>Upcoming</button>
        </div>
        <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 justify-items-center justify-center gap-y-4 gap-x-4 mt-10 mb-5">
          {renderMovie}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
