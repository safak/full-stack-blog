import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Homepage from './routes/Homepage.jsx';
import ProfileSetUp from './routes/ProfileSetUp.jsx';
import Login from './routes/Login.jsx';
import Register from './routes/Register.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layouts/MainLayout.jsx';
import { ClerkProvider } from '@clerk/clerk-react';

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}


const router = createBrowserRouter([
  {
    element: <MainLayout/>,
    children:[
      {
        path: "/",      //it doesn't work with just the /
        element: <Homepage/>
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/profile-setup",
        element: <ProfileSetUp/>,
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <RouterProvider router={router} />
    </ClerkProvider>
    
  </StrictMode>,
)
