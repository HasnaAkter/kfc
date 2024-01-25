import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../../assets/icon/back-arrow.png";
import cart from "../../../assets/icon/svg.svg";
import banner from "../../../assets/icon/banner.jpg";
import star from "../../../assets/icon/star.png";
import info from "../../../assets/icon/information-sign.png";
const Banner = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 justify-center md:p-24">
        <div className="md:col-span-1">
          <div className=" ">
            <Link
              to="/"
              className="btn btn-ghost bg-white md:ml-8 hover:bg-gray-100 w-auto h-auto"
            >
              <span className="flex items-center mx-2">
                <img src={arrow} className="h-6 w-6 md:h-7" alt="Telegram" />
              </span>
              <span className="text-[16px] hover:bg-gray-100">
                All Restaurant
              </span>
            </Link>
          </div>

          <div className="p-5 mt-5">
            <p className="px-4 md:px-9 font-medium text-[22px]">Menu</p>
            <Link
              to="/"
              className="btn btn-ghost ml-2 md:ml-4 mt-3 font-medium text-[16px] hover:bg-gray-100 w-auto h-auto"
            >
              What's new
            </Link>{" "}
            <br />
            <Link
              to="/"
              className="btn btn-ghost ml-2 md:ml-4 mt-3 font-medium text-[16px] hover:bg-gray-100 w-auto h-auto"
            >
              Popular
            </Link>{" "}
            <br />
            <Link
              to="/"
              className="btn btn-ghost  ml-2 md:ml-4 mt-3 font-medium text-[16px] hover:bg-gray-100"
            >
              Новинки
            </Link>
            <br />
            <Link
              to="/"
              className="btn btn-ghost  ml-2 md:ml-4 mt-3 font-medium text-[16px] hover:bg-gray-100"
            >
              Боксы
            </Link>{" "}
            <br />
            <Link
              to="/"
              className="btn btn-ghost  ml-2 md:ml-4 mt-3 font-medium text-[16px] hover:bg-gray-100"
            >
              Комбо Баскеты
            </Link>{" "}
            <br />
            <Link
              to="/"
              className="btn btn-ghost  ml-2 md:ml-4 mt-3 font-medium text-[16px] hover:bg-gray-100"
            >
              Сочная курочка
            </Link>{" "}
            <br />
            <Link
              to="/"
              className="btn btn-ghost  ml-2 md:ml-4 mt-3 font-medium text-[16px] hover:bg-gray-100"
            >
              Снэки
            </Link>{" "}
            <br />
            <Link
              to="/"
              className="btn btn-ghost  ml-2 md:ml-4 mt-3 font-medium text-[16px] hover:bg-gray-100"
            >
              Комбо
            </Link>{" "}
            <br />
            <Link
              to="/"
              className="btn btn-ghost  ml-2 md:ml-4 mt-3 font-medium text-[16px] hover:bg-gray-100"
            >
              Напитки
            </Link>
            <br />
            <Link
              to="/"
              className="btn btn-ghost  ml-2 md:ml-4 mt-3 font-medium text-[16px] hover:bg-gray-100"
            >
              Дополнительно
            </Link>
          </div>
        </div>
        <div className="md:col-span-2 p-4 text-white">
          <div
            style={{
              backgroundImage: `url('${banner}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '50%',
              borderRadius: '10px', 
              //opacity:0.9,
            }}
            
          >
            
            <div className="">
            <h2 className="font-bold text-3xl mx-7 pt-60  ">KFC</h2>
            </div>
            <div>
              <Link
                to="/"
                className="btn btn-ghost ml-2 md:ml-4 mt-3 font-medium text-[16px] bg-white hover:bg-gray-200"
              >
                <span><img className="h-7 " src={star} alt="" /></span> <span className="text-[16px] text-black">4.7 <br />200+</span>
              </Link>
              <Link
                to="/"
                className="btn btn-ghost ml-2 md:ml-4 mt-3 font-medium text-[16px] bg-white hover:bg-gray-200"
              ><img className="h-7 " src={info} alt="" /></Link>
            </div>
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
