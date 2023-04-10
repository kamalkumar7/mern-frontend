import React from "react";
import './App.css';
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import Profile from "./pages/Profile";
import { BrowserRouter, Route,Routes} from 'react-router-dom'


function App() {
 
  return (
    
      <div className="App">
      <BrowserRouter >
      <Routes >

        <Route path="/login" element={<Login/>} />
      
        <Route path="/" element ={<Register/>} />
        <Route path="/profile" element ={<Profile/>} />
      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;