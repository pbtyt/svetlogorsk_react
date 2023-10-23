import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from './Layout'

import InfoPage from '../pages/InfoPage/InfoPage'
import FInfoPage from '../pages/FInfoPage/FInfoPage'
import MainPage from '../pages/MainPage/MainPage'
import SearchPage from '../pages/SearchPage/SearchPage'

const Router = () => {
  return <BrowserRouter>
    <Routes>

      <Route path="/svetlogorsk_react/" element={<Layout/>}>
        <Route index element={ <MainPage/> }/>
        <Route path=":id" element={ <InfoPage/> }/>
        <Route path=":id/1" element={ <FInfoPage/> }/>
        <Route path="search" element={ <SearchPage/> }/>
      </Route>

    </Routes>  
	</BrowserRouter>
}

export default Router