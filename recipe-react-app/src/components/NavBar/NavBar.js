import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListCheck, faEllipsisVertical, faHouse } from '@fortawesome/free-solid-svg-icons'


export default function NavBar() {

    const [isOnMealPage, setIsOnMealPage] = useState(false)
    const navigate = useNavigate();
    const homeNavIcon = <FontAwesomeIcon icon={faHouse} />
    const groceryListNavIcon = <FontAwesomeIcon icon={faListCheck} />

    const GroceryListButton = (
        <button onClick={() => {
            setIsOnMealPage(!isOnMealPage)
            navigate('/grocerylist')
        }}>
            {groceryListNavIcon}
        </button>
    )


    const HomeNavButton = (        
        <button onClick={() => {
            setIsOnMealPage(!isOnMealPage)
            navigate('/')
        }}>
            {homeNavIcon}
        </button>
    )






    return (
        <div className='nav-bar-root'>
            <div className='logo'> Meal<br />Pleasy </div>
            <div className='nav-bar-switch-button'> {
                isOnMealPage ? GroceryListButton : HomeNavButton 
                // switchButton()
            }
            </div>
            <div className='hamburger'>
                {/* <FontAwesomeIcon icon={faEllipsisVertical} /> */}
            </div>
        </div>
    )
}
