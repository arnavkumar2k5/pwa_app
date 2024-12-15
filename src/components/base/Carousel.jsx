import React, { useState } from "react";
import CongratulationContainer from "../../containers/CongatulationContainer/CongratulationContainer";
import QuizContainer from "../../containers/QuestionContainer/QuestionConatiner";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const components = [
    {
      component: <QuizContainer />,
      id: "quiz",
    },
    {
      component: <CongratulationContainer/>,
      id: "congratulations",
    },
  ];

  const nextSlide = () => {
    if (currentIndex < components.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Hide carousel if we've reached the end
  if (currentIndex >= components.length) {
    return null;
  }

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      {/* Current Component */}
      <div className="w-full transition-transform duration-500 ease-out">
        {components[currentIndex].component}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-x-0 bottom-44 flex items-center justify-between px-4">
        {/* Previous Button - Only show if not on first component */}
        {currentIndex > 0 && (
          <button
            onClick={prevSlide}
            className="bg-black text-white  font-bold  text-xl p-2 rounded-full shadow hover:bg-white transition-colors"
            aria-label="Previous"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        )}
        {/* If on first component, render an empty div to maintain layout */}
        {currentIndex === 0 && <div></div>}

        {/* Next Button - Only show if not on last component */}
        {currentIndex < components.length - 1 ? (
          <button
            onClick={nextSlide}
            className="bg-black text-white  font-bold  text-xl p-2 rounded-full shadow hover:bg-white transition-colors"
            aria-label="Next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        ) : null}
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {components.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
