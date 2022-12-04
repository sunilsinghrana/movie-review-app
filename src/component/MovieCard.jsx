import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";

const MovieCard = ({data}) => {
  return (
    <div
      className="card w-72 shadow-md bg-black rounded-xl duration-500 hover:scale-105 hover:shadow-xl cursor-pointer min-h-full h-[35rem]"
    >
      <Link to={`/movie/${data.id}`}>
      <figure className="w-full h-84">
        <img
          src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
          alt={data.original_title}
        />
      </figure>
      <div className="card-body bg-black">
        <h2 className="card-title text-white">{data.original_title}</h2>
      </div>
      </Link>
    </div>
  );
};

export default MovieCard;
