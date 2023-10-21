import React from 'react'

import styles from './HeroCard.module.css'

import hero from '/hero.svg'

const HeroCard = ( {heroInfo} ) => {
  return (
    <div className={styles.cardWrapper}>
        <img src={hero}/>
        <h4 className={styles.heroName}>
            {heroInfo.name}
        </h4>
    </div>
  )
}

export default HeroCard