import styles from './MainPage.module.css'
import videoBG from '/mainVideo.mp4'

import Card from '../../components/Card/Card'
import Buttons from '../../components/Buttons/Buttons'

import allData from '../../data/data.json'
import { Link } from 'react-router-dom'

const MainPage = () => {
  return (
    <>
        <header className={styles.header}>
            <video loop autoPlay muted className={styles.headerVideo}>
                <source src={videoBG} type="video/mp4"/>
            </video>
            <h1 className={styles.headerTitle}> СВЕТЛОГОРСК </h1>
            <p className={styles.headerSubtitle}>Город с богатой историей </p>
        </header>

        <main className={styles.main}>
            <div className={styles.container}>
                <h2 className={styles.mainHeader}>
                Времён связующая нить
                </h2>

                <div className={styles.mainCardsWrapper}>
                    {
                        allData.slice(0, 3).map(data => <Card data={data} path={"1"} key={data.id}/> )
                    }
                </div>

                <h2 className={styles.mainHeader}>
                    Дорога памяти - дорога славы
                </h2>
                <div className={styles.mainCardsWrapper}>
                    {
                        allData.slice(3).map(data => <Card data={data} path={""} key={data.id}/> )
                    }
                </div>
            </div>

            <Buttons/>
        </main>
    </>
  )
}

export default MainPage