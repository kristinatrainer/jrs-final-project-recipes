import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../../App'
import MealCard from '../MealPage/MealList/MealCard/MealCard'
import './GroceryList.css'
import Item from './Item'


export default function GroceryList() {

  // const [list, setList] = useState([])

  const { addMealToCart, cart, removeMealFromCart, isMealInCart } = useContext(Context)

  const [category, setCategories] = useState("")



  function getGroceryListItems() {
    let flatCart = [];
    let visualCart = [];
    for (let meal of cart) {
      for (let ingredient of meal.ingredients) {
        visualCart.push(ingredient)
      }
    }
    outerLoop:
    for (let ingredient of flatCart) {
      for (let ing of visualCart) {
        if (ingredient.name == ing.name) {
          ing.count++
          continue outerLoop;
        }
      }
      // if ingredient is not in visual cart, then push
      visualCart.push({ ...ingredient, count: 1 })
    }
    return visualCart;
  }
  





  // Spread out all meals in the cart
  // Cart Array is mapped to components

  return (
    <div className="grocery-list-container">

      <div name="produce"> {category[0]}

        {getGroceryListItems().map(( ing, i) => (
          <Item key={i} {...ing} />
        ))
        }
      </div>
    </div>
  )
}

{/* <div> Section: dairy  </div>
<div> Section: baked goods </div>
<div> Section: dry goods </div>
<div> Section: meat </div>
<div> Section: seafood </div>
<div> Section: coffee </div>
<div> Section: freezer </div>
<div> Section: canned </div>
<div> Section: beverages </div>
<div> Section: paper goods </div>
<div> Section: condiments </div> */}