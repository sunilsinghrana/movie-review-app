import React from "react";
import { Link } from "react-router-dom";
import user from "../assets/undraw_male_avatar_re_tqsc.svg";

const Header = () => {
  return (
    <>
      <div className="navbar bg-transparent text-neutral-content absolute shadow-2xl">
        <div className="flex-1">
          <Link
            className="btn btn-ghost normal-case text-xl text-black font-bold"
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
