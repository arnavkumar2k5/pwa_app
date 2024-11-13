import React from 'react'

function Card({
    head= "button-head",
    heading= "Default Heading",
    paragraph= "Default Paragraph Text",
    children= "children",
    className="",
    ...props
}) {
    return (
        <div>
            <div className={`h-[26.375rem] w-[21.875rem] ${className}`} {...props}>
                <div className='p-5 pt-[1.563rem]'>
                <div className='flex justify-between'>
                    <div className='h-[3.063rem] w-[7.25rem] text-[1.25rem] rounded-full bg-black flex items-center justify-center'>
                        {head}
                    </div>
                    <div className='h-[3.348rem] w-[3.348rem] mr-3'>
                    <img src="/images/heart.png" alt="img" className='h-[3.348rem] w-[3.348rem]'/>
                    </div>
                </div>
                <div className='px-3'>
                <h2 className='text-[2.5rem] font-[500] leading-[3.125rem] mt-2'>{heading}</h2>
                <p className='font-[300] mt-2 text-[1.3rem] leading-[1.688rem] w-[15.938rem] h-[7.625rem] tracking-[5%]'>{paragraph}</p>
                </div>
                </div>
                <div className='relative'>
                        <img src="/images/list.png" alt="list" className='h-[9.875rem] w-[16.875rem] -mt-14' />
                    </div>
            </div>
        </div>
    )
}

export default Card
