import React from "react";
import { Link } from "react-router-dom";

const Poster = (props) => {
  return (
    <div className="flex flex-col items-start gap-2 px-1 md:px-3">
      <Link to={`/movie/${props.id}`}>
        <div className="h-40 md:h-80">
          <img
            src={
              "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
            }
            alt="poster"
            className="w-full h-full rounded-md"
          />
        </div>
        <h3
          className={`text-sm ${props.isDark ? "text-white" : "text-gray-700"}`}
        >
          {props.title}
        </h3>
        {/* <p className={`text-lg font-bold ${props.isDark? "text-white" : "text-gray-700" }
            `}>{props.subtitle}</p> */}
      </Link>
    </div>
  );
};

export default Poster;
