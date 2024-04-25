import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import CreatePost from './components/CreatePost';

const root = ReactDOM.createRoot(document.getElementById('root'));

const route = createBrowserRouter([
  {path: '/', element: <App/>},
  {path: '/create-post', element: <CreatePost/>},
  /**sirf isko le lene me problem ye hui ki isne sirf isko hi render karaya
   * createPost ko yani header footer sidebar sab gayab ho gaye 
   */
]);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={route} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
