import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainLayout from './Layout/MainLayout'
import { createBrowserRouter, RouterProvider } from 'react-router'
import ErrorPage from './Pages/ErrorPage/ErrorPage'
import HomePage from './Pages/HomePage/HomePage'
import Timeline from './Pages/Timeline/Timeline'
import Stats from './Pages/Stats/Stats'
import FriendsCard from './components/FriendsCard/FriendsCard'
import FriendProps from './context/FriendContext'


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
        path: "/friendsCard/:friendsId",
        Component: FriendsCard,
        loader: () => fetch("/data.json").then(rest => rest.json()),
      }

    ],
    errorElement: <ErrorPage></ErrorPage>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendProps>
      <RouterProvider router={router} />
    </FriendProps>

  </StrictMode>,
)
