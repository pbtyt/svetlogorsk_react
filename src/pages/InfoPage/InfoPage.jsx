import React from 'react'
import styles from './InfoPage.module.css'

import { useParams } from 'react-router-dom'

import moreInfo from '../../data/moreInfo.json'

const InfoPage = () => {
    const { id } = useParams()

    const data = moreInfo.filter(el => el.id === (id - '0'))[0]

  return (
    <>
        <div className={styles.pageContainer} style={{backgroundImage: `url(${data.img_path})`, backgroundSize: ''}}>
            <div className={styles.pageWrapper}>
                <h1 className={styles.headerTitle}> {data.title} </h1>
                <p className={styles.headerSubtitle}>Память народа </p>

                <button>
                    <a href="../index.html">
                        На главную...
                    </a>
                </button>
            </div>
        </div>

        <div className={styles.main}>
            <h2 className={styles.mainTitle}>Историческая справка</h2>

            <p className={styles.mainInfo}>
                {data.info}
            </p>
        </div>
    </>
  )
}

export default InfoPage