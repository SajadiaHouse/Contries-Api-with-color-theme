import React, { useState } from 'react';

const Navbar = ({ themeSwitch}) => {
 

  const handleClick = (e) => {
    e.preventDefault();
    themeSwitch();
  };



  return (
    <>
      <div className="flex h-18 p-4 shadow-2xl dark:bg-gray-700 dark:shadow-slate-600">
        <p className="self-center ml-4 text-lg font-bold dark:text-white">Where in the world?</p>
        <button className="ml-auto mr-4 flex items-center dark:text-white" onClick={handleClick}>
          <svg
            className="h-4 w-4 mr-2 shadow-lg dark:fill-white"
            data-name="Layer 2"
            id="Layer_2"
            viewBox="0 0 35 35"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18.44,34.68a18.22,18.22,0,0,1-2.94-.24,18.18,18.18,0,0,1-15-20.86A18.06,18.06,0,0,1,9.59.63,2.42,2.42,0,0,1,12.2.79a2.39,2.39,0,0,1,1,2.41L11.9,3.1l1.23.22A15.66,15.66,0,0,0,23.34,21h0a15.82,15.82,0,0,0,8.47.53A2.44,2.44,0,0,1,34.47,25,18.18,18.18,0,0,1,18.44,34.68ZM10.67,2.89a15.67,15.67,0,0,0-5,22.77A15.66,15.66,0,0,0,32.18,24a18.49,18.49,0,0,1-9.65-.64A18.18,18.18,0,0,1,10.67,2.89Z" />
          </svg>
          Dark Mode
        </button>
      </div>
   
    </>
  );
};

export default Navbar;