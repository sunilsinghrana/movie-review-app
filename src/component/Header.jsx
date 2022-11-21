import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import user from "../assets/undraw_male_avatar_re_tqsc.svg";
import { fetchAsyncMovies, fetchAsyncShows } from "../features/movies/movieSlice";

const Header = () => {
  const [term, setTerm] = useState();
  const dispatch = useDispatch();
  const submitHandler = (e)=>{
    e.preventDefault();
    dispatch(fetchAsyncMovies(term))
    dispatch(fetchAsyncShows(term))
    setTerm('')
  }
  return (
    <>
      <div className="navbar bg-neutral text-neutral-content">
        <div className="flex-1">
          <Link
            className="btn btn-ghost normal-case text-xl text-white font-bold"
            to="/"
          >
            MovieDOM
          </Link>
        </div>
        <div className="Search-bar">
          <form onSubmit={submitHandler} className=" mx-4 flex flex-row">
          <input
          value={term}
          onChange={(e)=> setTerm(e.target.value)}
          type="text"
          placeholder="Search"
          className="input input-bordered bg-slate-600"
          />
          <button className="btn btn-ghost btn-circle" type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
          </form>
        </div>
        <div className="w-10 rounded-full mx-2">
          <img src={user} className="cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default Header;
