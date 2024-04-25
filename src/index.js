import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import CreatePost from './components/CreatePost';
import WelcomeMessage from './components/WelcomeMessage';

const root = ReactDOM.createRoot(document.getElementById('root'));

const route = createBrowserRouter([
  {path: '/', element: <App/>},
  {path: '/create-post', element: <CreatePost/>},
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);

reportWebVitals();
