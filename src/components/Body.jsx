
import RestaurantCard, { FoodItem } from "./RestaurantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search">
       Search
      </div>
      <div className="res-container">
        <RestaurantCard />
        <FoodItem />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  )
}

export default Body;