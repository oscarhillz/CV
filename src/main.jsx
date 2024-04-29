import React, {lazy, Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider} from 'react-router-dom'

const Home = lazy(() => import('./layouts/Home/Home.jsx'))
const About = lazy(() => import('./layouts/About/About.jsx'))
const Projects = lazy(() => import('./layouts/Projects/Projects.jsx'))
const Services = lazy(() => import('./layouts/Services/Services.jsx'))
const Contact = lazy(() => import('./layouts/Contact/Contact.jsx'))


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
    <Suspense fallback={<h1>Cargando</h1>}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>,
)
