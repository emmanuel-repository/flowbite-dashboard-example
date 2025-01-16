import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Flowbite } from "flowbite-react";
import { BrowserRouter } from "react-router-dom";

import theme from "./flowbite-theme";
import './index.css'
import App from './App';
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
  <Flowbite theme={{ theme }}>
      <BrowserRouter>
      
        <App/>
        
      </BrowserRouter>
    </Flowbite>

  </StrictMode>,
)
