import React, { useState } from "react";
import QuizView from "../../views/QuizView/QuizView.jsx";

const QuizContainer = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  const options = [
    { label: "Mahatma Gandhi", color: "rgb(235, 75, 54)" },
    { label: "Jawaharlal Nehru", color: "rgb(255, 203, 61)" },
    { label: "Sardar Patel", color: "rgb(70, 120, 101)" },
  ];
  return (
    <QuizView
      options={options}
      selectedOption={selectedOption}
      onOptionClick={handleOptionClick}
    />
  );
};

export default QuizContainer;
