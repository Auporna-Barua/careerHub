import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter } from 'react-router-dom';
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
    element: <Statistic />,
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
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
