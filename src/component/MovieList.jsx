import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../features/movies/movieSlice";
import MovieCard from "./MovieCard";
import Slider from 'react-slick';
import { Settings } from "../common/setting";

const MovieList = () => {

  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let renderMovie, renderShows = "";

  renderMovie =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movie-error">
        <h3 className="text-white">{movies.Error}Loading....</h3>
      </div>
    );

  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((show, index) => (
        <MovieCard key={index} data={show} />
      ))
    ) : (
      <div className="show-error">
        <h3>{shows.Error} Loading.....</h3>
      </div>
    );

  return (
    <div className="movie-wrapper">

      <div className="movie-List p-6">
        <h2 className="text-white text-3xl text-white my-4 ml-10 font-bold">MOVIES ON AIR</h2>
          <Slider {...Settings} className='p-6 mx-2'>
            {renderMovie}
            </Slider>
      </div>

      <div className="show-List p-6">
        <h2 className="text-white text-3xl text-white my-4 ml-10 font-bold">Shows</h2>
          <Slider {...Settings} className='p-6 mx-2' >
          {renderShows}
            </Slider>
      </div>
      
    </div>
  );
};

export default MovieList;
