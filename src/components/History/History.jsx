import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './History.module.css'

import Header from '../Header/Header'

const History = () => {
    const [isActivate, setIsActivate] = useState(false)
    window.scrollTo(0, 0);
  return (
    <>
        <Header activeButtonIndex={3}/>
        <h1 style={{textAlign:"center", marginTop: "1.5rem"}}>
            Шатилки, ушедшие в историю
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