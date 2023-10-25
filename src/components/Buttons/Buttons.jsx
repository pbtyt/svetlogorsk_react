import React from 'react'

import styles from './Buttons.module.css'

import { Link } from 'react-router-dom'

const Buttons = () => {
  return (
    <div className={styles.wrapper}>
        
        <Link to={"search"}>
            <button>
                <h3>
                    Без срока давности (поиск)
                </h3>
            </button>
        </Link>

        <Link to={"shatilki_cards"}>
            <button>
                <h3>
                    Шатилки, ушедшие в историю
                </h3>
            </button>
        </Link>
    </div>
  )
}

export default Buttons