import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from './Layout'

import InfoPage from '../pages/InfoPage/InfoPage'
import MainPage from '../pages/MainPage/MainPage'
import SearchPage from '../pages/SearchPage/SearchPage'
import History from './History/History'
import GamePage from '../pages/GamePage/GamePage'
import AboutUs from '../pages/AboutUs/AboutUs'
import Person from '../pages/Person/Person'

const Router = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/svetlogorsk_react/" element={<Layout/>}>
        <Route index element={ <MainPage/> }/>
        <Route path=":id" element={ <InfoPage/> }/>
        <Route path="search" element={ <SearchPage/> }/>
        <Route path="person" element={ <Person/> } />
        <Route path="shatilki_cards" element={ <History/> }/>
        <Route path="game" element={<GamePage/>}/>
        <Route element={<>404</>} path='*'/>
      </Route>
    </Routes>  
	</BrowserRouter>
}

export default Router