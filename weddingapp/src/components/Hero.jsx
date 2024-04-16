import React, { useState } from 'react'
import Button from './Button'
import { HiMiniArrowLongDown } from "react-icons/hi2";
import { Link } from 'react-scroll';
import Nav from './Nav';


const Hero = () => {
  const [scrollDwn, setScrollDown] = useState(false);

  const handleScrollDwn = () => setScrollDown(!scrollDwn);

  const closeMenu = () => setScrollDown(false);



  return (
    <div className='bg-img w-full h-screen gap-[120px] md:gap-[100px] 2xl:gap-[150px] flex flex-col items-center '>
      <Nav />
      <div className="flex flex-col items-center justify-center xl:gap-5 md:gap-5 2xl:gap-6">

        <h1 className='text-[#576250] xl:text-[59px] 2xl:text-[65px] md:text-[50px] font-medium text-center leading-[70px] md:leading-[60px] 2xl:leading-[70px] lg:text-[55px] '> Discover your perfect Indian <br /> wedding venue</h1>
        <h1 className='md:text-[15px] text-center font-extralight scope-one-regular xl:w-[816px] 2xl:w-[900px] lg:w-[800px] md:w-[785px] md:px-12 2xl:px-4 lg:text-[17px] xl:text-[20px] 2xl:text-[20px]' >Step into a realm of timeless romance and unparalleled elegance as you enter our enchanting wedding hall, where every detail is meticulously crafted to transform your dream day into a cherished reality.</h1>
        <Button className="xl:w-[186px]  2xl:w-[160px]  md:w-[125px] lg:w-[156px] xl:h-[50px] 2xl:h-[50px] lg:h-[49px] md:h-[42px] bg-[#576250] md:text-[14px] lg:text-[15px] xl:text-[18px] 2xl:text-[18px] rounded-[5px] text-white scope-one-regular tracking-wide text-center flex  items-center justify-center" >Explore Now</Button>


        <div className="flex flex-col justify-center items-center">
          <Link
            className='cursor-pointer'
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}

          >
            <HiMiniArrowLongDown className='text-[#90998B] text-[25px]' />
          </Link>
          <h1 className='text-[#90998B] text-[14px]'>Scroll</h1>
        </div>
      </div>
    </div>
  )
}



export default Hero