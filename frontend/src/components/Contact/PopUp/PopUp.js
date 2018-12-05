import React from 'react'
import './PopUp.scss'

const PopUp = props => {
  let PopUpClasses = 'PopUp';
  if (props.show) {
    PopUpClasses = 'PopUp open';
  }
  return (
      <div className={PopUpClasses}>
        <i 
        className="fas fa-times close"
        onClick={props.close}
        ></i>
        <p>Merci.</p>
        <p>Nous revenons vers vous très vite !</p>
      </div>
  )
}

export default PopUp;