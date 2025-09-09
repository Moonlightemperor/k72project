import React from "react";
import Video from "../Components/Home/Video";
import Hometoptext from "../Components/Home/Hometoptext";
import HomeBottomtext from "../Components/Home/HomeBottomtext";

const Home = () => {
  return (
    <div className="h-screen w-screen">
      <div className="h-screen w-full fixed">
        <Video />
      </div>
      <div className="h-screen w-screen flex flex-col relative items-center justify-between">
        <Hometoptext />
        <HomeBottomtext />
      </div>
    </div>
  );
};

export default Home;
