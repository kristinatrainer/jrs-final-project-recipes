import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../../App'
import { useAxios } from '../../../services/meals.service'
import MealCard from './MealCard/MealCard'
import './MealList.css'

export default function MealList() {

const { meals, setMeals } = useContext(Context)

  // const [meals, setMeals] = useState([])
  const api = useAxios()

  function getAllMeals() {
    api.getAllMeals()
      .then((response) => {
        console.log(response.data)
        setMeals(response.data.meals)
      }).catch(err => {
        console.log(err)
      })
    
  }
  
  useEffect(() => {
    getAllMeals()
  }, [])




  return (
    <div className='list-container'>
      {meals.map((meal) => (
        <MealCard
          key={meal.id}
          {...meal}
        />
      ))}



    </div>
  )
}
