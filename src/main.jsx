import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes.jsx";
import "./styles/globals.scss"
import { MainProvider } from "./context/MainProvider.jsx";

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <MainProvider>
        <RouterProvider router={router} />
      </MainProvider>
  </StrictMode>,
)
