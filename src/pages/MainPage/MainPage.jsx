import styles from './MainPage.module.css'
import videoBG from '/mainVideo.mp4'

import Footer from '../../components/Footer/Footer'
import Card from '../../components/Card/Card'

import allData from '../../data/data.json'

const MainPage = () => {
  return (
    <>
        <header className={styles.header}>
            <video loop autoPlay muted className={styles.headerVideo}>
                <source src={videoBG} type="video/mp4"/>
            </video>
            <h1 className={styles.headerTitle}> Город СВЕТЛОГОРСК </h1>
            <p className={styles.headerSubtitle}>Город с богатой историей </p>
        </header>

        <main className={styles.main}>
            <div className={styles.container}>
                <h2 className={styles.mainHeader}>
                    Памятные места нашего города
                </h2>

                <div className={styles.mainCardsWrapper}>
                    {
                        allData.map(data => <Card data={data} key={data.id}/> )
                    }
                </div>
            </div>
        </main>

        <Footer/>
    </>
  )
}

export default MainPage