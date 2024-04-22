import React from 'react'
import Testonimial from './Testonimial'
import Contact from './Contact'
import Nav from './Nav';

const TestinomialRoute = () => {
  return (
    <>
    <Nav />
      <div className="flex flex-col gap-[px]">
        <div className=" bg-[#585B56] py-[81.5px] lg:py-[61px]">
          <Testonimial />
        </div>
       
      </div>
    </>
  )
}

export default TestinomialRoute