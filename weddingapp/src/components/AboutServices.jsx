import React from 'react'
import service1 from '../assets/service1.jpg'
import service2 from '../assets/service2.jpg'
import service3 from '../assets/service3.jpg'

const AboutServices = () => {
  return (
    <div className='px-2 h-full flex flex-col gap-5  xs:gap-10 py-10' >
      <div className="justify-center items-center flex flex-col">
        <h1 className='text-[#576250] font-extrabold xs:text-[25px] sm:text-[35px] ' >Services</h1>
        <h1 className='text-[#B8C1B2] 2xl:text-[20px]'  >to plan and orchestrate your special occasion</h1>
      </div>

      <div className="h-full  flex flex-row justify-between items-start  gap-3  lg:justify-center lg:flex-row  lg:gap-8">
        <div className="w-1/2 lg:w-1/3 ">
          <img src={service1} alt="" className='h-full rounded-t-[7px] object-cover' />
        </div>
        <div className="w-1/2 flex flex-col gap-1 h-full lg:w-[500px] 2xl:justify-between 2xl:gap-[25px] justify-between  ">
          <h1 className=' xs:text-[20px] sm:text-[25px] md:text-[32px] xl:text-[35px] ' >Photography</h1>
          <h1 className='text-[12px] tracking-tight leading-[15px] font-semibold baskervville-regular xs:text-[15px] xs:leading-[22px] sm:text-[18px] sm:tracking-wide md:text-[20px] lg:text-[22px] md:tracking-wider xl:tracking-wide xl:text-[22px] xl:leading-[30px] 2xl:text-[22px] 2xl:leading-[28px]'  >Experience unforgettable weddings with our tailored services. From planning to photography and more, we make dreams a reality. Contact us to start planning your perfect day!</h1>
        </div>
      </div>



      <div className="h-full  flex flex-row justify-between items-start  gap-3  lg:justify-center lg:flex-row  lg:gap-8">
        <div className="w-1/2 lg:w-1/3 ">
          <img src={service2} alt="" className='h-full rounded-t-[7px] object-cover' />
        </div>
        <div className="w-1/2 flex flex-col gap-1 h-full lg:w-[500px] 2xl:justify-between 2xl:gap-[25px] justify-between  order-first ">
          <h1 className=' xs:text-[20px] sm:text-[25px] md:text-[32px] xl:text-[35px] ' >Ceremony</h1>
          <h1 className='text-[12px] tracking-tight leading-[15px] font-semibold baskervville-regular xs:text-[15px] xs:leading-[22px] sm:text-[18px] sm:tracking-wide md:text-[20px] lg:text-[22px] md:tracking-wider xl:tracking-wide xl:text-[22px] xl:leading-[30px] 2xl:text-[22px] 2xl:leading-[28px]'  >
            Crafting memorable ceremonies is our specialty. From officiating to venue decoration and everything in between, we ensure your moment is truly magical. Contact us to begin crafting your perfect ceremony today!</h1>
        </div>
      </div>




      <div className="h-full w-full  flex flex-row justify-between items-start  gap-3  lg:justify-center lg:flex-row  lg:gap-8">
        <div className="w-1/2 lg:w-1/3 ">
          <img src={service3} alt="" className='w-[300px] h-[200px] sm:w-[400px] md:w-[490px] md:h-[250px]  lg:h-[250px] 2xl:w-[480px] 2xl:h-[280px] rounded-t-[7px] bg-cover ' />
        </div>
        <div className="w-1/2 flex flex-col gap-1 h-full lg:w-[500px] 2xl:justify-between 2xl:gap-[25px] justify-between  ">
          <h1 className=' xs:text-[20px] sm:text-[25px] md:text-[32px] xl:text-[35px] ' >Wedding Design</h1>
          <h1 className='text-[12px] tracking-tight leading-[15px] font-semibold baskervville-regular xs:text-[15px] xs:leading-[22px] sm:text-[18px] sm:tracking-wide md:text-[20px] lg:text-[22px] md:tracking-wider xl:tracking-wide xl:text-[22px] xl:leading-[30px] 2xl:text-[22px] 2xl:leading-[28px]' >
            Elevate your wedding with our exquisite design services. From venue transformation to floral arrangements and decor, we bring your vision to life. Contact us to create the perfect ambiance for your special day!</h1>
        </div>
      </div>







    </div>
  )
}

export default AboutServices