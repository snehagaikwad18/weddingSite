import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Modal from './Modal';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-7 w-full">
      <div className="">
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center">
            <img src="" alt="" />
          </div>
          <button onClick={toggleModal} className="block md:hidden">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              ) : (
                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              )}
            </svg>
          </button>
        </div>
      </div>
      <Modal isOpen={isOpen} toggleModal={toggleModal} />
    </div>
  );
}

export default Navbar;
