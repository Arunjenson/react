const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img alt="reslogo" src="https://www.cookingcarnival.com/wp-content/uploads/2025/09/Vegetable-Dum-Biryani-5.jpg" className="res-logo"/>
      <h3>Meghana Foods</h3>
      <h4>South Indian, North Indian</h4>
      <h4>4.5 stars</h4>
    </div>
  )
}

export const FoodItem = () => {
  return (
    <div className="food-item">
      <img alt="foodlogo" src="https://www.cookingcarnival.com/wp-content/uploads/2025/09/Vegetable-Dum-Biryani-5.jpg" className="food-logo"/>
      <h3>Veg Biryani</h3>
      <h4>Rs. 200</h4>
    </div>
  )
}
export default RestaurantCard;