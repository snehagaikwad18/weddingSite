import React, { useState } from 'react'
import Button from './Button'
import { HiMiniArrowLongDown } from "react-icons/hi2";
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

import Nav from './Nav';
import About from './About';
import Testonimial from './Testonimial';
import Contact from './Contact';
import Catering from './Catering';
import Gallery from './Gallery';
import Services from './Services';
import { FaLongArrowAltRight } from 'react-icons/fa';
import galleryImg1 from '../assets/gallery1.png'
import galleryImg2 from '../assets/gallery2.png'
import galleryImg3 from '../assets/gallery3.png'
import galleryImg4 from '../assets/gallery4.png'
import galleryImg5 from '../assets/gallery5.png'
import galleryImg6 from '../assets/gallery6.png'



const Hero = () => {
  const [scrollDwn, setScrollDown] = useState(false);

  const handleScrollDwn = () => setScrollDown(!scrollDwn);

  const closeMenu = () => setScrollDown(false);



  return (
    <>

      <div className='bg-img  w-full h-screen gap-[100px] xs:gap-[130px] sm:gap-[160px] md:gap-[100px] 2xl:gap-[150px] flex flex-col items-center '>
        <Nav />
        <div className="flex flex-col items-center justify-center gap-5 xl:gap-5 md:gap-5 2xl:gap-6">
          <h1 className='text-[#576250] text-[30px] leading-[35px] font-bold xl:text-[59px] 2xl:text-[65px] md:text-[50px]  text-center md:leading-[60px] 2xl:leading-[70px] lg:text-[55px] '> Discover your perfect Indian <br /> wedding venue</h1>
          <h1 className='md:text-[15px] text-center text-[13px] px-5 xs:text-[15px] sm:w-[600px] font-extralight scope-one-regular xl:w-[816px] 2xl:w-[900px] lg:w-[800px] md:w-[785px] md:px-12 2xl:px-4 lg:text-[17px] xl:text-[20px] 2xl:text-[20px]' >Step into a realm of timeless romance and unparalleled elegance as you enter our enchanting wedding hall, where every detail is meticulously crafted to transform your dream day into a cherished reality.</h1>
          <Link
            className='cursor-pointer'
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={575}
            duration={500}

          >
            <Button className=" w-[100px] py-2 text-[13px] xl:w-[186px] 2xl:w-[160px]  md:w-[125px] lg:w-[156px] xl:h-[50px] 2xl:h-[50px] lg:h-[49px] md:h-[42px] bg-[#576250] md:text-[14px] lg:text-[15px] xl:text-[18px] 2xl:text-[18px] rounded-[5px] text-white scope-one-regular tracking-wide text-center flex  items-center justify-center" >Explore Now</Button>
          </Link>

          <div className="flex flex-col justify-center items-center">
            <Link
              className='cursor-pointer'
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={5}
              duration={500}

            >
              <HiMiniArrowLongDown className='text-[#90998B] text-[25px]' />
            </Link>
            <h1 className='text-[#90998B] text-[14px]'>Scroll</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[30px]">
        <div className="flex flex-col gap-[30px] md:gap-[40px]">
          <About />
          {/* <Gallery /> */}

          <div className="">
            
            <div className='flex flex-col items-center justify-center gap-5 sm:gap-14' >
              <div className="px-10">
                <h1 className='cinzel text-[20px] text-[#576250] text-center xs:text-[25px] sm:text-[30px] ' >Our Galley</h1>
                <h1 className=' scope-one-regular text-center text-[15px]' >Welcome to our wedding gallery, where every moment captured tells the story of our love, cherished forever in timeless elegance and beauty</h1>
              </div>

              <div className="">
                <div className="flex flex-col gap-5 px-[5px] ">
                  <div className="flex flex-row gap-2 sm:justify-center sm:items-center sm:gap-3 ">
                    {/* First Row */}
                    <div className="col-span- ">
                      <img src={galleryImg1} alt="Photo 1" className=" gallery-img w-[120px] h-[80px] object-cover rounded-lg  xs:h-[100px] sm:h-[150px] sm:w-[195px]" />
                    </div>
                    <div className="col-span-1">
                      <img src={galleryImg2} alt="Photo 1" className="gallery-img w-[120px] h-[80px] object-cover rounded-lg xs:w-[190px] xs:h-[100px] sm:h-[150px] sm:w-[290px]" />
                    </div>
                    <div className="col-span-1">
                      <img src={galleryImg3} alt="Photo 3" className="gallery-img w-[120px] h-[80px] object-cover rounded-lg xs:w-[130px]  xs:h-[100px] sm:h-[150px] sm:w-[195px] " />
                    </div>
                  </div>


                  <div className="flex flex-row gap-2 sm:gap-3">
                    {/* Second Row */}
                    <div className="col-span-1">
                      <img src={galleryImg4} alt="Photo 4" className=" gallery-img w-[120px] h-[80px] object-cover rounded-lg xs:w-[170px] xs:h-[100px] sm:h-[150px] sm:w-[280px]" />
                    </div>
                    <div className="col-span-1">
                      <img src={galleryImg5} alt="Photo 5" className="gallery-img w-[120px] h-[80px] object-cover rounded-lg xs:w-[120px] xs:h-[100px] sm:h-[150px] sm:w-[170px] " />
                    </div>
                    <div className="col-span-1">
                      <img src={galleryImg6} alt="Photo 6" className=" gallery-img w-[120px] h-[80px] object-cover rounded-lg xs:w-[150px] xs:h-[100px] sm:h-[150px] sm:w-[240px] " />
                    </div>
                  </div>
                </div>

              </div>

            </div >
          </div>








          <div className="flex flex-row items-center justify-center">
            <RouterLink to="/Gallery" >
              <Button className="w-[100px] py-2 text-[13px] xl:w-[186px] 2xl:w-[160px] md:w-[125px] lg:w-[156px] xl:h-[50px] 2xl:h-[50px] lg:h-[49px] md:h-[42px] bg-[#576250] md:text-[14px] lg:text-[15px] xl:text-[18px] 2xl:text-[18px] rounded-[5px] text-white scope-one-regular tracking-wide text-center flex flex-row gap-2 items-center justify-center">View More <span><FaLongArrowAltRight /></span></Button>
            </RouterLink>
          </div>
          <Services />
          <Catering />
        </div>
        <Testonimial />
        <Contact />
      </div>


    </>
  )
}



export default Hero