import styles from './MainPage.module.css'
import videoBG from '/mainVideo.mp4'

import Card from '../../components/Card/Card'

import allData from '../../data/data.json'

const MainPage = () => {
  return (
    <>
        <header className={styles.header}>
            <video loop autoPlay muted className={styles.headerVideo}>
                <source src={videoBG} type="video/mp4"/>
            </video>
            <h1 className={styles.headerTitle}> СВЕТЛАГОРСК </h1>
            <p className={styles.headerSubtitle}>Горад з багатай гісторыяй </p>
        </header>

        <main className={styles.main}>
            <div className={styles.container}>
                <h2 className={styles.mainHeader}>
                Памятныя мясціны нашага горада
                </h2>

                <div className={styles.mainCardsWrapper}>
                    {
                        allData.slice(0, 3).map(data => <Card data={data} key={data.id}/> )
                    }
                </div>

                <h2 className={styles.mainHeader}>
                    Дарога памяці - дарога славы
                </h2>
                <div className={styles.mainCardsWrapper}>
                    {
                        allData.slice(3).map(data => <Card data={data} key={data.id}/> )
                    }
                </div>
            </div>
        </main>
    </>
  )
}

export default MainPage