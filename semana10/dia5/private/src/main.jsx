import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { UserProviderLogin } from './Context/UserContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProviderLogin>
    <App />
  </UserProviderLogin>,
)
