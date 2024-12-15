import React from "react";
import PwaHeader from "../../components/base/PwaHeader";
import ScoreCard from "../../components/base/ScoreCard";
import SubmitButton from "../../components/base/SubmitButton";
import BackgroundSquares from "../../components/base/BackgroundSquare";

const CongratulationView = () => {
  return (
    <>
      <BackgroundSquares />
      <div className="bg-[#eee7de] h-screen w-full overflow-hidden">
        <div className="p-4">
          <PwaHeader />
        </div>
        <div className="flex justify-center items-center h-[calc(100vh-300px)]">
          <ScoreCard />
        </div>
        <SubmitButton
          buttonText="Play Again"
          className="bg-green-500 bottom-24 shadow-lg shadow-neutral-700  "
        />
      </div>
    </>
  );
};

export default CongratulationView;
