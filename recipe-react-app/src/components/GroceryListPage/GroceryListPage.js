import { useContext } from 'react'
import { Context } from '../../App'
import GroceryList from './GroceryList'
import './GroceryListPage.css'

export default function GroceryListPage() {
 
  const { addMealtoList, list } = useContext(Context)

  // cart is list of meals => goal is GET flat list of ingredients

  return (
    <div className="container-grocery-list-page" >
      <div className="gl-heading">My shopping list
      </div>
      <div className="gl-body">
        <GroceryList>
        </GroceryList>
      </div>
    </div>
  )
}
