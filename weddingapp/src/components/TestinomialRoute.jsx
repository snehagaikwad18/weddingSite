import React from 'react'
import Testonimial from './Testonimial'
import Contact from './Contact'

const TestinomialRoute = () => {
  return (
    <>
      <div className="flex flex-col gap-[150px]">
        <div className="py-[110px] bg-[#585B56]">
          <Testonimial />
        </div>
        <Contact />
      </div>
    </>
  )
}

export default TestinomialRoute