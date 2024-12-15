import React from "react";

const OptionButton = ({ label, color, isSelected, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full py-3 px-4 rounded-xl text-left flex items-center gap-2  ${
      isSelected ? "text-white" : ""
    }`}
    style={{ backgroundColor: color }}
  >
    <div
      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
        isSelected ? "border-white" : "border-black"
      }`}
    >
      {isSelected && <div className="w-2.5 h-2.5 bg-white rounded-full"></div>}
    </div>
    <p className="font-sans font-medium text-lg">{label}</p>
  </button>
);


export default OptionButton
