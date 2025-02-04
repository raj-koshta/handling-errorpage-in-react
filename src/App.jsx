import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from "./components/layouts/AppLayout.jsx"
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import Service from './pages/Service.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorPage from './pages/ErrorPage.jsx';

const App = () => {

  const render = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/handling-errorpage-in-react/",
          element: <Home />
        },
        {
          path: "/handling-errorpage-in-react/contact",
          element: <Contact />
        },
        {
          path: "/handling-errorpage-in-react/service",
          element: <Service />
        },
      ]
    }
  ]);

  return (
    <RouterProvider router={render} />
  )
}

export default App