import { Link } from "react-router-dom";
import arrow from "../../../assets/icon/back-arrow.png";
import cart from "../../../assets/icon/svg.svg";
import itemData from "../../../../public/item.json";
import ItemCard from "./../../../component/ItemCrad";
const JuicychickenItems = () => {
  const itemsData = itemData;
  const JuicychickenItems = itemsData.filter(
    (item) => item.category === "Juicy chicken"
  );

  return (
    <div className="p-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 justify-center md:p-24 p-10 ">
      <div className="md:col-span-1 ">
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
              to="/popular"
              className="btn btn-ghost ml-2 md:ml-4  font-medium text-[16px] flex justify-start hover:bg-gray-100 w-auto h-auto"
            >
              What's new
            </Link>{" "}
            <Link
             spy={true}
             smooth={true}
             offset={-70}
             duration={500}
              to="/popular"
              className="btn btn-ghost ml-2 md:ml-4  font-medium text-[16px] flex justify-start hover:bg-gray-100 w-auto h-auto"
            >
              Popular
            </Link>{" "}
            <Link
              to="/newitem"
              className="btn btn-ghost  ml-2 md:ml-4  font-medium text-[16px] flex justify-start hover:bg-gray-100 w-auto h-auto"
            >
              New items
            </Link>
            <Link
              to="/Boxesitem"
              className="btn btn-ghost  ml-2 md:ml-4  font-medium text-[16px] flex justify-start hover:bg-gray-100 w-auto h-auto"
            >
              Boxes
            </Link>{" "}
            <Link
              to="/comboBas"
              className="btn btn-ghost  ml-2 md:ml-4  font-medium text-[16px] flex justify-start hover:bg-gray-100 w-auto h-auto"
            >
              Combo Baskets
            </Link>{" "}
            <Link
              to="/juicy"
              className="btn btn-ghost  ml-2 md:ml-4  font-medium text-[16px] flex justify-start hover:bg-gray-100 w-auto h-auto"
            >
              Juicy chicken
            </Link>{" "}
            <Link
              to="/snack"
              className="btn btn-ghost  ml-2 md:ml-4  font-medium text-[16px] flex justify-start hover:bg-gray-100 w-auto h-auto"
            >
              Snacks
            </Link>{" "}
            <Link
              to="/comboitem"
              className="btn btn-ghost  ml-2 md:ml-4  font-medium text-[16px] flex justify-start hover:bg-gray-100 w-auto h-auto"
            >
              Combo
            </Link>{" "}
            <Link
              to="/drinksitem"
              className="btn btn-ghost  ml-2 md:ml-4  font-medium text-[16px] flex justify-start hover:bg-gray-100 w-auto h-auto"
            >
              Drinks
            </Link>
            <Link
              to="/addi"
              className="btn btn-ghost  ml-2 md:ml-4 font-medium text-[16px] flex justify-start hover:bg-gray-100 w-auto h-auto"
            >
              Additionally
            </Link>
          </div>
        </div>

        <div className="md:col-span-2 overflow-auto   text-white">
          <div className="text-black font-bold text-4xl p-5">Juicy chicken</div>
          <div className="card-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
            {JuicychickenItems.map((item) => (
              <ItemCard
                key={item._id}
                imgSrc={item.image}
                name={item.name}
                price={item.price}
              />
            ))}
          </div>
        </div>

        <div className="hidden lg:block md:col-span-1 rounded-lg  bg-white p-4 text-black  ">
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

export default JuicychickenItems;
