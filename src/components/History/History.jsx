import React, { useState } from 'react'

import styles from './History.module.css'

import { Link } from 'react-router-dom'

const History = () => {
    const [isActivate, setIsActivate] = useState(false)

  return (
    <>
        <h1 style={{textAlign:"center", marginTop: "3rem"}}>
            Шатилки ушедшие в историю
        </h1>
        <div className={styles.wrapper}>
            <div className={styles.cardWrapper}>
                <div className={styles.card} onClick={()=>setIsActivate(!isActivate)}>
                    <div className={`${styles.cardSide} ${styles.front} ${isActivate ? styles.activate : ''}`}>
                        <img className={styles.cardImg} src={"/svetlogorsk_react/shatilki_sv/sv_most.jpeg"}/>
                        <h2 style={{textAlign: "center"}}>Железнодорожный мост</h2>
                    </div>

                    <div className={`${styles.cardSide} ${styles.back} ${isActivate ? styles.activate : ''}`}>
                        <img className={styles.cardImg} src={"/svetlogorsk_react/shatilki_sv/sh_most.jpg"}/>
                    </div>
                </div>
            </div>

            <div className={styles.cardWrapper}>
                <div className={styles.card} onClick={()=>setIsActivate(!isActivate)}>
                    <div className={`${styles.cardSide} ${styles.front} ${isActivate ? styles.activate : ''}`}>
                        <img className={styles.cardImg} src={"/svetlogorsk_react/shatilki_sv/sv_kolco.png"}/>
                        <h2 style={{textAlign: "center"}}>Местечко Шатилки(Шатилковичи)</h2>
                    </div>

                    <div className={`${styles.cardSide} ${styles.back} ${isActivate ? styles.activate : ''}`}>
                        <img className={styles.cardImg} src={"/svetlogorsk_react/shatilki_sv/sh_kolco.png"}/>
                    </div>
                </div>
            </div>
        </div>

        <Link to={"/svetlogorsk_react/"} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            <button>
                На главную
            </button>
        </Link>
    </>
  )
}

export default History