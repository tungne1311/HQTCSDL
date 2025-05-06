import React, { useContext } from "react";
import { Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home';
import './App.css'; 
import Login from "./components/Login";
import { AppContext } from "./context/AppContext";

const App = () =>{
  const { showLogin } = useContext(AppContext);

  return (
    <div>
      {showLogin && <Login />}
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}


export default App
