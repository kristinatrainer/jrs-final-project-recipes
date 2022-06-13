import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';
import GroceryListPage from './components/GroceryListPage/GroceryListPage';
import MealPage from './components/MealPage/MealPage';
import AddMealPage from './components/AddMealPage/AddMealPage';
import NavBar from './components/NavBar/NavBar';
import { useLocalStorage } from './services/localstorage.service';
import { useAxios } from './services/meals.service';

export const Context = createContext(null)

function App() {

  const [list, setlist] = useState([])
  const [item, setItem] = useState()
  const http = useAxios()

  const localStorage = useLocalStorage();


  function getAllMeals() {


  }

  //ADD MEAL to LIST[]
  function addMealTolist(meal) {
    //iterate array ==> check for meal by ID

    // if it exists, then catch => say it is alreadu in => return
    // after loop => none found :( => not in list
    //
    console.log("adding to meal list")
    //  add to list
    setlist([...list, meal]);
  }

  function handleNewMealClicked(meal) {

  }




  useEffect(() => {
    let locallist = localStorage.getList("list")
    if (locallist) {
      locallist = JSON.parse(locallist)
      setlist(locallist)
    }
  }, [])
  //on initialization, check LS for meals in the list


  //REMOVE MEAL from LIST[]

  return (
    <Context.Provider value={{ list, addMealTolist }} >
      <BrowserRouter>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<MealPage />}></Route>
            <Route path="/grocerylist" element={<GroceryListPage />}> </Route>
            <Route path="/addmeal" element={<AddMealPage />}></Route>
          </Routes>
        </div>
        <NavBar />
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
