import React from 'react'
import { Routes, Route, HashRouter, BrowserRouter as Brouter } from "react-router-dom";
import Home from './components/Home';
import Login from './components/LoginPage';
import Signup from './components/SignupPage';


export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </HashRouter>
  )
}
