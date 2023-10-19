import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/global.css'

import Router from './components/Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)