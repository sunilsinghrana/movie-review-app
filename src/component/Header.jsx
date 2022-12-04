import React from "react";
import { Link } from "react-router-dom";
import user from "../assets/undraw_male_avatar_re_tqsc.svg";

const Header = () => {
  return (
    <>
      <div className="navbar bg-black text-neutral-content shadow-2xl hero-overlay bg-opacity-60">
        <div className="flex-1">
          <Link
            className="normal-case text-3xl text-gray-400 font-bold"
            to="/"
          >
            MovieDOM
          </Link>
        </div>
        <div className="w-10 rounded-full mx-2">
          <img src={user} className="cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default Header;
