
import { Route, Routes } from 'react-router-dom'
import { Dashboard } from './dashboard-module/Dashboard'
import './App.css'
import { Welcome } from './dashboard-module/pages/Welcome'
import { Settings } from './dashboard-module/pages/Settings'
// import { Button } from "flowbite-react";

function App() {

  return (
    <>
    <Routes>
      
      <Route path="/" element={<Dashboard />}  > 
        <Route path="welcome"   element={<Welcome />}  />
        <Route path="settings"   element={<Settings />}  />
      </Route>

    </Routes>
  
    </>
  )
}

export default App
