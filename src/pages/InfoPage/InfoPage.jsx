import React, { useRef, useEffect, useState } from 'react'
import styles from './InfoPage.module.css'

import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

import moreInfo from '../../data/moreInfo.json'
import heroesData from '../../data/heroes.json' 

import bgVideo from '/operationBagration.mp4'

import HeroCard from '../../components/HeroCard/HeroCard'


const InfoPage = () => {
    const [heroes, setHeroes] = useState([])
    const { id } = useParams()

    const data = moreInfo.filter(el => el.id === (id - '0'))[0]
    
    const firstElRef = useRef(null)
    const secondElRef = useRef(null)

    useEffect(()=>{
        const firstElHeight = firstElRef.current.offsetHeight;
        secondElRef.current.style.maxHeight = `${firstElHeight}px`;
        try{
            setHeroes(heroesData.filter(el => el.id === (id - '0'))[0])
        }
        catch{
            console.log("Nema")
        }
    }, [])

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
                <p ref={ firstElRef }>
                    {data.info}
                </p>

                <div className={styles.heroCardsWrapper} ref={ secondElRef }>
                    <div className={styles.heroCards}>
                        {
                            heroes?.heroes?.map( (heroInfo, index) => <HeroCard heroInfo={ heroInfo } key={ index }/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default InfoPage