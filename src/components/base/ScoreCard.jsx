import React from "react";
import Trophy from "../../assets/trophy.png";
import { CircleCheck } from "lucide-react";
import { CircleX } from "lucide-react";
import Question from "../../assets/question.png";

const ScoreCard = () => {
  return (
    <div className="flex flex-col items-center bg-white rounded-xl py-10 relative w-full max-w-sm">
      <img
        src={Trophy}
        alt="Trophy"
        className="absolute left-1/2 transform -translate-x-1/2 -top-20 h-32"
      />

      <h1 className="text-3xl font-bold mb-2 mt-8">Congratulations!</h1>
      <div className="border-b border-b-gray-400 w-full mt-4">
        <p className="text-lg text-gray-400 text-center w-full mb-4">
          You've Scored <span className="text-green-500">+90</span> points
        </p>
      </div>

      <div className="flex justify-between w-full gap-4 ">
        <div className="flex flex-col items-center flex-1 border-r border-r-gray-400  pt-3">
          <div className="flex items-center  mb-2">
            <img src={Question} alt="Question mark" className="w-5 h-5" />
            <span className="text-2xl font-semibold">10</span>
          </div>
          <div className="text-lg text-gray-400">Total</div>
        </div>

        <div className="flex flex-col items-center flex-1 border-r border-r-gray-400 pt-3">
          <div className="flex items-center  text-green-500 text-xl mb-2">
            <CircleCheck />
            <span className="text-2xl text-black font-semibold">08</span>
          </div>
          <div className="text-lg text-gray-400">Correct</div>
        </div>

        <div className="flex flex-col items-center flex-1 pt-3">
          <div className="flex items-center  text-red-500 text-xl mb-2">
            <CircleX />
            <span className="text-2xl text-black font-semibold">01</span>
          </div>
          <div className="text-lg text-gray-400">Wrong</div>
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
