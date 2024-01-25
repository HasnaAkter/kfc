import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../../assets/icon/back-arrow.png";
import cart from "../../../assets/icon/svg.svg";
import banner from "../../../assets/icon/banner.jpg";
import star from "../../../assets/icon/star.png";
import info from "../../../assets/icon/information-sign.png";
import set from "../../../assets/icon/set.png";
const Banner = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 justify-center md:p-24 p-10">
        <div className="md:col-span-1">
          <div className=" ">
            <Link
              to="/"
              className="btn btn-ghost flex justify-start bg-white md:ml-8 hover:bg-gray-100 w-auto h-auto"
            >
              <span className="flex items-center mx-2">
                <img src={arrow} className="h-6 w-6 md:h-7" alt="Telegram" />
              </span>
              <span className="text-[16px]  hover:bg-gray-100">
                All Restaurant
              </span>
            </Link>
          </div>

          <div className="p-5 mt-5 ">
            <p className="px-2 md:px-9 font-medium text-[22px]">Menu</p>
            <Link
              to="/"
              className="btn btn-ghost ml-2 md:ml-4  font-medium text-[16px] flex justify-start hover:bg-gray-100 w-auto h-auto"
            >
              What's new
            </Link>{" "}
            <Link
              to="/"
              className="btn btn-ghost ml-2 md:ml-4  font-medium text-[16px] flex justify-start hover:bg-gray-100 w-auto h-auto"
            >
              Popular
            </Link>{" "}
            <Link
              to="/"
              className="btn btn-ghost  ml-2 md:ml-4  font-medium text-[16px] flex justify-start hover:bg-gray-100 w-auto h-auto"
            >
              New items
            </Link>
            <Link
              to="/"
              className="btn btn-ghost  ml-2 md:ml-4  font-medium text-[16px] flex justify-start hover:bg-gray-100 w-auto h-auto"
            >
              Boxes
            </Link>{" "}
            <Link
              to="/"
              className="btn btn-ghost  ml-2 md:ml-4  font-medium text-[16px] flex justify-start hover:bg-gray-100 w-auto h-auto"
            >
              Combo Baskets
            </Link>{" "}
            <Link
              to="/"
              className="btn btn-ghost  ml-2 md:ml-4  font-medium text-[16px] flex justify-start hover:bg-gray-100 w-auto h-auto"
            >
              Juicy chicken
            </Link>{" "}
            <Link
              to="/"
              className="btn btn-ghost  ml-2 md:ml-4  font-medium text-[16px] flex justify-start hover:bg-gray-100 w-auto h-auto"
            >
              Snacks
            </Link>{" "}
            <Link
              to="/"
              className="btn btn-ghost  ml-2 md:ml-4  font-medium text-[16px] flex justify-start hover:bg-gray-100 w-auto h-auto"
            >
              Combo
            </Link>{" "}
            <Link
              to="/"
              className="btn btn-ghost  ml-2 md:ml-4  font-medium text-[16px] flex justify-start hover:bg-gray-100 w-auto h-auto"
            >
              Drinks
            </Link>
            <Link
              to="/"
              className="btn btn-ghost  ml-2 md:ml-4 font-medium text-[16px] flex justify-start hover:bg-gray-100 w-auto h-auto"
            >
              Additionally
            </Link>
          </div>
        </div>
        <div className="md:col-span-2  text-white">
          <div
            style={{
              backgroundImage: `url('${banner}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "50vh",
              borderRadius: "10px",
              position: "relative",
            }}
          >
            <div className="absolute bottom-4 left-4">
              <h2 className="font-bold text-3xl">KFC</h2>
              <Link
                to="/"
                className="btn btn-ghost mt-2 font-medium text-[16px] bg-white hover:bg-gray-200"
              >
                <span>
                  <img className="h-7" src={star} alt="" />
                </span>{" "}
                <span className="text-[16px] text-black">
                  4.7 <br />
                  200+
                </span>
              </Link>
              <Link
                to="/"
                className="btn btn-ghost mt-2 mx-2 font-medium text-[16px] bg-white hover:bg-gray-200"
              >
                <img className="h-7" src={info} alt="" />
              </Link>
            </div>
          </div>
          <div className="bg-green-100 rounded-lg mt-5 border-[1px] p-4 text-green-500 flex justify-start">
            <div className="">
              <img className="h-14" src={set} alt="" />
            </div>
            <div>
              <p className="mt-3">Free delivery – off any order</p>
            </div>
            <div></div>
          </div>
        </div>

        <div className="hidden lg:block md:col-span-1 rounded-lg bg-white p-4 text-black">
          <div className="">
            <p className="font-bold text-xl">Cart</p>
          </div>
          <div className="flex justify-center">
            <img className="mt-4 md:mt-36" src={cart} alt="" />
          </div>
          <p className="font-bold text-2xl text-center">
            Your cart is currently <br />
            empty
          </p>
          <hr className="mt-4 md:mt-36" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
