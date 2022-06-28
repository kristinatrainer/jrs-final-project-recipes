import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../../App'
import MealCard from '../MealPage/MealList/MealCard/MealCard'
import './GroceryList.css'
import Item from './Item'


export default function GroceryList() {

  // const [list, setList] = useState([])

  const { addMealToCart, cart, removeMealFromCart, isMealInCart } = useContext(Context)

  const category =
    ["baked goods",
      "produce",
      "dairy",
      "dry goods",
      "meat",
      "seafood",
      "freezer"
    ]

  let allCategories = category.map((c, i) => (
    <ul key={i}>
      {c}
    </ul>
  ))

  function getGroceryListItems() {
    let flatCart = [];
    let visualCart = [];
    console.log("flat cart=", flatCart, "visual cart=", visualCart)
    console.log("cart", cart)

    for (let meal of cart) {
      for (let ingredient of meal.ingredients) {
        visualCart.push(ingredient)
        console.log(ingredient)
        console.log("flat cart=", flatCart, "visual cart=", visualCart)
      }
    }
    outerLoop:
    for (let ingredient of flatCart) {
      for (let ing of visualCart) {
        if (ingredient.name == ing.name) {
          console.log(ingredient.name == ing.name)
          ing.count++
          continue outerLoop;
        }
      }
      // if ingredient is not in visual cart, then push
      visualCart.push({ ...ingredient, count: 1 })
      console.log("flat cart=", flatCart, "visual cart=", visualCart)
    }
    console.log(visualCart)
    return visualCart;  /// VisualCart ==>[{}]
  }



  // let displayItems = (
  //   getGroceryListItems
  // )




  // Spread out all meals in the cart
  // Cart Array is mapped to components

  return (
    <div className="grocery-list-container">
      <div>
        <div>
          {/* {category[0]} */}
          {getGroceryListItems(category[0]).map((ing, i) => (
            <Item key={i} {...ing} />
          ))
          }
        </div>
        {/* <div>
          {category[1]}
          {getGroceryListItems().map((ing, i) => (
            <Item key={i} {...ing} />
          ))
          }
        </div>
        <div>
          {category[2]}
          {getGroceryListItems().map((ing, i) => (
            <Item key={i} {...ing} />
          ))
          }
        </div>
        <div>
          {category[3]}
          {getGroceryListItems().map((ing, i) => (
            <Item key={i} {...ing} />
          ))
          }
        </div>
        <div>
          {category[4]}
          {getGroceryListItems().map((ing, i) => (
            <Item key={i} {...ing} />
          ))
          }
        </div>
        <div>
          {category[5]}
          {getGroceryListItems().map((ing, i) => (
            <Item key={i} {...ing} />
          ))
          }
        </div>
        <div>
          {category[6]}
          {getGroceryListItems().map((ing, i) => (
            <Item key={i} {...ing} />
          ))
          }
        </div> */}
      </div>
      <br />
      {/* <div>THIS IS THE WAY THAT WORKED</div>
      <div name="categories"> {allCategories}
        {getGroceryListItems().map((ing, i) => (
          <Item key={i} {...ing} />
        ))
        }
      </div> */}
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