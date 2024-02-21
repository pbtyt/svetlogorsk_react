import styles from './MainPage.module.css'
import videoBG from '/mainVideo.mp4'

import Header from '../../components/Header/Header'
import Card from '../../components/Card/Card'

import allData from '../../data/data.json'

const MainPage = () => {
  return (
    <>
        <header className={styles.header}>
            <div className={styles.test}>
                <Header activeButtonIndex={1}/>
            </div>
            <video loop autoPlay muted className={styles.headerVideo}>
                <source src={videoBG} type="video/mp4"/>
            </video>

            <div className={styles.headerTitlesWrapper}>
                <h1 className={styles.headerTitle}> Дорога памяти — Дорога славы </h1>
                <p className={styles.headerSubtitle}>Светлогорщина с богатой историей</p>
            </div>
        
            <a className={styles.chevron} href="#main-top">
                <img src="./chevron-down.svg" alt="chevron" />
            </a>
        </header>

        <main className={styles.main} id="main-top">
            <div className={styles.container}>
                <h2 className={styles.mainHeader}>
                    Времён связующая нить
                </h2>

                <div className={styles.mainCardsWrapper}>
                    {
                        allData.slice(0, 3).map(data => <Card data={data} path={""} key={data.id}/> )
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
        </main>
    </>
  )
}

export default MainPage
