import React, { useContext, useEffect } from 'react'
import { Context } from '../../../../App'
import './MealCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

export default function MealCard({ name, _id, vegan, ingredients }) {

  const { addMealToCart, cart, removeMealFromCart, isMealInCart } = useContext(Context)


  return (

    <div className='container-card' key={_id}>

      <h3> {name}</h3>

      {isMealInCart(_id)
        ? (
          <button onClick={() => {
            removeMealFromCart(_id)
          }}>
            < FontAwesomeIcon className="icon checked" icon={faCheckCircle} />
          </button>
        )
        : (
          <button onClick={() => {
            addMealToCart({ _id, name, ingredients })
          }}>
            <FontAwesomeIcon className="icon" icon={faPlusCircle} />
          </button>

        )}



    </div>
  )
}
