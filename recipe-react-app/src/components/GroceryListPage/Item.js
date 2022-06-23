import React, { useContext } from 'react'
import { Context } from '../../App'
import './Item.css'

export default function Item({name, ing,  count, isChecked}) {



let notChecked = (
  <div className='not-checked'> 
    <input type='checkbox'/>
    <label>{name}</label>
  </div>
)

let checked = (
  <div className='checked'>
  <input type='checkbox'/>
  <label>{name}</label>
</div>
)

  return (
    <form > 

      {isChecked? checked : notChecked}
    </form>
  )
}
