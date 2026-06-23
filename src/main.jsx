import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainLayout from './Layout/MainLayout'
import { createBrowserRouter, RouterProvider } from 'react-router'


const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      // {
      //     index: true,
      //     element: <HomePage></HomePage>,
      // },
      // {
      //     path: "/books",
      //     element: <BooksPage></BooksPage>,
      // },
      // {
      //     path: "/bookDetails/:bookId",
      //     Component: BookDetails,

      // }

    ],
    // errorElement: <ErrorPage></ErrorPage>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
