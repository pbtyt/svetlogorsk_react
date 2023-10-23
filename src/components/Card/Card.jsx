import { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './Card.module.css'

const Card = ({ data, path }) => {
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

                <Link to={`${data.id}/${path}`}>
                    <button className={styles.cardMoreInfo}>
                        Больш падрабязна...
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Card