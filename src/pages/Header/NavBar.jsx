import { Link } from "react-router-dom";
import telg from "../../assets/icon/telegram.png";
import logo from "../../assets/icon/orig.svg";
import world from "../../assets/icon/world.png";
import React, { useState } from "react";

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <nav className="navbar fixed top-0 z-10 bg-opacity-30 border-b border-gray-300 px-4 md:px-10 bg-gray-100 w-full">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="navbar-start flex items-center">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img src={logo} alt="Logo" className="h-8" />
          </Link>
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl bg-yellow-300 ml-2 md:ml-4"
            onClick={() => {
              document.body.scrollTop = 0;
              document.documentElement.scrollTop = 0;
              setIsModalOpen(true); 
            }}
          >
            <span>
              <img src={telg} className="h-6 md:h-7" alt="Telegram" />
            </span>
            <span className="hidden md:inline">Enter delivery address</span>
          </Link>
        </div>

        <div className="navbar-end flex items-center">
          <Link to="/">
            <img src={world} className="h-6 md:h-7" alt="World" />
          </Link>
          <a href="#" className="btn bg-gray-200 mx-2 text-sm md:text-base">
            Log in
          </a>
        </div>
      </div>
      
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-gray-200 p-8 rounded-lg text-black">
            <p className="">Modal content goes here</p>
            <p>Modal content goes here</p>
            <br />
            <br />
            <button className="text-red-500" onClick={() => setIsModalOpen(false)}>close</button>
          </div>
        </div>
      )}
    
    </nav>
  );
};

export default NavBar;
