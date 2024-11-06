import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './App/pages/Home/index.jsx';
import Book from './App/pages/Book/index.jsx';
import MirrorPage from './App/pages/MirrorPage/index.jsx';
import Writer from './App/pages/Writer/index.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <MirrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/book/:id/:writerId', element: <Book /> },
      { path: '/writer/:writerId', element: <Writer /> },
    ],
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
