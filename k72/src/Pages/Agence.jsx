import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger);

  const imageRef = useRef(null);

  useGSAP(function () {
    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: imageRef.current,
        markers: true,
        start:"top 25%",
        endTrigger:"section2",
        end:"top -110%",
        scrub:true,
        pin:true
      },
    });
  });
  return (
    <div>
      <div className="section1 ">
        <div
          ref={imageRef}
          className="h-[20vw]  w-[15vw] absolute top-40 left-[30vw] rounded-3xl overflow-hidden"
        >
          <img
            src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
            alt=""
          />
        </div>
        <div className="h-full  relative">
          <div className="mt-[55vh]">
            <h1 className="text-[20vw] font-[font2] text-center leading-[18vw]   uppercase">
              Soixan7e Douze
            </h1>
          </div>
          <div className="pl-[40%]  ">
            <p className=" text-[4vw] font-[font2] leading-[4vw]">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp;Notre curiosité nourrit notre créativité. On
              reste humbles et on dit non aux gros egos, même le vôtre. Une
              marque est vivante. Elle a des valeurs, une personnalité, une
              histoire. Si on oublie ça, on peut faire de bons chiffres à court
              terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à
              donner de la perspective, pour bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen">
        <h1>jdjdjdj</h1>
      </div>
    </div>
  );
};

export default Agence;
