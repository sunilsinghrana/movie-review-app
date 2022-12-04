import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillStar } from "react-icons/ai";
import { IoMdPlay } from "react-icons/io";
import { FiBookmark } from "react-icons/fi";
import { GiShare } from "react-icons/gi";
import { useParams } from "react-router-dom";
import {
  fetchAsyncSelectedMovie, getSelectMovieOrShow,
} from "../features/movies/movieSlice";
import { removeSelectMovieOrShow } from "../features/movies/movieSlice";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const movieData = useSelector(getSelectMovieOrShow);

  useEffect(() => {
    dispatch(fetchAsyncSelectedMovie(id));
    return ()=>{
      dispatch(removeSelectMovieOrShow())
    }
  }, [dispatch, id]);
  
  console.log(movieData);

  return (
    <div className="h-[100vh]">
      <div className="">
        <div className="absolute w-full h-[100vh] bg-gradient-to-t from-black">
          {" "}
        </div>
        <img
          src={`https://image.tmdb.org/t/p/original${
            movieData.backdrop_path || movieData.poster_path
          }`}
          alt=""
          className="w-full h-[100vh] object-cover"
        />
      </div>
      <div className="flex justify-center relative bottom-[35%]">
        <div className="flex flex-col items-center md:flex-row md:max-w-2xl lg:max-w-3xl absolute xl:max-w-4xl md:mt-[-300px] mt-[-200px] text-white ">
          <div className=" lg:w-[30%] h-auto md:h-[400px] w-[70%] ">
            <img
              className="w-[100%] h-full md:h-auto object-cover rounded-md"
              src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
              alt=""
            />
          </div>
          <div className="float-left w-[70%] md:pl-12 ">
            <p className="text-3xl md:text-5xl mb-3 mt-3 md:mt-0">
              {movieData.title || movieData.original_title}{" "}
            </p>
            <div className="flex flex-row items-center ">
              <div className="flex flex-row justify-center items-center mr-5 pb-2">
                <AiFillStar className="text-3xl mr-2" />
                <p className="text-4xl ">
                  {movieData?.vote_average?.toFixed(1)}{" "}
                </p>
              </div>
              <div className="flex flex-col">
                <div className="grid grid-flow-col auto-cols-max gap-4 ">
                  <p className="text-cyan-600 text-sm md:text-base">
                    Released: {movieData?.release_date}{" "}
                  </p>
                  <p className="text-cyan-600 text-sm md:text-base">
                    {movieData?.runtime} min
                  </p>
                </div>

                <div className="grid grid-flow-col auto-cols-max gap-4 mb-3">
                  {movieData.genres &&
                    movieData.genres.slice(0, 5).map((genre, i) => (
                      <span key={i} className="text-sm  md:text-base">
                        {genre.name}
                      </span>
                    ))}
                </div>
              </div>
            </div>

            <p className="text-gray-300 mb-8">{movieData.overview} </p>
            <div className="flex flex-row items-center ">
              <button
                // onClick={() => setShowModal(true)}
                className="border text-[#FFFDE3] text-base border-gray-300 py-2 px-5 flex flex-row items-center hover:bg-cyan-600 hover:border-cyan-600 mb-8 md:mb-0"
              >
                <IoMdPlay className="mr-3" />
                Watch Trailer
              </button>
              <p>
                <GiShare className="text-gray-300 text-2xl ml-3 mb-8 md:mb-0" />
              </p>
              <p>
                <FiBookmark className="text-gray-300 text-2xl ml-3 mb-8 md:mb-0" />
              </p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
    
  );
};

export default MovieDetails;
