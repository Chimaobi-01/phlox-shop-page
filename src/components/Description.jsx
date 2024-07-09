import React from 'react'
import iphone from '../assets/iphone13.png'
import star from '../assets/star.png'


const Description = () => {
    
    return (
        <>
            <div className="title-and-subtitle font-bold flex flex-col">
                <span className="text-3xl">iPhone 12 128GB ROM</span>
                <span className="text-[#A2A4A8] text-xl">#780,000</span>
            </div>
            <div className="description-and-review text-sm font-medium">
                <span className="flex items-center gap-1.5">
                    <span>Brand:</span>
                    <span className="text-[#618295]">Apple | Similar products from Apple</span>
                </span>
                <p>
                    Beats by Dre remains a leader in premium headphones,
                    leveraging its strong brand identity and association
                    with music icons to target young, style-conscious
                    consumers who prioritize.
                </p>
                <span className="flex items-center gap-1">
                    <ul className="stars flex">
                        {
                            [1, 2, 3, 4, 5].map(i => (
                                <li key={i}><img src={star} alt="star" className="w-4 h-4" /></li>
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