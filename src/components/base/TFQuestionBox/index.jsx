import React from 'react';

export const TFQuestionBox = ({
    QNo = "1.",
    text = "Is India located in South Asia?",
    isCorrect = null, 
    classname = "",
    ...props
}) => {
    const backgroundColor = isCorrect === null 
        ? "bg-white" 
        : isCorrect 
        ? "bg-[#29E510] text-white" 
        : "bg-[#EB4C37] text-white";  

    return (
        <div
            className={`h-[15.375rem] w-[23.5rem] ${backgroundColor} z-50 ${classname}`}
            {...props}
        >
            <p className="mt-[4rem] text-start flex px-5">
                <span className="mr-2">{QNo}</span>
                <span>{text}</span>
            </p>
        </div>
    );
};
