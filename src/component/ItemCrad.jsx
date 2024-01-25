import { Link } from "react-router-dom";

const ItemCard = ({ imgSrc, name, price }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <img
        src={imgSrc}
        alt={name}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl text-black font-semibold mb-2">{price} ₸</h3>
      <p className="text-gray-500">{name} </p>
      <Link to="/" className="btn flex justify-center bg-gray-100 my-2 rounded-lg">
        <span className="text-[14px]">+ Add</span>
      </Link>
    </div>
  );
};

export default ItemCard;
