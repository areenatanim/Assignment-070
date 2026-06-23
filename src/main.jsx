import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainLayout from './Layout/MainLayout'
import { createBrowserRouter, RouterProvider } from 'react-router'
import ErrorPage from './Pages/ErrorPage/ErrorPage'
import HomePage from './Pages/HomePage/HomePage'
import Timeline from './Pages/Timeline/Timeline'
import Stats from './Pages/Stats/Stats'


const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>
      },
      {
        path: "/timeline",
        element: <Timeline></Timeline>,
      },
      {
        path: "/stats",
        element: <Stats></Stats>
      },
      {
        // path: "/bookDetails/:bookId",
        // Component: BookDetails,

      }

    ],
    errorElement: <ErrorPage></ErrorPage>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
