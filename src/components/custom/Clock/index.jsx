import React, { useState, useEffect } from "react";
import CircularProgress from "../../base/CircularProgress";

const Clock = ({ size = 55, isAnswered }) => {
  const [percentage, setPercentage] = useState(100);

  useEffect(() => {
    if (!isAnswered) {
      setPercentage(100);
    }
  }, [isAnswered]);

  useEffect(() => {
    if (isAnswered) return;

    const timer = setInterval(() => {
      setPercentage((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - (100 / 30); 
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isAnswered]);

  return (
    <span className="bg-transparent flex flex-col justify-center items-center">
      <CircularProgress percentage={percentage} radius={size} />
    </span>
  );
};

export default Clock;
