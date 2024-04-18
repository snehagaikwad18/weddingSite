import React from 'react'
import Contact from './Contact'
import About from './About'
import AboutServices from './AboutServices'

const Aboutroute = () => {
    return (
        <>
            <div className="flex flex-col gap-10 ">
                <div className="py-12">
                    <About />
                </div>
                <AboutServices />
                <Contact />
            </div>



        </>
    )
}

export default Aboutroute