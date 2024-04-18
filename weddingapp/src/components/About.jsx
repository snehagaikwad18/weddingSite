import React from 'react'
import aboutImg from '../assets/about.png'




const About = () => {
  return (
    <>

      <div className='  pt-[40px] pb-[20px]  py-[100px] w-full h-[700px] xs:h-[750px] md:h-[600px] md:gap-[100px] xl:gap-[50px] gap-[50px] flex flex-col' id='about'>
        <div className=" px-10 flex flex-col items-center justify-center ">
          <h1 className='text-[#576250] text-[20px]  leading-[35px] xs:text-[25px] sm:text-[30px] sm:leading-[50px] font-extrabold md:text-[30px] lg:text-[35px] xl:text-[35px]  text-center  cinzel tracking-tighter '> ABOUT US</h1>
          <h1 className='text-[10px] leading-[10px] xs:text-[13px] xs:leading-[15px] xs:w-[400px] sm:text-[15px] sm:w-[500px] text-center font-medium scope-one-regular  md:text-[15px] md:leading-[20px]  lg:text-[17px] lg:leading-[20px] ' >Capturing Love's Essence: Our Journey to Crafting Unforgettable Celebrations</h1>
        </div>

        <div className="w-full  flex flex-col gap-10 items-center justify-center  md:flex-row  md:px-[30px] lg:px-[60px] lg:justify-center lg:items-center xl:py-10 xl:px-[120px] 2xl:px-[190px] md:justify-between ">
          <div className=" justify-center flex flex-col px-[20px] gap-10 md:h-full md:w-1/2 md:items-start md:gap-[25px] md:px-0  md:border-b-[7px] md:border-l-[7px]  border-[#576250]   md:pb-[70px] lg:pb-0 lg:px-0 lg:h-[350px]  lg:items-start lg:justify-start   xl:px-0   ">
            <div className="md:w-[250px] md:border-t-[7px] border-[#576250] py-1 "></div>
            <div className="flex flex-col items-center justify-center gap-4  md:items-start md:gap-[15px] md:px-2 lg:items-start">
              <h1 className='cinzel  flex flex-col items-center justify-center text-[25px] leading-[30px] xs:text-[30px] xs:leading-[35px] sm:text-[40px] sm:leading-[40px] text-center md:text-[30px] md:text-start lg:text-[35px] lg:text-start lg:items-start xl:text-[35px] text-[#576250] font-bold  md:leading-[30px]  xl:leading-[40px]  ' >Welcome to <span className='text-[15px] leading-[15px] text-center xs:leading-[15px] md:text-[18px] md:leading-[20px] lg:text-start font-medium text-black  baskervville-regular' > Radission banquet hall</span>
              </h1>
              
              <h1 className=' text-center leading-[10px] xs:leading-[20px] poppins-regular font-medium w-full text-[13px] md:text-[15px] md:text-end md:w-[450px] md:pr-[80px] '>~  By radission decorators and cateres</h1>
            </div>

            <h1 className='text-[12px] text-center leading-[15px]  md:text-[15px] md:leading-[20px] md:text-start md:px-2  lg:leading-[25px] lg:text-[18px] lg:items-start lg:text-start xl:text-[21x] tracking-wide  baskervville-regular  '>At Radisson Banquet Hall, we pride ourselves on our unwavering commitment to crafting unforgettable wedding celebrations that exceed your every expectation. Nestled in the heart of our exquisite venue embodies timeless elegance and sophistication, providing the perfect backdrop for your <br />special day.</h1>
          </div>

          <div className=" px-1 md:w-1/2 md:h-full  ">
            <img src={aboutImg} alt="aboutImg" className='xs:w-full xs:rounded-[20px] sm:w-[600px]  sm:h-[300px] sm:rounded-[10px] md:w-full md:h-full md:rounded-none lg:h-[350px] ' />
          </div>
        </div>
      </div>
      
    </>
  )
}

export default About