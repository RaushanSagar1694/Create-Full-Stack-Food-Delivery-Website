
import React from 'react'
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';


const exploreMenu = ( {category, setCategory} ) => {


  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining exprience, one delicious meal at a time.</p>
      <div className="explore-menu-list">
        { menu_list.map((items, idx) => {
            return (
                <div onClick={() => setCategory(prev => prev === items.menu_name ? "All" : items.menu_name)}  key={idx} className="explore-menu-list-items">
                    <img src={items.menu_image} />
                    <p>{items.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default exploreMenu;
