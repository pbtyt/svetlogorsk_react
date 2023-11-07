import React, { useState } from 'react'
import styles from './GamePage.module.css'

import gameData from '../../data/game.json'

const GamePage = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    return (
        <div className={styles.gameWrapper}>
            <div className={styles.gameContentWrapper}>
                <h3 className={styles.questionTitle}>
                    Вопрос №{gameData[currentQuestion]?.id}
                </h3>

                <p className={styles.questionDesc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>
                    Blanditiis nobis, quo nihil sequi ratione dolorum necessitatibus <br/>
                    harum doloribus at distinctio minus excepturi, consectetur officiis <br/>
                    vero velit sunt quaerat. Eius, dolorum.
                </p>

                <div className={styles.answerButtons}>
                    {
                        gameData[currentQuestion]?.answers.map(
                            (el,index) => (<button key={index} onClick={ ()=>{
                                el === gameData[currentQuestion]?.correctAnswer
                                    ? setCurrentQuestion(prevQuestion => prevQuestion+1)
                                    : setCurrentQuestion(currentQuestion)
                            } }>{el}</button>)
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default GamePage