import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        
        <div className={styles.blockFooterWrapper}>
            <div className={styles.contacts}>
                <h3>Контакты</h3>
                <h4>+375293033229(nikitabobchenok.work@gmail.com)</h4>
                <h4>+375291731643(Gleb.polyan1337@mail.ru)</h4>
                <h4>+375447665850(korolukmx2@gmail.com)</h4>
            </div>
            
            <div className={styles.spacer}></div>
            
            <div className={styles.authors}>
                <h3>Авторы (Учащиеся 11А класса "Средняя школа №12 г.Светлогорска")</h3>
                <h4>Бобченок Никита</h4>
                <h4>Полуян Глеб</h4>
                <h4>Королюк Максим </h4>
            </div>

        </div>    

        <div style={{borderTop: "1px solid rgba(66,66,66,.20)", margin: "20px 0px"}}></div>
        <div>
            <h5 style={{textAlign: "center", fontWeight: "500", color: "black", fontSize: '9px'}}>
                © 2023 - 2023 All rights reserved
            </h5>
        </div>
    </footer>
  )
}

export default Footer