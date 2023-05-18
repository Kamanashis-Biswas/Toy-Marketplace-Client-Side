import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './components/AuthProvider';
import Main from './components/Main';
import ErrorPage from './pages/Error';
import Home from './pages/Home';
import AllToys from './pages/AllToys';
import MyToys from './pages/MyToys';
import AddAToy from './pages/AddAToy';
import Blog from './pages/Blog';
import Login from './pages/Login';
import Register from './pages/Register';

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