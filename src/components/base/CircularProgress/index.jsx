import React from "react";

const CircularProgress = ({ percentage, radius }) => {
  const stroke = 10; // Thickness of the circle
  const normalizedRadius = radius - stroke / 2; // Adjusted radius to account for stroke width
  const circumference = 2 * Math.PI * normalizedRadius; // Circumference of the circle
  const strokeDashoffset = circumference - (percentage / 100) * circumference; // Calculate the offset based on percentage

  return (
    <div className="flex justify-center items-center relative">
      <svg
        height={radius * 2}
        width={radius * 2}
        className="transform -rotate-90"
      >
        {/* Background Circle (Color updated to #7EFF6D38) */}
        <circle
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          fill="white" // Transparent fill for the background circle
          stroke="#7EFF6D38" // Semi-transparent light green background color
          strokeWidth={stroke}
        />
        {/* Progress Circle (Circular bar) */}
        <circle
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          fill="transparent"
          stroke="#29E510C7" // Progress color
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset} // Controls the progress of the circle
          strokeLinecap="round"
        />
      </svg>
      {/* Progress Text (Remaining time) */}
      <div
        className="absolute text-black text-xl font-bold"
        style={{
          width: radius * 2,
          height: radius * 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {Math.round((percentage / 100) * 30)}
      </div>
    </div>
  );
};

export default CircularProgress;
