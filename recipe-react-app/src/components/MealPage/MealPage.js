import React from 'react'
import MealList from './MealList/MealList'
import './MealPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTurnDown } from '@fortawesome/free-solid-svg-icons'


export default function MealPage() {


  return (
    <div className="container-meal-page" >
      <div className="heading">
        <h3> Meal planning, made easy</h3>
        <h2 className='cta'>Pick your meals <FontAwesomeIcon className='cta' icon={faArrowTurnDown} /></h2>
      </div>
      <div className="list-body"> <MealList /> </div>

    </div>

  )
}


