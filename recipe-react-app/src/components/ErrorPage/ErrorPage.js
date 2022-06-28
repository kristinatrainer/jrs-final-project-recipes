import React from 'react'
import './ErrorPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceGrinBeamSweat } from '@fortawesome/free-solid-svg-icons'


export default function ErrorPage() {
  return (
    <div className='error-page-root'>
      <h1> Ooops! You're almost there!</h1>
      <h3>404 Error</h3>
      <h2> Meal planning can be made easy by clicking the home button below! </h2>
      <h1 className='face-icon'><FontAwesomeIcon icon={faFaceGrinBeamSweat} /> </h1>
    </div>
  )
}

