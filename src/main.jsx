import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import AuthProvider from './Provider/AuthProvider.jsx'

import { RouterProvider } from 'react-router-dom'
import router from './Router/router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>,
  </AuthProvider>
)
