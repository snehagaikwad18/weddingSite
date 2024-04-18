import React from 'react'
import galleryImg1 from '../assets/gallery1.png'
import galleryImg2 from '../assets/gallery2.png'
import galleryImg3 from '../assets/gallery3.png'
import galleryImg4 from '../assets/gallery4.png'
import galleryImg5 from '../assets/gallery5.png'
import galleryImg6 from '../assets/gallery6.png'
import { FaLongArrowAltRight } from "react-icons/fa";
import Button from './Button'

const Gallery = () => {
  return (
    <div  className='flex flex-col items-center justify-center gap-5 sm:gap-14' >
      <div className="px-10">
        <h1 className='cinzel text-[20px] text-[#576250] text-center xs:text-[25px] sm:text-[30px] ' >Our Galley</h1>
        <h1 className=' scope-one-regular text-center text-[15px]' >Welcome to our wedding gallery, where every moment captured tells the story of our love, cherished forever in timeless elegance and beauty</h1>
      </div>

      <div className="">
        <div className="flex flex-col gap-5  ">
          <div className="flex flex-row gap-2 sm:justify-center sm:items-center sm:gap-3 ">
            {/* First Row */}
            <div className="col-span- ">
              <img src={galleryImg1} alt="Photo 1" className="w-[120px] h-[80px] object-cover rounded-lg  xs:h-[100px] sm:h-[150px] sm:w-[195px]" />
            </div>
            <div className="col-span-1">
              <img src={galleryImg2} alt="Photo 1" className="w-[120px] h-[80px] object-cover rounded-lg xs:w-[190px] xs:h-[100px] sm:h-[150px] sm:w-[290px]" />
            </div>
            <div className="col-span-1">
              <img src={galleryImg3} alt="Photo 3" className="w-[120px] h-[80px] object-cover rounded-lg xs:w-[130px]  xs:h-[100px] sm:h-[150px] sm:w-[195px] " />
            </div>
          </div>


          <div className="flex flex-row gap-2 sm:gap-3">
            {/* Second Row */}
            <div className="col-span-1">
              <img src={galleryImg4} alt="Photo 4" className="w-[120px] h-[80px] object-cover rounded-lg xs:w-[170px] xs:h-[100px] sm:h-[150px] sm:w-[280px]" />
            </div>
            <div className="col-span-1">
              <img src={galleryImg5} alt="Photo 5" className="w-[120px] h-[80px] object-cover rounded-lg xs:w-[120px] xs:h-[100px] sm:h-[150px] sm:w-[170px] " />
            </div>
            <div className="col-span-1">
              <img src={galleryImg6} alt="Photo 6" className="w-[120px] h-[80px] object-cover rounded-lg xs:w-[150px] xs:h-[100px] sm:h-[150px] sm:w-[240px] " />
            </div>
          </div>
        </div>

      </div>

      <div className="">
      <Button className=" w-[100px]  py-2 text-[13px] xl:w-[186px] 2xl:w-[160px]  md:w-[125px] lg:w-[156px] xl:h-[50px] 2xl:h-[50px] lg:h-[49px] md:h-[42px] bg-[#576250] md:text-[14px] lg:text-[15px] xl:text-[18px] 2xl:text-[18px] rounded-[5px] text-white scope-one-regular tracking-wide text-center flex flex-row gap-2 items-center justify-center" >View More <span>  <FaLongArrowAltRight /></span></Button>
        
      </div>
    </div >
  )
}

export default Gallery

