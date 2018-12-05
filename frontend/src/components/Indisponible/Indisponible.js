import React from 'react'
import { NavLink } from 'react-router-dom'
import './Indisponible.scss'

const Indisponible = () => {
  return (
    <div className="IndispoContainer">
      <div className="IndispoBox">
        <h2>Indisponible
        <br/> sur mobile</h2>
        <NavLink to="/"><button className='btn btn-warning'>Retour vers Walkoo</button></NavLink>
      </div>
    </div>
  )
}

export default Indisponible;
