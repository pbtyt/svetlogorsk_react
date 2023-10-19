import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from './Layout'
import InfoPage from '../pages/InfoPage/InfoPage'
import MainPage from '../pages/MainPage/MainPage'

const Router = () => {
  return <BrowserRouter>
    <Routes>

      <Route path="/svetlogorsk_react/" element={<Layout/>}>
        <Route index element={<MainPage/>}/>
        <Route path=":id" element={<InfoPage/>}/>
      </Route>

    </Routes>  
	</BrowserRouter>
}

export default Router