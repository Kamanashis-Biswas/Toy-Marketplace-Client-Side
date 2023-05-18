import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from './components/Main';
import ErrorPage from './components/Error';
import Home from './components/Home';
import AllToys from './components/AllToys';
import MyToys from './components/MyToys';
import AddAToy from './components/AddAToy';
import Blog from './components/Blog';
import Login from './components/Login';
import Register from './components/Register';
import AuthProvider from './components/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "alltoys",
        element: <AllToys></AllToys>
      },
      {
        path: "/mytoys",
        element: <MyToys></MyToys>
      },
      {
        path: "addatoy",
        element: <AddAToy></AddAToy>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="max-w-7xl mx-auto">
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  </div>,
)
