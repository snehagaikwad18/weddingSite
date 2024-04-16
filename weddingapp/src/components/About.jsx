import React from 'react'
import aboutImg from '../assets/about.png'

const About = () => {
  return (
    <>

      <div className='cursor-pointer bg-red-50 pt-[100px] w-full h-screen gap-[100px] flex flex-col  ' id='about'>
        <div className="flex flex-col items-center justify-center leading-[10px] ">
          <h1 className='text-[#576250] font-extrabold text-[35px] md:text-[30px] lg:text-[35px] xl:text-[35px]  text-center leading-[70px] cinzel tracking-tighter '> ABOUT US</h1>
          <h1 className='text-[20px] text-center font-medium scope-one-regular w-[816px] md:text-[15px] lg:text-[20px] ' >Capturing Love's Essence: Our Journey to Crafting Unforgettable Celebrations</h1>
        </div>

        <div className="w-full flex flex-row justify-center items-center  px-[150px] md:px-[30px] lg:px-[60px] xl:px-[120px] 2xl:px-[190px] md:justify-between ">
          <div className="w-1/2 md:h-full border-b-[7px] border-l-[7px]  border-[#576250]  px-12 md:px-3  md:pb-[70px] lg:px-12 xl:px-14 gap-5 md:gap-2 justify-center flex flex-col">
            
            <div className="flex flex-col gap-4 md:gap-1">
              <h1 className='cinzel text-[35px] md:text-[35px] lg:text-[45px] xl:text-[35px] text-[#576250] font-bold  w-[347px] text-start flex flex-col items-start justify-center leading-[40px] md:leading-[30px] xl:leading-[40px]  ' >Welcome to <span className='text-[35px] md:text-[22px] font-medium text-black  baskervville-regular' > Radission banquet hall</span>
              </h1>
              <h1 className=' text-end poppins-regular font-medium w-full text-[20px] md:text-[15px]'>~  By radission decorators and cateres</h1>
            </div>

            <h1 className='text-[20px] md:text-[15px] lg:text-[20px] xl:text-[21x] tracking-wide leading-[23px] md:leading-[20px] lg:leading-[25px] baskervville-regular  '>At Radisson Banquet Hall, we pride ourselves on our unwavering commitment to crafting unforgettable wedding celebrations that exceed your every expectation. Nestled in the heart of our exquisite venue embodies timeless elegance and sophistication, providing the perfect backdrop for your <br />special day.</h1>
          </div>

          <div className=" w-1/2 h-full  ">
            <img src={aboutImg} alt="aboutImg" className='w-full h-full' />
          </div>
        </div>
      </div>
    </>
  )
}

export default About