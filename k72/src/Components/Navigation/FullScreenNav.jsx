import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import React, { useContext, useRef } from "react";
import NavContext from "../Context/NavContext";

const FullScreenNav = () => {
  const fullNavLinksref = useRef(null);

  const[navOpen, setNavOpen] = useContext(NavContext)

  useGSAP(function () {
    const tl = gsap.timeline();

    tl.from(".stairing", {
      delay: 1,
      height: 0,
      stagger: {
        amount: -0.2,
      },
    });

    tl.from(fullNavLinksref.current, {
      opacity: 0,
    });

    tl.from(".link", {
      opacity: 0,
      rotateX: 90,
      stagger: {
        amount: 0.2,
      },
    });
  });
  return (
    <div id="fullscreennav" className="h-screen hidden bg-black w-full  ">
      <div className="h-screen w-full fixed">
        <div className="h-full w-full flex">
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
        </div>
      </div>

      <div ref={fullNavLinksref} className="relative">
        <div className="w-full p-1 flex justify-between items-start">
          <div className=" h-[6vw] w-35 ">
            <svg
              className="h-full p-2 w-full"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              width="103"
              height="44"
              viewBox="0 0 103 44"
            >
              <path
                fillRule="evenodd"
                d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
              ></path>
            </svg>
          </div>

          <div className="h-28 p-2 w-28 cursor-pointer  relative ">
            <div className="h-37 w-1 origin-top -rotate-45 bg-white hover:bg-[#D3FD50] absolute"></div>
            <div className="h-37 w-1 origin-top right-0 rotate-45 | bg-white absolute"></div>
          </div>
        </div>

        <div className="py-8">
          <div className="link origin-top border-t-1 relative border-white   ">
            <h1 className="leading-[0.8]  pt-4 font-[font2] text-[7vw] uppercase text-center text-white">
              Projects
            </h1>
            <div className="flex moveLink  absolute items-center top-0">
              <div className="move-x flex overflow-x-auto bg-[#D3FD50] leading-[0.8]  items-center">
                <h2 className="font-[font2] leading-none text-[7vw] text-center whitespace-nowrap uppercase">
                  Pour tout voir
                </h2>
                <img
                  className="object-cover  h-20 w-54 rounded-full shrink-0"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="font-[font2] leading-[0.8]  whitespace-nowrap text-center text-[7vw] uppercase">
                  Pour tout voir
                </h2>
                <img
                  className="object-cover h-22 w-54 rounded-full shrink-0"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
              <div className="move-x flex overflow-x-auto bg-[#D3FD50] leading-[0.8]  items-center">
                <h2 className="font-[font2] leading-none text-[7vw] text-center whitespace-nowrap uppercase">
                  Pour tout voir
                </h2>
                <img
                  className="object-cover  h-20 w-54 rounded-full shrink-0"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="font-[font2] leading-[0.8]  whitespace-nowrap text-center text-[7vw] uppercase">
                  Pour tout voir
                </h2>
                <img
                  className="object-cover h-22 w-54 rounded-full shrink-0"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="link origin-top border-t-1  relative border-white   ">
            <h1 className="leading-[0.8]  pt-4 font-[font2] text-[7vw] uppercase text-center text-white">
              agence
            </h1>
            <div className="flex moveLink absolute items-center top-0">
              <div className="move-x flex overflow-x-auto bg-[#D3FD50] leading-[0.8]  items-center">
                <h2 className="font-[font2] leading-none text-[7vw] text-center whitespace-nowrap uppercase">
                  Pour tout voir
                </h2>
                <img
                  className="object-cover  h-20 w-54 rounded-full shrink-0"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="font-[font2] leading-[0.8]  whitespace-nowrap text-center text-[7vw] uppercase">
                  Pour tout voir
                </h2>
                <img
                  className="object-cover h-22 w-54 rounded-full shrink-0"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
              <div className="move-x flex overflow-x-auto bg-[#D3FD50] leading-[0.8]  items-center">
                <h2 className="font-[font2] leading-none text-[7vw] text-center whitespace-nowrap uppercase">
                  Pour tout voir
                </h2>
                <img
                  className="object-cover  h-20 w-54 rounded-full shrink-0"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="font-[font2] leading-[0.8]  whitespace-nowrap text-center text-[7vw] uppercase">
                  Pour tout voir
                </h2>
                <img
                  className="object-cover h-22 w-54 rounded-full shrink-0"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="link origin-top border-t-1 relative border-white   ">
            <h1 className="leading-[0.8]  pt-4 font-[font2] text-[7vw] uppercase text-center text-white">
              contact
            </h1>
            <div className="flex moveLink absolute items-center top-0">
              <div className="move-x flex overflow-x-auto bg-[#D3FD50] leading-[0.8]  items-center">
                <h2 className="font-[font2] leading-none text-[7vw] text-center whitespace-nowrap uppercase">
                  Pour tout voir
                </h2>
                <img
                  className="object-cover  h-20 w-54 rounded-full shrink-0"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="font-[font2] leading-[0.8]  whitespace-nowrap text-center text-[7vw] uppercase">
                  Pour tout voir
                </h2>
                <img
                  className="object-cover h-22 w-54 rounded-full shrink-0"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
              <div className="move-x flex overflow-x-auto bg-[#D3FD50] leading-[0.8]  items-center">
                <h2 className="font-[font2] leading-none text-[7vw] text-center whitespace-nowrap uppercase">
                  Pour tout voir
                </h2>
                <img
                  className="object-cover  h-20 w-54 rounded-full shrink-0"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="font-[font2] leading-[0.8]  whitespace-nowrap text-center text-[7vw] uppercase">
                  Pour tout voir
                </h2>
                <img
                  className="object-cover h-22 w-54 rounded-full shrink-0"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="link origin-top border-y-1  relative border-white   ">
            <h1 className="leading-[0.8]  pt-4 font-[font2] text-[7vw] uppercase text-center text-white">
              blogue
            </h1>
            <div className="flex moveLink absolute items-center top-0">
              <div className="move-x flex overflow-x-auto bg-[#D3FD50] leading-[0.8]  items-center">
                <h2 className="font-[font2] leading-none text-[7vw] text-center whitespace-nowrap uppercase">
                  Pour tout voir
                </h2>
                <img
                  className="object-cover  h-20 w-54 rounded-full shrink-0"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="font-[font2] leading-[0.8]  whitespace-nowrap text-center text-[7vw] uppercase">
                  Pour tout voir
                </h2>
                <img
                  className="object-cover h-22 w-54 rounded-full shrink-0"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
              <div className="move-x flex overflow-x-auto bg-[#D3FD50] leading-[0.8]  items-center">
                <h2 className="font-[font2] leading-none text-[7vw] text-center whitespace-nowrap uppercase">
                  Pour tout voir
                </h2>
                <img
                  className="object-cover  h-20 w-54 rounded-full shrink-0"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="font-[font2] leading-[0.8]  whitespace-nowrap text-center text-[7vw] uppercase">
                  Pour tout voir
                </h2>
                <img
                  className="object-cover h-22 w-54 rounded-full shrink-0"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
