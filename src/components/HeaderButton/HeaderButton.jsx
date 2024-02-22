import React from 'react'
import styles from './HeaderButton.module.css'
import { Link } from 'react-router-dom'

const HeaderButton = ({ path="/", svg_path="", buttonText="", isActive=false, bgColor="" }) => {
  return (
    <Link to={path}>
        <button 
          className={`${styles.buttonWrapper} ${isActive ? styles.activeButton : ""}`}
          style={{backgroundColor: `${isActive ? bgColor : ""}`}}
        >
            <img src={svg_path} alt="header" />
            <h4>
                {buttonText}
            </h4>
        </button>
    </Link>
  )
}

export default HeaderButton