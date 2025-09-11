import React from "react";
import Video from "./Video";

const Hometoptext = () => {
  return (
    <div className="font-[font1] text-center ">
      <div className="text-[9vw] uppercase leading-[8.5vw]  text-white">
        
        L'étincelle
      </div>
      <div className="text-[9vw] uppercase flex items-center leading-[8.5vw]  text-white">
        qui
        <div className="h-[7vw] w-[16vw] rounded-full overflow-hidden ">
          <Video />
        </div>
        génère
      </div>
      <div className="text-[9vw] uppercase leading-[8.5vw]  text-white">
        la créativité
      </div>
    </div>
  );
};

export default Hometoptext;
