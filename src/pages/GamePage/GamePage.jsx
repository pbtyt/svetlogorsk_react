import React, { useState } from 'react'
import styles from './GamePage.module.css'

import Header from '../../components/Header/Header'

import gameData from '../../data/game.json'

const GamePage = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [rightQuestionQuantity, setRightQuestionQuantity] = useState(0);
    const [stat, setStat] = useState({});
    window.scrollTo(0,0)
    return gameData[currentQuestion]
    ? ( 
        <div className={styles.gameWrapper}>
            {/* <Header activeButtonIndex={4}/> */}
            <div className={styles.gameContentWrapper}>
                <h3 className={styles.questionTitle}>
                    Вопрос №{gameData[currentQuestion]?.id}
                </h3>

                <p className={styles.questionDesc}>
                    {gameData[currentQuestion]?.question}
                </p>

                <div className={styles.answerButtons}>
                    {
                        gameData[currentQuestion]?.answers.map(
                            (el,index) => (<button key={index} style={{buttonStyle}} onClick={ ()=>{
                                if (el === gameData[currentQuestion]?.correctAnswer){
                                    setRightQuestionQuantity(prevQuantity => prevQuantity+1)
                                }
                                else{
                                    setStat(prevStat => {
                                        Object.assign(prevStat, gameData[currentQuestion])
                                    })
                                }
                                
                                setCurrentQuestion(prevQuestion => prevQuestion+1)
                            } }>{el}</button>)
                        )
                    }
                </div>
            </div>
        </div>
    )
    :
    (
        <div className={styles.gameWrapper}>
            {rightQuestionQuantity}
        </div>
    )
}

export default GamePage