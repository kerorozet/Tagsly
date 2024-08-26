import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './routes/Home';
import Slider from './routes/Slider';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "slider/",
    element: <Slider/>
  }
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
