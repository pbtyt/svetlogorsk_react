import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './GamePage.module.css'

import Header from '../../components/Header/Header'

import gameData from '../../data/game.json'

const GamePage = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [rightQuestionQuantity, setRightQuestionQuantity] = useState(0);
    const [wrongQuestionQuantity, setWrongQuestionQuantity] = useState(0);

    window.scrollTo(0, 0)

    return gameData[currentQuestion]
        ? (
            <div className={styles.gameWrapper}>
                <div className={styles.area}>
                    <ul className={styles.circles}>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div >
                <Header activeButtonIndex={5} bgColor='rgb(87 88 89)'/>
                <div style={{ flexGrow: 0.3 }} ></div>
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
                                (el, index) => (<button key={index} onClick={() => {
                                    if (el === gameData[currentQuestion]?.correctAnswer) {
                                        setRightQuestionQuantity(prevQuantity => prevQuantity + 1)
                                    } else {
                                        setWrongQuestionQuantity(prevQuantity => prevQuantity + 1)
                                    }
                                    setCurrentQuestion(prevQuestion => prevQuestion + 1)
                                }}>{el}</button>)
                            )
                        }
                    </div>
                </div>
                <div style={{ flexGrow: 1 }}></div>
            </div>
        )
        :
        (
            <div className={styles.gameWrapper} style={{ gap: "1rem" }}>
                <div style={{ display: "flex", gap: ".45rem", alignItems: "center", flexDirection: "row" }}>
                    <h3>Количество правильных ответов: </h3>
                    <h4 style={{ fontWeight: "400" }}>
                        {rightQuestionQuantity}
                    </h4>
                </div>

                <h4>
                    {/* Процент правильно выполненных заданий: <span style={{ fontWeight: "400" }}>{rightQuestionQuantity / (gameData.length - rightQuestionQuantity) * 100}%</span> */}
                </h4>

                <Link to={"/svetlogorsk_react/"}>
                    <button>
                        На главную
                    </button>
                </Link>
            </div>
        )
}

export default GamePage