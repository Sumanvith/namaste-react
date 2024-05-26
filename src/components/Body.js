import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
const Body = () => {
  const listOfRestaurants=[];
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={()=>{}}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {resList.map((resData, index) => (
          <RestaurantCard key={resData.info.id} resData={resData} />
        ))}
      </div>
    </div>
  );
};
export default Body;
