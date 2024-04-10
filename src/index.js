import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Components/LoginSignup/Signup';
import Login from './Components/LoginSignup/Login';
import Admin from './Components/Admin/Admin';
import Visitor from './Components/Visitor/Visitor';
import CheckOut from './Components/CheckOut/CheckOut';
import EntryStatus from './Components/EntryStatus/EntryStatus';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin-landing", // Define the path for nextLanding component
    element: <Admin />,
  },
  {
    path: "/admin-landing/new-visitor",
    element: <Visitor />,
  },
  {
    path: "/admin-landing/checkout",
    element: <CheckOut />,
  },
  {
    path: "/admin-landing/entry-status",
    element: <EntryStatus />,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

