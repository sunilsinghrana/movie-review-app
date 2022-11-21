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
        <h3 className="text-white">{movies.Error}Unable to fetch</h3>
      </div>
    );

  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((show, index) => (
        <MovieCard key={index} data={show} />
      ))
    ) : (
      <div className="show-error">
        <h3>{shows.Error}not recommeded</h3>
      </div>
    );

  return (
    <div className="movie-wrapper overflow-hidden">

      <div className="movie-List p-6 overflow-hidden">
        <h2 className="text-white text-3xl my-4 font-bold">Movies</h2>
          <Slider {...Settings}>
            {renderMovie}
            </Slider>
      </div>

      <div className="show-List p-6">
        <h2 className="text-white text-3xl my-4 font-bold">Shows</h2>
          <Slider {...Settings}>
          {renderShows}
            </Slider>
      </div>
      
    </div>
  );
};

export default MovieList;
