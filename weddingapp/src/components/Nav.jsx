import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Modal from './Modal';
import logo1 from '../assets/logo1.png';
import logo3 from '../assets/logo3.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full">
      <div className="p-7 w-full md:py-2 md:flex md:flex-row md:justify-between md:items-center ">
        <div className="">
          <div className="flex justify-between items-center">
            <div className="flex justify-start items-center w-[50px] md:w-[80px] ">
              <img src={logo3} alt="" className="object-cover w-full h-full" />
            </div>
            <button onClick={toggleModal} className="block md:hidden">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                {isOpen ? (
                  <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                ) : (
                  <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Conditionally render the modal based on isOpen */}
        {isOpen && <Modal isOpen={isOpen} toggleModal={toggleModal} />}
        {/* Conditionally render the navigation items based on screen size */}
        <ul className="hidden md:flex md:flex-row md:items-center md:gap-5 md:text-[15px] text-[#434e3e] font-semibold  scope-one-medium">
          <li> <NavLink to="/"> Home </NavLink> </li>
          <li> <NavLink to="/about"> About </NavLink> </li>
          <li> <NavLink to="/services"> Services </NavLink> </li>
          <li> <NavLink to="/catering"> Catering </NavLink> </li>
          <li> <NavLink to="/Testimonials"> Testimonials </NavLink> </li>
          <li> <NavLink to="/Contact"> Contact Us </NavLink> </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
