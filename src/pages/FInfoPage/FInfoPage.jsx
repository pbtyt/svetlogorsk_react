import React, { useRef, useEffect, useState } from 'react'
import styles from './FInfoPage.module.css'

import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

import moreInfo from '../../data/moreInfo.json'
import heroesData from '../../data/heroes.json' 

import bgVideo from '/operationBagration.mp4'

import HeroCard from '../../components/HeroCard/HeroCard'


const InfoPage = () => {
    const { id } = useParams()

    const data = moreInfo.filter(el => el.id === (id - '0'))[0]
    
  return (
    <>
        {/* style={{backgroundImage: `url(${data.img_path})`, backgroundSize: ''}} */}
        <div className={styles.pageContainer} style={{backgroundImage: `url(${data.img_path})`, backgroundSize: '', backgroundPosition: 'center'}}>
            {/* <video loop autoPlay muted className={styles.videoBackground}>
                <source src={bgVideo} type='video/mp4'/>
            </video> */}
            
            <div className={styles.pageWrapper}>
                <h1 className={styles.headerTitle}> {data.title} </h1>
                <p className={styles.headerSubtitle}>Память народа </p>

                <Link to="/svetlogorsk_react">
                    <button>
                        На галоўную...
                    </button>
                </Link>
            </div>
        </div>

        <div className={styles.main}>
            <h2 className={styles.mainTitle}>Историческая справка</h2>
            <div className={styles.mainInfoWrapper}>
                <p>
                    {data.info}
                </p>
            </div>
        </div>
    </>
  )
}

export default InfoPage