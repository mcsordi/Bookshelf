import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './App/pages/Home/index.jsx';
import Book from './App/pages/Book/index.jsx';
import MirrorPage from './App/pages/MirrorPage/index.jsx';
import Writer from './App/pages/Writer/index.jsx';
import Login from './App/pages/Login/index.jsx';
import Cadaster from './App/pages/Cadaster/index.jsx';
import Forgot from './App/pages/Forgot/index.jsx';
import EmailContext from './App/context/emailContext.jsx';
import ResetPass from './App/pages/ResetPass/index.jsx';
import ErrorInitial from './App/components/ErrorInitial/index.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <ErrorInitial />,
  },
  {
    path: '/cadaster',
    element: <Cadaster />,
  },
  {
    path: '/forgot',
    element: <Forgot />,
  },
  {
    path: '/reset',
    element: <ResetPass />,
  },
  {
    path: '/',
    element: <MirrorPage />,
    children: [
      { path: '/home', element: <Home /> },
      { path: '/book/:id/:writerId', element: <Book /> },
      { path: '/writer/:writerId', element: <Writer /> },
    ],
  },
]);
root.render(
  <React.StrictMode>
    <EmailContext>
      <RouterProvider router={router} />
    </EmailContext>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
