import React from 'react';
import { NavLink } from 'react-router-dom';

function Modal({ isOpen, toggleModal }) {
  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ${isOpen ? '' : 'hidden'}`}>
      <div className="bg-gray-200 p-5 rounded-lg flex flex-col justify-center items-center">
        <ul className="flex flex-col items-center  gap-1 px-10">
          <li> <NavLink to="/" > Home         </NavLink> </li>
          <li> <NavLink to="/about" > About        </NavLink> </li>
          <li> <NavLink to="/services" > Services     </NavLink> </li>
          <li> <NavLink to="/catering" > Catering     </NavLink> </li>
          <li> <NavLink to="/Testimonials" > Testimonials </NavLink> </li>
          <li> <NavLink to="/Contact" > Contact Us   </NavLink> </li>
        </ul>
        <button onClick={toggleModal} className="mt-5 bg-red-500 text-white px-3 py-2 rounded-md">Close</button>
      </div>
    </div>
  );
}

export default Modal;
