import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './layouts/Home/Home.jsx'
import About from './layouts/About/About.jsx'

const router = createBrowserRouter([
  {
  path: '/',
  element: <Home />,
  },
  {
    path: '/CV',
    element: <Home />,
  },
  {
    path: '/CV/Home',
    element: <Home />,
    },
  {
  path: '/CV/about',
  element: <About />,
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
