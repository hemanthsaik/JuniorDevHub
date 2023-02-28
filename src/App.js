import React from 'react'
import { Routes, Route, BrowserRouter as Brouter } from "react-router-dom";
import Home from './components/Home';
import Login from './components/LoginPage';
import Signup from './components/SignupPage';


export default function App() {
  return (
    <Brouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </Brouter>
  )
}
