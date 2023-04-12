import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Blog from './Blog';
import Statistics from './Statistics';
import Applied from './Applied';
import Details from './Details';
import Error from './Error';
import { ToastContainer } from 'react-toastify';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/Statistics",
    element: <Statistics />,
  },
  {
    path: "/applied",
    element: <Applied />,
  },
  {
    path: "/details/:id",
    element: <Details />,
    loader: () => fetch("data.json"),
  },
  {
    path: "*",
    element: <Error />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
);
