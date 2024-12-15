import React from "react";
import BackgroundSquares from "../../components/base/BackgroundSquare";
import QuizQuestion from "../../components/custom/QuizQuestion";
import OptionButton from "../../components/base/OptionButton";
import SubmitButton from "../../components/base/SubmitButton";
import Rocket from "../../assets/rocket.png"
const QuizView = ({ options, selectedOption, onOptionClick }) => {
  return (
    <div className="w-screen h-screen bg-[#eee7de] overflow-hidden relative">
      <BackgroundSquares />
      <div className="relative max-w-md w-full h-auto p-8 bg-transparent rounded-3xl font-sans mx-auto">
       <QuizQuestion/>
        <div className="space-y-3 mb-6 mt-8">
          {options.map((option, index) => (
            <OptionButton
              key={index}
              label={option.label}
              color={option.color}
              isSelected={selectedOption === index}
              onClick={() => onOptionClick(index)}
            />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <img src={Rocket} alt="rocket" className="h-32 w-32 rotate-90" />
        </div>
        <SubmitButton />
      </div>
    </div>
  );
};

export default QuizView;
