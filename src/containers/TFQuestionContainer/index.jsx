import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Import the useNavigate hook
import TFQuestionView from '../../views/TFQuestionView';

function TfQuestionContainer() {
  const questions = [
    { QNo: "1.", text: "Is India located in South Asia?", correctAnswer: "True" },
    { QNo: "2.", text: "Is India located in South Asia?", correctAnswer: "True" },
    { QNo: "3.", text: "Is India located in South Asia?", correctAnswer: "True" },
    { QNo: "4.", text: "Is India located in South Asia?", correctAnswer: "True" },
    { QNo: "5.", text: "Is India located in South Asia?", correctAnswer: "True" },
    { QNo: "6.", text: "Is India located in South Asia?", correctAnswer: "True" },
    { QNo: "7.", text: "Is India located in South Asia?", correctAnswer: "True" },
    { QNo: "8.", text: "Is India located in South Asia?", correctAnswer: "True" },
    { QNo: "9.", text: "Is India located in South Asia?", correctAnswer: "True" },
    { QNo: "10.", text: "Is India located in South Asia?", correctAnswer: "True" },
];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const navigate = useNavigate();  // Hook to navigate

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentIndex].correctAnswer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setIsAnswered(true);
  };

  const handleNextQuestion = () => {
    setIsTransitioning(false);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }

    setIsAnswered(false);
    setIsCorrect(null);
    setTimeout(() => {
      setIsTransitioning(true);
    }, 1);
  };

  useEffect(() => {
    // Check if all questions are answered, then navigate to Congratulations
    if (currentIndex === questions.length - 1 && isAnswered) {
      setTimeout(() => {
        navigate('/congratulations');  // Navigate to the Congratulations page
      }, 1000);  // Add a delay before redirecting
    }
  }, [currentIndex, isAnswered, navigate]);

  const currentQuestion = questions[currentIndex];

  return (
    <div>
      <TFQuestionView
        QNo={currentQuestion.QNo}
        text={currentQuestion.text}
        isCorrect={isCorrect}
        isAnswered={isAnswered}
        onAnswer={handleAnswer}
        onNextQuestion={handleNextQuestion}
        isTransitioning={isTransitioning}
        currentPage={currentIndex + 1}
        totalPages={questions.length}
      />
    </div>
  );
}

export default TfQuestionContainer;
