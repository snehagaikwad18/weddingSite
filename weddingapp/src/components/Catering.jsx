import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsDot } from "react-icons/bs";
import { IoIosBoat } from "react-icons/io";
import foodImg from '../assets/food.png'
import { FiPlus } from "react-icons/fi";
import { HiMiniMinusSmall } from "react-icons/hi2";
import { FaRupeeSign } from "react-icons/fa";
import { LiaRupeeSignSolid } from "react-icons/lia";




const Catering = () => {

  const [amount, setAmount] = useState(350);
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {

    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    // if (amount > 0) {
    //   setAmount(prevAmount => prevAmount - 350); 
    // }
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1); // Decrease quantity by 1, but ensure it doesn't go below 1
    }
  };
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },

      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]



  };

  return (
    <div className=' py-10 flex flex-col gap-7 2xl:gap-[60px] '>
      <div className="px-10">
        <h1 className='cinzel text-[20px] text-[#576250] text-center xs:text-[25px] sm:text-[30px] ' >Catering Service</h1>
        <h1 className=' scope-one-regular text-center text-[15px]' >Indulge in a delightful array of culinary delights expertly crafted and elegantly served by our catering team, ensuring your event is a flavorful success.</h1>
      </div>
      {/* card */}
      <div className="">
        <div className='px-10'>

          <Slider {...settings} className='' >
            {
              data.map((d, i) => {
                return (
                  <div key={i} className=" border-[1px] border-[#E0E0E0] rounded-[5px] flex flex-col space-y-3" >
                    <div className="">
                      <img src={foodImg} alt="" />
                    </div>

                    {/* text and price */}
                    <div className="flex flex-col gap-3 py-5">
                      <div className="poppins-regular pl-3">
                        <h1 className='' >Basic veg</h1>
                        <h1 className='font-light text-[12px] '>Dal, Rice, sweet, flower vegetable <span className='text-[#8C37FA]' >Viewmore</span> </h1>
                      </div>

                      <div className="flex flex-row items-center justify-between px-2">
                        <h1 className='flex flex-row items-center justify-center' ><LiaRupeeSignSolid className='font-medium' /><span className='poppins-regular' >{amount * quantity}</span></h1>
                        <div className="border-[1px] border-[#E0E0E0] poppins-regular flex flex-row gap-2 items-center justify-between">
                          <HiMiniMinusSmall onClick={handleDecrement} />
                          {quantity}
                          <FiPlus onClick={handleIncrement} />

                        </div>
                      </div>
                    </div>
                  </div>
                )

              })
            }
          </Slider>
        </div>

      </div>

    </div>
  )
}

const data = [
  {
    containerWt: '350tone',
    quoteNo: '56bgry8755',
    source: 'U.S.A',
    destination: 'India'
  },
  {
    containerWt: '350tone',
    quoteNo: '56bgry8755',
    source: 'U.S.A',
    destination: 'India'
  },
  {
    containerWt: '350tone',
    quoteNo: '56bgry8755',
    source: 'U.S.A',
    destination: 'India'
  },

]

export default Catering


