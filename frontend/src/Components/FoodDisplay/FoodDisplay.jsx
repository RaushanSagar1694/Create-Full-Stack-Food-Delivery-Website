
import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import './FoodDisplay.css';
import FoodItem from '../FoodItem/FoodItem';


const FoodDisplay = ( {category} ) => {

  const {food_list} = useContext(StoreContext);

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((items, idx) => {
          if(category === "All" || category === items.category){
            return <FoodItem key={idx} id={items._id} name={items.name} description={items.description}  price={items.price} image={items.image} />
          }
        })};
      </div>
    </div>
  )
}

export default FoodDisplay
