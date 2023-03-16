import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Login from './pages/login/LoginPage';
import Signup from './pages/register/SignupPage';
import Header from './components/header/Header';


export default function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </main>
  )
}
