import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getSelectMovieOrShow,
  fetchAsyncMoviesOrShows,
} from "../features/movies/movieSlice";
import { removeSelectMovieOrShow } from "../features/movies/movieSlice";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const { imdbID } = useParams();
  const data = useSelector(getSelectMovieOrShow);

  useEffect(() => {
    dispatch(fetchAsyncMoviesOrShows(imdbID));
    return ()=>{
      dispatch(removeSelectMovieOrShow())
    }
  }, [dispatch, imdbID]);

  return (
    <div className="min-h-screen grid place-items-center font-mono bg-slate-800">
      {Object.keys(data).length === 0 ? 
      (<div>....Loading</div>)
    :(
      <div className="rounded-md bg-slate-700 shadow-lg">
        <div className="md:flex px-4 leading-none max-w-4xl">
          <div className="flex-none ">
            <img
              src={data.Poster}
              alt={data.Title}
              className="h-[35rem] w-96 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 shadow-lg"
            />
          </div>

          <div className="flex-col text-white">
            <p className="px-2 pt-2 text-2xl font-bold">
              {data.Title} {data.Year}
            </p>
            <hr className="hr-text" data-content="" />
            <div className="text-md flex justify-between px-4 my-2">
              <span className="font-bold">
                {" "}
                {data.Rated} | {data.Runtime} | {data.Genre}
              </span>
              <span className="font-bold"></span>
            </div>
            <p className="px-4 mt-4 text-left text-xl text-bold">Summary</p>
            <p className="hidden md:block px-4 mb-4 text-sm text-left">
              {" "}
              {data.Plot}{" "}
            </p>
            <p className="px-4 my-4 text-left text-bold">Director: {data.Director}</p>
            <p className="px-4 my-4 text-left text-bold">Actors: {data.Actors}</p>
            <p className="px-4 my-4 text-left text-bold">Genres: {data.Genre}</p>
            <p className="px-4 my-4 text-left text-bold">Languages: {data.Language}</p>
            <p className="px-4 my-4 text-left text-bold">Awards: {data.Awards}</p>
            <p className="px-4 my-4 text-left text-bold">Release Date: {data.DVD}</p>

            <p className="flex text-md px-4 my-2">
              {/* Rating: {data.Ratings[0].Value} */}
            </p>

            <div className="text-xs">
              <button
                type="button"
                className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
              >
                TRAILER
              </button>

              <button
                type="button"
                className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
              >
                IMDB
              </button>

              <button
                type="button"
                className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
              >
                AMAZON
              </button>
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default MovieDetails;
