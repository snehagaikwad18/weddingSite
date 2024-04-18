import React from 'react'
import Catering from './Catering'
import Contact from './Contact'

const CateringRoute = () => {
    return (
        <div>
            <div className="flex flex-col gap-10 ">
                <div className="py-20">
                    <Catering  />
                </div>
                <Contact />

            </div>
        </div>
    )
}

export default CateringRoute