import { useState } from 'react'

import styles from './Card.module.css'

import image from '/bag.jpg'

const Card = ({ data }) => {
    const [isActivate, setIsActivate] = useState(false)
  return (
    <div className={styles.cardWrapper}>
        <div className={styles.card} onClick={()=>setIsActivate(!isActivate)}>
            <div className={`${styles.cardSide} ${styles.front} ${isActivate ? styles.activate : ''}`}>
                <img className={styles.cardImg} src={data.img_path}/>
                <h3 className={styles.cardTitle}>
                    {data.title}
                </h3>
            </div>

            <div className={`${styles.cardSide} ${styles.back} ${isActivate ? styles.activate : ''}`}>
                <p>
                    {data.desc}
                </p>

                <button className={styles.cardMoreInfo}>Подробнее...</button>
            </div>
        </div>
    </div>
  )
}

export default Card