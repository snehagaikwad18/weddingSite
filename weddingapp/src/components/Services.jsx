import React from 'react'
import service1 from '../assets/service1.jpg'
import service2 from '../assets/service2.jpg'
import service3 from '../assets/service3.jpg'

const Services = () => {
  return (
    <div className='px-2 '>
      <div className=" bg-gray-50 flex flex-col gap-0 py-8 md:px-10 lg:px-5  ">

        <div className="text-center pb-[10px]  bg-[#FAFAFA] ">
          <h1 className='text-[#576250]  text-[18px] font-bold md:text-[25px] lg:text-[35px] ' >Services</h1>
          <h1 className='text-[#B8C1B2]  md:'>to plan and orchestrate your special occasion</h1>
        </div>

        <div>
          <div>
            <div className=' bg-[#FAFAFA] px-10 flex flex-col gap-5  sm:flex sm:flex-row sm:justify-center sm:gap-5 sm:px-5 md:pt-8 '>
              <div className="p-5 bg-white drop-shadow-2xl rounded-[8px] flex flex-col items-center gap-5 poppins-regular">
                <div className="w-full sm:w-[150px] lg:w-[200px] xl:w-[250px]">
                  <img src={service1} alt="" className='object-cover sm:h-full sm:w-full' />
                </div>
                <h1 className='text-[#90998B]'>Photography</h1>
              </div>

              <div className="p-5 bg-white drop-shadow-2xl rounded-[8px] flex flex-col items-center gap-5 poppins-regular">
                <div className="w-full sm:w-[150px] lg:w-[200px] xl:w-[250px] ">
                  <img src={service2} alt="" />
                </div>
                <h1 className='text-[#90998B]'>Ceremony</h1>
              </div>

              <div className="p-5 bg-white drop-shadow-2xl rounded-[8px] flex flex-col items-center gap-5 poppins-regular">
                <div className="w-full sm:w-[150px] sm:h-[100px] lg:w-[200px] lg:h-[130px] xl:w-[250px] ">
                  <img src={service3} alt="" className='object-cover w-full h-full' />
                </div>
                <h1 className='text-[#90998B]'>Wedding Design</h1>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Services