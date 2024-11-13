import React from "react";
import { Button } from "../../components/base/button";
import Carousel from "../../components/custom/carousel";
import Design from "../../components/base/design";

function HomeView() {

  return (
    <div className="w-screen">
      <div className="flex justify-between">
        <div className="text-[3.875rem] text-[#1F2128] font-[800] leading-[4.844rem] mt-[3.063rem] ml-[2.063rem] flex">
          PWA
          <img
            src="/images/trophy.png"
            alt="img"
            className="h-[4.25rem] w-[3.438rem] ml-2 mt-2"
          />
        </div>
        <div className="mt-[4.188rem] flex text-[2.063rem] items-center gap-5 h-[3.063rem] w-[7.25rem] font-[500] rounded-full bg-white px-4 mr-3">
          <img src="/images/coin.png" alt="img" className="h-[1.375rem]" />
          55
        </div>
      </div>
      <div className="text-[2rem] font-[500] leading-[2.5rem] h-[2.5rem] w-[24.813rem] mt-10 text-center mx-4">
        Choose Question Type:
      </div>
      <Carousel/>
      <div>
        <Button text="Start Game" className="mx-5 text-[2rem] font-[600] leading-[2.5rem]"/>
      </div>
      <div className="z-10">
        <Design/>
      </div>
    </div>
  );
}

export default HomeView;
