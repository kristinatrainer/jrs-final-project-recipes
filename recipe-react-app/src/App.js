import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';
import GroceryListPage from './components/GroceryListPage/GroceryListPage';
import MealPage from './components/MealPage/MealPage';
import AddMealPage from './components/AddMealPage/AddMealPage';
import NavBar from './components/NavBar/NavBar';
import { useLocalStorage } from './services/localstorage.service';
import ErrorPage from './components/ErrorPage/ErrorPage';


export const Context = createContext(null)

function App() {

  const [cart, setCart] = useState([])
  const [meals, setMeals] = useState([])

  // const [isAdded, setIsAdded] = useState(false)


  function addMealToCart(meal) {
    console.log(meal)
    // 1) Check if meal is in cart by ID
    if (isMealInCart(meal._id)) {
      console.log("meal is already in cart", cart)
      return;
      // 2)   If not in cart ->> then add to cart and grocery list
    } else {
      // 3)  Prepare meal for grocery list:
      //      ->  Why? Contains item name, category,
      //      ->  but isChecked does not exist for each ingredient
      //  How?
      //        a. Loop through all ingredients of the meal
      //        b.  Map the array of the ingredient objects for new prop "isChecked"
      //        c.  Set "isChecked" to false (for grocery list default)
      let ingredients = meal.ingredients
      for (let ingredient of ingredients) {
        ingredient.isChecked = false;
        ingredient.mealId = meal._id;
      }
      console.log(ingredients)  /// returning ALL with new property 
      // 4)  Set the new cart with the new meal properties 
      let newCart = [...cart, meal]
      console.log(newCart) //check format of the cart
      setCart(newCart);
      // 5) Stringify cart and set in local storage
      newCart = JSON.stringify(newCart)
      localStorage.setItem('cart', newCart)
    }
  }

  function isMealInCart(mealId) {
    for (let meal of cart) {
      if (meal._id === mealId) {
        return true;
      }
    }
    return false;
  }

  function removeMealFromCart(mealId) {
    //    remove meal frmo array 
    //    and set cart in LS
    if (isMealInCart(mealId)) {
      // console.log(meal)
      console.log(mealId)

      let newCart = cart.filter(meal => meal._id !== mealId)
      setCart(newCart);
      newCart = JSON.stringify(newCart)
      localStorage.setItem('cart', newCart)
    } else {
      return;
    }
    // check if meal is in cart by meal id
    // if true 
    // if false
    //    nothing / dont let user change status
  }

  function isMealAdded(mealId) {
    for (let meal of cart) {
      if (meal._id == meal.id) {
        return true;
      }
    }
    return false;
  }

  function checkOffItem(name) {
    let newCart = [...cart]
    // look at each meal
    //  look at each ing
    //    if names match,
    //      ischecked = false (or !ischecked)

    setCart(newCart);
    newCart = JSON.stringify(newCart)
    localStorage.setItem('cart', newCart)
  }

  useEffect(() => {
    let localCart = localStorage.getItem("cart")
    if (localCart) {
      localCart = JSON.parse(localCart)
      setCart(localCart)
      console.log(localCart)
    }
  }, [])
  //on initialization, check LS for meals in the cart



  return (
    <Context.Provider value={{ cart, meals, setMeals, addMealToCart, removeMealFromCart, isMealInCart }} >
      <BrowserRouter>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<MealPage />}></Route>
            <Route path="/grocerylist" element={<GroceryListPage />}> </Route>
            <Route path="/addmeal" element={<AddMealPage />}></Route>
            <Route path="/*" element={<ErrorPage/>}> </Route>
          </Routes>
        </div>
        <NavBar />
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
