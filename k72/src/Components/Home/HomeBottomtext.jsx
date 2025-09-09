import React from "react";
import { Link } from "react-router-dom";

const HomeBottomtext = () => {
  return (
    <div className="flex items-center justify-center font-[font2] gap-4">
      <div className="border-2 h-21 border-white text-white rounded-full px-6 leading-tight  uppercase">
        <Link className="text-[6vw] ">
          Projects
        </Link>
      </div>

      <div className="border-2 border-white text-white rounded-full px-6 leading-tight h-21 uppercase">
        <Link className="text-[6vw] ">
          Agence
        </Link>
      </div>
    </div>
  );
};

export default HomeBottomtext;
