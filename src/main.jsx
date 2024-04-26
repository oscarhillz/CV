import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './layouts/Home/Home.jsx'
import About from './layouts/About/About.jsx'
import Projects from './layouts/Projects/Projects.jsx'
import Services from './layouts/Services/Services.jsx'
import Contact from './layouts/Contact/Contact.jsx'

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
  path: '/CV/About',
  element: <About />,
  },
  {
  path: '/CV/Projects',
  element: <Projects />,
  },
  {
  path: '/CV/Services',
  element: <Services />,
  },
  {
  path: '/CV/Contact',
  element: <Contact />,
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
