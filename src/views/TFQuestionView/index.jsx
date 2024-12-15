import React, { useEffect, useState } from 'react';
import { TFButton } from '../../components/base/TFButton';
import Design from '../../components/base/design';
import { TFQuestionBox } from '../../components/base/TFQuestionBox';
import Clock from '../../components/custom/Clock';

function TFQuestionView({
  QNo,
  text,
  isCorrect,
  isAnswered,
  onAnswer,
  onNextQuestion,
  isTransitioning,
  currentPage,
  totalPages
}) {
  const [questionBoxPosition, setQuestionBoxPosition] = useState('mt-[-2rem]');

  useEffect(() => {
    if (isAnswered) {
      setQuestionBoxPosition('mt-[1rem]');
    } else {
      setQuestionBoxPosition('mt-[-2rem]');
    }
  }, [isAnswered]);

  return (
    <div>
      <Design />
      <div className='absolute top-[4rem] left-[1rem] text-[1.3rem] flex gap-1 justify-center items-center font-semibold text-[#000000]'>
        <img src="/images/arrow.png" alt="arrow" className='h-[1.875rem]' />
        India
      </div>
      <div className={`z-30 clock-container ${isAnswered ? "absolute top-10 right-2" : "relative mt-[6.5rem]"}`}>
        <Clock size={isAnswered ? 45 : 55} isAnswered={isAnswered} />
      </div>
      {isAnswered && (
        <div className="flex justify-center mt-[11.088rem]">
          <img
            src={isCorrect ? "/images/ballons.png" : "/images/smiley.png"}
            alt="Answer result"
            className={`${isCorrect ? "h-[24.813rem] mb-[-7rem]" : "h-[14.5rem] mt-[9rem] mb-[-3.5rem] shake-animation"}`}
          />
        </div>
      )}
      <div
        className={`flex justify-center items-center ${questionBoxPosition} relative z-10 ${isTransitioning ? 'transition-all duration-700 ease-in-out' : ''}`}
      >
        <TFQuestionBox
          QNo={QNo}
          text={text}
          isCorrect={isCorrect}
          classname='rounded-[1.563rem] text-center font-semibold text-[1.5rem]'
        />
      </div>

      {!isAnswered && (
        <div className='flex justify-center items-center mt-[6.625rem] gap-5'>
          <TFButton
            text="True"
            onClick={() => onAnswer("True")}
            classname='bg-[#29E510] text-white text-[1.875rem] font-semibold flex justify-center items-center'
          />
          <TFButton
            text="False"
            onClick={() => onAnswer("False")}
            classname='bg-[#EB4C37] text-white text-[1.875rem] font-semibold flex justify-center items-center'
          />
        </div>
      )}

      <div className="flex justify-center mt-4">
        <span className="text-xl font-semibold text-[#467966]">{`${currentPage}/${totalPages}`}</span>
      </div>

      <div className='absolute right-5 bottom-32'>
        <img
          src="/images/leftarrow.png"
          alt="left-arrow"
          className={`h-[2.875rem] ${isAnswered ? "block" : "hidden"}`}
          onClick={onNextQuestion}
        />
      </div>
    </div>
  );
}

export default TFQuestionView;
