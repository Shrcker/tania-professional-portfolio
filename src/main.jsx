import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowerRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import { About, Contact, Portfolio, Resume, Error } from './pages/';

const router = createBrowerRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: '/Contact',
        element: <Contact />
      },
      {
        path: '/Portfolio',
        element: <Portfolio />
      },
      {
        path: '/Resume',
        element: <Resume />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
