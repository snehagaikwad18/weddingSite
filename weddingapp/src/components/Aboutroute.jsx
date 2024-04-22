import React from 'react'
import Contact from './Contact'
import About from './About'
import AboutServices from './AboutServices'
import Nav from './Nav';

const Aboutroute = () => {
    return (
        <>
            <div className="flex flex-col gap-5 ">
            <Nav />
                <div className="">
                    <About />
                </div>
                <AboutServices />
                
            </div>



        </>
    )
}

export default Aboutroute