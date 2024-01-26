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
      <Link
        to="/"
        className="btn flex justify-center bg-gray-100 my-2 rounded-lg"
        onClick={() => {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
          setIsModalOpen(true);
        }}
      >
        <span className="text-[14px]">+ Add</span>
      </Link>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-gray-200 p-8 rounded-lg text-black modal-box w-11/12 max-w-5xl">
            <p className="text-2xl font-bold">Enter delivery address</p>
            <p>Or else how will we know where to deliver?</p>

            <form className="p-5">
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block w-full p-4 ps-10 text-sm text-black border border-gray-300 rounded-lg bg-gray-300 
                  dark:bg-gray-700 dark:border-gray-100 dark:placeholder-gray-100 dark:text-white "
                  placeholder="Enter street and address number"
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5 bg-2ray-500 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
                  bg-gray-400"
                >
                  OK
                </button>
              </div>
            </form>
            <div className="relative w-full h-96">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
                frameborder="0"
                style={{
                  border: 0,
                  allowfullscreen: "",
                  area: "hidden",
                  tabindex: "0",
                }}
              ></iframe>
            </div>
            <br />
            <br />
            <button
              className="text-red-500 "
              onClick={() => setIsModalOpen(false)}
            >
              close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemCard;
