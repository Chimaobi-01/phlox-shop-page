import React from 'react'
import iphone from '../assets/iphone13.png'
import star from '../assets/star.png'


const Description = () => {
    
    return (
        <>
            <div className="title-and-subtitle font-bold flex flex-col mb-0.5 md:mb-1.5">
                <span className="md:text-4xl xl:text-5xl text-base leading-4">iPhone 12 128GB ROM</span>
                <span className="text-[#A2A4A8] md:text-2xl xl:text-3xl text-xs">#780,000</span>
            </div>
            <div className="description-and-review font-medium flex flex-col gap-1.5 md:gap-2.5">
                <span className="flex items-center gap-1.5 text-[6px] md:text-sm xl:text-base">
                    <span>Brand:</span>
                    <span className="text-[#618295]">Apple | Similar products from Apple</span>
                </span>
                <p className='text-[8px] md:text-sm xl:text-base'>
                    Beats by Dre remains a leader in premium headphones,
                    leveraging its strong brand identity and association
                    with music icons to target young, style-conscious
                    consumers who prioritize.
                    <button className='font-medium'>See More</button>
                </p>
                <span className="flex items-center gap-1 text-[6px] md:text-sm xl:text-base">
                    <ul className="stars flex">
                        {
                            [1, 2, 3, 4, 5].map(i => (
                                <li key={i}><img src={star} alt="star" className="md:w-4 md:h-4 w-2.5 h-2.5" /></li>
                            ))
                        }
                    </ul>
                    <span>(11.k Reviews)</span>
                </span>
            </div>
        </>
    )
}

export default Description