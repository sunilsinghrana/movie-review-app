import React from "react";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  const { data } = props;
  return (
    <div className="card w-72 shadow-md bg-black rounded-xl duration-500 hover:scale-105 hover:shadow-xl cursor-pointer min-h-full h-[35rem]">
      <Link to={`/movie/${data.imdbID}`}>
  <figure className="w-full h-84" ><img src={data.Poster} alt={data.Title}/></figure>
  <div className="card-body bg-black text-center">
    <h2 className="card-title text-white">
      {data.Title}
    </h2>
    <p className="text-gray-300">Release: {data.Year}</p>
  </div>
      </Link>
</div>
  );
};

export default MovieCard;
