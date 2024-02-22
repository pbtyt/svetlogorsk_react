import React from 'react'
import styles from './Header.module.css'

import HeaderButton from '../HeaderButton/HeaderButton'

const Header = ( {activeButtonIndex=0, bgColor=""} ) => {
  return (
    <div className={styles.buttonsWrapper}>
      <HeaderButton
        path="/svetlogorsk_react/"
        svg_path='./Header/home.svg'
        buttonText='Главная'
        isActive={activeButtonIndex===1}
        bgColor={bgColor}
      />

      <HeaderButton 
        path="/svetlogorsk_react/search" 
        svg_path='./Header/search.svg' 
        buttonText='Без срока давности'
        isActive={activeButtonIndex===2}
        bgColor={bgColor}
      />

      <HeaderButton
        path='/svetlogorsk_react/person'
        svg_path='./Header/person.svg'
        buttonText='Изяслав Котляров'
        isActive={activeButtonIndex===3}
        bgColor={bgColor}
      />

      {/* <HeaderButton 
        path="/svetlogorsk_react/shatilki_cards" 
        svg_path='./Header/cards.svg' 
        buttonText='Шатилки, ушедшие в историю'
        isActive={activeButtonIndex===4}
      /> */}
      
      <HeaderButton 
        path="/svetlogorsk_react/game" 
        svg_path='./Header/game.svg' 
        buttonText='Викторина'
        isActive={activeButtonIndex===5}
        bgColor={bgColor}
      />

    </div>
  )
}

export default Header
