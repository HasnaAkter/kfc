import { Link } from "react-router-dom";
import React, { useState } from "react";
const ItemCard = ({ imgSrc, name, price }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <img
        src={imgSrc}
        alt={name}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl text-black font-semibold mb-2">{price} ₸</h3>
      <p className="text-gray-500">{name} </p>
      <Link to="/" className="btn flex justify-center bg-gray-100 my-2 rounded-lg" onClick={() => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            setIsModalOpen(true); 
          }}>
        <span className="text-[14px]">+ Add</span>
      </Link>
      
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
    
    </div>
  );
};

export default ItemCard;
