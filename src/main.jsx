import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Contato from './Contato.jsx'
import "../src/assets/global.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Contato />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
