import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";
import coverImg from "../assets/coverPage.jpg";
// import { useDispatch } from "react-redux";
// import {
//   fetchAsyncMovies,
//   fetchAsyncShows,
// } from "../features/movies/movieSlice";

const Home = () => {
  // const [term, setTerm] = useState('');
  // const dispatch = useDispatch();
  // const movieText = "batman";
  // const showText = "the walking dead";
  // useEffect(() => {
  //   dispatch(fetchAsyncMovies(movieText));
  //   dispatch(fetchAsyncShows(showText));
  // }, [dispatch]);
  // const submitHandler = (e)=>{
  //   e.preventDefault();
  //   dispatch(fetchAsyncMovies(term))
  //   dispatch(fetchAsyncShows(term))
  //   setTerm('')
  // }
  return (
    <div className="bg-black">
      <div
        className="hero h-[30rem]"
        style={{
          backgroundImage: `url(${coverImg})`,
          backgroundPosition: "top",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center w-4/5 text-neutral-content flex flex-col">
          <div className="w-4/5">
            <h1 className="mb-5 text-left text-5xl font-bold sm:text-3xl">Welcome.</h1>
            <p className="mb-5 text-3xl text-left sm:text-xl">
            Millions of movies, TV shows and people to discover. Explore now.
            </p>
          </div>

          <div className="Search-bar w-4/5">
          <form 
          // onSubmit={submitHandler} 
          className="flex flex-row w-full items-center">
          <input
          // value={term}
          // onChange={(e)=> setTerm(e.target.value)}
          type="text"
          placeholder="Search for a movie, tv show, person....."
          className="input input-bordered bg-white w-full text-black rounded-xl"
          />
          <button className="" type="submit">
          <p className="outline-none text-gray-500 relative right-20 font-bold">Search
          </p>
          </button>
          </form>
        </div>

        </div>
      </div>
      <MovieList />
    </div>
  );
};

export default Home;
