import React from 'react'
import Catering from './Catering'
import Contact from './Contact'
import Nav from './Nav';

const CateringRoute = () => {
    return (
        <>
 <Nav />
            <div>
              
                <div className="flex flex-col gap-10 ">

                    <div className="">

                        <Catering />
                    </div>
                    <Contact />

                </div>
            </div>
        </>
    )
}

export default CateringRoute