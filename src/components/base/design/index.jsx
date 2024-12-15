import React from 'react'

function Design() {
    return (
        <div>
            <img
          src="/images/cube1.png"
          alt="img"
          className="h-[7.709rem] absolute top-[2.125rem] left-[2.063rem]"
        />
        <img
          src="/images/cube1.png"
          alt="img"
          className="h-[7.709rem] absolute top-[6.723rem] left-[18.411rem]"
          style={{ transform: "rotate(-14.75deg)" }}
        />
        <img
          src="/images/cube1.png" //1
          alt="img"
          className="h-[7.709rem] absolute top-[27.063rem] left-[15.801rem]"
          style={{ transform: "rotate(-14.47deg)" }}
        />
        <img
          src="/images/cube4.png"
          alt="img"
          className="h-[7.709rem] absolute top-[39.579rem] left-[21.688rem]"
        />
        <img
          src="/images/cube1.png"
          alt="img"
          className="h-[7.709rem] absolute top-[39.275rem] left-[4.457rem]"
          style={{ transform: "rotate(-12.85deg)" }}
        />
        <img
          src="/images/cube6.png"
          alt="img"
          className="h-[7.709rem] absolute bottom-0"
        />
        </div>
    )
}

export default Design
