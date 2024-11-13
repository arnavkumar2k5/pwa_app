import React from 'react'
import AliceCarousel from "react-alice-carousel";
import { renderNextButton, renderPrevButton } from '../../base/renderButtons';
import Card from '../../base/Card';

function Carousel() {
    const items = [
        <Card
          className="bg-[#467966] text-white rounded-[3.563rem] mx-10"
          head="FIB"
          heading="FIB"
          paragraph="Test your knowledge with engaging MCQs! Choose the correct answer from multiple options"
        />,
        <Card
          className="bg-[#EB4C37] text-white rounded-[3.563rem] mx-10"
          head="MCQ"
          heading="MCQ"
          paragraph="Test your knowledge with engaging MCQs! Choose the correct answer from multiple options"
        />,
        <Card
          className="bg-[#FFCC3E] text-white rounded-[3.563rem] mx-10"
          head="T/F"
          heading="True/False"
          paragraph="Test your knowledge with engaging MCQs! Choose the correct answer from multiple options"
        />,
      ];    
    return (
        <div className="z-50 relative mt-[3.75rem]">
        <AliceCarousel
          items={items}
          disableDotsControls
          renderPrevButton={renderPrevButton}
          renderNextButton={renderNextButton}
        />
      </div>
    )
}

export default Carousel
