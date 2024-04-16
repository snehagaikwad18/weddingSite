import React from 'react'
import Slider from 'react-slick';

const Btntestinomial = (props) => {
    const { children, bgColor  } = props;
    // className={`${bgColor}`}
    return (
        <button className='text-[#90998B]'
        // onClick={onlick}
        >
            {children}
        </button>
    )
}

export default Btntestinomial