import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button className="my-28 mx-5 hover:bg-gray-200 cursor-pointer bg-white text-green-600 font-bold text-lg rounded-xl shadow-lg px-8 py-1 m-auto">
                ADD
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-full"></img>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
