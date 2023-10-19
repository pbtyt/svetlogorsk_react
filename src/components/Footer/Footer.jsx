import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.blockFooterWrapper}>
            <div style={{flexGrow: "1"}} ></div>
                <div className={styles.authors}>
                    <h3>Авторы</h3>
                    <h4>Бобченок Никита</h4>
                    <h4>Полуян Глеб</h4>
                    <h4>Королюк Максим</h4>
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