import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Menu, X } from "lucide-react";
import Button from './Button';




const Nav = () => {

    return (
        <>
            <div className=" p-7 w-full">
                <div className="">

                    <div className="flex justify-start items-center">
                        <img src="" alt="" />
                    </div>

                    <div className="flex justify-end items-center">
                        <ul className='flex flex-row items-center justify-center gap-5'>
                            <li><NavLink className="text-white text-[18px] md:text-[15px]  lg:text-[17px]  xl:text-[20px]  2xl:text-[20px] " to="/">Home</NavLink>  </li>
                            <li><NavLink className="text-white text-[18px] md:text-[15px]  lg:text-[17px]  xl:text-[20px]  2xl:text-[20px] " to="/about">about</NavLink>  </li>
                            <li><NavLink className="text-white text-[18px] md:text-[15px]  lg:text-[17px]  xl:text-[20px]  2xl:text-[20px] " to="/Services">Services</NavLink>  </li>
                            <li><NavLink className="text-white text-[18px] md:text-[15px]  lg:text-[17px]  xl:text-[20px]  2xl:text-[20px] " to="/Catering">Catering</NavLink>  </li>
                            <li><NavLink className="text-white text-[18px] md:text-[15px]  lg:text-[17px]  xl:text-[20px]  2xl:text-[20px] " to="/Testimonials">Testimonials</NavLink>  </li>
                            <li><NavLink className="text-white text-[18px] md:text-[15px]  lg:text-[17px]  xl:text-[20px]  2xl:text-[20px] " to="/Contact Us">Contact Us</NavLink>  </li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Nav