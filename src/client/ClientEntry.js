import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from '../shared/App'

const ClientEntry = () =>
  <BrowserRouter>
    <App />
  </BrowserRouter>

export default ClientEntry
