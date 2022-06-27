import React, { useContext } from 'react'
import { Context } from '../../App'
import './Item.css'

export default function Item({ name, ing, count, isChecked }) {



  let notChecked = (
    <div className='not-checked'>
      <label>
        <input type='checkbox' />
        <span>
          {name}
        </span>
      </label>
    </div>
  )

  let checked = (
    <div >
      <label>
        <input type='checkbox' className='checked' />
        <span className='checked'>
          {name}
        </span>
      </label>
    </div>
  )

  return (
    <form >
      {isChecked ? checked : notChecked}
    </form>
  )
}
